"use strict";

import { Person } from "./person";

export class Student {
    fullName: string = "";

    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    greeter(): string {
        return `Student Information: ${this.firstName} ${this.lastName}`;
    }


}

var student1 = new Student("Shiva", "Sai");
var person1 = new Student("Soumya", "Swain");

export function setTextBoxMessage() {
    let textBoxMessage = document.getElementById("textBoxMessage") as HTMLInputElement;
    textBoxMessage.value = student1.fullName;
}

export function greetPerson(person: Person) : string {
    return `Hello Person: ${person.firstName} ${person.lastName}`;
}
