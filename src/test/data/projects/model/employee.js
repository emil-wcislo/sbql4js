

export default class Employee {
    constructor(firstName, middleName, lastName, email, job, salary, birthDate) {
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
    }
}