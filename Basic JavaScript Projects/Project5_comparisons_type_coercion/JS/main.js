/*---------------------------------------------------------------------------
    1. Utilize the document.write() method and typeof operator to display the 
    data type of a variable of your choosing
----------------------------------------------------------------------------*/

document.write(typeof "Word"); /*DISPLAYS OUTPUT "STRING" */

document.write(typeof 3); /*DISPLAYS OUTPUT "NUMBER" */

/*---------------------------------------------------------------------------
    2. Write an expression combining a string and a number 
----------------------------------------------------------------------------*/

document.write("10" + 5); /*DISPLAYS TYPE COERCION TO TACK "5" ONTO STRING "10" which results in "105" */

/*-------------------------------------------------------------------------------------------------------
    3. Write code utilizing the following Operators: ==, ===, >, <, &&, ||, ! and display them in browser
--------------------------------------------------------------------------------------------------------*/
document.write (10==10); /*DISPLAYS "true" BECAUSE LEFT DATA "10" IS EQUAL TO RIGHT DATA "10" */

X = 10;
Y = 10;
document.write(X === Y); /*DISPLAYS "true" BECAUSE X IS EQUAL TO Y*/

document.write(5 > 2); /*DISPLAYS "true" BECAUSE 5 IS GREATER THAN 2*/

document.write(2 < 5); /*DISPLAYS "true" BECAUSE 2 IS LESS THAN 5*/

document.write(5 > 2 && 10 > 4); /*DISPLAYS "true" BECAUSE 5 IS GREATER THAN 2, AND 10 IS GREATER THAN 4*/

document.write(5 > 10 || 10 > 4); /*DISPLAYS "true" BECAUSE WHILE 5 ISN'T GREATER THAN 10, 10 IS GREATER THAN 4*/


function not_Function(){
    document.getElementById("Not").innerHTML = !(5 > 10); /*DISPLAYS "true" BECAUSE 5 IS LESS THAN 10*/
}

function not_Function1(){
    document.getElementById("Not1").innerHTML = !(20 > 10); /*DISPLAYS "false" BECAUSE 20 IS GREATER THAN 10*/
}