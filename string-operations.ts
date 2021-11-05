export const reverseString = (incomingString: string) => {
  return incomingString.split('').reverse().join('');
};

export const reverseString_ = (incomingString: string) => {
  let reversed = '';

  for (let char of incomingString) {
    reversed = char + reversed;
  }

  return reversed;
};

export const reverseString__ = (incomingString: string) => {
  return incomingString.split('').reduce((result, char) => char + result);
};

export function test(incomingString: string) {
  console.log(incomingString, reverseString(incomingString));
  console.log(incomingString, reverseString_(incomingString));
  console.log(incomingString, reverseString__(incomingString));
}
