// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

const filterOdds = (...nums) => nums.filter(num => num % 2 === 0)

const findMin = (...num) => (Math.min(...num))

const mergeObjects = (x, y) => ({...x, ...y})

const doubleAndReturnArgs = (arr, ...dub) => {
    const doubled = dub.map((nums) => nums * 2)
    return [...arr, ...doubled]
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
    const random = Math.floor(Math.random() * items.length);
    const newArr = [...items];
    newArr.splice(random, 1);
    return newArr;
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key]: val})


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2})


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key]: val})