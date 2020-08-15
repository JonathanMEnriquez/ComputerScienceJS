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

class Compressor {
    constructor() {
      this.data = [];
      this.size = 0;
    }
    
    compress(str) {
      this.size = str.length;
      let currChar = null;
      let temp = [];
      
      for (let i = 0; i < str.length; i++) {
        if (str[i] !== currChar) {
          if (temp.length) {
            this.data.push(temp);
            temp = [];
          }
          
          currChar = str[i];
        }
        
        temp.push(currChar);
      }
    }
    
    stringify() {
      return this.data.reduce((acc, arr) => {
      console.log(acc, arr);
        return acc + (arr.length > 1 ? arr[0].concat(arr.length) : arr[0]);
      }, '');
    }
    
    traverse(idx) {
      if (this.size < idx) {
        return null;
      }
      
      let count = -1;
      for (let i = 0; i < this.data.length; i++) {
        
      }
    }
  }
  
  function bestCompress(str) {
    const compressor = new Compressor();
    compressor.compress(str);
    console.log(compressor);
    console.log(compressor.stringify());
  }
  
  bestCompress('AAABBAAAABBA');
  