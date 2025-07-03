console.log("START SCRIPT");
function Walkinres(cb){
    console.log("I am walking in the restaurant");
    setTimeout(cb,3000)
}
function checkmenu(cb){
    console.log("checking the menu");
    setTimeout(cb,2000)
}
function orderfood(cb){
    console.log("Ordering food");
    setTimeout(cb,5000)
}
function havinglunch(cb){
    console.log("Having lunch");
    setTimeout(cb,6000)
}
function paybill(cb){
    console.log("Pay the bill");
    setTimeout(cb,2000)
}
function walkout(){
    console.log("Walking out of the restaurant");
}

Walkinres(()=>{
    checkmenu(()=>{
        orderfood(()=>{
            havinglunch(()=>{
                paybill(()=>{
                    walkout()
                })
            })
        })
    })
})
// console.log("SOMETHING");
// console.log("SOMETHING");