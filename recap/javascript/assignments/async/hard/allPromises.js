/*
Probelm statement :
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js

 and 

 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.

*/



function wait1(t) {
    return new Promise(resolve => {
        setTimeout(resolve, t)
    })
}

function wait2(t) {
    return new Promise(resolve => {
        setTimeout(resolve, t)
    })

}

function wait3(t) {
    return new Promise(resolve => {
        setTimeout(resolve, t)
    })

}

function calculateTime(t1, t2, t3) {
    
    const start = Date.now()
        Promise.all([wait1(t1), wait2(t2), wait3(t3)])
        .then(function(){
            const end = Date.now()
            console.log( 'Primise.all time: ', end - start)
        })

}


function calculateTimeSeq(t1, t2, t3) {
    
    const start = Date.now()
    wait1(t1).then(function(){
        wait2(t2).then(function(){
            wait3(t3).then(function(){
                const end = Date.now()
                console.log('Sequential time : ', end - start)

            })           
        })
    })

}

calculateTime(5000, 4000, 2000) // value will be almost close to the biggest timeout time as all works parallely
calculateTimeSeq(5000, 4000, 2000) // value will be sum of all timeouts time as all works one after one sequentially
