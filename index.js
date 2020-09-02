function printString(str) {
    console.log(str[0]);
    if (str.length > 1) {
        printString(str.substring(1, str.length));
    }
    else {
        return;
    }
}

function reverseString(str) {
    return str.length > 1 ? reverseString(str.substring(1, str.length)) + str[0] : str;
}

function isPalindrome(str) {
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    else if (str.length < 2) {
        return true;
    }
    else {
        return isPalindrome(str.substring(1, str.length - 1));
    }
}

function addUpTo(array, i) {
    if (i > 0) {
        return array[0] + addUpTo(array.slice(1, array.length), i-1)
    }
    else {
        return array[0];
    }
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0];
    }
    else if (array[1] > array[0]) {
        return maxOf(array.slice(1, array.length));
    }
    else {
        return maxOf([array[0]].concat(array.slice(2, array.length)));
    }
}

function includesNumber(arr, num) {
    if (arr[0] === num) {
        return true;
    }
    else if (arr.length === 1) {
        return false;
    }
    else {
        return includesNumber(arr.slice(1, arr.length), num);
    }
}