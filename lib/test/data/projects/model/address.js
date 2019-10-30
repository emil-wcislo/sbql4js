"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//import { createAssociaction } from '../../util';

var Address = function Address(street, city, zip) {
    _classCallCheck(this, Address);

    this.street = street;
    this.city = city;
    this.zip = zip;
    this.employee = undefined;
    // createAssociaction(this, employee, 'employee', 'address');
};

exports.default = Address;