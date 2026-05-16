const { error } = require('console')
const fs = require('fs')

const content = fs.readFileSync('example.txt', 'utf-8')
console.log(content)

const newContent = fs.readFileSync('new.txt', 'utf-8')
console.log(newContent)
// fs.readFile('new.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }

// })

function afterDelay(){
    console.log("hey, it takes some time to execute")
}
setTimeout(afterDelay, 2000)
console.log("This prolly executes immediately.")

// Classes in Javascript 

class Rectangle {
    constructor(l, b, color){
        this.l = l
        this.b = b
        this.color = color
    }

    area(){
        return this.l * this.b
    }

    paint(){
        console.log(`Coloring using ${this.color}`)
    }
}

const rect = new Rectangle(5, 4, 'blue')
console.log(rect.area())

class Shape {
    constructor(color){
        this,color = color
    }
    paint(){
        console.log(`Coloring using ${this.color}`)
    }

    area(){
        throw new Error("This medthod must be implemented in the subclass itself")
    }

    getDesciption(){
        console.log(`A shape with color ${this.color}`)
    }
}

class Circle extends Shape{
    constructor(radius, color){
        super(color)
        this.radius = radius
    }
    area(){
        return Math.PI * this.radius * this.radius
    }
    getDesciption(){
        console.log(`A Circle with color ${this.color} and radius ${this.radius}`)
    }
}

const circle = new Circle(5, "red")
console.log(circle.area())
console.log(circle.getDesciption())
console.log(circle.paint())

// Built in useful classes - math, date, map
const now = new Date()
console.log(now.getDate())

const map = new Map()
map.set('name', 'john')
map.set('surname', 'doe')
map.set('age', 30)
console.log(map.get('name'))
// console.log(map.get()) - undefined


// promosified setimeout 
function setTimeoutPromisified(ms){
    return new Promise( resolve => setTimeout(resolve, ms))
}

function callback(){
    console.log('Logged the value in console after some delay')
}
// easier syntax in comparison to setTimeOut(callback, ms)
setTimeoutPromisified(2000).then(callback)

// Callback Hell
setTimeout(function(){
    console.log('hi')
    setTimeout(function(){
        console.log('hello')
        setTimeout(function(){
            console.log('hi there')
        }, 5000)
    }, 3000)
}, 1000)+

// Promisified version without callback hell
setTimeoutPromisified(1000).then(function(){
    console.log('hi')
    return setTimeoutPromisified(3000)
}).then(function(){
    console.log('hello')
    return setTimeoutPromisified(5000)
}).then(function(){
    console.log('hi there')
})

// Async await version - syntactical sugar on top of promises 
async function solve(){
    await setTimeoutPromisified(1000)
    console.log('hi')
    await setTimeoutPromisified(3000)
    console.log('hello')
    await setTimeoutPromisified(5000)
    console.log('hi there')
}

solve()

// Assignemnt : callback vs promisified async await version of same question : read a 
// file content trim down trailing spaces and write back to the file 

// function cleanFile(filePath, cb){

//     fs.readFile(filePath, 'utf-8', function(err, data){
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data)
//             data = data.trim()
//             fs.writeFile(filePath, data, function(err){
//                 if(err){
//                     console.log(err)
//                 }else{
//                     cb()
//                 }
//             })
//         }
//     })
// }

// function cb(){
//     console.log('file trimmed down')
// }

// cleanFile('example.txt', cb)
// // Promisified way 

function cleanFiles(filePath){
    return new Promise(function(resolve){
        fs.readFile(filePath, 'utf-8', function(err, data){
            if(err){
                console.log(err)
            }else{
                console.log(data)
                data = data.trim()
                fs.writeFile(filePath, data, function(err){
                    if(err){
                        console.log(err)
                    }else{
                        resolve()
                    }
                })
            }
    })
    })
}
async function main(){
    await cleanFiles('example.txt')
    console.log('Done cleaning file')
}

main()

// fs.readFile promisified 

function readFilePromisified(filePath){
    return new Promise(function(resolve, reject){
        fs.readFile(filePath, 'utf-8', function(err, data){
            if(err){
                reject('Error while reading file')
            }else{
                resolve(data)
            }
        })
    }) 
}

function onResolve(data){
    console.log(data)
}

function onReject(err){
    console.log("Error: ", err)
}

readFilePromisified('new.txt').then(onResolve).catch(onReject)

// Promisified version - setTimeout, fetch, fs.readFile
