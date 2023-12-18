// Question 16

let guests1 = ["Abdullah", "Ahmed", "Ali", "Shakeeb", "Jalal"];
for (let guest of guests1) {
  console.log(guest + `, You are invited to a dinner party`);
}
console.log(`\nIf ${guests1[1]} is not coming, this is the new list\n`);
guests1.splice(1, 1, "Mehmood");
for (let guest of guests1) {
  console.log(guest + `, You are invited to a dinner party`);
}

console.log(
  "\nHey Guys, I found a bigger area for our party, so ore guests are coming\n"
);

guests1.splice(0, 0, "Zaghum");
guests1.splice(2, 0, "Zaghum");
guests1.push("Zaghum");

for (let guest of guests1) {
  console.log(guest + `, You are invited to a dinner party`);
}
