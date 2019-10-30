"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function Car(model, make, yearOfProduction, vin) {
    _classCallCheck(this, Car);

    this.make = make;
    this.model = model;
    this.yearOfProduction = yearOfProduction;
    this.vin = vin;
    this.owner = undefined;
};

exports.default = Car;