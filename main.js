// *** palindrome ***
function isPalindrome(str) {
  str = str.replace(" ", "").toLowerCase();
  return str === str.split("").reverse().join("");
}

// *** anagram ***
function isAnagram(str1, str2) {
  let leftOvers = [];
  str1 = str1.split("");
  str2 = str2.split("");
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      leftOvers.push(str1[i]);
    } else {
      str1.splice(i, 1);
    }
  }
  return leftOvers.length === 0;
}

// *** fizzbuzz ***
function fizzBuzz(num) {
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        console.log("fizzbuzz");
      } else {
        console.log("fizz");
      }
    } else {
      if (i % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
  }
}

// *** isPrime ***
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// *** primeFactors ***
function primeFactors(num) {
  let factors = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  return factors;
}

// *** matching values of two arrays ***
function arrayMatching(arr1, arr2) {
  return arr1.filter(el => arr2.includes(el));
}

// *** non-matching values of two arrays ***
function arrayNonMatching(arr1, arr2) {
  return arr1.filter(el => !arr2.includes(el));
}

// *** only unique values of an array ***
// using a forEach
function uniqueValues(arr) {
  let unique = [];
  arr.forEach(el => {
    if (!unique.includes(el)) {
      unique.push(el);
    }
  });
  return unique;
}

// using filter
function uniqueValuesFilter(arr) {
  return arr.filter((el, i, self) => self.indexOf(el) === i);
}

// using Set and spread operator
function uniqueValuesSet(arr) {
  return [...new Set(arr)];
}

// *** average of all values of an array ***
function arrayAverage(arr) {
  let sum = 0;
  arr.forEach(el => {
    sum += el;
  });
  return sum / arr.length;
}

// *** largest value of an array ***
function longestWord(arr) {
  let word = "";
  arr.forEach(el => {
    if (el.split("").length > word.split("").length) {
      word = el;
    }
  });
  return word;
}

// *** food object with the fewest calories ***
function fewestCalories(arr) {
  let food = {};
  arr.filter((el, i) => {
    // we must set food the first iteration because food.calories === undefined
    // and 0 < undefined evaluates to false
    if (i === 0) {
      food = el;
    } else {
      food = el.calories < food.calories ? el : food;
    }
  });
  return food;
}

const foods = [
  { name: "Apple", calories: 95, isHighInProtein: false },
  { name: "Peanut Butter", calories: 188, isHighInProtein: true },
  { name: "Steak", calories: 679, isHighInProtein: true },
  { name: "Iceberg Lettuce", calories: 1, isHighInProtein: false }
];

// *** get sum of array values ***
function getArraySum(arr) {
  let sum = 0;
  arr.forEach(el => {
    sum += el;
  });
  return sum;
}

// *** remove vowels ***
// with filter
function removeVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return string.split("").filter(letter => !vowels.includes(letter)).join("");
}

// with string.replace()
function removeVowelsReplace(string) {
  return string.replace(/a|e|i|o|u/gi, "");
}

// *** number of consonants in string ***
function numberOfVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let numberOfVowels = 0;
  string.split("").forEach(letter => {
    if (vowels.includes(letter)) {
      numberOfVowels++;
    }
  });
  return numberOfVowels;
}

// *** slot machine with probabilities ***
function slotMachine() {
  // function to generate a random number 1 - 100
  function getRandomNum() {
    return Math.floor(Math.random() * 100) + 1;
  }
  // equal probability
  function firstColumn() {
    const num = getRandomNum();
    return num > 80 ? "ace" : num > 60 ? "king" : num > 40 ? "queen" : num > 20 ? "jack" : "joker";
  }

  // king, ace, wildcard < 50% probability
  function secondColumn() {
    const num = getRandomNum();
    return num > 90 ? "ace" : num > 80 ? "king" : num > 70 ? "queen" : num > 35 ? "jack" : "joker";
  }

  // ace, wildcard < 50% probability
  function thirdColumn() {
    const num = getRandomNum();
    return num > 95 ? "ace" : num > 90 ? "king" : num > 80 ? "queen" : num > 40 ? "jack" : "joker"; 
  }

  // win condition
  function winCondition() {
    // get the columns for this spin
    const column1 = firstColumn();
    const column2 = secondColumn();
    const column3 = thirdColumn();

    if (column1 === "ace" && column2 === "ace" && column3 === "ace") {
      return `|${column1}|${column2}|${column3}| === $500`;
    } else if (column1 === "king" && column2 === "king" && column3 === "king") {
      return `|${column1}|${column2}|${column3}| === $200`;
    } else if (column1 === "queen" && column2 === "queen" && column3 === "queen") {
      return `|${column1}|${column2}|${column3}| === $100`;
    } else if (column1 === "jack" && column2 === "jack" && column3 === "jack") {
      return `|${column1}|${column2}|${column3}| === $50`;
    } else if (column1 === "joker" && column2 === "joker" && column3 === "joker") {
      return `|${column1}|${column2}|${column3}| === $25`;
    } else {
      return `|${column1}|${column2}|${column3}| === Not a winner`;
    }
  }

  // check the win condition
  return winCondition();
}


let slotsLeverPull = slotMachine();
console.log(slotsLeverPull);