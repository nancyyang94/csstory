// A Thief has a knapsack that can hold X lbs of stolen goods
// Each stolen good is worth a certain amount of cash, but
// the stolen good also weighs a certain weight. This means that
// the thief has to pick an optimal combination of items!
// The Thief can't pick the same item twice.

// What is the maximum worth of goods that the thief can steal?

// input: knapsack with x lbs capacity
// output: $ amount, representing the max $ of goods to steal based off inputs

// pseudocode:

// create a placeholder capacity
// create a placeholder array with weights
// create a placeholder array with the $ value corresponding to the weights
// set a placeholder max $ for the time being, adjust as needed

function maxWorth(capacity, weights, values) {

  let totals = [];

  // iterate through each item (in our array weights)
  // first check: if the index is equal to our current item, skip (we can't add the same item twice)
  // second check: we need to make sure the weight is equal to or under our capacity
  // grab the corresponding value, and keep track in total variable
  for (var i = 0; i < weights.length; i++) {
    let currentItem = weights[i];
    for (var j = i + 1; j < weights.length; j++) {
      let nextItem = weights[j];
      console.log('current item:', currentItem);
      console.log('next item:', nextItem);
      let total = currentItem + nextItem;
      if (total <= capacity) {
        nextItem = weights[j + 1];
        total += nextItem;
        let currentTotal = values[i] + values[j];
        totals.push(currentTotal);
      }
    }
  }
  console.log('totals:', totals);
  totals.sort();
  console.log('totals:', totals);
  return totals[totals.length - 1];
}

const capacity = 5;

// keep track of item through index
const weights = [3, 1, 1];
const values = [5, 3, 1];

// expected result: 8 (picking item 1 and item 2)

// make sure our weight does not exceed 5
const test = maxWorth(capacity, weights, values);
console.log(test);