"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = function Employee(firstName, middleName, lastName, email, job, salary, birthDate) {
    _classCallCheck(this, Employee);

    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.email = email;
    this.salary = salary;
    this.birthDate = birthDate;
    this.job = job;
    this.manager = undefined;
    this.subordinates = [];
    this.managedProjects = [];
    this.tasks = [];
    this.addresses = [];
};

exports.default = Employee;