"use strict";
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
var one = new es6_promise_1.Promise(function (resolve, reject) {
    resolve('Hello');
});
// const two = one.then(value => { });
console.log(one);
/*

a = () =>{ return new Promise((resolve,reject)=> {
    setTimeout(()=>{
        console.log("a")
        resolve('inside a()');

    },1000);   // 1 sec delay
})

*/ 
