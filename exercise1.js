class Vehicle {
  constructor (tires) {
    this.tires = tires
  }
  getTires () {
    return this.tires
  }
}
exports.Vehicle = Vehicle

class Car extends Vehicle {
  constructor (tires = 4) {
    super(tires)
  }
}
exports.Car = Car

class Motorbike extends Vehicle {
  constructor (tires = 2) {
    super(tires)
  }
}
exports.Motorbike = Motorbike

class Truck extends Vehicle {
  constructor (tires = 8) {
    super(tires)
    this.cargo = []
  }
  loadCargo (newCargo) {
    this.cargo = (this.cargo).concat(newCargo)
  }
  logCargo () {
    console.log((this.cargo).join())
  }
}
exports.Truck = Truck

/*
 console (node):
 $ const {Car, Motorbike, Truck} = require('./exercise1.js')
 $ t = new Truck()
 $ t.loadCargo([1,2,3])
 $ t.logCargo()
 $ t.getTires()
*/
