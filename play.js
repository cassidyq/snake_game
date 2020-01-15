const connect = require('./client');
const setupInput = require('./input')

console.log('Connecting ...');
let commands = connect();

setupInput(commands);