export interface ExchangeRateResponse {
    rates: Record<string, number>;
}

export interface CurrencyConverter {
    convertCurrency(amount: number, from: string, to: string): Promise<number>;
}