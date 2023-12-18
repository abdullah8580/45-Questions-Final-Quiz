// Question 18

const locations = ["Saudia", "London", "Kwait", "Paris", "Italy"];

console.log(locations);

let Alphabetical = locations.slice().sort();

console.log(Alphabetical);

console.log(locations);

let reverseAlphabetical = locations.slice().sort((a, b) => b.localeCompare(a));

console.log(reverseAlphabetical);

console.log(locations);

let reverseOrder = locations.slice().reverse();

console.log(reverseOrder);

console.log(locations);

let reverseAgain = locations.slice().reverse();

console.log(reverseAgain);

console.log(locations);

let AgainAlphabetical = locations.slice().sort();

console.log(AgainAlphabetical);

console.log(locations);

let AgainreverseAlphabetical = locations
  .slice()
  .sort((a, b) => b.localeCompare(a));

console.log(AgainreverseAlphabetical);

console.log(locations);
