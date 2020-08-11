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
utilize multiple pointers as an approach */

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