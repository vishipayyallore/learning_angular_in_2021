"use strict";

//FizzBuzz.test.ts
/// <reference types="jest" />

import * as Greeter from "../src/greeter";

describe('Main Test for Greeter', () => {

    describe('When Greeter class is called ', () => {

        test('First Test', () => {
            let user = new Greeter.Student("Shiva", "Sai");
            let results = Greeter.greeter(user);

            expect(results).toEqual('Hello Shiva Sai');
        });

    });

});


