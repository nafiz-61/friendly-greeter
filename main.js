// function
function greating(name, surename = "") {
  if (name == "Eleanor") {
    const addingName = `Welcome to the world Ms. ${name}${surename}`;
    alert(addingName);
  } else {
    const addingName = `Welcome to the world Mr. ${name}${surename}`;
    alert(addingName);
  }
}

let allFrnd = [
  "Eleanor",
  "Knox",
  "Delilah",
  "Jasper",
  "Hawthorne",
  "Hansen",
  "Herman",
  "Ngo",
  "Ruff",
  "Kent",
  "Eller",
  "Mr.Doyle",
  "Truitt",
  "Benner",
  "Kelleher",
  "Clinton",
  "Luther",
  "Marquez",
  "Britt",
  "Dugger",
];

for (let name of allFrnd) {
  greating(name);
}


