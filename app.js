/*const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);*/

const os = require('os');
// const { string } = require('querystring');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
//console.log('Total Memory:' + totalMemory);

// Template string
//ES6/ ES2015: ECMAScript 6
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);