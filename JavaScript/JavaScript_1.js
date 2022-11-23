function Sport_Function() {
    var Sport_Output;
    var Sports = document.getElementById("Sport_Input").value;
    var Sport_String = " is my favorite Sport!";
    switch(Sports) {
        case "Football":
            Sport_Output = "Football" + Sport_String;
        break;
        case "Basketball":
            Sport_Output = "Basketball" + Sport_String;
        break;
        case "ESports":
            Sport_Output = "ESports" + Sport_String;
        break;
        default:
            Sport_Output = "Please enter a sport exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Sport_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var C = document.getElementById("myCanvas2");
var Ctx = C.getContext("2d");

var grd = Ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

Ctx.fillStyle = grd;
Ctx.fillRect(20, 20, 150, 100);
