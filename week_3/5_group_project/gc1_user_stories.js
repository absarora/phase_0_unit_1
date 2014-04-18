//Story: Ajay Singh
//Pseudocode: Matthew Hein
//Code: Hing Hyunh
//Refactor: Tim Howard

//----- STORY -----
// I want to create a user program that can help me with my statistics homework.
// To start with, I want to be able to calculate the sum of numbers at some
// place. Next, I want to calculate the sum of numbers if the set of numbers
// are either of an odd or an even length.
// Great! I can find the sum of numbers regardless if the set of those numbers
// are of an even or odd length. But what if I want to find the average of all
// the numbers? Can I do that?
// Awesome! Can I ask you for, yet, another favor... I want to be able to find
// the average of all the numbers if the set of those numbers are either of an odd
// or an even length. Can I do that?
// Thank You! You've been really patient with me but I have just one last favor
// to ask. I promise, I won't trouble you after this.
// I want to find the median of a set of numbers regardless if the set of those
// numbers are of an even or an odd length; can you help, please?
// Yayyyy! With your help, I was able to finish my statistics homework with
// ease. Thank you so much!

//----- PSEUDOCODE -----

// Median function:
//------------------
// create a function called sum
// initialize total to zero
// for every index in array
// add to total
// return the total

// Median function:
//-------------------
// create a function called median
// initialize total to zero
// for every number in array
// add to total
// return the total divided by the array length

// Mean function:
//--------------------
// create a function called mean
// if the mean has an even length
// return the median number in an even array
// else
// return the median number in an odd array


// ------- CODE --------

function sum(array){
  total = 0;
  for (var i=0 ; i < array.length; i++)
    {
      //total = total + array[i];
      total += array[i];
    };
    return total;
};

function mean(array){
total = 0;
  for (var i=0 ; i < array.length; i++)
    {
      //total = total + array[i];
      total += array[i];
    };
    return total/array.length;
    //return average;
};

function median(array){
  // if (array.length % 2 === 0)
  // {
  //     middle = 0.5 * (array[array.length/2] + array[array.length/2-1]);
  //     return middle;
  // }
  // else {
  //     middle = (array[(array.length-1)/2]);
  //     return middle;
  // }
  array.length % 2 === 0 ? (middle = 0.5 * (array[array.length/2] + array[array.length/2-1])) : (middle = (array[(array.length-1)/2]))
  return middle;
}

//Reflection
/*
All four of us worked on the project together using google hangout and Stypi. While I wrote
the stories, Matthew followed up by writing the pseudocode for Hing. Hing wrote the code
for us while we all helped in debugging the code, when needed. I thought Hing did a great
job and there wasn't much refactoring required but Tim refactored the code making it D.R.Y.

I liked the approach of writing pseudocode, code, and refactoring it to make the code D.R.Y but
personally, I felt writing user stories was a bit too much. User stories, a derivative to coding
surely seems like a great idea in terms of visualizing the problem prior to pseudocode but I would
rather jot down the key points that I would need to work on instead of user stories. 

Overall, it was a great experience working in a team as a unit and completing the required
task which not only helped us to finish the assignment in a timely manner but it also gave
us a better understanding of the topic. We did run into syntax error but google, as usual,
bailed us out of it. We did pass all the tests.
*/

// __________________________________________
// Tests:  Do not alter code below this line.


oddLengthArray = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

assert(
  sum(evenLengthArray) === 43,
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
)

assert(
  (mean instanceof Function),
  "mean should be a Function.",
  "4. "
)

assert(
  mean(oddLengthArray) === 3.857142857142857,
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
)

assert(
  mean(evenLengthArray) === 5.375,
  "mean should return the average of all elements in an array with an even length.",
  "6. "
)

assert(
  (median instanceof Function),
  "median should be a Function.",
  "7. "
)

assert(
  median(oddLengthArray) === 4,
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
)

assert(
  median(evenLengthArray) === 5.5,
  "median should return the median value of all elements in an array with an even length.",
  "9. "
)
