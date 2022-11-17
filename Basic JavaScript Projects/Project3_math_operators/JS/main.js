
function addition_Function(){
  var addition = 2 + 2; /* var addition will display "2+2" */
  document.getElementById("add").innerHTML = "2 + 2 = " + addition; /* when <p id="add", click button to display result*/
}

function subtraction_Function(){
  var subtraction = 5 - 2; /* var subtraction will display "5-2" */
  document.getElementById("subtract").innerHTML = "5 - 2 = " + subtraction; /* when <p id="subtract", click button to display result*/
}

function multiplication(){
  var simple_Math = 6 * 8; /* var simple_Math will display "6 x 8" */
  document.getElementById("multiply").innerHTML = "6 x 8 = " + simple_Math; /* when <p id="multiply", click button to display result */
}

function division(){
  var simple_Math2 = 48 / 6; /* var simple_Math2 will display "48 / 6" */
  document.getElementById("divide").innerHTML = "48 / 6 = " + simple_Math2; /* when <p id="divide", click button to display result */
}

function more_Math(){
  var simple_math3 = (1 + 2) * 10 / 2 -5; /* var simple_Math3 will display (1+2) x 10 / 2 -5 */
  document.getElementById("more").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math3; /* when <p id="more", click button to display result */
}

function modulus_Operator(){
  var simple_Math4 = 25 % 6; /* var simple_Math4 will display remainder of 25 % 6 */
  document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math4; /* when <p id="mod", click button to display result */
}
function negation_Operator(){
  var x = 10; /* var x is 10 */
  document.getElementById("negate").innerHTML= -x; /* when <p id="negate", click button to display the negative of x */
}

function increment(){
  var X = 5; /* var X is 5 */
  X++; /* "++" displays increment (+1) of X */
  document.write(X); /* when <p id="increment", click the button to display the increment of 5 */
}

function decrement(){
  var X = 5.25; /* var X is 5.25 */
  X--; /* "--" displays decrement (-1) of X */
  document.write(X); /* when <p id="decrement", click the button to display the decrement of 5.25 */
}

function math_random(){
  document.getElementById("random").innerHTML= Math.random(); /* when <p id="random", click the button to display a random number from 0-1 */ 
}
function math_round(){
  document.getElementById("round").innerHTML= Math.round(4.6); /* when <p id="round", click the button to display a rounded number to the nearest integer of 4.6 */
}

