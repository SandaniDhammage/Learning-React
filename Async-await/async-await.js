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

async function doAll() {
    try{
        await makeShower();
    await doHomework();
   await  play();

    }catch(error){
        console.log(error);      //async-await reduce the code complexity of the promises
    }
    
    
}
doAll();