//console.log("Start script");

// MAP FUNCTION

// const newArr = arr.map((x)=>x*2);
// console.log(newArr);

// PROTOTYPES IN JS
 // Creating a map replica 

//  let arr2 =[5,2,3,4,6,7];

//  function doubledata(x){
//     return x*x;
//  }

//  Array.prototype.mapReplica = function(logic){
//     let outputArr=[];
//     for(let i=0;i<this.length;i++){
//         outputArr.push(logic(this[i]));
//     }
//     return outputArr;
//  }
//  const myprotoData = arr2.mapReplica(doubledata);
//  console.log(myprotoData);

// FILTER

// const words =["spray", "elite", "exuberant", "destruction", "present"];
// const result = words. filter((word)=>word.length>6);
// console.log(result);

// Filter replica

// let words = ["spray", "elite", "exuberant", "destruction", "present"];
// function chanai(x){
//     return x.length>6;
// }
// Array.prototype.filterreplica= function(logic){
//     let outputArr=[];
//         for(let i=0;i<this.length;i++){
//         if(logic(this[i])){
//         outputArr.push((this[i]));
//         }
//     }
//     return outputArr;
// }
//  const myprotoData = words.filterreplica(chanai);
//  console.log(myprotoData);

// Reduce in Js

// const array1=[1,2,3,4];
// const initialValue=0;
// const sumwithInitial= array1.reduce(
//     (accumulator, currentValue)=> accumulator + currentValue, initialValue);
// console.log(sumwithInitial);

// Reducereplica

const array1 = [1,2,3,4];
function meow(acc,curr){
    return acc+curr;
}
Array.prototype.reducereplica = function(logic, initialValue){
    let result= initialValue;
    for(let i=0;i<this.length;i++){
        result = logic(result,this[i])
}
return result;
}
const myprotoData=array1.reducereplica(meow,0);
console.log(myprotoData);