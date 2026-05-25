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
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
function logkeys(keyPressed) {
    console.log('Key Pressed: ', keyPressed);
}
logkeys(Direction.RIGHT);
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
})(ResponseStatus || (ResponseStatus = {}));
function getFirst(arr) {
    return arr[0];
}
const el = getFirst([1, 2, 3]);
const el2 = getFirst(['hey', 'hello', 'hi']);
console.log(el2.toUpperCase());
const displayUser = (user) => {
    console.log(`Name: ${user.firstName}, Email: ${user.email}`);
};
displayUser({
    firstName: 'Surya',
    email: 'surya@gmail.com'
});
function updateUser(updateProps) {
}
updateUser({});
const config = {
    endpoint: 'http://loclahost:300/exmaple',
    apiKey: '1dh922hd92q0nh'
};
const userDB = {
    'abc123': {
        id: 'abc123',
        name: 'Hon Koe'
    },
    'xyz345': {
        id: 'xyz345',
        name: 'Johny Doe'
    }
};
const userMap = new Map();
userMap.set('abc123', { id: 'abc123', name: 'Hon Koe' });
userMap.set('ycbet2647', { id: 'ycbet2647', name: 'some humanName' });
console.log(userMap.get('ycbet2647'));
const handleEvent = (event) => {
    console.log(`Handelling Event: ${event}`);
};
handleEvent('click');
