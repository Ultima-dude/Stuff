"use strict";

let json = '{ "name":"John", "age": 30 }';

class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

class ReadError extends MyError {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
    }
}

class ValidationError extends MyError {
    constructor(message) {
        super(message);
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super(`no property: ${property}`);
        this.property = property;
    }
}

function validateUser(user) {
    if(!user.age) {
        throw new PropertyRequiredError(`age`);
    }
    if(!user.name) {
        throw new PropertyRequiredError(`name`);
    }
}

function readUser(json) {
    let user;

    try{
        JSON.parse(json);
    } catch(err) {
        if(err instanceof SyntaxError) {
            throw new ReadError("Syntax error", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch(err) {
        if(err instanceof ValidationError) {
            throw new ReadError("Validation error", err);
        } else {
            throw err;
        }
    }
}

try {
    readUser("{ bad json}");
} catch(e) {
    if(e instanceof ReadError) {
        console.log(e);
        console.log(`Err ${e.cause}`);
    } else {
        throw e;
    }
}
