import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log.service.js'

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }

    if (args.s) {
    }

    if (args.t) {
    }
}

initCLI()
