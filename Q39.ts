// Question 39

function city_country(cityName: string, country: string): any {
  return `"${cityName}, ${country}"`;
}

let p1 = city_country("Karachi", "Pakistan");
let p2 = city_country("Providence", "US");
let p3 = city_country("Ghaza", "Palestine");
console.log(`${p1}\n${p2}\n${p3}`);
