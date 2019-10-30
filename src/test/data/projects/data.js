import createAssociaction from '../util';
import faker from 'faker';
import RandExp from 'randexp';
import stringify from 'json-stringify-safe';

import Address from './model/address';
import Employee from './model/employee';
import Car from './model/car';
import Project from './model/project';
import Task from './model/task';

const address = [];
const employee = [];
const car = [];
const project = [];
const task = [];

faker.seed(1);

const numAddress = 10;
for(let i=0; i<numAddress; i++) {
    const street = faker.address.streetName();
    const city = faker.address.city();
    const zip = faker.address.zipCode();
    const a = new Address(street, city, zip);
    address.push(a);
}

const numEmployees = 10;
for(let i=0; i<numEmployees; i++) {
    const firstName = faker.name.firstName();
    const middleName = (i%2==0 ? faker.name.firstName() : undefined);
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const job = faker.name.jobTitle();
    const salary = faker.random.number({ min: 2000, max: 10000, precision: 2});
    const birthDate = faker.date.between("1940-01-01", "2000-01-01");
    const e = new Employee(firstName, middleName, lastName, email, job, salary, birthDate);
    employee.push(e);
    // const aIndex = faker.random.number( { min: 0, max: (numAddress - 1) });
    // console.log(aIndex);
    const a = faker.random.arrayElement(address);
    createAssociaction(e, a, 'addresses', 'employee');
}
const carMakes = ["Fiat", "Ford", "VW"];
const carModels = {
    "Fiat": ["Punto", "Panda", "500", "Tipo"],
    "Ford": ["Fiesta", "Focus", "Mondeo"],
    "VW": ["Polo", "Golf", "Passat"]
};
RandExp.prototype.randInt = (from, to) => {
    return faker.random.number({min: from, max: to});
}
const vinGen = new RandExp('[A-HJ-NPR-Z0-9]{17}');

const numCars = 10;
for(let i=0; i<numCars; i++) {
    const make = faker.random.arrayElement(carMakes);
    const model = faker.random.arrayElement(carModels[make]);
    let found = false;
    for(let j=0; j<car.length && !found; j++) {
        const c = car[j];
        if(c.make == make && c.model == model) {
            found = true;
        }
    }
    if(found === true) {
        continue;
    }
    const yearOfProduction = faker.random.number({min: 1995, max: 2019});
    const vin = vinGen.gen();
    // console.log(make, model);
    const c = new Car(model, make, yearOfProduction, vin)
    car.push(c);
}

const projectNameGen = new RandExp('[A-Z]{3}');
const numProjects = 20;
for(let i=0; i<numProjects; i++) {
    const projectName = projectNameGen.gen();
    const budget = faker.random.number({min: 50000, max: 300000});
    const beginDate = faker.date.between("2000-01-01", "2019-01-01");
    const finishDate = i % 3 == 0 ? faker.date.between(beginDate, "2019-01-01") : undefined;
    const p = new Project(projectName, budget, beginDate, finishDate)
    project.push(p);
}

const numTasks = 50;
for(let i=0; i<numTasks; i++) {
    const taskDesc = faker.name.jobDescriptor();
    const beginDate = faker.date.between("2000-01-01", "2019-01-01");
    const finishDate = i % 2 == 0 ? faker.date.between(beginDate, "2019-01-01") : undefined;
    const t = new Task(taskDesc, beginDate, finishDate);
    const pr = faker.random.arrayElement(project);
    createAssociaction(t, pr, 'project', 'tasks');
    const emp = faker.random.arrayElement(employee);
    createAssociaction(t, emp, 'employee', 'tasks');
    task.push(t);
}

export default {
    address,
    employee,
    car,
    project,
    task
}

