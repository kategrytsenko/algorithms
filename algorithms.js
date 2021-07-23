// Frequency counter pattern

// 1. Whether all the elements in the first array have
//  theirs square numbers in the second
function same (arr1, arr2) {
    // BAD (O(n^2)):
    // if (arr1.length === arr2.length) {
    //     const filteredArr = arr1.filter(item => arr2.includes(item*item));
    //     return filteredArr.length === arr1.length;
    // }
    // return false;

    //  GOOD (O(n)):
    if (arr1.length !== arr2.length) {
        return false;
    }
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let value of arr1) {
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    };
    for (let value of arr2) {
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    };
    for (let key in frequencyCounter1) {
        if (!(key*key in frequencyCounter2) 
        || frequencyCounter1[key] !== frequencyCounter2[key*key]) {
            return false;
        }
    }

    return true;
}


function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return false;
    }
    
    const drequencyCounter1 = {};
    const drequencyCounter2 = {};
    
    for (let val of str1) {
        drequencyCounter1[val] = (drequencyCounter1[val] || 0) + 1;
    }
      for (let val of str2) {
        drequencyCounter2[val] = (drequencyCounter2[val] || 0) + 1;
    }
    
    for (let key in drequencyCounter1) {
        if (!(key in drequencyCounter2) || drequencyCounter1[key] !== drequencyCounter2[key]) {
            return false;
        }
    }
    return true;
  }

  console.log(validAnagram('texttwisttime', 'timetwisttext'));
  console.log(validAnagram('sdsd', 'fsff'));