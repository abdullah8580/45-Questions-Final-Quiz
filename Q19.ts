// Question 19

let guests3 = ["Abdullah", "Ahmed", "Ali", "Shakeeb", "Jalal"];
for (let guest of guests3) {
  console.log(guest + `, You are invited to a dinner party`);
}
console.log(`\nIf ${guests3[1]} is not coming, this is the new list\n`);
guests3.splice(1, 1, "Mehmood");
for (let guest of guests3) {
  console.log(guest + `, You are invited to a dinner party`);
}

console.log(
  "\nHey Guys, I found a bigger area for our party, so ore guests are coming\n"
);

guests3.splice(0, 0, "Zaghum");
guests3.splice(2, 0, "Zaghum");
guests3.push("Zaghum");

for (let guest of guests3) {
  console.log(guest + `, You are invited to a dinner party`);
}

console.log(
  "\nSorry Guys, the new table won't arrive in time so I can only invite 2 poeple to the party\n"
);

for (let i = guests3.length - 1; i >= 2; i--) {
  guests3.splice(i);
}

for (let guest of guests3) {
  console.log(guest + `, You are still invited to dinner party`);
}

for (let i = guests3.length - 1; i >= 0; i--) {
  guests3.splice(i);
}

console.log("\n", guests3);

console.log(
  "If list is empty, no one is invited. If list has 2 persons, both are invited to party"
);
