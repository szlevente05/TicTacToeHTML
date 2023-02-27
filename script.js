// Block context menu
document.addEventListener('contextmenu', event => event.preventDefault());

// Count variable is used to keep track of the number of turns
let count = 2;


// Array to keep track of the cells
let myArray = [0, 0, 0,
               0, 0, 0,
               0, 0, 0];


// Declare all the cells
let cell_0 = document.querySelector("#cell-0");
let cell_1 = document.querySelector("#cell-1");
let cell_2 = document.querySelector("#cell-2");
let cell_3 = document.querySelector("#cell-3");
let cell_4 = document.querySelector("#cell-4");
let cell_5 = document.querySelector("#cell-5");
let cell_6 = document.querySelector("#cell-6");
let cell_7 = document.querySelector("#cell-7");
let cell_8 = document.querySelector("#cell-8");


// Array to store all the cells
let cells = [cell_0, cell_1, cell_2, cell_3, cell_4, cell_5, cell_6, cell_7, cell_8]


// Get the message element
let msg = document.querySelector("#msg");


// Function to check if the game is over
function checkGame() {

    // Check rows
    if (myArray[0] == myArray[1] && myArray[1] == myArray[2] && myArray[0] != 0) {
        if (myArray[0] == 'O') {
 
            // Message to be displayed
            msg.innerHTML = "Nyert a O";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }

        else {
           
            // Message to be displayed
            msg.innerHTML = "Nyert az X";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }
    }
    else if(myArray[3] == myArray[4] && myArray[4] == myArray[5] && myArray[3] != 0) {
        if (myArray[3] == 'O') {
         
            // Message to be displayed
            msg.innerHTML = "Nyert a O";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }

        else {
        
            // Message to be displayed
            msg.innerHTML = "Nyert az X";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }
    }
    else if(myArray[6] == myArray[7] && myArray[7] == myArray[8] && myArray[6] != 0) {
        if (myArray[6] == 'O') {
         
            // Message to be displayed
            msg.innerHTML = "Nyert a O";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }

        else {
        
            // Message to be displayed
            msg.innerHTML = "Nyert az X";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }
    }


    // Check columns
    else if(myArray[0] == myArray[3] && myArray[3] == myArray[6] && myArray[0] != 0) {
        if (myArray[0] == 'O') {
         
            // Message to be displayed
            msg.innerHTML = "Nyert a O";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }

        else {
        
            // Message to be displayed
            msg.innerHTML = "Nyert az X";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }
    }
    else if(myArray[1] == myArray[4] && myArray[4] == myArray[7] && myArray[1] != 0) {
        if (myArray[1] == 'O') {
           
            // Message to be displayed
            msg.innerHTML = "Nyert a O";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }

        else {
           
            // Message to be displayed
            msg.innerHTML = "Nyert az X";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }
    }
    else if(myArray[2] == myArray[5] && myArray[5] == myArray[8] && myArray[2] != 0) {
        if (myArray[2] == 'O') {
          
            // Message to be displayed
            msg.innerHTML = "Nyert a O";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }

        else {
          
            // Message to be displayed
            msg.innerHTML = "Nyert az X";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }
    }

    // Check diagonals
    else if (myArray[0] == myArray[4] && myArray[4] == myArray[8] && myArray[0] != 0) {
        if (myArray[0] == 'O') {
           
            // Message to be displayed
            msg.innerHTML = "Nyert a O";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }

        else {
         
            // Message to be displayed
            msg.innerHTML = "Nyert az X";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }
    }
    else if (myArray[2] == myArray[4] && myArray[4] == myArray[6] && myArray[2] != 0) {
        if (myArray[2] == 'O') {
         
            // Message to be displayed
            msg.innerHTML = "Nyert a O";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }

        else {
         
            // Message to be displayed
            msg.innerHTML = "Nyert az X";
            
            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }
    }


    // Check if the game is a draw
    else {
        if (count == 11) {
          
            // Message to be displayed
            msg.innerHTML = "Dontetlen meccs";

            // Disable all the cells
            for (let i = 0; i < cells.length; i++) {
                cells[i].style.pointerEvents = "none";
            }

            // Throw an error to stop the execution of the code
            throw new Error("Game Over");
        }
    }
}


// Add event listeners to all the cells
cell_0.addEventListener("click", markCell = () => {
    if (cell_0.firstChild.getAttribute("src") == "pics/Default.png") {
        if (count % 2 == 0) {
            cell_0.firstChild.setAttribute("src", "pics/O.png");
            myArray[0] = 'O';
            count++;
            checkGame();
        }
        else if (count % 2 != 0) {
            cell_0.firstChild.setAttribute("src", "pics/X.png");
            myArray[0] = 'X';
            count++;
            checkGame();
        }
    }
    else {
        alert("This cell is already marked");
    }
});


cell_1.addEventListener("click", markCell = () => {
    if (cell_1.firstChild.getAttribute("src") == "pics/Default.png") {
        if (count % 2 == 0) {
            cell_1.firstChild.setAttribute("src", "pics/O.png");
            myArray[1] = 'O';
            count++;
            checkGame();
        }
        else if (count % 2 != 0) {
            cell_1.firstChild.setAttribute("src", "pics/X.png");
            myArray[1] = 'X';
            count++;
            checkGame();
        }
    }
    else {
        alert("This cell is already marked");
    }
});


cell_2.addEventListener("click", markCell = () => {
    if (cell_2.firstChild.getAttribute("src") == "pics/Default.png") {
        if (count % 2 == 0) {
            cell_2.firstChild.setAttribute("src", "pics/O.png");
            myArray[2] = 'O';
            count++;
            checkGame();
        }
        else if (count % 2 != 0) {
            cell_2.firstChild.setAttribute("src", "pics/X.png");
            myArray[2] = 'X';
            count++;
            checkGame();
        }
    }
    else {
        alert("This cell is already marked");
    }
});

cell_3.addEventListener("click", markCell = () => {
    if (cell_3.firstChild.getAttribute("src") == "pics/Default.png") {
        if (count % 2 == 0) {
            cell_3.firstChild.setAttribute("src", "pics/O.png");
            myArray[3] = 'O';
            count++;
            checkGame();
        }
        else if (count % 2 != 0) {
            cell_3.firstChild.setAttribute("src", "pics/X.png");
            myArray[3] = 'X';
            count++;
            checkGame();
        }
    }
    else {
        alert("This cell is already marked");
    }
});

cell_4.addEventListener("click", markCell = () => {
    if (cell_4.firstChild.getAttribute("src") == "pics/Default.png") {
        if (count % 2 == 0) {
            cell_4.firstChild.setAttribute("src", "pics/O.png");
            myArray[4] = 'O';
            count++;
            checkGame();
        }
        else if (count % 2 != 0) {
            cell_4.firstChild.setAttribute("src", "pics/X.png");
            myArray[4] = 'X';
            count++;
            checkGame();
        }
    }
    else {
        alert("This cell is already marked");
    }
});

cell_5.addEventListener("click", markCell = () => {
    if (cell_5.firstChild.getAttribute("src") == "pics/Default.png") {
        if (count % 2 == 0) {
            cell_5.firstChild.setAttribute("src", "pics/O.png");
            myArray[5] = 'O';
            count++;
            checkGame();
        }
        else if (count % 2 != 0) {
            cell_5.firstChild.setAttribute("src", "pics/X.png");
            myArray[5] = 'X';
            count++;
            checkGame();
        }
    }
    else {
        alert("This cell is already marked");
    }
});

cell_6.addEventListener("click", markCell = () => {
    if (cell_6.firstChild.getAttribute("src") == "pics/Default.png") {
        if (count % 2 == 0) {
            cell_6.firstChild.setAttribute("src", "pics/O.png");
            myArray[6] = 'O';
            count++;
            checkGame();
        }
        else if (count % 2 != 0) {
            cell_6.firstChild.setAttribute("src", "pics/X.png");
            myArray[6] = 'X';
            count++;
            checkGame();
        }
    }
    else {
        alert("This cell is already marked");
    }
});

cell_7.addEventListener("click", markCell = () => {
    if (cell_7.firstChild.getAttribute("src") == "pics/Default.png") {
        if (count % 2 == 0) {
            cell_7.firstChild.setAttribute("src", "pics/O.png");
            myArray[7] = 'O';
            count++;
            checkGame();
        }
        else if (count % 2 != 0) {
            cell_7.firstChild.setAttribute("src", "pics/X.png");
            myArray[7] = 'X';
            count++;
            checkGame();
        }
    }
    else {
        alert("This cell is already marked");
    }
});

cell_8.addEventListener("click", markCell = () => {
    if (cell_8.firstChild.getAttribute("src") == "pics/Default.png") {
        if (count % 2 == 0) {
            cell_8.firstChild.setAttribute("src", "pics/O.png");
            myArray[8] = 'O';
            count++;
            checkGame();
        }
        else if (count % 2 != 0) {
            cell_8.firstChild.setAttribute("src", "pics/X.png");
            myArray[8] = 'X';
            count++;
            checkGame();
        }
    }
    else {
        alert("This cell is already marked");
    }
});