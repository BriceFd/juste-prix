// const prompt = require("prompt-sync")();

let counter = 0;

function getRandomInt() {
  return Math.round(Math.random() * 100);
}

// let nb = parseInt(prompt("Choisis un nombre:"));
// console.log(nb);

const random = getRandomInt();
console.log(random);

// while (nb !== random) {
//   if (nb < random) {
//     console.log("C'est trop petit");
//     counter++;
//   } else {
//     console.log("C'est trop grand");
//     counter++;
//   }
//     nb = parseInt(prompt("Recommence:"));
// }

// console.log("C'est gagné !, en " + counter + " essais");

const form = document.getElementById("form");
const readonly = document.getElementById("readonlyInput");
const userInput = document.getElementById("userInput");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let inputValue = parseInt(userInput.value);

    if (isNaN(inputValue)) {
      readonly.value = "Veuillez entrer un nombre valide !";
      return;
    }

    console.log("Valeur de l'utilisateur :", inputValue);

    counter++;

    if (inputValue < random) {
      readonly.value = "C'est trop petit";
    } else if (inputValue > random) {
      readonly.value = "C'est trop grand";
    } else {
      readonly.value = "C'est gagné !, en " + counter + " essais";
    }

    userInput.value = "";
  });
});
