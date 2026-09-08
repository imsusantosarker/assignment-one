// Question 1: Value Detective

function describeValue(value) {
  const typeofValue = typeof value;

  const val = value ? "truthy" : "falsy";

  return `${typeofValue} | ${val}`;
}

// Question 2: Bangladesh Weekend Machine

function getDayType(value) {
  const val = value.toLowerCase();
  const capitalizedValue = val.charAt(0).toUpperCase() + val.slice(1);

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

// Question 3: Username Gatekeeper

function validateUsername(pass) {
  const lowPass = pass.toLowerCase();

  if (lowPass.length < 4) {
    return "Too Short";
  } else if (lowPass.includes(" ")) {
    return "No Space Allowed";
  } else if (lowPass.includes("admin")) {
    return "Reserved Word";
  } else {
    return "Available";
  }
}

