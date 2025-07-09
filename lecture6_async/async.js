// console.log("Start script")
// async function fetchDataProducts(){
//     const data = await fetch('https://dummyjson.com/products')
//     const finaldata = await data.json();
//     console.log(finaldata);
// }
// fetchDataProducts();

// const promisebymeow = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I will complete the assignment by 1:PM")
//     },3000)
// });

// async function checkAssignment(){
//     const checkAssignmentData = await promisebymeow;
//     console.log(checkAssignmentData);
// }
// checkAssignment();

///////// EVENT CAPTURING and EVENT BUBBLING///////////////
// const grandparent = document.getElementById('grandparent');
// const parent = document.getElementById('paretn');
// const child = document.getElementById('child');

// grandparent.addEventListener('click',()=>{
//     console.log("This is Grandparent div")
// },true);

// parent.addEventListener('click',()=>{
//     console.log("This is Parent div")
// },true);

// child.addEventListener('click',()=>{
//     console.log("This is child div")
// },true);



////////////////////////////////////////////////

// function admissionProcess(studentName, studentClass){
//     console.log(`Hi ${this.studentName}, from Class:${this.studentClass}`)
// }

// const student1={
//     studentName:"meow",
//     studentClass:"G5"
// }
// const student2={
//     studentName:"mimi",
//     studentClass:"G5"
// }

// //call()
// admissionProcess.call(student1);
// admissionProcess.call(student2);

function admissionProcess(studentZone,studentCampus){
console.log(`Hi ${this.studentName}, from Class:${this.studentClass}, from Zone:${this.studentZone}, from Campus:${this.studentCampus}`)
}

const student1={
    studentName:"meow",
    studentClass:"G5"
}
const student2={
    studentName:"mimi",
    studentClass:"G5"
}

const b1 =admissionProcess.call(student1,["Zeta cluster","Punjab campus"]);
const b2= admissionProcess.call(student2,["Alpha cluster","Dholakpur campus"]);

b1();
b2();
