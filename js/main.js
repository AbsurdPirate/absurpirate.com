// Message of the Day vars
const message_of_the_day = document.getElementById("message");
const messages = [
  "Made with all the love I'm legally allowed to give",
  "GNU GPLv3",
  "Were it so easy...",
  "Hi Mom!",
  "Play Halo 3!",
  "Please don't sue me",
];

//Titletron vars
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Message of the day
function generateMessage() {
  message_of_the_day.innerHTML =
    messages[Math.floor(Math.random() * messages.length)];
}

document.addEventListener("DOMContentLoaded", generateMessage, false);

// TITLETRON
const titletron = async () => {
  let text = "Welcome to Absurd Pirate's Internet Lounge! ";
  let title = document.querySelector("title");
  let index = 0;
  let deleted_letters = "";
  title.innerText = "";
  // Initial write out  of the text
  for (index = 0; index < text.length; index++) {
    title.innerText += text[index];
    await delay(100);
  }
  // Wait 1 second
  await delay(1000);
  // Loop for the scrolling title
  while (true) {
    if (index == text.length) {
      index = 0;
      deleted_letters = "";
    }
    // Adds deleted letters to this string
    deleted_letters += text[index];

    // Appends deleted letters to the back of the text line
    title.innerText = text.slice(index, text.length) + deleted_letters;
    // wait 1/4 second and increase index
    await delay(250);
    index++;
  }
};

document.addEventListener("DOMContentLoaded", titletron, false);
