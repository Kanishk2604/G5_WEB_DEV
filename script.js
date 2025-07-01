// console.log("HELLO WORLD");
// var a = 200;

// console.log(a);
// function abc(){
//     console.log("Hello CLASS");
// }
// var b = 3000;
// console.log(b);
// abc();
// setTimeout(()=>{
//     console.log("I am setTimeout");
// },2000);
// console.log("End")

function grandparent(){
    var a = 200;
    console.log(a);
    // console.log(c); // refrence error -> works in a heirarchial order
    function parent(){
        var b = 300;
        console.log(b);

        function child(){
            var c = 400;
            console.log(c);
        }
        child();
    }
    parent();
}
grandparent();