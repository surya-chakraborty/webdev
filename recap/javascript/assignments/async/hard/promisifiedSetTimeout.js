function wait(n){
    return new Promise(function(resolve, reject){
        setTimeout(resolve, n)
    })
}

wait(5000).then(function(){
    console.log('Printed after resolve')
})