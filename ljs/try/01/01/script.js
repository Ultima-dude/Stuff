"use strict";

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError("Format error!");
console.log(err instanceof FormatError);
console.log(err instanceof SyntaxError);
