function randomRangeNumber(minNumber, maxNumber) {
  console.log(
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber
  );
}

randomRangeNumber(1, 100);
