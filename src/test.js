var sipValue =1000;
var percentage = 7;
var timePeriod = 2;

var i = ((percentage/100)/12);
var n = (timePeriod*12);


var result = Math.floor(parseInt(sipValue) * ((Math.pow(percentage / 400 + 1, Math.floor((timePeriod*12) / 3)) - 1) / (1-(Math.pow(percentage / 400 + 1,(-1/3))))));

console.log(result);