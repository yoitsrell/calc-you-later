/******************
 * YOUR CODE HERE *
 ******************/
function calculate(num1, num2, sym1)
{
  if (sym1 == '+' || (sym1 == 'plus') || (sym1 == 'added to')) 
  {
    return Number(num1) + Number(num2)
  }
  else if (sym1 == '-' || (sym1 == 'minus') || (sym1 == 'subtracted from'))
  {  
    return Number(num1) - Number(num2)
  }
  else if (sym1 == 'x' || (sym1 == 'X') || (sym1 == 'times') || (sym1 == 'multiplied by'))
  {
    return Number(num1) * Number(num2)
  }
  else if (sym1 == '/' || (sym1 == 'divided by'))
  {
    return Number(num1) / Number(num2)
  }
  else if (sym1 == '%'|| (sym1 == 'modulus') || (sym1 == 'mod')) 
  {
    return Number(num1) % Number(num2)
  }
  else if (sym1)
    return "Sorry, that's not a mathematical operation!"
  }

 

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;