function makeShower(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const shower=true;
            if(shower){
                console.log("you take shower");
                resolve("You took shower");

            }else{
                reject("you didn't take shower");
            }
            

        },2000);
    })

}

function doHomework(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const homework=true;
            if (homework){
                console.log("you do ur homework");
                resolve("you completed yor home work");

            }else{
                reject("you didn't take shower");
            }
            
        },1000);
    })

}

function play(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const play=true;
            if(play){
                console.log("you play what you like");
                resolve("you played what you like");

            }else{
                reject("you didn't play ");
            }
            
        },3000);
    })


}

//if you what to print the promise actions in order, you have to correctly follow promise function, look below
makeShower().then((result)=>{ //result==resolve
    console.log(result);
    return doHomework() //call next function
}).then((result)=>{
    console.log(result);
    return play()
}).then((result)=>{
    console.log(result);
    console.log("All done");
}).catch((error)=>{
    console.log(error);   //reject valuve
})