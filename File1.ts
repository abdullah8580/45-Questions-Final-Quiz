// Question 2

// let person:string = "Abdullah";
// console.log('Hello ' + person +  ', would you like to learn some Python today?');

// Question 3 


// console.log(person.toLowerCase());
// console.log(person.toUpperCase());
// console.log(person.charAt(0).toUpperCase() + person.slice(1).toLowerCase());

// Question 4 


// console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');

// Question 5

// let famous_person:string = "Albert Einstein";
// let message:string = '“A person who never made a mistake never tried anything new.”';
// console.log(`${famous_person} once said, ${message}`);


// Question 6

// let person:string = "Abdullah";
// console.log(`\t ${person} \n \t ${person}`);

// Question 7

// let result:number = 5 + 3;
// console.log("Addition result: " + result);
// result = 10 - 2;
// console.log("Subtraction result: " + result);
// result = 2 * 4;
// console.log("Multiplication result: " + result);
// result = 64 / 8;
// console.log("Division result: " + result);


// Question 8

// let num:number = 8;
// for(let i=0; i<4; i++){
//     console.log(`console.log(${num})`);
// }

// Question 9/10 This Program prints a message on bases of my favourite number

// let favourite_num:number = 9;
// function genMessage(number:number):string{
//     return `${number} is my favourite num`;
// }
// let favMessage:string = genMessage(favourite_num)
// console.log(favMessage)

// Question 11

// let names = ["Abdullah", "Ahmed", "Ali", "Shakeeb", "Jalal"]
// for (let name of names){
//     console.log(name)
// }

// Question 12

// let names = ["Abdullah", "Ahmed", "Ali", "Shakeeb", "Jalal"]
// for (let name of names){
//     console.log(name + ", Good Morning!")
// }

// Question 13

// let vehicles = ["R34", "MK4", "R35", "RX7", "Challenger 1970"]
// for (let vehicle of vehicles){
//     console.log(`I would like to own a ${vehicle}`)
// }

// Question 14/15

// let guests = ["Abdullah", "Ahmed", "Ali", "Shakeeb", "Jalal"]
// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }
// console.log(`\nIf ${guests[1]} is not coming, this is the new list\n`)
// guests.splice(1, 1, "Mehmood");
// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }

// Question 16

// let guests = ["Abdullah", "Ahmed", "Ali", "Shakeeb", "Jalal"]
// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }
// console.log(`\nIf ${guests[1]} is not coming, this is the new list\n`)
// guests.splice(1, 1, "Mehmood");
// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }

// console.log("\nHey Guys, I found a bigger area for our party, so ore guests are coming\n");

// guests.splice(0, 0, 'Zaghum');
// guests.splice(2, 0, 'Zaghum');
// guests.push('Zaghum');

// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }

// Question 17

// let guests = ["Abdullah", "Ahmed", "Ali", "Shakeeb", "Jalal"]
// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }
// console.log(`\nIf ${guests[1]} is not coming, this is the new list\n`)
// guests.splice(1, 1, "Mehmood");
// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }

// console.log("\nHey Guys, I found a bigger area for our party, so ore guests are coming\n");

// guests.splice(0, 0, 'Zaghum');
// guests.splice(2, 0, 'Zaghum');
// guests.push('Zaghum');


// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }

// console.log("\nSorry Guys, the new table won't arrive in time so I can only invite 2 poeple to the party\n")

// for(let i = guests.length - 1; i>=2; i--){
//     guests.splice(i)
// }

// for (let guest of guests){
//     console.log(guest + `, You are still invited to dinner party`);
// }

// for(let i = guests.length - 1; i>=0; i--){
//     guests.splice(i)
// }

// console.log("\n", guests)

// Question 18

// const locations = ["Saudia", "London", "Kwait", "Paris", "Italy"]

// console.log(locations)

// let Alphabetical = locations.slice().sort()

// console.log(Alphabetical)

// console.log(locations)

// let reverseAlphabetical = locations.slice().sort((a, b) => b.localeCompare(a))

// console.log(reverseAlphabetical)

// console.log(locations)

// let reverseOrder = locations.slice().reverse()

// console.log(reverseOrder)

// console.log(locations)

// let reverseAgain = locations.slice().reverse()

// console.log(reverseAgain)

// console.log(locations)

// let AgainAlphabetical = locations.slice().sort()

// console.log(AgainAlphabetical)

// console.log(locations)

// let AgainreverseAlphabetical = locations.slice().sort((a, b) => b.localeCompare(a))

// console.log(AgainreverseAlphabetical)

// console.log(locations)

// Question 19

// let guests = ["Abdullah", "Ahmed", "Ali", "Shakeeb", "Jalal"]
// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }
// console.log(`\nIf ${guests[1]} is not coming, this is the new list\n`)
// guests.splice(1, 1, "Mehmood");
// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }

// console.log("\nHey Guys, I found a bigger area for our party, so ore guests are coming\n");

// guests.splice(0, 0, 'Zaghum');
// guests.splice(2, 0, 'Zaghum');
// guests.push('Zaghum');


// for (let guest of guests){
//     console.log(guest + `, You are invited to a dinner party`);
// }

// console.log("\nSorry Guys, the new table won't arrive in time so I can only invite 2 poeple to the party\n")

// for(let i = guests.length - 1; i>=2; i--){
//     guests.splice(i)
// }

// for (let guest of guests){
//     console.log(guest + `, You are still invited to dinner party`);
// }

// for(let i = guests.length - 1; i>=0; i--){
//     guests.splice(i)
// }

// console.log("\n", guests)

// console.log("If list is empty, no one is invited. If list has 2 persons, both are invited to party")

// Question 20

// let countries = ["United States", "Canada", "Saudia", "Pakistan"] 
// console.log("List of Countries:");
// for(let i = 0; i<countries.length; i++){
//     console.log(`${i + 1}: ${countries[i]}`)
// }

