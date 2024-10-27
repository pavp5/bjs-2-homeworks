"use strict"
function solveEquation(a, b, c) {
  let arr = [];  
  let discriminant = b*b - 4*a*c;
  if (discriminant > 0) {
    arr[0] = (-b + Math.sqrt(discriminant))/(2*a);
    arr[1] = (-b - Math.sqrt(discriminant))/(2*a);
  } else if (discriminant == 0) {
    arr[0] = -b/(2*a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {  
  let monthPercent = (percent/100)/12;
  let sum = countMonths * ((amount-contribution) * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1))));
  return Math.round(sum * 100) / 100;
}