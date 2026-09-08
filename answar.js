// Question 1: Value Detective

function describeValue(value) {
  const typeofValue = typeof value;

  const val = value ? "truthy" : "falsy";

  return `${typeofValue} | ${val}`;
}

// Question 2: Bangladesh Weekend Machine

function getDayType(value) {
  const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

  switch (capitalizedValue) {
    case "Friday":
    case "Saturday":
      return "Weekend";
    case "Sunday":
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
      return "Working Day";
    default:
      return "Invalid Day";
  }
}


