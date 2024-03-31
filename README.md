# Conversor de moedas

Aplicação para converter valores de uma moeda para outra.
Usando readline para leitura, jest para testes, husky para pré-commit e uma API para a conversão de valores.

- exemplo de uso
![Imagem de exemplo de uso](img/Captura%20de%20tela%202024-03-31%20144630.png)

### Configuração e instalação de bibliotecas

- npm init -y
  - Inicialização do projeto NodeJS

- npm install -D typescript
  - Instalação do typescript, a linguagem de programação que estaremos utilizando durante o curso

- npm install -D @types/node
  - Adiciona algumas tipagens

- npx tsc --init    
  - Inicializa as configurações de compilação do typescript

- npm install -D ts-node-dev
  - Biblioteca para execução do código typescript

- npm install husky
  - Instalação do husky, uma biblioteca para execução de scripts com o git

- npx husky init
  - Configuração padrão do husky

- npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-standard
  - Instalação do EsLint

- npm install -D jest ts-jest @types/jest
  - Instalação do Jest e Dependências
  
- npm install readline
  - Intalação do readline para leitura de dados de um fluxo de entrada


### Execução de scripts do NodeJS

- npm start
  - Executa o código em ambiente de desenvolvimento

- npm run start:prod
  - Compila e executa o código compilado em JavaScript

- npm run build
  - Compila o código para JavaScript

- npm run test:unit
  - Executa os testes

## Links Úteis:

- [DOC-API](https://www.exchangerate-api.com/docs/supported-currencies)