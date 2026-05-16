// read from a file and print in console.

const fs = require('fs')

fs.readFile('example.txt', 'utf-8', function(err, data){
    if(err) throw new Err
    else {
        data = data.trim()
        console.log(data)
    }
})

content = 'Hey new file written'
fs.writeFile('another.txt', content, function(err){
    if(err) throw new err
    console.log('Written to the file succefully.')
})

function expensiveOperation(){
    let sum = 0
    for(let i = 0; i < 10000000000000000000000; i++){
        sum += i;
    }
    console.log('Value of sum: ', sum) 
}

expensiveOperation()