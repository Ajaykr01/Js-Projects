localJoke = [
  "Why are most people tired on April 1? They've just finished a 31-day March.",
  "What should you do if your puppy isn't feeling well? Take him to the dog-tor.",
  "Where do penguins go to vote? The North Poll.",
  "How do you make a robot angry? Keep pushing his buttons.",
  "I told a bad chemistry joke once. I got no reaction.",
  "What did one wall say to the other? I’ll meet you at the corner.",
  "What's the best way to catch a fish? Ask someone to throw it to you.",
  "What do you call a cat with eight legs? An octo-puss.",
];

function jokeFunction() {
  let randomJoke = localJoke[Math.floor(Math.random() * localJoke.length)];
  document.getElementById("jokeInput").value = randomJoke;
}
document.getElementById("showBtn").addEventListener("click", jokeFunction);

async function jokeApi() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        accept: "application/json",
      },
    });
    const jokeData = await response.json();
    console.log(jokeData.joke);
  } catch (error) {
    console.error("Error fetching joke", error);
  }
} 
jokeApi();
