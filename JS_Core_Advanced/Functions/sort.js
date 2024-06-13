function bubbleSort(arr) {
    const length = arr.length;
    
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    
    return arr;
  }

console.log(bubbleSort([5, 2, 8, 1, 9])); // Output: [1, 2, 5, 8, 9]
console.log(bubbleSort([10, 5, 2, 3, 1])); // Output: [1, 2, 3, 5, 10]
console.log(bubbleSort([])); // Output: []