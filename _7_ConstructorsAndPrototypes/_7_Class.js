//Working of class is same as prototype it is just
// syntactical enhancement in ES6 JavaScript
class Vehicle{
    constructor(numWheels,price){
        this.numWheels=numWheels;
        this.price=price;
    }
    getPrice(){
        return this.price;
    }
}
var vehicle1=new Vehicle(4,50000);
console.log(vehicle1.getPrice());
