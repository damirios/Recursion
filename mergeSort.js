function mergeSort(arr) {
    const n = arr.length;

    if (n < 2) {
        return arr;
    }

    let leftHalf = arr.slice(0, Math.ceil(n / 2));
    let rightHalf = arr.slice(Math.ceil(n / 2));

    if (leftHalf.length > 1) {
        leftHalf = mergeSort(leftHalf);
    }

    if (rightHalf.length > 1) {
        rightHalf = mergeSort(rightHalf);
    }

    // Merging of two halfs
    const sortedArray = [];

    for (let i = 0; i < arr.length; i++) {
        const leftElement = leftHalf[0];
        const rightElement = rightHalf[0];
        if (rightElement === undefined || leftElement < rightElement) {
            leftHalf.shift();
            sortedArray.push(leftElement);
        } else if (leftElement === undefined || rightElement < leftElement) {
            rightHalf.shift();
            sortedArray.push(rightElement);
        }
        // console.log('i = ' + i);
        // console.log('middle sorted array: ', sortedArray);
    }
    // console.log('sorted array: ', sortedArray);
    return sortedArray;
}

mergeSort([366, 279, 284, 103, 944, 144, 900, 649, 500]);
