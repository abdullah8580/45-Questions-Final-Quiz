// Question 44

function makeSandwich(...items: string[]): any {
  for (let item of items) {
    console.log(`Adding ${item}`);
  }
  console.log(`Your sandwich contain following items:\n${items}`);
}

makeSandwich("Bread", "Chicken", "Mustered", "Mayo", "Cheese");
makeSandwich("Bread", "Chicken", "Mayo", "Cheese");
makeSandwich("Bread", "Chicken", "Lettuce", "Mustered", "Mayo", "Cheese");
