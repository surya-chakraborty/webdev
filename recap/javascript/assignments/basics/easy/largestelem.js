function largestElem(nums){
    let max = 0
    for(let i = 1; i <= nums.length; i++){
        if(nums[i] > nums[max]){
            max = i
        }
    }
    return nums[max]
}

const ans = largestElem([7, 5, 24, 12, 2, 6, 56])
console.log('Largest element in array: ', ans)