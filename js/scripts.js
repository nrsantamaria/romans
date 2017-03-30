//business logic
var romanNumeral = function(userInput){
  var functionsArray = [thousands, hundreds, tens, singles];
  var resultArray = [];
  var userInputArray = userInput.toString().split("");
  var romanNumeralArray = ["I", "V", "X", "L", "C", "D", "M"];
  var romanNumeralSplit = [];
  var numbersArray = numbers(userInputArray);
  var forRomans = function(index) {
    for (var j = index; j < functionsArray.length; j++) {
      resultArray.push(functionsArray[j](numbersArray[j]));
    };
  };

  var r = 0



  if (userInput > 999) {
    forRomans(0);
    return resultArray.join('');
  } else if (userInput > 99) {
    numbersArray.unshift(0);
    forRomans(0);
    return resultArray.join('');
  } else if (userInput > 10) {
    numbersArray.unshift(0, 0);
    forRomans(0);
    return resultArray.join('');
  } else if (userInput > 0) {
    numbersArray.unshift(0, 0, 0);
    forRomans(3);
    return resultArray.join('');
  } ;


  // while (r < 3999) {
  //   if (userInput > 999){
  //     thousands(numbersArray[r]);
  //     r++;
  //   } else if (userInput > 99){
  //     hundreds(numbersArray[r]);
  //     r++;
  //   } else if (userInput > 10){
  //     tens(numbersArray[r]);
  //     r++;
  //   } else if (userInput > 0){
  //     singles(numbersArray[r]);
  //   }
  //   return text;
  // };
};

//numerals from one to ten
var singles = function(s){
  var i = 0;
  var text = "";
  while (i < 5 && i < s) {
    if (i<3) {
      text += "I";
      i++;
    } else if (i===3) {
      text = "IV";
      i++;
    } else if (i===4) {
      text = "V";
      i++;
    }
  };
  while (i <= 9 && i < s) {
    if (i<8) {
      text += "I";
      i++;
    } else if (i===8) {
      text = "IX";
      i++;
    } else if (i===9) {
      text = "X";
      i++;
    }
  };
  return text;
};
//numerals from ten to 99
var tens = function(t){
  var i = 0;
  var text = "";
  while (i < 5 && i < t) {
    if (i<3) {
      text += "X";
      i++;
    } else if (i===3) {
      text = "XL";
      i++;
    } else if (i===4) {
      text = "L";
      i++;
    }
  };
  while (i <= 9 && i < t) {
    if (i<8) {
      text += "X";
      i++;
    } else if (i === 8) {
      text = "XC";
      i++;
    }
  };
  return text;
};
//numerals from 100 to 900
var hundreds = function(h){
  var i = 0;
  var text = "";
  while (i < 5 && i < h) {
    if (i<3) {
      text += "C";
      i++;
    } else if (i===3) {
      text = "CD";
      i++;
    } else if (i===4) {
      text = "D";
      i++;
    }
  };
  while (i <= 9 && i < h) {
    if (i<8) {
      text += "C";
      i++;
    } else if (i===8) {
      text = "CM";
      i++;
    }
  };
  return text;
};
//numerals from 1000 to 3000
var thousands = function(m){
  var i = 0;
  var text = "";
  while (i < 3 && i < m) {
    text += "M";
    i++;
  };
  return text;
};

var numbers = function(array){
  var userNumbersArray = [];
  array.forEach(function(number) {
    userNumbersArray.push(parseInt(number));
  });
  return userNumbersArray;
};

//user interface logic
$(document).ready(function(){
  $("form.roman-form").submit(function(event){
    event.preventDefault();
    var userInput = $("input[name=number]").val();
    // var userInputArray = userInputString.split("");
    var result = romanNumeral(userInput);
    $(".results").show();
    $(".results").text(result);
  });
});
