import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (err) => {
    console.log(chalk.bgRed('ERROR') + ' ' + err)
}
const printSuccess = (message) => {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message)
}
const printHelp = () => {
    console.log(
        dedent`
        ${chalk.bgCyan('HELP')}
        Без параметров - вывод погоды
        -s [CITY] установка города
        -h для вывода помощи
        -t [API_TOKEN] для сохранениея токена    
        `,
    )
}

export { printError, printSuccess, printHelp }
