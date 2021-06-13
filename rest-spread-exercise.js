// function filterOutOdds() {
//   var nums = Array.prototype.slice.call(arguments);
//   return nums.filter(function(num) {
//     return num % 2 === 0
//   });
// }

function filterOutOdds(...nums) {
  return nums.filter(num => num % 2 === 0)
}

function findMin(...nums) {
  return Math.min(...nums)
}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num*2)]

// Slice and Dice

const removeRandom = items => {
  let i = Math.floor(Math.random() * items.length);
  return [...items.slice(0, i), items.slice(i+1)];
}

const extend = (arr1, arr2) => [...arr1, ...arr2]

const addKeyVal = (obj, key, val) => ({...obj, key: val})

const removeKey = (obj, key) => (delete obj[key]);

const combine = (obj1, obj2) => ({...obj1, ...obj2})

const update = (obj, key, val) => ({...obj, key: val})