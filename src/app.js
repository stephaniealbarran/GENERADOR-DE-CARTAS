/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  window.genCard = function() {
    let iconos = ["♥", "♠", "♣", "♦"];
    let numeros = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    function randomCard() {
      const randomIconos = iconos[Math.floor(Math.random() * iconos.length)];
      const randomNumeros = numeros[Math.floor(Math.random() * numeros.length)];

      document.querySelector(".icon").innerHTML = randomIconos;
      document.querySelector(".cardContentContainer").innerHTML = randomNumeros;
      document.querySelector(".iconTwo").innerHTML = randomIconos;

      if (randomIconos == "♥" || randomIconos == "♦") {
        document.querySelector("#card").style.color = "red";
      } else if (randomIconos == "♠" || randomIconos == "♣") {
        document.querySelector("#card").style.color = "black";
      }
    }

    randomCard();
  };

  window.genCard();
};
