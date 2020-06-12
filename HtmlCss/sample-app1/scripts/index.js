"use strict";

function sayHello(name) {
    const methodName = 'sayHello()';

    logMethodStarting(methodName);

    console.log(`Hello ${name}. \n${message}`);

    methodOne();

    methodTwo();

    showDataTypeBehaviour();

    console.log('Ending sayHello Method()');

    logMethodEnding(methodName);
}

function methodOne() {
    const methodName = 'methodOne()';

    logMethodStarting(methodName);

    console.log(message);

    logMethodEnding(methodName);
}

function methodTwo() {
    const methodName = 'methodTwo()';

    logMethodStarting(methodName);

    console.log(`Before: ${message}`); // Variable Hoisting. This variable will be "undefined"
    var message = "I am declared in methodTwo() method."
    console.log(`After: ${message}`);

    logMethodEnding(methodName);
}

/*
    Variable Hoisting: A variable declare later may be referenced without an exception being thrown.
                       The variables are lifted or hoisted to the top of the statement or function.
*/
var message = "I am a global variable."

function showDataTypeBehaviour() {
    let anArray = [];
    let aNumber = null;
    const methodName = 'showDataTypeBehaviour()';

    logMethodStarting(methodName);

    // Undefined in Boolean Context
    console.log(`Array[0]: ${anArray[0]}`);
    if (!anArray[0]) {
        console.log(`An "${anArray[0]}" value in a Boolean context === "false".`);
    }

    // Undefined in Numeric Context
    let sum = anArray[0] + 100;
    console.log(`An "${anArray[0]}" value in a Numeric context === "${sum}".`);

    // null in Boolean Context
    if (!aNumber) {
        console.log(`An "${aNumber}" value in a Boolean context === .`);
    }

    // null in Numeric Context
    sum = aNumber + 100;
    console.log(`An "${aNumber}" value in a Numeric context === "ZERO"; [sum = aNumber + 100; === "${sum}"].`);

    logMethodEnding(methodName);
}


