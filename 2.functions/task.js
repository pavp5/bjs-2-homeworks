function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }
  let avg = Math.round(sum * 100 / arr.length) / 100;
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce(function (sum, current) {
    return sum + current
  }, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) return 0;
  return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) sumEvenElement += arr[i];
    else sumOddElement += arr[i];
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] % 2 == 0) {
  //     sumEvenElement += arr[i];
  //     countEvenElement += 1;
  //   }
  // }
  sumEvenElement = arr.reduce(function (sum, current) {
    if (current % 2 == 0) {
      countEvenElement += 1;
      return sum + current
    } else return sum;
  }, 0);
  if (countEvenElement == 0) return 0;
  return Math.round(sumEvenElement * 100 / countEvenElement) / 100;
}

function makeWork(arrOfArr, func) {
  if (arrOfArr.length == 0) return -Infinity;
  // let maxWorkerResult = func(...arrOfArr[0]);
  // let funcResult = maxWorkerResult;
  // for (let i = 0; i < arrOfArr.length; i++) {
  //     funcResult = func(...arrOfArr[i]);
  //     if (maxWorkerResult < funcResult) maxWorkerResult = funcResult;
  // }
  // return maxWorkerResult;
  let currentResult = 0;
  return arrOfArr.reduce(function (maxWorkerResult, current) {
    currentResult = func(...current);
    return (maxWorkerResult > currentResult ? maxWorkerResult : currentResult);
  }, -Infinity);
}
