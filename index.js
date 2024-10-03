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