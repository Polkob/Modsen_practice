function sum(arr) {

    if (arr.length === 0) {
        return 0;
    }

    let sum = 0;
    for(let i=0; i < (arr.length/2); i++){
        sum += arr[i];
    }

    return sum;
}

first_arr = [1, 2, 3, 4, 5, 6, 7];
second_arr = [2, 4, 5, 0, 5, 3];
third_arr = [];
console.log(sum(first_arr));
console.log(sum(second_arr));
console.log(sum(third_arr));
