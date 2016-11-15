const Readable  = require("stream").Readable;
const Writable  = require("stream").Writable;
const Transform  = require("stream").Transform; 

class CReadable extends Readable {
    constructor(options) {
        super(options);
    }

    _read() {
        this.push('1');
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
        this.push(chunk)
        done();
    }
}

const input = new CReadable();
const output = new CWritable();
const ct = new CTransform();



//setInterval(() => input.pipe(ct), 1000);
//ct.pipe(output);
