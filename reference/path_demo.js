const path = require('path');

// Basename (gets base file name)
console.log(__filename);
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));
console.log(path.basename(__dirname));

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));