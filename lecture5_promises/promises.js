// console.log("Start script");
// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("placement done");
//     },3000);
// });
// myPromise
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));

// function placementprocedure(placementstep, delay){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("meow will get the placement"+placementstep);
//             console.log("meow will get the placement "+placementstep);
//         },delay);
//     });
// }

// placementprocedure("yaayyyy",5000)
// .then(()=>placementprocedure("Party time",3000))
// .then(()=>placementprocedure(" working time",4000))
// .then(()=>placementprocedure(" layoff",1000))
// .catch((err)=>{
//     console.log(err);
// })

//Promise API
const myPromise1 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("1");
    },1000);
});
const myPromise2 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("2");
    },2000);
});
const myPromise3 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("3");
    },3000);
});
const myPromise4 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("4");
    },4000);
});

Promise.all([myPromise1,myPromise2,myPromise3,myPromise4])
.then((res)=>console.log(res))
.catch((err)=>console.log(err))
//Promise.allSettled([myPromise1,myPromise2,myPromise3,myPromise4]);
//Promise.any([myPromise1,myPromise2,myPromise3,myPromise4]);
//Promise.race([myPromise1,myPromise2,myPromise3,myPromise4]);