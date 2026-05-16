function calculateTime(n){
    // const startTime = Date.now()
    const startTime = performance.now()
    // main operation
    let sum = 0
    for(let i = 0; i <= n; i++){
        sum+= i
    }
    // const endTime = Date.now()
    const endTime = performance.now()
    console.log('Time taken to run the program: ', endTime - startTime)
}

calculateTime(100)

// performance.now() gives more accurate and precision fill results.