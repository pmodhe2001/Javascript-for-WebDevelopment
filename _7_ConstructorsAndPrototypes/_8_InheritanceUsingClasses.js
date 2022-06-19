class Vehicle{
    constructor(numWheels,price){
        this.numWheels=numWheels;
        this.price=price;
    }
    getPrice(){
        return this.price;
    }
    printDescription(){
        console.log("Vehicle ",this.numWheels,this.price);
    }
}

class Cars extends Vehicle{
    constructor(price,noDoors){
        super(8,price)// super keyword iss used to call parent class constructor
        this.noDoors=noDoors;
    }
    printDescription(){
        super.printDescription();
        console.log("Car",this.noDoors);
    }
}

var c = new Cars(100000,4);
c.printDescription();
/*var vehicle1 = new Vehicle(4,60000);
var vehicle2 = new Vehicle(8,80000);*/