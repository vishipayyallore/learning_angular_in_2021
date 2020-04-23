"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = "";
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
}
exports.Student = Student;
function greeter(person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}
exports.greeter = greeter;
const user = new Student("Shiva", "Sai");
function setTextBoxMessage() {
    let htmlElement = document.getElementById("contentFromTsFile");
    htmlElement.innerText = greeter(user);
    let textBoxMessage = document.getElementById("textBoxMessage");
    textBoxMessage.value = user.fullName;
}
exports.setTextBoxMessage = setTextBoxMessage;
//# sourceMappingURL=greeter.js.map