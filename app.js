const jokes = [
     "Why did the scarecrow win an award? Because he was outstanding in his field!",

"What do you call fake spaghetti? An impasta ",

"Why don t scientists trust atoms?Because they make up everything.",

"Why can t your nose be 12 inches long? Because then it would be a foot.",

"What do you call cheese that isn’t yours?Nacho cheese.",

"Why did the bicycle fall over?Because it was two-tired.",

"What did one ocean say to the other ocean?Nothing, they just waved.",
"Why did the math book look sad?Because it had too many problems.",

"What do you call a bear with no teeth?A gummy bear.",

"Why did the golfer bring two pairs of pants?In case he got a hole in one.",

"How does a penguin build its house?Igloos it together.",

"Why don’t skeletons fight each other?They don’t have the guts."

// What do you call a factory that makes okay products?
// A satisfactory.

// Why couldn’t the leopard play hide and seek?
// Because he was always spotted.

// What do you call a boomerang that won’t come back?
// A stick.

// Why did the coffee file a police report?
// It got mugged.

// What do you call a fish wearing a bowtie?
// Sofishticated.

// Why did the tomato turn red?
// Because it saw the salad dressing.

// Why don’t eggs tell jokes?
// They’d crack each other up.

// What do you call an alligator in a vest?
// An investigator."

]

let btn = document.getElementById("jokeGeneratorButton");
let display = document.querySelector(".joke");

function generateJoke() {
    return (Math.floor(Math.random()*jokes.length));
}

btn.addEventListener("click", () => {
    display.textContent = jokes[generateJoke()];
})