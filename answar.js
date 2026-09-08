// Question 1: Value Detective

function describeValue(value) {
   const typeofValue = typeof value

   const val = value ? "truthy" : "falsy";

   return `${typeofValue} | ${val}`
}

