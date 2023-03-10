// //Homework Function Drills
// // 1 . ) Write a function that outputs the sum of the first and the last index of an array.
// // ex => var sampleArray = [1,2,3,4,5] 
// // expected output =>  sum = 6
console.log("-------------------------------------------------------Problem 1--------------------------------------");
function addition(sampleArray){
    let sum=0
    sum=sampleArray[0]+sampleArray[sampleArray.length-1]
    console.log(`Sum of First and Last element of array: ${sampleArray[0]} + ${sampleArray[sampleArray.length-1]} = ${sum}`);
}
let sampleArray = [1, 2, 3, 4, 5, 6] 
addition(sampleArray)
let sampleArray1 = [5, 6, 8, 23, 52, 63, 21, 23, 66, 61] 
addition(sampleArray1)

// // // 2. Write a JavaScript program to find the leap years in a given range of years. 
console.log("-------------------------------------------------------Problem 2--------------------------------------");
function leapYear(year){
    if((year%400 == 0) || (year%100 != 0) && (year%4 == 0)){
        console.log(`${year} is a Leap Year.`);
    }else{
        console.log(`${year} is not a Leap Year.`);
    }
}
leapYear(2024)
leapYear(2000)
leapYear(2100)
leapYear(2200)

// // 3. Write a JavaScript function to sort the following array of objects by title value.
console.log("-------------------------------------------------------Problem 3--------------------------------------");
let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function sorting(a, b) {
        const titleA = a.title.toUpperCase(); // ignore upper and lowercase
        const titleB = b.title.toUpperCase(); // ignore upper and lowercase
        if (titleA < titleB) {
          return -1;
        }
        if (titleA < titleB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      };
library.sort(sorting)
console.log("Students sorted based on ascending order of their roll numbers are:")
console.log(library);

//  // 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
//  // Test Data :
// // ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// // ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// // Expected Output:
// // Original array: 2,11,3,a2,false,5,7,1
// // Sum all numbers of the said array: 18
console.log("-------------------------------------------------------Problem 4--------------------------------------");
function sumOfNums(dataArray){
    let sum=0
    for(let key=0; key<dataArray.length; key++){
        if(typeof(dataArray[key]) === "number"){
            sum+=dataArray[key]
        }
    }
    return sum   
}
let testData = [2, "11", 3, "a2", false, 5, 7, 1]
console.log(`Original Array: ${testData}`);
console.log(`Sum all numbers of the said array: ${sumOfNums(testData)}`);
let testData1 = [2, 3, 0, 5, 7, 8, true, false]
console.log(`Original Array: ${testData1}`);
console.log(`Sum all numbers of the said array: ${sumOfNums(testData1)}`);

// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price. 
   // Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
   // Assume that the following array of drink objects needs to be sorted:
//    drinks = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10}
//   ]
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
console.log("-------------------------------------------------------Problem 5--------------------------------------");
drinks = [{name: "lemonade", price: 50},
          {name: "lime", price: 10}]
function sortedDrinks(d1, d2){
    if (d1.price < d2.price) {
        return -1;
      }
      if (d1.price < d2.price) {
        return 1;
      }
}
drinks.sort(sortedDrinks)
console.log("Students sorted based on ascending order of their roll numbers are:")
console.log(drinks);