function findMean(arr) {
  const mean = arr.reduce((acc, curr) => acc + curr) / arr.length;
  return mean.toFixed(2);
}


function findMedian(arr) {
  const mid = Math.floor(arr.length / 2);
  const sorted = [...arr].sort((a, b) => a - b);
  const median = arr.length % 2 !== 0 ? sorted[mid] : (sorted[mid] + sorted[mid - 1]) / 2;
  return median.toFixed(2);
}


function findMode(arr) {
  console.log('findMode arr', arr)
  const obj = {};
  let max = 0;
  let mode = 0;
  arr.forEach((num) => {
    obj[num] = obj[num] + 1 || 1;
  });
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      mode = key;
    }
  }
  console.log('findMode mode', mode)
  return mode;
}


function convertAndValidateNums(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let elementToNumber = Number(numsAsStrings[i]);

    if (Number.isNaN(elementToNumber)) {
      return new Error(
        `The value '${numsAsStrings[i]}' at index ${i} is not a valid number.`
      );
    }

    result.push(elementToNumber);
  }
  return result;
}


module.exports = {
  findMean,
  findMedian,
  findMode, 
  convertAndValidateNums
}

