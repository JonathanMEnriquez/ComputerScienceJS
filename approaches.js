/* Cool way of calculating sum of all numbers from 1 up to and including n.
Replaces something like:
    function addUpTo(n) {
        let total = 0;
        for (let i = 1; i <= n; i++) {
            total += i;
        }
        return total;
    }
*/

    function addUpTo(n) {
        return n * (n + 1) / 2;
    }

/* Handling sorted lists to find a particular value or set of values can 
utilize Multiple Pointer Pattern as an approach */

    // if altering the original array is allowed:
    function countUniqueValues(arr) {
        const len = arr.length;
        let w = 0;
        
        for (let r = 1; r < len; r++) {
        if (arr[w] !== arr[r]) {
            w++;
            arr[w] = arr[r];
        }
        }
        
        return w + 1;
    }

    // if it is not allowed
    function countUniqueFunctional(arr) {
        const len = arr.length;
        let w = 0;
        let total = 0;
        
        for (let r = 1; r < len; r++) {
        if (arr[w] !== arr[r]) {
            w = r;
            total += 1;
        }
        }
        
        return total + 1;
    }

/* Sliding Window pattern, slide the window where you only 
need to look at the newest and oldest values instead of running the entire
list - O(n) instead of O(n2) */

    function maxArraySum(arr, windowSize) {
        if (!windowSize || windowSize > arr.length) {
        return null;
        }
        
        let max = -Infinity;
        let temp = 0;
        
        for (let i = 0; i < windowSize; i++) {
        temp += arr[i];
        }
        
        max = temp;
        for (let j = windowSize; j < arr.length; j++) {
        temp = temp - arr[j - windowSize] + arr[j];
        max = Math.max(temp, max);
        }
        
        return max;
    }

/* Interesting way of checking for duplicates is by leveraging the Set() 
Replaces something like - 
    const obj = {};
  
    for (let en of args) {
        if (!obj[en]) {
            obj[en] = 1;
        } else {
            return false;
        }
    }
    
    return true;
*/
    function areDupes() {
        return new Set(arguments).size !== arguments.length;
    }

/* Memoized Fibonacci */

    function fibonacci(n,memo) {
        memo = memo || {};

        if (memo[n]) {
            return memo[n]
        }
        if (n <= 1) {
            return 1
        }
        return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    }

// SORTS

/* Bubble sort algo */

    function bubbleSort (arr) {
        let noSwaps = true;
        for (let i = arr.length - 1; i > 0; i++) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j+1]) {
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                    noSwaps = false;
                }
            }
            if (noSwaps) {
                break;
            }
        }
        
        return arr;
    }

/* Selection sort algo */

    function selectionSort(arr) {
        const len = arr.length;

        for (let i = 0; i < len; i++) {
            let min = i;
            
            for (let j = i+1; j < len; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            
            if (i !== min) {
                // swap
                [arr[i], arr[min]] = [arr[min], arr[i]];
            }
        }

        return arr;
    }

/* Insertion Sort */

    function insertionSort(arr) {
        const len = arr.length;
        let j = null;
        for (let i = 1; i < len; i++) {
            const currVal = arr[i];
            
            for (j = i-1; j >= 0; j--) {
                if (arr[j] > currVal) {
                    arr[j+1] = arr[j];
                } else {
                    break;
                }
            }
            
            arr[j+1] = currVal;
        }
        
        console.log(arr);
    }

/* Merge Sort 
    Big O -  */

    function merge(arr1, arr2) {
        const first = arr1.length >= arr2.length ? arr1 : arr2;
        const last = arr1.length >= arr2.length ? arr2 : arr1;
        let i = 0,
            j = 0;
        const merged = [];
        
        while (j < last.length) {
          if (first[i] < last[j]) {
            merged.push(first[i]);
            i++;
          } else {
            merged.push(last[j]);
            j++;
          }
        }
        
        if (first.length !== last.length) {
          while (i < first.length) {
            merged.push(first[i]);
            i++;
          }
        }
        
        return merged;
      }
      
    function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }
        
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }