// Question 21

// const students = [
//     {
//         name: "Abdulah",
//         rollNo: 1,
//         batch: 52,
//         gender: "Male"
// },
//     {
//         name: "Ali",
//         rollNo: 2,
//         batch: 52,
//         gender: "Male"
// },
//     {
//         name: "Shakeeb",
//         rollNo: 3,
//         batch: 52,
//         gender: "Male"
// }
// ]

// for(let i = 0; i<students.length; i++){
//     console.log(`Name : ${students[i].name}`)
//     console.log(`Roll No : ${students[i].rollNo}`)
//     console.log(`Batch : ${students[i].batch}`)
//     console.log(`Gender : ${students[i].gender}\n`)
// }

// Question 22 Generated Error

// let list = ["Pk", "NZ", "US"]
// console.log(list[5])

// Question 23

// let favCar = "Supra"
// if(favCar == "Supra"){
//     console.log("True")
// }
// favCar = "Corolla"
// if(favCar != "Supra"){
//     console.log("False")
// }
// let favCharacter = "Goku"
// if(favCharacter == "Goku"){
//     console.log("True")
// }
// favCharacter = "Vegeta"
// if(favCharacter != "Goku"){
//     console.log("False")
// }
// let favBike = "H2R"
// if(favBike == "H2R"){
//     console.log("True")
// }
// favBike = "H2"
// if(favBike != "H2R"){
//     console.log("False")
// }
// let favPlace = "London"
// if(favPlace == "London"){
//     console.log("True")
// }
// favPlace = "PK"
// if(favCar != "London"){
//     console.log("False")
// }
// let favShow = "DBZ"
// if(favShow == "DBZ"){
//     console.log("True")
// }
// favShow = "Naruto"
// if(favCar != "DBZ"){
//     console.log("False")
// }

// Question 24

// let Name = "Abdullah"
// if(Name == "Abdullah"){
//     console.log("True")
// }

// // It will be false
// let anotherName = "Abdullah".toLowerCase()
// if(anotherName == "Abdullah"){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

// if(5>3 && 7>5){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

// // False
// let newArr = ["Ball", "Bat", "Pitch"]
// if(newArr.includes("Wicket")){
//     console.log("True")
// }
// else{
//     console.log("False")
// }

// Question 25

// let alienColor = "Green"
// if(alienColor == "Green"){
//     console.log("Alien Is Dead! Player got 5 points")
// }
// if(alienColor != "Green"){
//     console.log("")
// }

// Question 26

// let alienColor = "Green"
// if(alienColor === "Green"){
//     console.log("The player just earned 5 points!")
// }
// else if(alienColor != "Green"){
//     console.log("The player just earned 10 points!")
// }

// alienColor = "Yellow"
// if(alienColor === "Green"){
//     console.log("The player just earned 5 points!")
// }
// else if(alienColor != "Green"){
//     console.log("The player just earned 10 points!")
// }

// Question 27

// let alienColor = "Green"

// if(alienColor === "Green"){
//     console.log("The player earned 5 points!")
// }
// else if(alienColor === "Yellow"){
//     console.log("The player earned 10 points!")
// }
// else if(alienColor === "Red"){
//     console.log("The player earned 15 points!")
// }

// Question 28

// let age = 10
// if(age < 2){
//     console.log("The person is a baby")
// }
// else if(age >= 2 && age < 4){
//     console.log("The person is a toddler")
// }
// else if(age >= 4 && age < 13){
//     console.log("The person is a kid")
// }
// else if(age >= 13 && age < 20){
//     console.log("The person is a teenager")
// }
// else if(age >= 20 && age < 65){
//     console.log("The person is an adult")
// }
// if(age >= 65){
//     console.log("The person is an elder")
// }

// Question 29

// const fav_fruits = ["Mangoes", "Apples", "Pineapples"]

// if(fav_fruits.includes("Mangoes")){
//     console.log("You really like mangoes")
// }
// if(fav_fruits.includes("Apples")){
//     console.log("You really like apples")
// }
// if(fav_fruits.includes("Pineapples")){
//     console.log("You really like pineapples")
// }
// if(fav_fruits.includes("bananas")){
//     console.log("You really like bananas")
// }
// if(fav_fruits.includes("strawberries")){
//     console.log("You really like strawberries")
// }

// Question 30

// let usernames = ["Abdullah", "Ali", "Ahmed", "admin", "Talha"]

// for (let username of usernames) {
//   if (username === "admin") {
//     console.log("Hello admin, would you like to see a status report?")
//   } else {
//     console.log(`Hello ${username}, thank you for logging in again.`)
//   }
// }

// Question 31

// let usernames = ["Abdullah", "Ali", "Ahmed", "admin", "Talha"]
// usernames.length = 0
// if(usernames.length === 0){
//     console.log("No users found. We need to find some users")
// }

// Question 32

// let current_users: string[] = ["Abdullah", "Ali", "Ahmed", "Zaghum", "Talha"];
// let new_users: string[] = ["Sarfraz", "Daniyal", "Abdullah", "Rizwan", "Ahmed"];

// for (let new_user of new_users) {
//   let lowercase_new_user = new_user.toLowerCase();

//   if (current_users.some((current_user) => current_user.toLowerCase() === lowercase_new_user)) {
//     console.log(`Username "${new_user}" is not available. Please enter a new username.`);
//   } else {
//     console.log(`Username "${new_user}" is available.`);
//     current_users.push(new_user);
//   }
// }

// Question 33

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for(let num of nums){
//     if(num === 1){
//         console.log(`${num}st`)
//     }
//     else if(num === 2){
//         console.log(`${num}nd`)
//     }
//     else if(num === 3){
//         console.log(`${num}rd`)
//     }
//     else{
//         console.log(`${num}th`)
//     }
// }

// Question 34

// let pizzas = ["Chicken Creamy", "Crown", "Hawain Feast"]
// for(let pizza of pizzas){
//     console.log(`I like ${pizza} pizza`)
// }
// console.log("I really love pizza!")

// Question 35

// let animals = ["Cat", "Lion", "Panther"]
// for(let animal of animals){
//     console.log(`${animal} can be dangerous`)
// }
// console.log("All animals are harmfull.")

// Question 36

// function make_shirt(size:string, text:string):any{
//     console.log(`${size}, ${text}`)
// }
// make_shirt("Large", "We need to decalre variables\n\t    NOT WAR!")
// console.log(make_shirt)

// Question 37

// function make_shirt(size:string = "Large", text:string = "I Love Typescript"):any{
//     console.log(`${size}, ${text}`)
// }
// make_shirt()
// make_shirt("Medium")
// make_shirt("Small", "We need to decalre variables\n\t    NOT WAR!")

// Question 38

// function describe_city(cityName:string = "Islamabad", country:string = "Pakistan"):any{
//     console.log(`${cityName} is in ${country}`)
// }

// describe_city()
// describe_city("Karachi")
// describe_city("Providence", "United States")
// describe_city("Ghaza", "Palestine")

// Question 39

// function city_country(cityName:string, country:string):any{
//     return `"${cityName}, ${country}"`
// }

// let p1 = city_country("Karachi", "Pakistan")
// let p2 = city_country("Providence", "US")
// let p3 = city_country("Ghaza", "Palestine")
// console.log(`${p1}\n${p2}\n${p3}`)

// Question 40

// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     let album: { artist: string, title: string, tracks?: number } = {
//       artist: artist,
//       title: title,
//     }
  
//     if (tracks === undefined) {
//       album.tracks = 0
//     }
//     else{
//         album.tracks = tracks
//     }
  
//     return album
//   }
  
//   // Create three album objects
//   let album1 = make_album("Artist1", "Album 1")
//   let album2 = make_album("Artist2", "Album 2", 3)
//   let album3 = make_album("Artist3", "Album 3")
  
//   // Print the album objects
//   console.log(album1)
//   console.log(album2)
//   console.log(album3)

// Question 41

// let magicianNames = ["M1", "M2", "M3", "M4"]

// function show_magicians(names:string[]):any{
//     for(let name of names){
//         console.log(name)
//     }
// }

// show_magicians(magicianNames)

// Question 42/43

// let magicianNames = ["M1", "M2", "M3", "M4"]
// function make_greet(names:string[]):any{
    
//     for(let magicianName of magicianNames){
//         console.log(`Welcome to great ${magicianName}`)
//     }
// }
// function show_magicians(names:string[]):any{
//     for(let name of names){
//         console.log(name)
//     }
// }

// show_magicians(magicianNames)
// make_greet(magicianNames)

// Question 44

// function makeSandwich(...items:string[]):any{
//     for(let item of items){
//         console.log(`Adding ${item}`)
//     }
//     console.log(`Your sandwich contain following items:\n${items}`)
// }

// makeSandwich("Bread", "Chicken", "Mustered", "Mayo", "Cheese")
// makeSandwich("Bread", "Chicken", "Mayo", "Cheese")
// makeSandwich("Bread", "Chicken", "Lettuce", "Mustered", "Mayo", "Cheese")

// Question 45

// function CarInfo(manufacturer: string, modelName: string, ...additionalDetails:string[]){
//     let carInfo: { manufacturer: string, modelName: string} = {
//       manufacturer: manufacturer,
//       modelName: modelName
//     }
  
//     return carInfo;
//   }
  
// let car = CarInfo("Toyota", "Supra");
// console.log(car);
  