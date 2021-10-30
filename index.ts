// Import stylesheets
import './style.css';

// bubble sort
const bubbleSort = (arrayToSort) => {
  if (arrayToSort.length === 0) {
    return arrayToSort;
  }

  let length = arrayToSort.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arrayToSort[j] > arrayToSort[j + 1]) {
        let solt = arrayToSort[j];
        arrayToSort[j] = arrayToSort[j + 1];
        arrayToSort[j + 1] = solt;
      }
    }
  }

  return arrayToSort;
};

const getAcronym = (sentence: string) => {
  const words = sentence.split(' ');

  if (words.length === 1) {
    return words[0]
      .split('')
      .filter((c, i) => i % 2 === 0)
      .map((c) => c.toUpperCase())
      .join('');
  }

  return words
    .filter((word) => word)
    .filter((word) => ['the', 'of'].indexOf(word.toLowerCase()) < 0)
    .map((word) => {
      if (word === word.toUpperCase()) {
        return word;
      }

      return word[0].toUpperCase();
    })
    .join('');
};

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<div id='sorted'></div>
<div id='acronym'></div>
`;

// bubble sort
document.getElementById('sorted').innerHTML = bubbleSort([
  6, 7, 2, 3, 2, 1,
]).join(', ');

document.getElementById('acronym').innerHTML = getAcronym('US Air Force');
