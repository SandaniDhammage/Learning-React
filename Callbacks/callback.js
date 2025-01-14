function openFile(callback){
    setTimeout(()=>{
        console.log("file opened...");
        callback()
    },3000);
    
}

function addSomething(){
    console.log("something added to the file...");
}

function removeSomething(){
    console.log("Something removed from the file...");
}

openFile(addSomething);  // by callback you can call a function with changing another functions.
openFile(removeSomething);