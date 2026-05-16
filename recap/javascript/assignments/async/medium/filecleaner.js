const fs = require('fs')

let filePath = 'another.txt'
fs.readFile(filePath, 'utf-8', function(err, data){
    if(err){
        console.log('New error Ocurred: ', err)
        return
    }else{
        console.log(data)
        data = data.replace(/\s+/g, ' ').trim()
        console.log('Trimmed data: ', data)
        fs.writeFile(filePath, data, function(err){
            if(err){
                console.log('New error Ocurred: ', err)
                return
            }else{
                console.log('Data cleaned and written back to the file')
            }
        })
    }
})

