// Question 17

let guests2 = ["Abdullah", "Ahmed", "Ali", "Shakeeb", "Jalal"];
for (let guest of guests2) {
  console.log(guest + `, You are invited to a dinner party`);
}
console.log(`\nIf ${guests2[1]} is not coming, this is the new list\n`);
guests2.splice(1, 1, "Mehmood");
for (let guest of guests2) {
  console.log(guest + `, You are invited to a dinner party`);
}

console.log(
  "\nHey Guys, I found a bigger area for our party, so ore guests are coming\n"
);

guests2.splice(0, 0, "Zaghum");
guests2.splice(2, 0, "Zaghum");
guests2.push("Zaghum");

for (let guest of guests2) {
  console.log(guest + `, You are invited to a dinner party`);
}

console.log(
  "\nSorry Guys, the new table won't arrive in time so I can only invite 2 poeple to the party\n"
);

for (let i = guests2.length - 1; i >= 2; i--) {
  guests2.splice(i);
}

for (let guest of guests2) {
  console.log(guest + `, You are still invited to dinner party`);
}

for (let i = guests2.length - 1; i >= 0; i--) {
  guests2.splice(i);
}

console.log("\n", guests2);
