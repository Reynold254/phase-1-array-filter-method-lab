// Function 1: findMatching
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

// Function 2: fuzzyMatch
function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

// Function 3: matchName
function matchName(drivers, name) {
  return drivers.filter((driver) => driver.name === name);
}

// Function 4: superbowlWin (already implemented)
function superbowlWin(record) {
  let win = record.find((game) => game.result === "W");
  return win ? win.year : undefined;
}

// Example usage:
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];
console.log(findMatching(drivers, "Bobby")); // ["Bobby", "bobby"]
console.log(fuzzyMatch(drivers, "Sa")); // ["Sammy", "Sally", "Sarah"]

const driverObjects = [
  { name: "Bobby", hometown: "New York" },
  { name: "Sammy", hometown: "Los Angeles" },
];
console.log(matchName(driverObjects, "Bobby")); // [{ name: "Bobby", hometown: "New York" }]
