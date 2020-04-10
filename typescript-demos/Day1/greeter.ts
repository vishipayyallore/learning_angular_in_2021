"use strict";

import { Student } from "./student";
import { Person } from "./interfaces";

function greeter(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}

let user = new Student("Shiva", "Sai");

document.body.textContent = greeter(user);
