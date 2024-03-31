// A function that takes two parameters 'start' and 'end'.
// The parameters represent the beginning and end of the range.
function rangeBetween(start, end) {
  /**
   * The if statement checks whether start is greater than end
   * implies that range should be in descending order
   */
  if (start > end) {
    // Array.from() is used to create a new array.
    const arr = Array.from(
      // This specifies the length of an array based on difference between start and end values plus 1
      { length: start - end + 1 },
      /**
       * This is a mapping function that generates the value of an array
       * it substracts the index from the start value to create a descending order.
       */
      (_, index) => start - index
    );
    return arr;
    // This runs when start is not greater than end, basically means range should be in ascending order.
  } else {
    const arr = Array.from(
      // creates an array with a length based on the difference between end and start + 1
      { length: end - start + 1 },
      // This mapping function adds index to start value to create an ascending order.
      (_, index) => start + index
    );
    return arr;
  }
}
// Give it a try
console.log(rangeBetween(7, 3));
