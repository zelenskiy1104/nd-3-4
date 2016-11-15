const fs = require("fs");
const crypto = require('crypto');
const bin2hex = require('./bin2hex');  
const Transform  = require("stream").Transform; 

const input = fs.createReadStream("data.txt");
const output = fs.createWriteStream("hash.txt");

var hash = crypto.createHash('md5');

class CTransform extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        this.push(bin2hex(chunk));
        console.log(bin2hex(chunk));
        callback();
    }
}

input.on("end",  () => {
    hash.end();
});

input.pipe(hash);

const ct = new CTransform();

hash.on("finish",  () => {
    hash.pipe(ct).pipe(output);
});
