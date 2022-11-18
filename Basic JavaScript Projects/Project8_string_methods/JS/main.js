function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function toUpperCase() {
    let text = "Hello World!";
    let result = text.toUpperCase();
    document.getElementById("upper").innerHTML = result;
}

function search() {
    let text = "Mr. Blue has a blue house"
    let position = text.search("Blue");
    document.getElementById("search").innerHTML = position;
}