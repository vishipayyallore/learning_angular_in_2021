"use strict";

function Person(name, gender) {

    // Properties
    this.name = name;
    this.gender = gender;

    // Methods
    this.getPersonDetails = function () {
        return `Name: ${this.name} | Gender: ${this.gender}`;
    };
}

Person.prototype.getPersonDetailsV1 = function () {
    return `Name: ${this.name} | Gender: ${this.gender}`;
};

/*
    Description: To Avoid the pollution of Global Namespace
function getPerson() {
    return `Name: ${this.name} | Gender: ${this.gender}`;
}
*/