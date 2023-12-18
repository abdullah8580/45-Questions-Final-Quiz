// Question 42/43

let magicianNames1 = ["M1", "M2", "M3", "M4"];
function make_greet(names: string[]): any {
  for (let magicianName of magicianNames1) {
    console.log(`Welcome to great ${magicianName}`);
  }
}
function show_magicians(names: string[]): any {
  for (let name of names) {
    console.log(name);
  }
}

show_magicians(magicianNames1);
make_greet(magicianNames1);
