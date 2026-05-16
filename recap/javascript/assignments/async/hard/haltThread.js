console.log('hello')

function sleep(ms){
    return new Promise(function(resolve, reject){
        const start = performance.now()
        while(performance.now() - start < ms){
                // halts or blocks the thread
        }
        resolve()
    })
}
// even Date.now() works too
sleep(5000)

console.log('hey there')