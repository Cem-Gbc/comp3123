// COMP 3123 – Full Stack Development – Lab 1
// JavaScript Refresher Exercises

// ---------------------------------------------------------
// Exercise 1: Capitalize the first letter of each word
// ---------------------------------------------------------
function capitalize_Words(str) {
  return str
    .split(" ")
    .map(word => word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word)
    .join(" ");
}

console.log("Exercise 1:");
console.log(capitalize_Words("the quick brown fox"));
console.log(capitalize_Words("full stack development"));

// ---------------------------------------------------------
// Exercise 2: Largest of three integers
// ---------------------------------------------------------
function max(a, b, c) {
  let largest = a;
  if (b > largest) largest = b;
  if (c > largest) largest = c;
  return largest;
}

console.log("\nExercise 2:");
console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

// ---------------------------------------------------------
// Exercise 3: Move last three characters to the start
// ---------------------------------------------------------
function right(str) {
  if (str.length < 3) return str;
  return str.slice(-3) + str.slice(0, -3);
}

console.log("\nExercise 3:");
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

// ---------------------------------------------------------
// Exercise 4: Type of a given angle
// ---------------------------------------------------------
function angle_Type(angle) {
  if (angle > 0 && angle < 90) return "Acute angle";
  if (angle === 90) return "Right angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  return "Invalid angle";
}

console.log("\nExercise 4:");
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));

// ---------------------------------------------------------
// Exercise 5: Maximum sum of k consecutive numbers
// (sliding window approach)
// ---------------------------------------------------------
function array_max_sum(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    if (windowSum > maxSum) maxSum = windowSum;
  }
  return maxSum;
}

console.log("\nExercise 5:");
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
