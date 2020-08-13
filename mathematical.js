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