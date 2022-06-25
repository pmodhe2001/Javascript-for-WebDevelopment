function Vehicle(numWheels,price){
    this.numWheels=numWheels;
    this.price=price;
    /*
    this.getPrice = function(){ // Copy of this function is created when object is made
        // to not make multiple copy we use prototype
        // all objects have internal refrences to prototype
        return this.price;
    }*/
}
//Objects share properties using property
//Objects can have common property using prototype
Vehicle.prototype.getPrice=function(){
       return this.price;
};
Vehicle.prototype.color="blue";// All objects will have common property

//Vehicle.prototype; // run this in console
//Vehicle.prototype.constructor; // run this in console
//abc.__proto__
//Object.getPrototypeof(abc)
var abc = new Vehicle(4,60000);
console.log(abc);
console.log(abc.color);
var def=new Vehicle(4,80000);
console.log(def);
console.log(def.color);