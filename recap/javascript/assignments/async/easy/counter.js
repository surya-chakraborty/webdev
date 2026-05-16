// So basically we are bulding a counter that prints the count in every second and increase it 
// using setInterval

let counter = 0
function increaseAndPrint(){
    console.log(counter)
    counter ++
}

setInterval(increaseAndPrint, 1000)