//business logic
var romanNumeral = function(userInput){
  
}

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
