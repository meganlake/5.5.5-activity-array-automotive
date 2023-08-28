//this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends Vehicle {
    constructor(maxPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);
        this.maxPassengers = maxPassengers;
        this.passengers = passengers;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel= fuel;
        this.scheduleService = scheduleService;
    }

    loadPassenger(num) {
        if (this.passengers < this.maxPassengers) {
            if ((num + this.passengers) <= this.maxPassengers) {
                this.passengers = num;
                return this.passengers
            } else {
                console.log(`${this.make} ${this.model} has no room left.`)
            }
        } else {
            console.log(`${this.make} ${this.model} is full.`)
        }
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true
        } else {
            return this.started = false
        }
    }

    checkService() {
        if (this.milage > 30000) {
            this.scheduleService = true;
            return this.scheduleService;
        }
    }
}

let v = new Vehicle("Mercury", "Sedan", "1965", "red", "8500");
console.log(v.make)

let newCar = new Car(5, 0, 4, 160, 10, false)

newCar.loadPassenger(4)
newCar.start()
newCar.checkService()







//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
