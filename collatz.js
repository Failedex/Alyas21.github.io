function collatz(num) {
    
    let nums = [];
    while (num != 1) {
        if (num % 2 == 0) {
            num /= 2;
            nums.push(num);
        }
        else {
            num *= 3;
            num += 1;
            nums.push(num);
        }
    } 
    return nums;
}