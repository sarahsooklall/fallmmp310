//Step 1
const submitButton = document.getElementById("submit");
//console.log(submitButton);
//Step 4
const bioText = document.getElementById("bio");
//Step 3
const nameInput = document.getElementById("name");
//Step 5
const boroughSelect = document.getElementById("borough");


submit.onclick = function(event) {
//	console.log(nameInput.value);
//    //Step 4
//    console.log(bioText.value);
//    //Step 5
//    console.log(boroughSelect.value);
    const message = document.createElement("p");
    message.textContent = "Hello,"
                            + nameInput.value
                            + " from "
                            + boroughSelect.value
                            + " welcome to my website.";
    document.body.appendChild(message);
};

//Step 2
//submit.onclick = function(event) {
//	console.log(this);
//	console.log(event);
//	console.log("You clicked me :)");
//};
