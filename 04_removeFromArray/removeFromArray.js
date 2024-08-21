const removeFromArray = function removeFromArray(ary, val) {
     let index  = ary.indexOf(val);
    if (index !== -1) {
        ary.splice(index, 1);
    }
    return ary;    
};
    let array = [ 1, 2, 3, 4];
     removeFromArray(array, 3);

// Do not edit below this line
module.exports = removeFromArray;
console.log(removeFromArray);
