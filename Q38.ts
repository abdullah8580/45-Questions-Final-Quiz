// Question 38

function describe_city(
  cityName: string = "Islamabad",
  country: string = "Pakistan"
): any {
  console.log(`${cityName} is in ${country}`);
}

describe_city();
describe_city("Karachi");
describe_city("Providence", "United States");
describe_city("Ghaza", "Palestine");
