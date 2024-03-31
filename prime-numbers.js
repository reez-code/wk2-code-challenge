// A function that takes one parameter 'numbers'
// and checks whether a given number is prime or not.
function isPrime(numbers) {
  /**
   * This 'for' loops iterates over value of i from 2 up to one less than numbers.
   * Inside the loop it checks if 'numbers' is divisible evenly by 'i' (numbers % i === 0)
   * if it is, then 'numbers' is not a prime number, and the function returns false.
   */
  for (let i = 2; i < numbers; i++) {
    if (numbers % i === 0) {
      return false;
    }
  }
  /**
   * after loop above it if the if function has not returned false.
   * it checks whether the 'numbers'paramater is not equal to 1
   * if numbers is not equal to 1, it means 'numbers' is either prime or less than 2, so it returns true.
   */
  return numbers !== 1;
}
let array = [1, 5, 17, 6, 8];
/**
 * The 'filter' method is used on the array to filter out elements that satisfy the condition specified by the 'isPrime' function
 * This will create a new array 'primes' that contains only prime number of 'array'.
 */
let primes = array.filter(isPrime);

console.log(array);
console.log(primes);
