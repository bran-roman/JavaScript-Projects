//THIS VARIABLE KEEPS TRACK OF WHOSE TURN IT IS.
let activePlayer = 'X';

//THIS ARRAY STORES AN ARRAY OF MOVES. WE USE THIS TO DETERMINE WIN CONDITIONS.
let selectedSquares = [];

//THIS FUNCTION IS FOR PLACING AN X OR O IN A SQUARE.
function placeXOrO(squareNumber) {
    //THIS CONDITION ENSURES A SQUARE HASN'T BEEN SELECTED ALREADY.
    //THE .some() METHOD IS USED TO CHECK EACH ELEMENT OF THE selectSquare ARRAY
    //TO SEE IF IT CONTAINS THE SQUARE NUMBER CLICKED ON.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //THIS VARIABLE RETRIEVES THE HTML ELEMENT ID THAT WAS CLICKED.
        let select = document.getElementById(squareNumber);
        //THIS CONDITION CHECKS WHO'S TURN IT IS.
        if (activePlayer === 'X') {
            //IF ACTIVEPLAYER IS EQUAL TO 'X', THE x.png IS PLACED IN HTML
            select.style.backgroundImage = 'url("images/x3.png")';
            //ACTIVE PLAYER MAY ONLY BE 'X' OR 'O'SO, IF NOT 'X' IT MUST BE 'O'
        } else {
            //IF ACTIVEPLAYER IS EQUAL TO '0', THE o.png IS PLACED IN HTML
            select.style.backgroundImage = 'url("images/o5.jfif")';
        }
        //squareNumber AND activePlayer ARE CONCATENATED TOGETHER + ADDED TO ARRAY.
        selectedSquares.push(squareNumber + activePlayer);
        //THIS CALLS A FUNCTION TO CHECK FOR ANY WIN CONDITIONS.
        checkWinConditions();
        //THIS CONDITION IS FOR CHANGING THE ACTIVE PLAYER.
        if (activePlayer === 'X') {
            //IF ACTIVE PLAYER IS 'X' CHANGE IT TO 'O'.
            activePlayer = 'O';
            //IF ACTIVE PLAYER IS ANYTHING OTHER THAN 'X'
        } else {
            //CHANGE THE activePlayuer to 'X'
            activePlayer = 'X';
        }
        //THIS FUNCTION PLAYS PLACEMENT SOUND.
        audio('./media/place2.mp3');
        //THIS CONDITION CHECKS TO SEE IF IT IS THE COMPUTERS TURN.
        if (activePlayer === 'O') {
            //THIS FUNCTION DISABLES CLICKING FOR COMPUTERS TURN.
            disableClick();
            //THIS FUNCTION WAITS 1 SECOND BEFORE THE COMPUTER PLACESC AN IMAGE + ENABLES CLICK.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //RETURNING TRUE IS NEEDED FOR OUR computersTurn() FUNCTION TO WORK.
        return true;
    }
    //THIS FUNCTION RESULTS IN A RANDOM SQUARE BEING SELECTED BY THE COMPUTER.
    function computersTurn() {
        //THIS BOOLEAN IS NEEDED FOR OUR WHILE LOOP.
        let success = false;
        //THIS VARIABLE STORES A RANDOM NUMBER 0-8
        let pickASquare;
        //THIS CONDITION ALLOWS OUR AWHILE LOOP TO KEEP TRYING IF A SUQARE IS SELECTED ALREADY.
        while (!success) {
            //A RANDOM NUMBER BETWEEN 0 AND 8 IS SELECTED.
            pickASquare = String(Math.floor(Math.random() * 9));
            //IF THE RANDOM NUMBER EVALUATED RETURNS TRUE, THE SQUARE HASN'T BEEN SELECTED YET.
            if (placeXOrO(pickASquare)) {
                //THIS LINE CALLS THE FUNCTION.
                placeXOrO(pickASquare);
                //THIS CHANGES OUR BOOLEAN + ENDS THE LOOP.
                success = true;
            };
        }
    }
}
// THIS FUNCTION PARSES THE SELECTED SQUARES ARRAY TO SEARCH FOR WIN CONDITIONS
// drawLine() FUNCTION IS CALLED TO DRAW A LINE ON THE SCREEN IF THE CONDITION IS MET.
function checkWinConditions() {
    // X 0, 1, 2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5, condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition.
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //THIS CONDITION CHECKS FOR A TIE. IF NONE OF THE ABOVE CONDITIONS ARE MET AND
    //9 SQUARES ARE SELECTED THE CODE EXECUTES.
    else if (selectedSquares.length >= 9) {
        //THIS FUNCTION PLAYS THE TIE GAME SOUND.
        audio('./media/tie2.mp3');
        //THIS FUNCTION SETS A .3 SECOND TIMER BEFORE THE resetGame IS CALLED
        setTimeout(function () { resetGame(); }, 500);
    }
    //THIS FUNCTION CEHCKS IF AN ARRAY INCLUDES 3 STRINGS. IT IS USED TO CHECK FOR
    //EACH WIN CONDITION.
    function arrayIncludes(squareA, squareB, squareC) {
        //THESE 3 VARIABLES WILL BE USED TO CHECK FOR 3 IN A ROW.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //IF THE 3 VARIABLES WE PASS ARE ALL INCLUDED IN OUR ARRAY THEN
        //TRUE IS RETURNED AND OUR ELSE IF CONDITION EXECUTES THE drawLine() FUNCTION.
        if (a === true && b === true && c === true) { return true; }
        }
    }

    //THIS FUNCTION MAKES OUR BODY ELEMENT TEMPORARILY UNCLICKABLE.
    function disableClick() {
        //THIS MAKES OUR BODY UNCLICKABLE.
        body.style.pointerEvents = 'none';
        //THIS MAKES OUR BODY CLICKABLE AGAIN AFTER 1 SECOND.
        setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
    }

    //THIS FUNCTION TAKES A STRING PARAMTER OF THE PATH YOU SET EARLIER FOR
    //PLACEMENT SOUND('./media/place.mp3')
    function audio(audioURL) {
        //WE CREATE A NEW AUDIO OBJECT + WE PASS THE PATH AS A PARAMTER.
        let audio = new Audio(audioURL);
        //PLAY METHOD PLAYS OUR AUDIO SOUND.
        audio.play();
    }

    //THIS FUNCTION UTILIZES HTML CANVAS TO DRAW WIN LINES
    function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
        //THIS LNE ACCESSES OUR HTML CANVAS ELEMENT.
        const canvas = document.getElementById('win-lines');
        //THIS LINE GIVES US ACCESS TO METHODS + PROPERTIES TO USE ON CANVAS.
        const c = canvas.getContext('2d');
        //THIS LINE INDICATES WHERE THE START OF A LINES x ASIS IS.
        let x1 = coordX1,
            //THIS LINE INDICATES WHERE THE START OF A LINES y AXIS is.
            y1 = coordY1,
            //THIS LINE INDICATES WHERE THE END OF A LINES x ASIS IS.
            x2 = coordX2,
            //THIS LINE INDICATES WHERE THE END OF A LINES y AXIS IS.
            y2 = coordY2,
            //THIS VARIABLE STORES TEMPORARY x AXIS DATA WE UPDATE IN OUR ANIMATION LOOP.
            x = x1,
            //THIS VAIRABLE STORES TEMPORARY y AXIS DATA WE UPDATED IN OUR ANIMATION LOOP.
            y = y1;
        //THIS FUNCTION INTERACTS WITH THE CANVAS.
        function animateLineDrawing() {
            //THIS VAIRABLE CREATES A LOOP.
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            //THIS METHOD CLEARS CONTENT FROM THE LAST LOOP ITERATION.
            c.clearRect(0, 0, 608, 608);
            //THIS METHOD STARTS A NEW PATH.
            c.beginPath();
            //THIS METHOD MOVES US TO A STARTING POINT IN OUR LINE.
            c.moveTo(x1, y1);
            //THIS METHOD INDICATES THE END POINT IN OUR LINE.
            c.lineTo(x, y);
            //THIS METHOD SETS THE WIDTH OF OUR LINE.
            c.lineWidth = 10;
            //THIS METHOD SETS THE COLOR OF OUR LINE.
            c.strokeStyle = 'rgba(70, 255, 33, .8)';
            //THIS METHOD DRAWS EVERYTHING WE LAID OUT ABOVE.
            c.stroke();
            //THIS CONDITION CHECKS IF WE'VE REACHED THE ENDPOINTS.
            if (x1 <= x2 && y1 <= y2) {
                //THIS CONDITION ADDS 10 TO THE PREVIOUS END x ENDPOINT.
                if (x < x2) { x += 10; }
                //THIS CONDITION ADDS 10 TO THE PREVIOUS END y ENDPOINT.
                if (y < y2) { y += 10; }
                //THIS CONDITION IS SIMILAR TO THE ONE ABOVE.
                //THIS IS NECESSARY FOR THE 6, 4, 2 WIN CONDITIONS.
                if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
            }
            //THIS CONDITION IS SIMILAR TO THE ONE ABOVE.
            //THIS IS NECESSARY FOR THE 6, 4, 2 WIN CONDITION.
            if (x1 <= x2 && y1 >= y2) {
                if (x < x2) { x += 10; }
                if (y > y2) { y -= 10; }
                if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
            }
        }
        //THIS FUNCTION CLEARS OUR CANVAS AFTER OUR WIN LINE IS DRAWN.
        function clear() {
            //THIS LINE STARTS OUR ANIMATION LOOP.
            const animationLoop = requestAnimationFrame(clear);
            //THIS LINE CLEARS OUR CANVAS.
            c.clearRect(0, 0, 608, 608);
            //THIS LINE STOPS OUR ANIMATION LOOP.
            cancelAnimationFrame(animationLoop);
        }
        //THIS LINE DISALLOWS CLICKING WHILE THE WIN SOUND IS PLAYING
        disableClick();
        //THIS LINE PLAYS THE WIN SOUNDS.
        audio('./media/win.mp3');
        //THIS LINE CALLS OUR MAIN ANIMATION LOOP.
        animateLineDrawing();
        //THIS LINE WAITS 1 SECOND. THEN, CLEARS CANVAS, RESETS GAME, AND ALLOWS CLICKING AGAIN.
        setTimeout(function () { clear(); resetGame(); }, 1000);
    }

    //THIS FUNCTION RESETS TEH GAME IN THE EVENT OF A TIE OR A WIN.
    function resetGame() {
        //THIS FOR LOOP ITERATES THROUGH EACH HTML SQUARE ELEMENT.
        for (let i = 0; i < 9; i++) {
            //THIS VARIABLE GETS THE HTML ELEMENT i.
            let square = document.getElementById(String(i));
            //THIS REMOVES OUR ELEMENTS backgroundImage.
            square.style.backgroundImage = '';
        }
        //THIS RESETS OUR ARRAY SO IT IS EMPTY AND WE CAN START OVER.
        selectedSquares = [];
    }