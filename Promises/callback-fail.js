function func(callback){
    setTimeout(()=>{
        console.log("This is a func");
        callback();
    },1000);
}

function func1(callback){
    setTimeout(()=>{
        console.log("This is a func1");
        callback();
    },1000);
}

function func2(callback){
    setTimeout(()=>{
        console.log("This is a func2");
        callback();
    },1000);
}

function func3(callback){
    setTimeout(()=>{
        console.log("This is a func3");
        callback();
    },1000);
}

func(()=>{
   func1(()=>{
    func2(()=>{
        func3(()=>{
            console.log("all done"); // due to this coplexity, intriduce the promises
        })
    })
   })
})