const getFlagValue = require('./flags')

console.log(`Ola ${getFlagValue('--name')}. ${getFlagValue('--greetings')}}`)