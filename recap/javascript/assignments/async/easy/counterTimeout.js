// Now, we have to build a counter but rather using seTimeout

// setTimeout(function(){
//     console.log('something')
// }, 1000)
// setTimeout(function(){
//     console.log('anything')
// }, 3000)

let count = 0
function increaseAndPrint(){
    console.log(count)
    count++
    setTimeout(increaseAndPrint, 1000)
}

setTimeout(increaseAndPrint, 1000)

// so to use SetTimeout instead of setInterval we need to use recursion,
// every setTImeout will call the next one within the function and will
// print and update counter value before that
