const removeFromArray = function(...args) {
    //pull the first argument from the list of arguments
    //this is the array to pick elemens from
    const arr = args[0];
    //create a new array to add non-argument elements
    const newArr = [];
    //loop through arr to add elements to newArr
    arr.forEach(element => {
        //if the element is a member of the args don't add
        if (!args.includes(element)) {
            newArr.push(element);
        }
    });
    //return newArr after loop
    return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
