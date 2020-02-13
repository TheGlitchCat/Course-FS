
const os = require('os');

console.log("Current OS: ", os.release());
console.log("Free Memory", os.freemem() / 1024000);
console.log("Total Memory", os.totalmem() / 1024000);

