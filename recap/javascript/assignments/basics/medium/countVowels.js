function countVowels(str){
    let count = 0
    arr = str.trim().toLowerCase().split('')
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
            count += 1
        }
    }
    return count;
}

const count = countVowels('Listen')
console.log('No of vowels present in string : ', count)

/*
Alternative Solution using arr.includes() method :

function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
*/