function displayDate(){ //This was used to set up the buttom from earlier in the assignment that's not being used now
    document.getElementById("demo").innerHTML=Date(); 
}

function myFunction(){ //This is the function including the += Operator that's in use
    var sentence="I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentence;
}