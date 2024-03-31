import axios from 'axios';
import { ExchangeRateResponse, CurrencyConverter } from './interfaces';

export class CurrencyConverterService implements CurrencyConverter {
    async convertCurrency(amount: number, from: string, to: string): Promise<number> {
        try {
            const response = await axios.get<ExchangeRateResponse>(`https://api.exchangerate-api.com/v4/latest/${from}`);
            const exchangeRates = response.data.rates;
            const rate = exchangeRates[to];
            if (!rate) {
                throw new Error(`Unable to find exchange rate for ${to}`);
            }
            return amount * rate;
        } catch (error:any) {
            throw new Error(`Error converting currency: ${error.message}`);
        }
    }
}
