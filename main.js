// *** palindrome ***
function isPalindrome(str) {
  str = str.replace(" ", "").toLowerCase();
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
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
  return string
    .split("")
    .filter(letter => !vowels.includes(letter))
    .join("");
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
