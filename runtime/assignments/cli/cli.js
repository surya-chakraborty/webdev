const fs = require('fs')
// const path = require('path')
// const prompt = require('prompt-sync')()
const { Command } = require('commander')

// const userInput = prompt("Enter the file name: ")
// const filePath = path.join(__dirname, userInput)
const program = new Command()

/* using basic fs knowledge 
fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err) {
        console.log("Error: ", err.message)
    }else{
        console.log(data)
        const words = data.trim().split(/\s+/) // covert data into array of words
        // let count = 0;
        // for(let i = 1; i <=data.length; i++){
        //     count+= 1
        // }
        console.log(`Output: You have ${words.length} words in this file.`)
    }
})
*/

// useing commander library

program
    .name('counter-cli')
    .description('Cli to fo file based word count')
    .version('0.8.0')

program.command('count')
    .description('Count the number of words in a specific file!')
    .argument('<file>', 'file to count')
    .action(function(file){
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err) {
                console.log("Error: ", err.message)
            }else{
                console.log(data)
                const words = data.trim().split(/\s+/)
                console.log(`Output: You have ${words.length} words in this file.`)
            }
        })

    })

program.command('count-lines')
    .description('Count the number of lines in a specific file!')
    .argument('<file>', 'file to count lines')
    .action(function(file){
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err) {
                console.log("Error: ", err.message)
            }else{
                console.log(data)
                const lines = data.split('\n')
                console.log(`Output: You have ${lines.length} lines in this file.`)
            }
        })

    })


program.parse()