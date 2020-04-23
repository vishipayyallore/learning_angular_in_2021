"use strict";

// greeter.spec.ts
/// <reference types="jest" />

import * as Greeter from "../src/greeter";
// const Greeter = require("../src/greeter");

describe('Main Test for Greeter', () => {

    let user: Greeter.Person;

    beforeEach(() => {
        user = new Greeter.Student("Shiva", "Sai");
    });

    describe('When Greeter class is called ', () => {
        const message = 'Hello Shiva Sai';
        const fullName = 'Shiva Sai';

        test('When greeter() method is called, should return valid string.', async () => {
            let results = Greeter.greeter(user);

            expect(results).toEqual(message);
        });

        test('When setTextBoxMessage() method is called, should set string to Div and TextBox.', async () => {
            // Set up our document body
            document.body.innerHTML = `<div id="contentFromTsFile"></div> 
                                        <input type="text" id="textBoxMessage" />`;

            Greeter.setTextBoxMessage();

            const htmlElement = document.getElementById("contentFromTsFile") as HTMLDivElement;
            const textBoxMessage = document.getElementById("textBoxMessage") as HTMLInputElement;

            expect(htmlElement).toBeTruthy();
            expect(htmlElement.innerText).toEqual(message);

            expect(textBoxMessage).toBeTruthy();
            expect(textBoxMessage.value).toEqual(fullName);
        });

    });

});
