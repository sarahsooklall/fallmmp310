// Get the user color button
const yellowButton = document.getElementById("yellow");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const redButton = document.getElementById("red");
const orangeButton = document.getElementById("orange");
const purpleButton = document.getElementById("purple");
const pinkButton = document.getElementById("pink");
const brownButton = document.getElementById("brown");
const whiteButton = document.getElementById("white");
const blackButton = document.getElementById("black");

// New message box
const message = document.createElement("p");
document.body.appendChild(message);

// Creating new image(s)
const image1 = document.createElement("img");
document.body.appendChild(image1);

// Creating clickable image(s) ID 
image1.id = "randomClick";
const image = document.getElementById("randomClick");

// Creating new element for clickable image response(s)
const answer = document.createElement("h4");
document.body.appendChild(answer);

// Answers for clickable image(s) 
const responses = [
	"You are graceful, loyal, and noble. You strive for a harmonious and balanced life more than anything.",
	"You are compassionate, affectionate, and insightful. You have a heart big enough to fit the entire world.",
	"You are warm, optimistic, and lively. You spend time interacting with people and forming connections with them.",
    "You are independent, cheerful, and spontaneous. You live life day by day and try not to worry about tomorrow.",
    "You are ambitious, radiant, and impulsive. When experiencing new things, you do not dip your toes but dive in head first.",
    "You are reliable, intelligent, and flexible. You are naturally objective, and you always aim to listen to all sides of the story before offering an opinion.",
    "You are nurturing, intelligent, and loyal. The thing you seek the most out of life is balance and stability.",
    "You are creative, strong, and thoughtful. You are always looking for inspiration to find the meaning of life.",
    "You are trustworthy, genuine, and sensitive. You have a deep need for peace and harmony in your everyday life.",
    "You are classy, dramatic, and mysterious. You can be intimidating at first but you are a loyal and trusted friend to those that take the time to know you.",
];

// Returning an answer to the user that clicked the image(s).
randomClick.onclick = function() {
    const response = responses[Math.floor(Math.random() * responses.length)];
	answer.textContent = response;
}

// The user clicks a color, to show its message
whiteButton.onclick = function() {
    document.body.style.background = "white";
    document.body.style.color = "black";
    image1.src = "images/white.jpg";
    message.textContent = white.value
                        + "White is the color of positivity. It is associated with innocence, light, goodness, and perfection."
}

pinkButton.onclick = function() {
    document.body.style.background = "pink";
    document.body.style.color = "black";
    image1.src = "images/pink.jpeg";
    message.textContent = pink.value
                        + "Pink is the color of femininity. It is associated with flowers, babies, charm, and sweetness."
}

orangeButton.onclick = function() {
    document.body.style.background = "orange";
    document.body.style.color = "black";
    image1.src = "images/orange.jpg";
    message.textContent = orange.value
                        + "Orange is a mixture of energy from red and happiness from yellow. It is associated with success, encouragement, change, and determination."
}

yellowButton.onclick = function() {
    document.body.style.background = "yellow";
    image1.src = "images/sunshine01.jpeg";
    document.body.style.color = "black";
    message.textContent = yellow.value
                        + "Yellow is the color of sunshine. It is associated with joy, happiness, intellect, and energy."
}
   
redButton.onclick = function() {
    document.body.style.background = "red";
    document.body.style.color = "black";
    image1.src = "images/red.jpeg";
    message.textContent = red.value
                        + "Red is the color of blood and fire. It is associated with love, energy, leadership, and courage."
}

brownButton.onclick = function() {
   document.body.style.background = "brown";
    document.body.style.color = "white";
    image1.src = "images/brown.jpeg";
   message.textContent = brown.value
                        + "Brown is the color of earth, wood and stone. It is associated with stability, warmth, and honesty."
}

greenButton.onclick = function() {
   document.body.style.background = "green";
    document.body.style.color = "white";
    image1.src = "images/green.jpeg";
   message.textContent = green.value
                        + "Green is the color of life and nature. It is associated with meanings of growth, harmony, and environment."
}

purpleButton.onclick = function() {
    document.body.style.background = "purple";
    document.body.style.color = "white";
    image1.src = "images/purple.jpeg";
    message.textContent = purple.value
                        + "Purple is a mixture of calm stability from blue and fierce energy from red. It is associated with wealth, extravagance, creativity, wisdom, and dignity."
}

blueButton.onclick = function() {
    document.body.style.background = "blue";
    document.body.style.color = "white";
    image1.src = "images/blue.jpeg";
    message.textContent = blue.value
                        + "Blue represents both the sky and the sea. It is associated with freedom, imagination, expansiveness, and sensitivity."
}

blackButton.onclick = function() {
   document.body.style.background = "black";
   document.body.style.color = "white";
   image1.src = "images/black.jpeg";
   message.textContent = black.value
                        + "Black is the color of power and sophistication. It is associated with authority, elegance, formality, and strength."
}

