var inputNumber = 12; // Рандомне число

function numberToText(number) {
    var ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  
    if (number === 0) {
      return "zero";
    }
  
    var text = "";
  
    if (number >= 100) {
      text += ones[Math.floor(number / 100)] + " hundred ";
      number %= 100;
    }
  
    if (number >= 20) {
      text += tens[Math.floor(number / 10)];
      if (number % 10 !== 0) {
        text += " " + ones[number % 10];
      }
    } else if (number >= 11) {
      text += teens[number - 10];
    } else {
      text += ones[number];
    }
   
    return text;
  }

  var textRepresentation = numberToText(inputNumber);
  console.log(textRepresentation);
