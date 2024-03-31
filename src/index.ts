import { CurrencyConverterService } from './converter'
import readline from 'readline';
const converter = new CurrencyConverterService();


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function main() {
    const amountStr = await getUserInput('Digite o valor a ser convertido: ');
    const fromCurrency = await getUserInput('Digite a moeda de origem (ex: USD): ');
    const toCurrency = await getUserInput('Digite a moeda de destino (ex: EUR): ');

    const amount = parseFloat(amountStr);
    if (isNaN(amount)) {
        console.error('Valor inválido. Certifique-se de digitar um número válido.');
        rl.close();
        return;
    }

    try {
        const valorConvertido = await converter.convertCurrency(amount, fromCurrency.toUpperCase(), toCurrency.toUpperCase());
        console.log(`${amount} ${fromCurrency} é equivalente a ${valorConvertido.toFixed(2)} ${toCurrency}`);
    } catch (error:any) {
        console.error(`Erro: ${error.message}`);
    } finally {
        rl.close();
    }
}

main();

