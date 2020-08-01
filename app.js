document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
      freezed: false
    },
    {
      name: "fries",
      img: "images/fries.png",
      freezed: false
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
      freezed: false
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
      freezed: false
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
      freezed: false
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
      freezed: false
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
      freezed: false
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
      freezed: false
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
      freezed: false
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
      freezed: false
    },
    {
      name: "pizza",
      img: "images/pizza.png",
      freezed: false
    },
    {
      name: "pizza",
      img: "images/pizza.png",
      freezed: false
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  let cardChosen = [];
  let cardChosenId = [];
  let cardsWon = [];

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");

  function initialSetup() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", cardArray[i].img);
      grid.appendChild(card);
    }
  }

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.style.cursor = "pointer";
      card.addEventListener("click", flipCard);
      grid.replaceChild(card, grid.children[i]);
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    this.setAttribute("src", cardArray[cardId].img);
    if (cardChosenId[0] !== cardId && cardArray[cardId].freezed === false) {
      cardChosen.push(cardArray[cardId].name);
      cardChosenId.push(cardId);
      if (cardChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  }

  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    if (cardChosen[0] === cardChosen[1]) {
      // alert("you found a match");
      // cards[cardChosenId[0]].setAttribute("src", "images/white.png");
      // cards[cardChosenId[1]].setAttribute("src", "images/white.png");
      cardArray[cardChosenId[0]].freezed = true;
      cardArray[cardChosenId[1]].freezed = true;
      cardsWon.push(cardChosen);
    } else {
      // alert("sorry try again");
      cards[cardChosenId[0]].setAttribute("src", "images/blank.png");
      cards[cardChosenId[1]].setAttribute("src", "images/blank.png");
    }

    cardChosen = [];
    cardChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      alert("you have found them all");
    }
  }

  initialSetup();
  setTimeout(() => {
    createBoard();
  }, 2000);
});
