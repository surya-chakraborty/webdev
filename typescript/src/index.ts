/*
Types of language based on ability to handle types and strinctness : strongly vs loosly typed language
What's typescript : it's a syntactical superset on js and a strongly typed language developed and maintained by microsoft
Can it run on browser ? no js serves on node process or even in browser 
compiler to compile ts to js are : tsc, esbuild, swc

npm install -g typescript
npm init -y -> package.json
npx tsc --init -> tsconfig.json
tsc -b -> buld js file
serve the js file, errors if wrong code while bulding js file from ts using tsc compiler 

basic types in typescript: number, string, boolean, null, undefined
Type Inference : when ts assigna return type or basically types to variables itself based on it's explicit given value without any defination

tsconfig.json hacks : rootDir: ./src, outDir: ./dist, noImplicitAny: true, removeComments: true

How to assign types to muloti key-valued objects ? Interfaces
types are kinda the same as inyerfaces, what are the diffrences then ?
> types can be used for primitive vlues but interfaces can be used for only objects and extending classes.
> intersection of multiple interfaces or one interface and one type ina single type is possible.

enums are collection of constant keywords indefault on runtime values as 0,1,2, and so on
the values can be chnaged to any number and strings, useful in status codes or roles in backend applications

Generics are language-independent concepts (also used in C++, Java, etc.) that allow writing reusable and 
type-safe code where the type is decided later, used in function, classes, react useSatte varibales, types and interfaces etc.

exporting and importing are same asb  ES6 modules javascript 
constant/named exports : mutiple exports ina single file
export function name (){
}
import { name } from './file'

deafult exxports: one single default export per file
export deafult function name(){
}
import  name from './file'
*/

let x:number = 1
console.log(x)

const greeting = (firstName: string) => {
    console.log(`Hello ${firstName}`)
}

greeting('Surya')

const sum = (a: number, b: number) : number => {
    return a+b
}
console.log(sum(2, 8))

function canVote(userDetails: User): boolean{
    if(userDetails.age >= 18){
        return true
    }else {
        return false
    }
}

// const res = canVote(15)
// console.log(res)

//  In interfaces order doesn't matter for key-value pair, but casing and naming does.
//  you may or may not use any of the ; or , even without these, code works too
interface User {
    firstName: string,
    lastName: string,
    age: number,
    email: string
}

const user = {
    firstName: 'Surya',
    lastName: 'Chakraborty',
    email: 'surya@gmail.com',
    age: 19,
}

const response = canVote(user)
console.log(response)

const delay = (fnc: () => void) => {
    setTimeout(fnc, 1000)
}

delay(function log(){
    console.log('Hello World')
})

// interfaces as class 

interface Person {
    name: string
    age: number
    greet(phrase: string): void
}

// class Employee implements Person{
//     name: string;
//     age: number;

//     constructor(n: string, a: number){
//         this.name = n;
//         this.age = a;
//     }

//     greet(phrase: string){
//         console.log(`${phrase} ${this.name}`)
//     }
// }

// Types are same as interfaces with some extra powers: union and intersections
// they lets u aggregate data same as interfaces

type UserDetails = {
    name: string,
    lastName: string,
    age: number,
    email: string
}

// unions
type UserId = string | number
function printId(id: UserId){
    console.log(`ID: ${id}`)
}
printId('105d8dj37')
printId(202)

// intersection : inherit property from multiple type or interface defination
type Employee = {
    name: string,
    startDate: Date,
}

type Manager = {
    name: string,
    department: string
}

type TeamLead = Employee & Manager

const teamLead: TeamLead = {
    name: 'Surya',
    department: 'Design Engineer',
    startDate: new Date()
}

// array of numbers
const maxElem = (arr: number[]): number => {
    let max: number = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max
}

// const arr: number[] = [5, 12, 24, 32, 26, 29]

console.log('max element in array is: ', maxElem([5, 12, 24, 32, 26, 29]))

// array of objects that are aggregated in interaface, so interface[]
const findVoter = (users: User[]) => {
    return users.filter(x => x.age >= 18)
}

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
])

console.log(result)

// enums: let's con sider a game where the keyPressed options passed to a functions 
// are Up, down, right or left, so what should we keep the type of keyPressed, unions of strings Up, down, left, right
// Here enums constant keywords collection comes in place 

enum Direction{
    UP,
    DOWN,
    LEFT,
    RIGHT
}


function logkeys (keyPressed: Direction){
    console.log('Key Pressed: ', keyPressed)
}

logkeys(Direction.RIGHT)

/*
on runtime the valuees in a enum are 0, 1, 2, 3, 4 and so on
 we can chnage the starting number or even put it as a string too
try changing the enum defination from the follwing 
enum Direction{
    UP = 2,
    DOWN,
    LEFT,
    RIGHT
}
// or
enum Direction{
    UP = 'heleulu',
    DOWN = "Down",
    LEFT = 'Left',
    RIGHT = 'wtf'
}

what's there practical use ? status codes in express typescript application
*/

enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500,
}

// app.get('/', (req, res) => {
//     if(!req.query.userId){
//         res.status(ResponseStatus.Error).json({
//             message: 'error nOccured, incorrect creds!'
//         })
//     }

//     res.status(ResponseStatus.Success).json({
//         message: 'Signed Up Successfully'
//     })
// })


/*
Why generics ? 
Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
How would you solve this problem?


function getFirst(arr: (number | string)[]){
    return arr[0]
}

const el = getFirst([1, 2, 3])
console.log(el.toUpperCase()) // we can't use it casue ts can't infer the right type of return 
// another probelm is that we can even pass on [1, 5, "8"] , muti typed values, which isn't great for a user facing application

Generics solves the problem: Generics enable you to create components that work with any data type while still providing compile-time type safety.
*/

function getFirst<T>(arr: T[]){
    return arr[0]
}

// check the return types hovering on thne fnc name on the 2 follwing lines
const el = getFirst<number>([1, 2, 3])
const el2 = getFirst<string>(['hey', 'hello', 'hi'])
console.log(el2.toUpperCase())
