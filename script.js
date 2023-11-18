const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].profession.toLowerCase() === "developer") {
      console.log(
        `Name: ${data[i].name}, Age: ${data[i].age}, Profession: ${data[i].profession}`
      );
    }
  }
}
PrintDeveloper(data);

// 2. Add Data
function addData() {
  const name = prompt("Enter name:");
  const age = parseInt(prompt("Enter age:"));
  const profession = prompt("Enter profession:");

  if (name && !isNaN(age) && profession) {
    const newData = { name, age, profession };
    data.push(newData);
    console.log("Data added successfully:");
    console.log(newData);
  } else {
    console.log("Invalid input. Please provide valid details.");
  }
}
addData();
// 3. Remove Admins
function removeAdmin() {
  const admins = data.filter(
    (person) => person.profession.toLowerCase() === "admin"
  );

  // Remove admins from the data array
  data = data.filter((person) => person.profession.toLowerCase() !== "admin");

  console.log("Removed admins:");
  console.log(admins);
}
removeAdmin();

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: "virat", age: 33, profession: "cricketer" },
    { name: "rohit", age: 32, profession: "cricketer" },
  ];

  // Concatenate the two arrays
  const combinedArray = data.concat(dummyArray);

  console.log("Combined array:");
  console.log(combinedArray);
}
concatenateArray();
// 5. Average Age
function averageAge() {
  if (data.length === 0) {
    console.log("No data available to calculate average age.");
    return;
  }

  const totalAge = data.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / data.length;

  console.log("Average age:");
  console.log(average);
}
averageAge();

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some((person) => person.age > 25);

  if (isAbove25) {
    console.log("At least one person is older than 25.");
  } else {
    console.log("No person is older than 25.");
  }
}
checkAgeAbove25();

// 7. Unique Professions
function uniqueProfessions() {
  const professions = data.map((person) => person.profession);
  const uniqueProfessions = [...new Set(professions)];

  console.log("Unique professions:");
  console.log(uniqueProfessions);
}
uniqueProfessions();

// 8. Sort by Age
function sortByAge() {
  const sortedData = [...data].sort((a, b) => a.age - b.age);

  console.log("Sorted by age (ascending):");
  console.log(sortedData);
}
sortByAge();

// 9. Update Profession
function updateJohnsProfession() {
  const updatedData = data.map((person) => {
    if (person.name === "john") {
      return { ...person, profession: "manager" };
    }
    return person;
  });

  console.log("Updated data with John's new profession:");
  console.log(updatedData);
}
updateJohnsProfession();

// 10. Profession Count
function getTotalProfessions() {
  let developerCount = 0;
  let adminCount = 0;

  // Iterate through the array and count professions
  data.forEach((person) => {
    if (person.profession.toLowerCase() === "developer") {
      developerCount++;
    } else if (person.profession.toLowerCase() === "admin") {
      adminCount++;
    }
  });

  console.log("Total number of developers:", developerCount);
  console.log("Total number of admins:", adminCount);
}
getTotalProfessions();
