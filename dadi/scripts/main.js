const dieThrowerElement = document.getElementById("die_thrower");
const userResultElement = document.getElementById("user_results");
const computerResultElement = document.getElementById("computer_results");
const winOrLoseElement = document.getElementById("win_or_lose")

let userResult;
let computerResult;

dieThrowerElement.addEventListener("click", function() {

    userResult = ((Math.random() * 1000000).toFixed(0) % 6 + 1);
    computerResult = ((Math.random() * 1000000).toFixed(0) % 6 + 1);

    userResultElement.innerHTML = "User: " + userResult;
    computerResultElement.innerHTML = "Computer: " + computerResult;
        
    if (userResult === computerResult) {
        
        winOrLoseElement.innerHTML = "Une égalité!";
        
    } else if (userResult > computerResult) {
        
        winOrLoseElement.innerHTML = "Monsieur gagne le jeu! Félicitations";
        
    } else if (userResult < computerResult) {
        
        winOrLoseElement.innerHTML = "Monsieur perdre le jeu! Désolés";

    }
}

)




    


