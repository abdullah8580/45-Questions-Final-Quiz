// Question 37

function make_shirt(
  size: string = "Large",
  text: string = "I Love Typescript"
): any {
  console.log(`${size}, ${text}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "We need to decalre variables\n\t    NOT WAR!");
