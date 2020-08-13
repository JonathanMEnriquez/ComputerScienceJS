/* count the cutters
ex. 12354 = 1 cut 
(more than 2 cuts by one person and 'too chaotic' is returned)
O(n) */

function minimumBribes(arr) {
    const len = arr.length;
    let min = len;
    let bribes = 0;

    for (let i = len - 1; i >= 0; i--) {
        const val = arr[i];
        const expected = i + 1;
        if (val - expected > 3) {
            return 'Too chaotic';
        }

        if (val > expected) {
            bribes += (val - expected);
        } else {
            if (min > expected) {
                min = val;
            } else {
                bribes += 1;
            }
        }
    }

    return bribes;
}

/* Find shortest compressed string when removing K chars from it
    ex. 'AAABBBBAA 2' -> 4 (A2B2 removing last 2) 
*/

const calculateLengths = (arr) => {
    return arr.reduce((acc, sub) => sub.length > 1 ? acc + 2 : acc + sub.length, 0);
  }
  
const prependToArr = (arr, val) => {
    return [val, ...arr];
}
  
const compress = (str) => {
    const arr = [];
    const len = str.length;
    let i = 0;
    let j = 1;
    
    while (i < len) {
      let subArr = [str[i]];
      
      while (str[i] === str[j]) {
        subArr.push(str[i]);
        j++;
      }
      
      arr.push(subArr);
      i = j;
      j++;
    }
    
    return arr;
}

function shortestCompressedStr(str, k) {
    let arr = compress(str);
    let shortest = calculateLengths(arr);
    let i = 0;

    while (k < str.length) {
        // check first element in first array and see if same char
        // if yes leave it alone
        // if not push new arr to front and pop an el from second arr

        if (str[i] !== str[k]) {
            let newEntry = [str[i]];
            if (arr[0].length < 2) {
                arr[0] = newEntry;
            } else {
                arr[0].pop();
                prependToArr(arr);
            }

            shortest = Math.min(shortest, calculateLengths(arr));
        }

        i++;
        k++;
    }
}
  
const testy = compress('AABAAAA');