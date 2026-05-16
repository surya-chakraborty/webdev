// const date = new Date()
// console.log(date.toLocaleTimeString())

// let startTime = date.toLocaleTimeString()
function printandIncreament(){
    // console.log(count)
    // console.log(startTime)
    const date = new Date()
    console.log(date.toLocaleTimeString('en-GB'))
}

/* formats according to the question 
en-GB : HH:MM:SS (24-hour)
en-US : HH:MM:SS AM/PM
*/
setInterval(printandIncreament, 1000)


// setTimeout version :

// function printandIncreament(){
//     // console.log(count)
//     // console.log(startTime)
//     const date = new Date()
//     console.log(date.toLocaleTimeString('en-GB'))
//     setTimeout(printandIncreament, 1000)
// }
// setTimeout(printandIncreament, 1000)