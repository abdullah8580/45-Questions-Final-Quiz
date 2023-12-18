// Question 32

let current_users: string[] = ["Abdullah", "Ali", "Ahmed", "Zaghum", "Talha"];
let new_users: string[] = ["Sarfraz", "Daniyal", "Abdullah", "Rizwan", "Ahmed"];

for (let new_user of new_users) {
  let lowercase_new_user = new_user.toLowerCase();

  if (
    current_users.some(
      (current_user) => current_user.toLowerCase() === lowercase_new_user
    )
  ) {
    console.log(
      `Username "${new_user}" is not available. Please enter a new username.`
    );
  } else {
    console.log(`Username "${new_user}" is available.`);
    current_users.push(new_user);
  }
}
