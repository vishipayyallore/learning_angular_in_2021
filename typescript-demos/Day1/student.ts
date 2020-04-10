"use strict";

export class Student {

    fullName: string = "";

    constructor(public firstName: string, public lastName: string) {
        this.fullName = `${this.firstName} ${this.lastName}`;
    }

}