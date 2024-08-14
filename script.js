function getSum(nums) {
    let sum = 0;
    nums.forEach(num => {
        sum += num;
    });

    console.log(sum);
}

nums = [1,2,3,4,5];
getSum(nums);