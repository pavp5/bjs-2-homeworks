"use strict"
function solveEquation(a, b, c) {
  let arr = [];  
  let D = b*b - 4*a*c;
  if (D > 0) {
    D =  Math.sqrt(D);
    arr[0] = (-b + D)/(2*a);
    arr[1] = (-b - D)/(2*a);
  } else if (D == 0) {
    arr[0] = -b/(2*a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let sum = 0;
  let P = (percent/100)/12;
  amount -= contribution;
  for (let n=1; n<=countMonths; n++) {
    sum += amount * (P + (P / (((1 + P)**countMonths) - 1)));
  }
  return Math.round(sum * 100) / 100;

}