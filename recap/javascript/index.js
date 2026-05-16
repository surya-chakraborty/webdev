let color = "Blue"
const height = 196
let likePIzza = false

function sumOfTwo(a, b){
    return a + b
}

const res = sumOfTwo(5, '6')
const response = sumOfTwo(5, 6)
console.log(res, response)

function canVote (age) {
    return age >= 18
}

if(canVote(15) == false){
    console.log("user can't vote")
}else{
    console.log("user can vote")
}

const num = 5
if(num % 2 == 0){
    console.log(`${num} is even`)
}else{
    console.log(`${num} is odd`)
}

let j = 8;
let sum = 0;
while(j >= 0){
    sum += j
    j--
}
console.log(`Sum ${sum}`)


let user = {
    userName: 'Surya Chakraborty',
    userAge: 19,
    gender: 'male'
}

let userLoves = {
    userName: 'Adrija Pal',
    userAge: 19,
    gender: 'female'
}

function greet(obj){
    if(obj.gender == 'male'){
        console.log(`Welcome Back, Mr. ${obj.userName}`)
    }else{
        console.log(`Welcome Back, Mrs. ${obj.userName}`)
    }
}

function canUSerVote(obj){
    if(obj.userAge >= 18){
        console.log(`Hey ${obj.userName}, you can vote!`)
    }else{
        console.log(`Sorry ${obj.userName}, you can't vote!`)
    }
}

greet(user)
canUSerVote(user)
greet(userLoves)
canUSerVote(userLoves)


// let persons = ['surya', 'sukrit', 'pankaj', 'harkirat', 'raman', 'kairvee', 'shradha', 'aman']
let nums = [2, 5, 8, 61, 23, 42]
let arr = []
let k = 0
for(let i = 0; i <= nums.length; i++){
    if(nums[i] % 2 == 0){
        arr[k] = nums[i]
        k++
    }
}
console.log(arr)

// nums.filter((x) => x % 2 == 0)
// console.log(nums)
