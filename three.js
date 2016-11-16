const Readable  = require("stream").Readable;
const Writable  = require("stream").Writable;
const Transform  = require("stream").Transform; 

class CReadable extends Readable {
    constructor(options) {
        super(options);
    }

    _read() {
        let num = Math.floor(Math.random() * 90000) + 10000;
        this.push(num.toString());
    }
}

class CWritable extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, done) {
        console.log(chunk.toString());
        done();
    }
}

class CTransform extends Transform {

    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, done) {
        this.push(`===${chunk}===`);
        setInterval(done, 1000);
    }
}

const input = new CReadable();
const output = new CWritable();
const ct = new CTransform();

input.pipe(ct).pipe(output);
