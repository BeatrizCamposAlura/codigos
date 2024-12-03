import fs from 'fs/promises'; // Importação para ES Modules
import chalk from 'chalk'; 

(async () => {
    try {
        const dados = await fs.readFile('./vivo.txt', 'utf8');
        const linhas = dados.split('\n');
        let quantidadeDeLinhas = linhas.length

        const primeiraLinha = linhas[0];
        console.log(chalk.magenta('Primeira linha:', primeiraLinha));


        for (let i = 1; i < quantidadeDeLinhas; i++) {
            console.log(chalk.yellow(linhas[i]));
        }
    } catch (erro) {
        console.error('Erro ao ler o arquivo:', erro);
    }
})();