var _var=10;
let _let=20;
const _const=30;

//console.log(_var, _let, _const);

function scopeTest(){
    var _var2=100;
    let _let2=200;
    const _const2=300;

    if(true){
        let _let3="one";
        var _var3="two";
        const _const3="three";
        console.log(_var3, _let3, _const3);    //output successfully displayed
    }
    console.log(_var3, _let3, _const3); // error occured. only _var3 veriable displayed , var veriables are working inside the function

    console.log(_var2, _let2, _const2);
}

scopeTest();