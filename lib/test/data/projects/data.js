'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _randexp = require('randexp');

var _randexp2 = _interopRequireDefault(_randexp);

var _jsonStringifySafe = require('json-stringify-safe');

var _jsonStringifySafe2 = _interopRequireDefault(_jsonStringifySafe);

var _address = require('./model/address');

var _address2 = _interopRequireDefault(_address);

var _employee = require('./model/employee');

var _employee2 = _interopRequireDefault(_employee);

var _car = require('./model/car');

var _car2 = _interopRequireDefault(_car);

var _project = require('./model/project');

var _project2 = _interopRequireDefault(_project);

var _task = require('./model/task');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var address = [];
var employee = [];
var car = [];
var project = [];
var task = [];

_faker2.default.seed(1);

var numAddress = 10;
for (var i = 0; i < numAddress; i++) {
    var street = _faker2.default.address.streetName();
    var city = _faker2.default.address.city();
    var zip = _faker2.default.address.zipCode();
    var a = new _address2.default(street, city, zip);
    address.push(a);
}

var numEmployees = 10;
for (var _i = 0; _i < numEmployees; _i++) {
    var firstName = _faker2.default.name.firstName();
    var middleName = _i % 2 == 0 ? _faker2.default.name.firstName() : undefined;
    var lastName = _faker2.default.name.lastName();
    var email = _faker2.default.internet.email();
    var job = _faker2.default.name.jobTitle();
    var salary = _faker2.default.random.number({ min: 2000, max: 10000, precision: 2 });
    var birthDate = _faker2.default.date.between("1940-01-01", "2000-01-01");
    var e = new _employee2.default(firstName, middleName, lastName, email, job, salary, birthDate);
    employee.push(e);
    // const aIndex = faker.random.number( { min: 0, max: (numAddress - 1) });
    // console.log(aIndex);
    var _a = _faker2.default.random.arrayElement(address);
    (0, _util2.default)(e, _a, 'addresses', 'employee');
}
var carMakes = ["Fiat", "Ford", "VW"];
var carModels = {
    "Fiat": ["Punto", "Panda", "500", "Tipo"],
    "Ford": ["Fiesta", "Focus", "Mondeo"],
    "VW": ["Polo", "Golf", "Passat"]
};
_randexp2.default.prototype.randInt = function (from, to) {
    return _faker2.default.random.number({ min: from, max: to });
};
var vinGen = new _randexp2.default('[A-HJ-NPR-Z0-9]{17}');

var numCars = 10;
for (var _i2 = 0; _i2 < numCars; _i2++) {
    var make = _faker2.default.random.arrayElement(carMakes);
    var model = _faker2.default.random.arrayElement(carModels[make]);
    var found = false;
    for (var j = 0; j < car.length && !found; j++) {
        var _c = car[j];
        if (_c.make == make && _c.model == model) {
            found = true;
        }
    }
    if (found === true) {
        continue;
    }
    var yearOfProduction = _faker2.default.random.number({ min: 1995, max: 2019 });
    var vin = vinGen.gen();
    // console.log(make, model);
    var c = new _car2.default(model, make, yearOfProduction, vin);
    car.push(c);
}

var projectNameGen = new _randexp2.default('[A-Z]{3}');
var numProjects = 20;
for (var _i3 = 0; _i3 < numProjects; _i3++) {
    var projectName = projectNameGen.gen();
    var budget = _faker2.default.random.number({ min: 50000, max: 300000 });
    var beginDate = _faker2.default.date.between("2000-01-01", "2019-01-01");
    var finishDate = _i3 % 3 == 0 ? _faker2.default.date.between(beginDate, "2019-01-01") : undefined;
    var p = new _project2.default(projectName, budget, beginDate, finishDate);
    project.push(p);
}

var numTasks = 50;
for (var _i4 = 0; _i4 < numTasks; _i4++) {
    var taskDesc = _faker2.default.name.jobDescriptor();
    var _beginDate = _faker2.default.date.between("2000-01-01", "2019-01-01");
    var _finishDate = _i4 % 2 == 0 ? _faker2.default.date.between(_beginDate, "2019-01-01") : undefined;
    var t = new _task2.default(taskDesc, _beginDate, _finishDate);
    var pr = _faker2.default.random.arrayElement(project);
    (0, _util2.default)(t, pr, 'project', 'tasks');
    var emp = _faker2.default.random.arrayElement(employee);
    (0, _util2.default)(t, emp, 'employee', 'tasks');
    task.push(t);
}

exports.default = {
    address: address,
    employee: employee,
    car: car,
    project: project,
    task: task
};