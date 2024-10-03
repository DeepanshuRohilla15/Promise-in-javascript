const fs = require('fs');

function readTheFile(sendHere)
{
    fs.readFile("a.txt", "utf-8", function(err, data){
        sendHere(data);
    })
}

function readFile()
{
    //read the file and return its value
    return new Promise(readTheFile);
}

const p = readFile();
p.then(callback);

function callback(contents){
    console.log(contents);
}


// Promise ke function ka function jb call hoga tbhi (.then wala function call hoga)

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.


/*
    A Promise is a proxy for a value not necessarily known when the promise is created. 
    It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
    This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, 
    the asynchronous method returns a promise to supply the value at some point in the future.


 */