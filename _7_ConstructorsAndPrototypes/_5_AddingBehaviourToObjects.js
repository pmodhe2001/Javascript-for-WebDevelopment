function Vehicle(numWheels,price){
    this.numWheels=numWheels;
    this.price=price;

    this.getPrice = function(){ // Copy of this function is created when object is made
        return this.price;
    }
}
var vehicle1=new Vehicle(2,50000);
var vehicle2=new Vehicle(4,50000);
console.log(vehicle1);
console.log(vehicle1);   