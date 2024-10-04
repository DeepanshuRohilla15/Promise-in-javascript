
// the real operation that we want to promisify
function doAsyncOp(resolve){
  setTimeout(resolve, 3000);  // old callback, async function
}


const p = new Promise(doAsyncOp);

function callback(){
  console.log("3 seconds have passed");
}
p.then(callback);
