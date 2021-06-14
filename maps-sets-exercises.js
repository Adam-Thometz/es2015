// Maps and Sets exercises

// 1. 
new Set([1,1,2,2,3,4]) // {1,2,3,4}

// 2.
const arr = [...new Set("referee")].join("") // 'ref'

// 3.
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// {0: {Array(3) => true}, 1: {Array(3) => false}}

// 4. hasDuplicate
function hasDuplicate(arr) {
    return arr => new Set(arr).size !== arr.length
}

// 5. vowelCount
function vowelCount(str) {
    const vowels = 'aeiou'
    const vowelMap = new Map()

    for (let char of str) {
        let lowerCaseChar = char.toLowerCase();
        if (vowels.indexOf(lowerCaseChar) !== -1 && !vowelMap.has(lowerCaseChar)) {
            vowelMap.set(lowerCaseChar, 1)
        } else if (vowelMap.has(lowerCaseChar)) {
            vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
        }
    }
    return vowelMap;
}