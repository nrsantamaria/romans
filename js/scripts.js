//business logic
var romanNumeral = function(userInput){
  var romanNumeralArray = ["I", "V", "X", "L", "C", "D", "M"];
  var romanNumeralSplit = [];
  var text = "";
  var i = 0;
  while (i < 5 && i < userInput) {
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
  while (i <= 9 && i < userInput) {
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
  romanNumeralSplit.push(text);
  return romanNumeralSplit.join('');
};


//user interface logic
$(document).ready(function(){

  $("form.roman-form").submit(function(event){
    event.preventDefault();
    var userInput = $("input[name=number]").val();
    var result = romanNumeral(userInput);
    $(".results").show();
    $(".results").text(result);
  });
});
