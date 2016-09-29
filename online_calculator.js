var num1 = [],
  	num2 = [],
  	operator = null,
  	solved = false,
  	$screen = $("#screen"),
    result = 0;

$(".numpad").click(function() {
  var input = $(this).text();

  if (!operator) {
  		if (num1.length < 12) {
          num1.push(input);
          $("#screen").html(num1.join(""));
      }
  }
  else {
  			if (num2.length < 12) {
            num2.push(input);
            $("#screen").html(num2.join(""));
            }
  }

 });

 $(".operator").click(function() {
 				// check if number1 exists and number2 doesn't. //
 				if (num1.length > 0 && num2.length === 0) {
        		operator = $(this).text();
            $("#screen").html(operator);
        }
        //if num1 and num2 exist then we calculate result value and 					adding the operator to the result//
        else if (num1.length > 0 && num2.length > 0 && operator) {
        				result = calculate(num1, operator, num2)
                num1.length = 0;
                num1.push(result);
                num2.length = 0;
                operator = $(this).text();
                //console.log(calculate(result));
                $("#screen").html(result+operator);
        }
});

$("#clear").click(function() {
						clear();
            $("#screen").html("0");
});

$("#equals").click(function() {
						if (num1.length > 0 && num2.length > 0 && operator) {
						result = calculate(num1, operator, num2);
            num1.length = 0;
            num1.push(result);
            num2.length = 0;
            operator = null;
            $("#screen").html(result);
            }
});

function calculate(num1,operator, num2) {
				var n1 = parseFloat(num1.join(""));
       	var n2 = parseFloat(num2.join(""));
        switch(operator) {
          case "x":
          result = n1 * n2;
          break;

          case "+":
          result = n1 + n2;
          break;

          case "-":
          result = n1 - n2;
          break;

          case "%":
          result = n1 / n2;
          break;


        }
        return result;
};



function clear() {
		num1.length = 0;
    num2.length = 0;
    operator = null;
    console.log(operator);
};
