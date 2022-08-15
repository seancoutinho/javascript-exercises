const sumAll = function(lim1, lim2) {
    //if either inputs one of the inputs is not an integer send an error message
    if (!Number.isInteger(lim1) || !Number.isInteger(lim2)) return "ERROR!";
    //if either one of inputs negative, give an error message
    // if (lim1<0 || lim2<0) return "ERROR!";
    // //if lim1 is greater than lim2 {swap values}
    if (lim1>lim2) {
        const temp = lim1;
        lim1 = lim2;
        lim2 = temp;
    }
    let sum=0;
    for (let i=lim1; i<=lim2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
