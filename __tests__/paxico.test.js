const functionObj = require('../index');

describe("Some paxico tests", () => {
    // 1: 

    test("it should add x and n", () => {
        expect(functionObj.addFunction(1, 1)).toBe(2);
    });
    test("it should multiply x and n", () => {
        expect(functionObj.multiplyFunction(2, 2)).toBe(4);
    });
    test("it should subtract x and n", () => {
        expect(functionObj.subtractFunction(2, 1)).toBe(1);
    });
    test("it should divide x and n", () => {
        expect(functionObj.divideFunction(2, 2)).toBe(1);
    });

    // 2:

    test("it should test value and type of some json response", () => {
        expect(functionObj.someJsonResponse).toEqual([
            {
                id: 1,
                first_name: "Robert",
                last_name: "Schwartz",
                email: "rob23@gmail.com"
            },
            {
                id: 2,
                first_name: "Lucy",
                last_name: "Ballmer",
                email: "lucyb56@gmail.com"
            }
        ]);
    });
    // 3


    // tests are written to ensure that a function continues to produce what was written to execute, 
    // even after changing a nested function or a parent function.

    // if it is necessary to test a login form, 
    // the ideal would be to use async test with the function that sends the data to API to validate the possible returns.

    // is also an option, remount the component with the enzyme technologie, 
    // to simulate a change event in the input and validate the value with the state variable 
    // that receives that value and is consumed by the function it sends to API.

    // something like:
    // OBS: that is a mocked return

    test("it should return logged true if that user exists in DB", () => {
        expect(functionObj.formValueSender({ 'validated': true })).toEqual({ 'isLoggedIn': true });
    });

    // where formValueSender function prop, is the component state variable was changed by input change event
    // and the response ({ 'isLoggedIn': true }) is a mocked response.

    test("it should return logged false if that user don't exists in DB", () => {
        expect(functionObj.formValueSender({ 'validated': false })).toEqual({ 'isLoggedIn': false });
    });
});