"use strict";

interface Person {
    firstName: string;

    lastName: string;
}

class Student {
    fullName: string = "";

    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

    greeter(): string {
        return `Student Information: ${this.firstName} ${this.lastName}`;
    }

}

var student1 = new Student("Shiva", "Sai");

function setTextBoxMessage() {
    let textBoxMessage = document.getElementById("textBoxMessage") as HTMLInputElement;
    textBoxMessage.value = student1.fullName;
}

