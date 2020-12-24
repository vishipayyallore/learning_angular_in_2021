interface Person {
    firstName: string;

    lastName: string;
}

class Student {
    fullName: string = "";

    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }
}

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

var user = new Student("Shiva", "Sai");

function setTextBoxMessage() {
    let htmlElement = document.getElementById("contentFromTsFile") as HTMLDivElement;
    htmlElement.innerText = greeter(user);

    let textBoxMessage = document.getElementById("textBoxMessage") as HTMLInputElement;
    textBoxMessage.value = user.fullName;
}

// export { Person, Student, greeter, setTextBoxMessage };
