// Question 14/15

let guests = ["Abdullah", "Ahmed", "Ali", "Shakeeb", "Jalal"];
for (let guest of guests) {
  console.log(guest + `, You are invited to a dinner party`);
}
console.log(`\nIf ${guests[1]} is not coming, this is the new list\n`);
guests.splice(1, 1, "Mehmood");
for (let guest of guests) {
  console.log(guest + `, You are invited to a dinner party`);
}
