const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let randomString1 = "";
let randomString2 = "";

let passwordOne = document.getElementById("pass-one");
let passwordTwo = document.getElementById("pass-two");

let copyPopup = document.getElementById("copy-popup");

function generateRandom() {
  randomString1 = "";
  randomString2 = "";
  for (let i = 0; i < 15; i++) {
    let randomNum1 = Math.floor(Math.random() * characters.length);
    let randomNum2 = Math.floor(Math.random() * characters.length);
    randomString1 += characters[randomNum1];
    randomString2 += characters[randomNum2];
  }
  passwordOne.textContent = randomString1;
  passwordTwo.textContent = randomString2;
}

passwordOne.addEventListener("click", () => {
  navigator.clipboard.writeText(randomString1);
  copyPopup.style.opacity = 0.9;
  timeoutId = setTimeout(() => (copyPopup.style.opacity = ""), 1500);
});

passwordTwo.addEventListener("click", () => {
  navigator.clipboard.writeText(randomString2);
  copyPopup.style.opacity = 0.9;
  timeoutId = setTimeout(() => (copyPopup.style.opacity = ""), 1500);
});
