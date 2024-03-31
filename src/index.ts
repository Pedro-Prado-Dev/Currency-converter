import { CurrencyConverterService } from './converter'
const converter = new CurrencyConverterService();

async function main() {
    try {
        const valorConvertido = await converter.convertCurrency(100, 'USD', 'EUR');
        console.log(`100 USD is equivalent to ${valorConvertido} EUR`);
    } catch (error:any) {
        console.error(`Error: ${error.message}`);
    }
}

main();
