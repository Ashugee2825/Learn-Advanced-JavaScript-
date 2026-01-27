const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
(async () => {
    try {
        const fileData = await readFile('myLogger.txt', 'utf8');
        console.log(fileData);
    } catch (err) {
        console.log(err);
    }
})();
