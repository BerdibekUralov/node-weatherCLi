const getArgs = require('./helpers/args')

const startCli = () => {
  const args = getArgs(process.argv)
  console.log(args);
  if(args.h) {
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