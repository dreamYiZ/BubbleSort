const unSortedArray = [3, 4, 5, 6, 1, 33, 22, 15, 16, 1, 8, 88, 53]

for (let i = 0; i < unSortedArray.length; i++) {
    for (let j = 0; j < unSortedArray.length - i; j++) {
        if (unSortedArray[j] > unSortedArray[j + 1]) {
            let swap = unSortedArray[j];
            unSortedArray[j] = unSortedArray[j + 1];
            unSortedArray[j+1] = swap;
        }

    }
}

console.log('sortedArray: ', unSortedArray);