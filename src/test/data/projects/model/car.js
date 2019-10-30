export default class Car {
    constructor(model, make, yearOfProduction, vin) {
        this.make = make;
        this.model = model;
        this.yearOfProduction = yearOfProduction;
        this.vin = vin;
        this.owner = undefined;
    }
}