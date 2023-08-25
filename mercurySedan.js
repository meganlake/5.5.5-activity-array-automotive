//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = maximumPassengers;
        this.passengers = passengers;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel= fuel;
        this.scheduleService = scheduleService;
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger
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

let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "red", "8500");
console.log(v.make)

let newCar = new Car(5, 0, 4, 160, 10, false)

newCar.loadPassenger(4)
newCar.start()
newCar.checkService()

console.log(myCar)







//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
