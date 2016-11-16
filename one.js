const fs = require("fs");
const crypto = require('crypto'); 

const input = fs.createReadStream("data.txt");
const output = fs.createWriteStream("hash.txt");

var hash = crypto.createHash('md5');

input.on("end",  () => {
    hash.end();
    console.log(hash.read());
});

input.pipe(hash);

hash.on("finish",  () => {
    hash.pipe(output);
});
