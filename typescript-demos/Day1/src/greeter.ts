"use strict";

export interface Person {
    firstName: string;

    lastName: string;
}

export class Student {

    fullName: string = "";

    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

}

export function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

const user = new Student("Shiva", "Sai");


export function setTextBoxMessage() {
    let htmlElement = document.getElementById("contentFromTsFile") as HTMLDivElement;
    htmlElement.innerText = greeter(user);

    let textBoxMessage = document.getElementById("textBoxMessage") as HTMLInputElement;
    textBoxMessage.value = user.fullName;
}
