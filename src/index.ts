import { converterMoeda } from './converter';

async function main() {
    try {
        const valorConvertido = await converterMoeda(100, 'USD', 'EUR');
        console.log(`100 USD é equivalente a ${valorConvertido} EUR`);
    } catch (error: any) {
        console.error(`Erro: ${error.message}`);
    }
}

main();
