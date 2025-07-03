var cart=["SHOES","WATCHES"]
function createOrder(cart,cb){
    //1.TAKE THE PRICE AND TOTAL NO. OF ORDER
    let noofitem = cart.length;
    let price = noofitem*1000;
    console.log("Order is created");
    cb(price,noofitem);
}
function placeOrder(price,noofitem,cb){
    //1.Generate order ID and go to the payment gateway
    let orderId = Math.floor(Math.random()*1000);
    console.log("Order ID is: ",orderId);
    cb(orderId,price,noofitem);
}
function orderPayment(orderId,price,noofitem,cb){
    //Place order
    console.log("Order is placed");
    cb(orderId,price,noofitem);
}
function orderStatus(orderId,price,noofitem,cb){
    //Check order status
    console.log("Order Details:");
    console.log("Order ID: ",orderId);
    console.log("Total items:",noofitem);
    console.log("Total price:",price);
}
createOrder(cart,function(price,noofitem){
    placeOrder(price,noofitem,function(orderId,price,noofitem){
        orderPayment(orderId,price,noofitem,function(orderId,price,noofitem){
            orderStatus(orderId,price,noofitem);
        });
    });
});