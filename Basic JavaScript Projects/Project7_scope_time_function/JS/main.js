/*Global Variable*/
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

/*Local Varible ("Y" not originally defined in Add_numbers_4 because Y is outside of function*/
function Add_numbers_3() {
    var Y = 20
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    var Y = 20 /*Adding "Y" becuase it wasn't originally defined inside the function */
    document.write(Y + 100);
}

Add_numbers_3();
Add_numbers_4();

/*Console.log() Method - Error because "Y" not originally defined in Add_number_6 */
function Add_numbers_5() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_6() {
    console.log(Y + 100);
}
Add_numbers_5();
Add_numbers_6();
 
/*If Statement that displays "How are you today?" if it's before (less than) 6:00pm */
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

/*Displays result of whether user is allowed to drink depending on Age input"*/
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) { /*If age is 21 or older, Drink result will display "Your old enough to drink!"*/
        Drink = "Your old enough to drink! ";
    }
    else {
        Drink = "You are not old enough to drink!"; /*If age is less than 21, drink result will display "You are not old enough to drink"*/
    }
    document.getElementById("How_old_are_you?").innerHTML = Drink;
}

/*Time_function that displays the time of day when the button input is pressed */
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { /*If time is before 12, the reply will be "It is morning time!" */
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { /*Or else if time is greater than or equal to 12, the reply will be "It is afternoon." */
        Reply = "It is afternoon.";
    }
    else { /*If neither of the above "if" and "else if" statements are true, then reply will be "It is evening time." */
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}