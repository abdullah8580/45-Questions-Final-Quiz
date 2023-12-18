// Question 45

type CarInfo = {
  manufacturer: string;
  modelName: string;
  [key: string]: any;
};

function createCar(
  manufacturer: string,
  modelName: string,
  ...options: [string, any][]
): CarInfo {
  const car: CarInfo = {
    manufacturer,
    modelName,
  };

  for (const [key, value] of options) {
    car[key] = value;
  }

  return car;
}

// Example usage:
const myCar = createCar(
  "Toyota",
  "Supra",
  ["color", "red"],
  ["year", 2001],
  ["optionalFeature", '19" Alloy Rim']
);

console.log(myCar);
