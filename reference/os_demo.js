const os = require('os');
const { uptime } = require('process');

// Platform 
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total Memory
console.log(os.totalmem());

// Home Dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());