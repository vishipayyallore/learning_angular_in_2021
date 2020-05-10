"use strict";

export class Employee {
    Id: number | undefined;
    Name: string | undefined;
    IsManager: boolean = true;
    forUndefined: string | undefined;
    forNull = null;

    constructor(id: number, name: string, isManager: boolean = true) {
        this.Id = id;
        this.Name = name;
        this.IsManager = isManager;
    }

}