import wordList from "../../../word-list";

export const generateWord = (difficulty: number) => {
  let minLen = 3;
  let maxLen = 5;

  if (difficulty === 3) {
    minLen = 3;
    maxLen = 5;
  } else if (difficulty === 10) {
    minLen = 6;
    maxLen = 11;
  } else if (difficulty === 20) {
    minLen = 12;
    maxLen = 20;
  } else {
    minLen = Math.max(3, difficulty);
    maxLen = Math.max(minLen, difficulty);
  }

  const availableMaxLen = Math.min(maxLen, 3 + wordList.length - 1);
  if (minLen > availableMaxLen) return null;

  const length =
    Math.floor(Math.random() * (availableMaxLen - minLen + 1)) + minLen;
  const sizeIndex = length - 3;

  const words = wordList[sizeIndex];
  if (!words || words.length === 0) return null;
  const wordIndex = Math.floor(Math.random() * words.length);
  return words[wordIndex];
};
