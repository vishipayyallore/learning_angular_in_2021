import { Promise } from 'es6-promise';

const one = new Promise<string>((resolve, reject) => {
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