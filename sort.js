Array.prototype.swap = function (i , j) {
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
}

Array.prototype.pop = function (index) {
    var array = this;
    var result;
    var i = (index + 1 || array.length);
    result = array[i - 1];
    array.splice(i - 1, 1);
    return result;
}

Array.prototype.Sort = function () {

    function findMaxIndex(a) {
        var max = 0;
        var maxIndex = 0;
        for(var i in a) {
            if (max < a[i]) {
                max = a[i];
                maxIndex = i;
            }
        }
        return maxIndex;
    }

    function Sort (a) {
        var maxIndex;
        var len = a.length;
        var lenIndex;
        if(len > 1) {
            for(var i = 0; i < len; i++) {
                lenIndex = len - i - 1;
                if(lenIndex > 0) {
                    maxIndex = findMaxIndex(a.slice(0, lenIndex + 1));
                    a.swap(maxIndex, lenIndex);
                }
            }
        }
    }

    Sort(this);
    return this;
};

// reference: https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-3.php
Array.prototype.heapSort = function () {
    function heap_root(input, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;
    
        if (left < array_length && input[left] > input[max]) {
            max = left;
        }
    
        if (right < array_length && input[right] > input[max])     {
            max = right;
        }
    
        if (max != i) {
            input.swap( i, max);
            heap_root(input, max);
        }
    }

    function heapSort(input) {
    
        array_length = input.length;
    
        for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
            heap_root(input, i);
          }
    
        for (i = input.length - 1; i > 0; i--) {
            input.swap(0, i);
            array_length--;
          
          
            heap_root(input, 0);
        }
    }

    heapSort(this);
    return this;
}

//reference: https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/
Array.prototype.quickSort = function () {

    function partition (a, left, right) {
        var pivot = a[Math.floor((left + right) / 2)];
        while(left <= right) {
            while(a[left] < pivot){
                left++;
            }

            while(a[right] > pivot){
                right--;
            }

            if(left <= right) {
                a.swap(left , right);
                left++;
                right--;
            }
        }

        return left;        
    }

    function quickSort (a, left, right) {
        var index;
        if(a.length > 1) {
            index = partition(a, left, right);
            if(left < index - 1) {
                quickSort(a, left, index - 1);
            }
            if(right > index) {
                quickSort(a, index, right);
            }
        }
    }

    quickSort(this, 0, this.length - 1);
    return this;
}

// reference: https://hackermoon.com/programming-with-js-merge-sort-deb677b777c0
Array.prototype.mergeSort = function () {
    
    var array = mergeSort(this);

    function mergeSort (a) {
        var len = a.length;

        if(len === 1) {
            return a;
        }

        var middle = Math.floor(len / 2);
        var leftSlice = a.slice(0, middle);
        var rightSlice = a.slice(middle);
        return merge(mergeSort(leftSlice),mergeSort(rightSlice));
    }

    function merge (left, right) {
        var result = [];
        
        while(left.length && right.length) {
            if(left[0] < right[0]) {
                result.push(left.pop(0));
            } else {
                result.push(right.pop(0));
            }
        }

        return result.concat(left).concat(right);
    }

    return array;
}

var array = [32,76,3,67,88,33,1,53,7,4,8,21];
var heapSort = array.heapSort();
var array = [32,76,3,67,88,33,1,53,7,4,8,21];
var quickSort = array.quickSort();
var array = [32,76,3,67,88,33,1,53,7,4,8,21];
var mergeSort = array.mergeSort();

console.log("unsorted   : " + array);
console.log("heap Sort  : " + heapSort);
console.log("quick Sort : " + quickSort);
console.log("merge Sort : " + mergeSort);

console.log("heap Sort reverse  : " + heapSort.reverse());
console.log("quick Sort reverse : " + quickSort.reverse());
console.log("merge Sort reverse : " + mergeSort.reverse());
