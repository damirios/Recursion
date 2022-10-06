function sumRange(n) {
    if (n == 1) {
      return n;
    }
  
    return n + sumRange(n - 1);
  }
  
  function power(x, n) { // returns x^n
    if (n == 1) {
      return x;
    }
  
    return x * power(x, n - 1);
  }
  
  function factorial(n) {
    if (n == 1) {
      return n;
    }
    
    return n * factorial(n - 1);
  }
  
  function all(arr, callback) {
    const elem = arr.pop();
  
    if ( !callback(elem) ) {
      return false;
    }
  
    all(arr, callback);
    return true;
  }
  
  function productOfArray(arrOfNumbers) {
    const copyArray = arrOfNumbers.slice();
  
    if (arrOfNumbers.length == 0) {
      return 1;
    }
  
    const number = copyArray.pop();
    return productOfArray(copyArray) * number;
  }
  
  function contains(obj, value) {
    const objValues = Object.values(obj);
    
    for (let objValue of objValues) {
      if (objValue === value) {
        return true;
      }
  
      if ( typeof objValue === 'object' ) {
        return contains(objValue, value);
      }
    }
    return false;
  }
  
  var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
  }
  
  function totalIntegers(arr) {
    return arr.reduce( (prev, current) => {
      if ( Array.isArray(current) && current.length > 0 ) {
        return prev + totalIntegers(current);
      } else if ( Number.isInteger(current) ) {
        return prev + 1;
      }
      return prev;
    }, 0);
  }
  
  var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
  
  function sumSquares(arr) {
    let currentArraySum = 0;
    for (let number of arr) {
      if ( Array.isArray(number) ) {
        currentArraySum += sumSquares(number);
      } else {
        currentArraySum += number * number;
      }
    }
    return currentArraySum;
  }
  
  l = [10,[[10],10],[10]];
  
  function replicate(repetitionNumber, number) {
    if (repetitionNumber <= 0) {
      return [];
    }
  
    return [number].concat(replicate(repetitionNumber - 1, number));
  }
  console.log(replicate(3, 5)) // [5, 5, 5]