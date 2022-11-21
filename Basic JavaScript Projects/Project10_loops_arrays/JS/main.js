/* 1. Function utilizing While Loop - Displays 1-10 when button is clicked*/
function count_To_Ten() { 
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

/* Length Function - Displays length of string which here is "12" */
function Length() {
    let text = "Hello World!";
    let length = text.length;
    document.getElementById("len").innerHTML=length;
}

/* 2. Function utilizing For Loop * - Displays instruments list when button is clicked*/
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
function for_Loop() {
    for (Y=0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML= Content;
}

/* 3. Function utilizing Array - Displays result of "Who is that Pokemon?" returning the result "It's Pikachu" */
function array_Function() {
    var Pokemon = [];
    Pokemon[0] = "Pikachu";
    Pokemon[1] = "Oshowat";
    Pokemon[2] = "Cyndaquil";
    Pokemon[3] = "Treeko"
    document.getElementById("Array").innerHTML = "It's " +
        Pokemon[0] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

/* 4. Object created using "let" keyword, resulting in "82, 33, 82" */
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

/* Return Function - Displays returned value of Pi*/
function myFunction() {
    var Z = Math.PI;
    return Z;
}
document.getElementById("return").innerHTML = myFunction();

/* Object Assignment - Displays return result of "This car is a 2021 red Dodge Viper*/
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

/* Break Statement - Displays result of "The number is 0," "The number is 1," and "The number is 2" */
let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

/* Continue Statement - Displays result of "The number is (0->9) "*/
for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;