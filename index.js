import getArgs from './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';

const startCli = () => {
  const args = getArgs(process.argv)
  console.log(args);
  if(args.h) {
    printHelp()
    // help
  }
  if(args.s) {
    // save city
  }
  if(args.t) {
    // save tokens
  }
  // result
}

startCli()