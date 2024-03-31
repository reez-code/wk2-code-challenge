// A function that takes a string as an input and swaps case for each character
function caseSwapper(word) {
  //The value of the string is assigned to the variable to avoid modifying the original string directly
  let str = word;

  let result = str
    .split("") // breaks the string str into an array of individual characters
    // map() iterates through each character in the string.
    .map((item) =>
      /**
       *  For each character it checks if its upperCase
       *  If it's uppercase it converts it into lowercase using item.toLowerCase() and vice versa
       *  */
      item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()
    )
    // This joins the modified character together into a single string.
    .join("");
  return result;
}
// Give it a try
console.log(caseSwapper("The Quick Brown Fox"));
