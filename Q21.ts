// Question 21

const students = [
  {
    name: "Abdulah",
    rollNo: 1,
    batch: 52,
    gender: "Male",
  },
  {
    name: "Ali",
    rollNo: 2,
    batch: 52,
    gender: "Male",
  },
  {
    name: "Shakeeb",
    rollNo: 3,
    batch: 52,
    gender: "Male",
  },
];

for (let i = 0; i < students.length; i++) {
  console.log(`Name : ${students[i].name}`);
  console.log(`Roll No : ${students[i].rollNo}`);
  console.log(`Batch : ${students[i].batch}`);
  console.log(`Gender : ${students[i].gender}\n`);
}
