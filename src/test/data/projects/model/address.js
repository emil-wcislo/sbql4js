//import { createAssociaction } from '../../util';

export default class Address {
    constructor(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
        this.employee = undefined;
        // createAssociaction(this, employee, 'employee', 'address');
    }
}