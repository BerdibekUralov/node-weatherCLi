import getArgs from './helpers/args.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async token => {
  try {
    await saveKeyValue('token', token)
    printSuccess("Token was save")
  } catch (error) {
    printError(error.message)
  }
}

const startCli = () => {
  const args = getArgs(process.argv)
  if(args.h) {
    // help
    printHelp()
  }
  if(args.s) {
    // save city
  }
  if(args.t) {
    // save tokens
    return saveToken(args.t)
  }
  // result
}

startCli()