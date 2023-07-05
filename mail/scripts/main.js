// Defining the data structure container for email addresses

const emailArray = ["1@gmail.com", "2@gmail.com", "3@gmail.com", "4@gmail.com", 
"5@gmail.com", "6@gmail.com", "7@gmail.com", "8@gmail.com", "9@gmail.com", "10@gmail.com"]

const emailInputElement = document.getElementById("email_input");
const buttonSubmitElement = document.getElementById("submit");
const resultElement = document.getElementById("result");

buttonSubmitElement.addEventListener ("click", function() {

    const userEmail = emailInputElement.value;
    let isUserEmailPresent = false;
    let userEmailPosition;

    for (i = 0; i < emailArray.length; i++) {

        if (userEmail === emailArray[i]) {

            isUserEmailPresent = true;

            userEmailPosition = i;

        }

    }

    if (isUserEmailPresent === true) {

        resultElement.innerHTML = "Congratulations! Your email address is present in our database at the " + userEmailPosition + " index position.";

    } else {
    
        resultElement.innerHTML = "Sorry, we can't find your email address in our database :(";

    }

}

)