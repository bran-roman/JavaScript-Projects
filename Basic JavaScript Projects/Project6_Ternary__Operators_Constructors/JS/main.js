function Vote_Function() { /*Voting Function*/
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You can not vote":"You can vote";
    document.getElementById("Ride").innerHTML = Can_Vote;
}

function Vehicle(Make, Model, Year, Color) { /*Vehicle Function*/
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

/*Name and Vehicle variables for function "myFunction()" */
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeeo", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

/*Displays name of variable + what car they drive when user clicks button*/
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

/*Name Function*/
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

/*Constructor for function "myPerson"*/
const myBrother = new Person("Brandon", "Roman", 26, "brown"); /* Creates a Person Object */

/*Displays person's age when user clicks on button*/
function myPerson() {
    document.getElementById("bro").innerHTML = "My brother is " + myBrother.age + ".";
}

/*Displays the reuslt of "10" because the Plus_one() function was the nested function*/
function nest_Function() {
    document.getElementById("nesting").innerHTML = nest();
    function nest() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}