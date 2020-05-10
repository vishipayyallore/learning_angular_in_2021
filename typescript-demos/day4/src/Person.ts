"use strict";

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