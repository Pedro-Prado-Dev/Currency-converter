import { CurrencyConverterService } from '../converter';
import { ExchangeRateResponse, CurrencyConverter } from '../interfaces';


const mockExchangeRateResponse: ExchangeRateResponse = {
    rates: {
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.21,
    },
};

jest.mock('axios');
import axios from 'axios';
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.get.mockResolvedValue({ data: mockExchangeRateResponse });

describe('CurrencyConverterService', () => {
    let converter: CurrencyConverter;

    beforeEach(() => {
        converter = new CurrencyConverterService();
    });

    it('should convert currency correctly', async () => {
        const result = await converter.convertCurrency(100, 'USD', 'EUR');
        expect(result).toBe(85);
    });

    it('should throw error if currency is not found', async () => {
        mockedAxios.get.mockResolvedValue({ data: { rates: {} } });
        await expect(converter.convertCurrency(100, 'USD', 'JPY')).rejects.toThrowError('Unable to find exchange rate for JPY');
    });

    it('should handle API errors', async () => {
        mockedAxios.get.mockRejectedValue(new Error('API Error'));
        await expect(converter.convertCurrency(100, 'USD', 'EUR')).rejects.toThrowError('Error converting currency: API Error');
    });
});
