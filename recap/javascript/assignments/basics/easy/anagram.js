// anagram : two strings made up of saeme alphabetes with same length and diffrent arrangment.

const str1 = ' Silent'
const str2 = 'listeN '

// function isAnagram(str1, str2){
//     str1 = str1.trim().toLowerCase()
//     str2 = str2.trim().toLowerCase()
//     console.log(str1, str2)
//     if(str1.length == str2.length){
//         for(let i = 0; i <= str1.length; i++){
//             if(str1[i] != str2[i]){
//                 console.log('not anagram')
//             }
//         }
//     }
// }

// Logic : we first rim down the leading spaces and convert into lower case,
// then split on no spaces in an array, sort them alphabatically and then join them back
// due to sorting both the string becomes same if anagram

function isAnagram(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    sortedStr1 = str1.trim().toLowerCase().split('').sort().join('')
    sortedStr2 = str2.trim().toLowerCase().split('').sort().join('')
    return sortedStr1 == sortedStr2
}
const ans = isAnagram(str1, str2)
console.log(ans)