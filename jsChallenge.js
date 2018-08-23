function sixtyFive(num1, num2){
  num1 = Number(document.getElementById('numberOne').value);
  num2 = Number(document.getElementById('numberTwo').value);
  var sum = num1 + num2;
  if (sum == 65 || num1 == 65 || num2 == 65)
  document.getElementById('sixtyFive').innerHTML = true;
  else
  document.getElementById('sixtyFive').innerHTML = false;
}

function areaOfTriangle(){
  var height = 8;
  var base = 9;
  var area = .5 * (base * height);
  document.getElementById('calcArea').innerHTML = area;
}

function maxNum(){
var  num1 = Number(document.getElementById('firstNum').value);
var  num2 = Number(document.getElementById('secondNum').value);
var  num3 = Number(document.getElementById('thirdNum').value);
  if(num1 > num2 && num1 > num3)
  document.getElementById('max').innerHTML = num1;
  else if(num2 > num1 && num2 > num3)
  document.getElementById('max').innerHTML = num2;
  else if (num3 > num1 && num3 > num2)
  document.getElementById('max').innerHTML = num3;
}

function minutesToHours(){
  var minutes = Number(document.getElementById('beforeConversion').value);
  var hours = (minutes / 60);
  var mins = (minutes % 60);
    var time = hours.toFixed(0) + " hour(s), " + mins.toFixed() + " minute(s).";
    document.getElementById('afterConversion').innerHTML = time;
}

function matchingLetters(){
  var firstWord = document.getElementById('firstString').value;
  var secondWord = document.getElementById('secondString').value;
  var repCharacters = [];

  for(i = 0; i <= firstWord.length; i++){
      if(secondWord.indexOf(firstWord[i]) >= 0)
      repCharacters.push(firstWord[i]);
    }
  document.getElementById('repeatLetters').innerHTML = repCharacters;
}
