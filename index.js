const functionObj = {
    addFunction: (x, n) => x + n,

    subtractFunction: (x, n) => x - n,

    multiplyFunction: (x, n) => x * n,

    divideFunction: (x, n) => x / n,

    someJsonResponse: [
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
    ],

    formValueSender: (obj) => {
        return {
            isLoggedIn: obj.validated ? true : false,
        }
    }
}

module.exports = functionObj;