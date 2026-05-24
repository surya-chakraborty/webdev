"use strict";
let x = 1;
console.log(x);
const greeting = (firstName) => {
    console.log(`Hello ${firstName}`);
};
greeting('Surya');
const sum = (a, b) => {
    return a + b;
};
console.log(sum(2, 8));
function canVote(userDetails) {
    if (userDetails.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
const user = {
    firstName: 'Surya',
    lastName: 'Chakraborty',
    email: 'surya@gmail.com',
    age: 19,
};
const response = canVote(user);
console.log(response);
const delay = (fnc) => {
    setTimeout(fnc, 1000);
};
delay(function log() {
    console.log('Hello World');
});
function printId(id) {
    console.log(`ID: ${id}`);
}
printId('105d8dj37');
printId(202);
const teamLead = {
    name: 'Surya',
    department: 'Design Engineer',
    startDate: new Date()
};
const maxElem = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};
console.log('max element in array is: ', maxElem([5, 12, 24, 32, 26, 29]));
const findVoter = (users) => {
    return users.filter(x => x.age >= 18);
};
const result = findVoter([
    {
        firstName: 'Surya',
        lastName: 'Chakraborty',
        age: 19,
        email: 'surya@gmail.com'
    }, {
        firstName: 'John',
        lastName: 'Doe',
        age: 15,
        email: 'john@gmail.com'
    }
]);
console.log(result);
var Direction;
(function (Direction) {
    Direction["UP"] = "heleulu";
    Direction["DOWN"] = "Down";
    Direction["LEFT"] = "Left";
    Direction["RIGHT"] = "wtf";
})(Direction || (Direction = {}));
function logkeys(keyPressed) {
    console.log('Key Pressed', keyPressed);
}
logkeys(Direction.RIGHT);
