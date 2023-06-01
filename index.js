import getArgs from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printError, printSuccess, printHelp } from './services/log.service.js';
import { TOKEN_DICTIONARY, saveKeyValue } from './services/storage.service.js';

const saveToken = async token => {
  if(!token.length){
    printError("Token doesn't exist")
    return
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
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
  getWeather(process.env.CITY ?? "Tashkent")
}

startCli()