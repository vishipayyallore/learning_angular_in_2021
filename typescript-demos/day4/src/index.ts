"use strict";

// import { Person } from "./Person";
// import { ObjectsHolder } from "./GenericsDemo";
// import { Employee } from "./Employee";

export class Person {
    Id: number | undefined;
    Name: string | undefined;
    Age: number | undefined;

    constructor(id: number, name: string, age: number = 21) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }

}

export class Employee {
    Id: number | undefined;
    Name: string | undefined;
    IsManager: boolean = true;
    forUndefined: string | undefined;
    forNull = null;

    constructor(id: number, name: string, isManager: boolean = true) {
        this.Id = id;
        this.Name = name;
        this.IsManager = isManager;
    }

}

export class ObjectsHolder<T> {
    private objects: T[] = [];

    public Push(value: T): void {
        this.objects.push(value);
    }

    public Pop(): T | undefined {
        return this.objects.shift();
    }
}

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
