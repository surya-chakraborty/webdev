/*
function palindrome(str){
    const n = str.length
    str = str.trim().toLowerCase().split('')
    for(let i = 0; i <= n/2; i++){
        if(str[i] != str[n-i]){
            return false
        }
    }
    return true
}
*/
function palindrome(str){
    let lowercase = str.trim().toLowerCase()
    let filteredStr = lowercase.split('').filter((c) => (c !== '?' && c !== ' ' && c !== '!' && c !== '.' && c !== ',')).join('')
    // console.log(filteredStr)
    let reversedStr = filteredStr.split('').reverse().join('')
    // console.log(reversedStr)
    return filteredStr == reversedStr
}

console.log(palindrome('madam'))

/*
array.filter((element, index, array) => {
  return condition; // true → keep, false → discard
});
Filter method loops through each elem of array and builds a new array where the codition is true otherwise discards that elem
*/