// palindrome
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

// anagram
function isAnagram(str1, str2) {
  let leftOvers = [];
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) {
      leftOvers.push(str1[i]);
    } else {
      str1.splice(i, 1);
    }
  }
  return leftOvers.length > 0;
}

// fizzbuzz
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

// isPrime
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// primeFactors
function primeFactors(num) {
  let factors = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  return factors.filter(
    (value, index, factors) => factors.indexOf(value) === index
  );
}
