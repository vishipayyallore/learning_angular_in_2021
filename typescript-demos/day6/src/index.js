function asyncFun() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Console from promise function");
            resolve();
        }, 3000);
    });
    return promise;
}
/*

a = () =>{ return new Promise((resolve,reject)=> {
    setTimeout(()=>{
        console.log("a")
        resolve('inside a()');

    },1000);   // 1 sec delay
})

*/ 
