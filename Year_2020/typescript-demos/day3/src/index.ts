"use strict";

export class Index {

    getMessage(): string {
        return `Please look the output inside the Devloper Tools Console Window`;
    }

}

let indexPage = new Index();

export class Employee
{
    Id: number | undefined;
    Name: string | undefined;
    IsManager: boolean = true;
    forUndefined:string | undefined;
    forNull = null;

    constructor(id: number, name: string, isManager: boolean = true) {
        this.Id = id;
        this.Name = name;
        this.IsManager = isManager;
    }
}

