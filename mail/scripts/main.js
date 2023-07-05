// Defining the data structure container for email addresses.

const emailArray = ["1@gmail.com", "2@gmail.com", "3@gmail.com", "4@gmail.com", 
"5@gmail.com", "6@gmail.com", "7@gmail.com", "8@gmail.com", "9@gmail.com", "10@gmail.com"]

// Declaring variables for html elements rapresentation.

const emailInputElement = document.getElementById("email_input");
const buttonSubmitElement = document.getElementById("submit");
const resultElement = document.getElementById("result");

// Function for button click event.

buttonSubmitElement.addEventListener ("click", function() {

    // Block scope variables.

    const userEmail = emailInputElement.value;
    let isUserEmailPresent = false;
    let userEmailPosition;

    // "For" loop cycles through the array.

    for (i = 0; i < emailArray.length; i++) {

        /* "If" condition confronts user email address with array elements, 
        on fulfilled condition puts boolean variable to true and saves 
        element index number in another variable. */

        if (userEmail === emailArray[i]) {

            isUserEmailPresent = true;

            userEmailPosition = i;

        }

    }

    /* "If...else" condition decides which message to visualize 
    depending on boolean value of "isUserEmailPresent" variable. */

    if (isUserEmailPresent === true) {

        resultElement.innerHTML = "Congratulations! Your email address is present in our database at the " + userEmailPosition + " index position.";

    } else {
    
        resultElement.innerHTML = "Sorry, we can't find your email address in our database :(";

    }

}

)