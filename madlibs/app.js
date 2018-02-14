/*
    html element
*/
const submitButton = document.getElementById("submit");
const exclamationInput = document.getElementId("exclamation");
const adverbInput =document.getElementId("adverb");
const nounInput = document.getElementId("noun");
const adjectiveInput = document.getElementId("adjective");

/*
    listen for button press
*/
submitButton.onclick = function() {
    /*
        get all of the words, generate our story
    */  
    const message = document.createElement("p");
    message.textContent = exclamationInput.value
                            + " he said "
                            + adverbInput.value
                            + " as he jumped into his convertible "
                            + nounInput.value
                            + " and drove off with his "
                            + adjectiveInput.value
                            + " wife."
    document.body.appendChild(message);
};