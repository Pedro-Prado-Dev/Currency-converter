import axios from 'axios';

export async function converterMoeda(valor: number, moedaOrigem: string, moedaDestino: string): Promise<number> {
    try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${moedaOrigem}`);
        const taxaDeCambio = response.data.rates[moedaDestino];
        if (!taxaDeCambio) {
            throw new Error(`Não foi possível encontrar taxa de câmbio para ${moedaDestino}`);
        }
        const valorConvertido = valor * taxaDeCambio;
        return valorConvertido;
    } catch (error: any) {
        throw new Error(`Erro ao converter moeda: ${error.message}`);
    }
}