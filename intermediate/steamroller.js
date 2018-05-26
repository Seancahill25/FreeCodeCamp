function steamrollArray(arr) {

    var newArr = [];

    function check(val2) {
        if (!Array.isArray(val2)) {
            return newArr.push(val2);
        } else
            return val2.map(check);
    }

    arr.map(check);
    return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
