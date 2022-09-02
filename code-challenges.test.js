// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

    // PSEUDOCODE:
        // describe a function called removeAndShuffle
        // function description: takes an array, removes the 1st item, shuffles remaining items
        // place variables in test
        // create expect statements for each variable being tested


describe("removeAndShuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(removeAndShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(removeAndShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

    // FAIL  ./code-challenges.test.js
    // removeAndShuffle
    //   ✕ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)

    // ● removeAndShuffle › takes in an array, removes the first item from the array and shuffles the remaining content

    //   ReferenceError: removeAndShuffle is not defined


// b) Create the function that makes the test pass.

    // PSEUDOCODE:
        // declare a function named removeAndShuffle
        // takes in an array argument
            // remove value at index 0 of the array
            // shuffle the remaining items of the array
                // IDEAS:
                    // iterate through the length of the array
                    // generate a random number w/in range of the array length for an index
                    // remove that value of that index from the array and enter it into a new array
        // returns an array w/o 1st item and w/ remaining items shuffled

const removeAndShuffle = (arr) => {
    arr.shift()
    let noFirstArr = []
    for (let i = arr.length; i > 0; i--) {
        let randItem = arr.splice(Math.floor(Math.random () * arr.length),1)
        noFirstArr.push(randItem[0])
    }
    return noFirstArr
}

// PASS  ./code-challenges.test.js
// removeAndShuffle
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (3 ms)




// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

    // PSEUDOCODE:
    // describe a function called netVotes
    // function description: takes an object of up votes and down votes and returns the net total of votes
    // place variables in test
    // create expect statements for each variable being tested

describe("netVotes", () => {
    it("takes an object of up votes and down votes and returns the net total of votes", () => {
        const votes1 = {upVotes: 13, downVotes: 2}
        // Expected output: 11
        const votes2 = {upVotes: 2, downVotes: 33}
        // Expected output: -31
        expect(netVotes(votes1)).toEqual(11)
        expect(netVotes(votes2)).toEqual(-31)
    })
})

    // FAIL  ./code-challenges.test.js
    // removeAndShuffle
    //   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (3 ms)
    // netVotes
    //   ✕ takes an object of up votes and down votes and returns the net total of votes

    // ● netVotes › takes an object of up votes and down votes and returns the net total of votes

    //   ReferenceError: netVotes is not defined


// b) Create the function that makes the test pass.

    // PSEUDOCODE:
        // declare a function called netVotes
        // take an object of up votes and down votes
            // access the values inside the object
            // find the net total of the numbers
        // return the net total of votes

const netVotes = (obj) => {
    return obj.upVotes - obj.downVotes
}

// PASS  ./code-challenges.test.js
// removeAndShuffle
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (3 ms)
// netVotes
//   ✓ takes an object of up votes and down votes and returns the net total of votes (1 ms)



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.


// PSEUDOCODE:
// describe a function called noDuplicates
// function description: takes in two arrays as arguments and returns one array with no duplicate values
// place variables in test
// create expect statements for each variable being tested

describe("noDuplicates", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
        // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
        expect(noDuplicates(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
})

// FAIL  ./code-challenges.test.js
// removeAndShuffle
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
// netVotes
//   ✓ takes an object of up votes and down votes and returns the net total of votes (1 ms)
// noDuplicates
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values

// ● noDuplicates › takes in two arrays as arguments and returns one array with no duplicate values

//   ReferenceError: noDuplicates is not defined


// b) Create the function that makes the test pass.

    // PSEUDOCODE:
        // declare a function named noDuplicates
        // takes in two arrays as arguments
            // combine the two arrays into one
            // iterate through the combined array
        // returns one array with no duplicate values

// const noDuplicates = (arrOne, arrTwo) => {
//     let combinedArr = arrOne.concat(arrTwo)
//     let finalArr = []
//     for (let i = 0; i < arrOneTwo.length; i++) {
//         if (finalArr.includes(arrOneTwo[i]) === false) {
//             finalArr.push(arrOneTwo[i])
//         }
//     } return finalArr
// }

// PASS  ./code-challenges.test.js
// removeAndShuffle
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
// netVotes
//   ✓ takes an object of up votes and down votes and returns the net total of votes
// noDuplicates
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values

// REFACTORED CODE:

// const noDuplicates = (arrOne, arrTwo) => {
//     let combinedArr = arrOne.concat(arrTwo)
//     combinedArr = combinedArr.filter((value, index) => {
//         return combinedArr.indexOf(value) === index
//     })
//     return combinedArr
// }

// PASS  ./code-challenges.test.js
// removeAndShuffle
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
// netVotes
//   ✓ takes an object of up votes and down votes and returns the net total of votes (1 ms)
// noDuplicates
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values (1 ms)

//STRETCH:

    // PSEUDOCODE:
        // declare a function named noDuplicates
        // takes in any number of arguments using the spread operator (arguments will be placed in an array)
            // declare a variable that will be the concatenated array of all array arguments
            // iterate through the arrays to concatenate them
            // filter the combined array for duplicates
        // returns a single array with no duplicate values

const noDuplicates = (...multArr) => {
    for (let i =0; i < multArr.length - 1; i++) {
        let combinedArr = multArr[i].concat(multArr[i+1])
        combinedArr = combinedArr.filter((value, index) => {
            return combinedArr.indexOf(value) === index
            })
        return combinedArr
    }
    return combinedArr
}
