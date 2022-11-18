
/* Functions utilizing Methods */

/* concat() method */
function full_Sentence() { /* Displays full_sentence with every part when button is clicked */
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

/* slice() method */
function slice_Method() { /* Displays a section extract of the string + returns section extract in a new string "Johnny" when button is clicked */
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

/* toString method */
function toUpperCase() { /* Displays uppercase text of "HELLO WORLD" when button is clicked */
    let text = "Hello World!";
    let result = text.toUpperCase();
    document.getElementById("upper").innerHTML = result;
}

/* search() method */
function search() { /* Displays a string matched against a regular expression which results in "4" when button is clicked  */
    let text = "Mr. Blue has a blue house"
    let position = text.search("Blue");
    document.getElementById("search").innerHTML = position;
}

/* toString() method */
function string_Method() { /* Displays number returned as a string, which in this case results in "182*/  
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

/* toPrecision() method */
function precision_Method() { /* Displays formatted number to a specified length, which in this case results in "12938.30130" */
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

/* toFixed() method */
function fixed_Method() { /* Displays converted number to a string + rounds string to a specified number of decimals, which in this case results in "6" */ 
    let num = 5.56789;
    let n = num.toFixed();
    document.getElementById("Fixed").innerHTML = n;
}

/* valueOf() method*/ 
function value_Method() { /* Displays returned primitive value of a number, which in this case results in "15"  */
    let num = 15;
    n = num.valueOf();
    document.getElementById("value").innerHTML = n;
}