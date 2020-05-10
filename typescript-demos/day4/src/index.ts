"use strict";

import { Person } from "./Person";
import { ObjectsHolder } from "./GenericsDemo";
import { Employee } from "./Employee";

export class Index {

    person: Person;
    personObjects: ObjectsHolder<Person>;

    employee: Employee;
    employeeObjects: ObjectsHolder<Employee>;

    constructor() {
        this.person = new Person(1, "Shiva");
        this.employee = new Employee(101, "Azim", true);

        this.personObjects = new ObjectsHolder<Person>();
        this.personObjects.Push(this.person);

        this.employeeObjects = new ObjectsHolder<Employee>();
        this.employeeObjects.Push(this.employee);
    }

    getMessage(): string {
        return `Generics Demo in TypeScript`;
    }

    getAPerson(): void {
        console.log(this.personObjects.Pop());
    }

    getAEmployee(): void {
        console.log(this.employeeObjects.Pop());
    }
}

let indexPage = new Index();
