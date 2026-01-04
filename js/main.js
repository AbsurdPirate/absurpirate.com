// MESSAGE OF THE DAY VARS
const message_of_the_day = document.getElementById("message");
const messages = [
  "Made with all the love I'm legally allowed to give",
  "GNU GPLv3",
  "Were it so easy...",
  "Hi Mom!",
  "Play Halo 3!",
  "Please don't sue me",
  "Still workin' on it... probably",
  "Check out the Grizzly Gazette!",
  "New and Tasty!",
  "CRT Compatable!",
];

// SONG LIST VARS
const song_list = document.getElementById("selection");
const songs = [
  ["LOOK YOUR BACK!", "Himiko Kikuchi", "Flying Beagle"],
  ["Scattered", "Green Day", "nimrod."],
  ["Same Man I Was Before", "Oingo Boingo", "Dead Man's Party"],
  ["LvUrFR3NZ", "Princeton", "Halo 3 Soundtrack"],
];

//Titletron vars
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const logo = document.getElementById("logo");
let is_animation_running = false;

// Message of the day
function generateMessage() {
  message_of_the_day.innerHTML =
    messages[Math.floor(Math.random() * messages.length)];
}

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

songs.forEach((song) => {
  selection.innerHTML += `<div class="song-item">${song[0]}<br>${song[1]} - ${song[2]}</div>`;
});

function loadSite() {
  titletron();
  generateMessage();
}

loadSite();

logo.addEventListener("mouseover", async () => {
  if (is_animation_running) return;
  is_animation_running = true;
  logo.classList.add("animated-spin");
  await delay(1000);
  logo.classList.remove("animated-spin");
  is_animation_running = false;
});
