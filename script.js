const helloWorldButton = document.querySelector("#helloWorld");
const helloMessage = document.querySelector("#helloMessage");
helloWorldButton.addEventListener("click", helloWorld);

const helloNameButton = document.querySelector("#helloName");
const helloNameMessage = document.querySelector("#helloNameMessage");
helloNameButton.addEventListener("click", helloName);

const factorialButton = document.querySelector("#factorial");
const factorialMessage = document.querySelector("#factorialMessage");
factorialButton.addEventListener("click", factorial);

const pyramidButton = document.querySelector("#pyramid");
const pyramidMessage = document.querySelector("#pyramidMessage");
pyramidButton.addEventListener("click", pyramid);

const startupButton = document.querySelector("#startup");
const startupMessage = document.querySelector("#startupMessage");
startupButton.addEventListener("click", startup);

const libraryButton = document.querySelector("#library");
const libraryMessage = document.querySelector("#libraryMessage");
libraryButton.addEventListener("click", library);

const arnButton = document.querySelector("#arn");
const arnMessage = document.querySelector("#arnMessage");
arnButton.addEventListener("click", arn);

const botButton = document.querySelector("#bot");
const botMessage = document.querySelector("#botMessage");
botButton.addEventListener("click", bot);

const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


function helloWorld () {
  const message = "Bonjour Monde !";
  helloMessage.append(message);
};

function helloName () {
  helloNameMessage.textContent = ''
  name = window.prompt("Quel est ton nom ?");
  const message = `Bonjour, ${name} !`;
  helloNameMessage.append(message);
};

function factorial() {
  factorialMessage.textContent = '';
  number = window.prompt("De quel nombre veux-tu calculer la factorielle ?");
  let result = 0;
  for (let i = 0; i <= number; i++) {
    if (i === 0) {
      result++;
    } else {
      result *= i;
    }
  }
  factorialMessage.append(`Le résultat est ${result}`);
}

function pyramid() {
  pyramidMessage.textContent = '';
  floors = window.prompt("Combien d'étages ?");
  for (i = 1; i <= floors; i++) {
    let floor = document.createElement("div");
    floor.textContent = String.fromCharCode(160).repeat(floors - i) + '#'.repeat(i);
    pyramidMessage.insertAdjacentElement("beforeend", floor);
  }
}

function startup() {

  startupMessage.textContent = '';

  let born70s = []
  let names = []
  let ages = []

  for (let businessman of entrepreneurs) {
    if (businessman.year >= 1970 && businessman.year < 1980) {
      born70s.push(businessman);
    }
    names.push(businessman.first + ' ' + businessman.last);
    ages.push(`${businessman.first} ${businessman.last} : ${2023 - businessman.year} ans`);
  }

  let sortedEntrepreneurs = [...entrepreneurs].sort(function compareFn(a, b) {
    if (a.last < b.last) {
      return -1;
    } else {
      return 1;
    }
  });
  sortedEntrepreneurs = sortedEntrepreneurs.map(businessman => `${businessman.first} ${businessman.last}`)

  const born70Element = document.createElement("div");
  born70Element.textContent = born70s.map(businessman => businessman.first + ' ' + businessman.last).join(', ') + " sont né.e.s dans les années 70";
  startupMessage.insertAdjacentElement("beforeend", born70Element);

  const namesElement = document.createElement("div");
  namesElement.textContent = names.join(', ');
  startupMessage.insertAdjacentElement("beforeend", namesElement);

  const agesElement = document.createElement("div");
  agesElement.textContent = ages.join(', ');
  startupMessage.insertAdjacentElement("beforeend", agesElement);

  const entrepreneursElement = document.createElement("div");
  entrepreneursElement.textContent = sortedEntrepreneurs.join(', ');
  startupMessage.insertAdjacentElement("beforeend", entrepreneursElement);

  if (!document.querySelector("#startupField button:not(#startup)")) {
    const startupField = document.querySelector("#startupField");
    const startupResetButton = document.createElement("button");
    startupResetButton.textContent = "Reset";
    startupField.insertBefore(startupResetButton, startupMessage);
    startupResetButton.addEventListener("click", function () {
      startupMessage.textContent = '';
      startupResetButton.remove();
    });
  }
}

function library() {

  libraryMessage.textContent = '';

  let allBorrowed = !books.some((book) => book.rented === 0);
  let mostBorrowedValue = Math.max(...books.map(book => book.rented));
  let mostBorrowed = books.find(book => book.rented === mostBorrowedValue);
  let leastBorrowedValue = Math.min(...books.map(book => book.rented));
  let leastBorrowed = books.find(book => book.rented === leastBorrowedValue);
  let book873495 = books.find(book => book.id === 873495);
  let booksCopy = [...books].filter(book => book.id !== 133712);
  booksCopy.sort(function compareFn(a, b) {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });

  const allBorrowedElement = document.createElement("div");
  if (allBorrowed) {
    allBorrowedElement.textContent = "Tous les livres ont été empruntés au moins une fois.";
  } else {
    allBorrowedElement.textContent = "Tous les livres n'ont pas été empruntés au moins une fois.";
  }
  libraryMessage.insertAdjacentElement("beforeend", allBorrowedElement);

  const mostBorrowedElement = document.createElement("div");
  mostBorrowedElement.textContent = `Le livre le plus emprunté est ${mostBorrowed.title}.`;
  libraryMessage.insertAdjacentElement("beforeend", mostBorrowedElement);
  
  const leastBorrowedElement = document.createElement("div");
  leastBorrowedElement.textContent = `Le livre le moins emprunté est ${leastBorrowed.title}.`;
  libraryMessage.insertAdjacentElement("beforeend", leastBorrowedElement);

  const book873495Element = document.createElement("div");
  book873495Element.textContent = `Le livre avec l'id 873495 est ${book873495.title}.`;
  libraryMessage.insertAdjacentElement("beforeend", book873495Element);

  const sortedBooks = document.createElement("div");
  sortedBooks.textContent = booksCopy.map(book => book.title).join(', ');
  libraryMessage.insertAdjacentElement("beforeend", sortedBooks);

  if (!document.querySelector("#libraryField button:not(#library)")) {
    const libraryField = document.querySelector("#libraryField");
    const libraryResetButton = document.createElement("button");
    libraryResetButton.textContent = "Reset";
    libraryField.insertBefore(libraryResetButton, libraryMessage);
    libraryResetButton.addEventListener("click", function () {
      libraryMessage.textContent = '';
      libraryResetButton.remove();
    });
  }
}

function arn() {
  
  arnMessage.textContent = '';

  let arn = window.prompt("Quel est le code d'ARN à traduire ?");

  let res;
  if (arn === null || arn.length % 3 !== 0 || arn.match(/[^AUGC]/)) {
    res = "Ce n'est pas un code valable";
  } else {
    arn = arn.replace(/(.{3})/g, "$1-");
    res = arn.replaceAll(/(UCU|UCC|UCA|UCG|UCG|AGU|AGC)/g, "Sérine")
      .replaceAll(/(CCU|CCC|CCA|CCG)/g, "Proline")
      .replaceAll(/(UUA|UUG)/g, "Leucine")
      .replaceAll(/(UUU|UUC)/g, "Phénylanine")
      .replaceAll(/(CGU|CGC|CGA|CGG|AGA|AGG)/g, "Arginine")
      .replaceAll(/(UAU|UAC)/g, "Tyrosine")
      .slice(0, -1);
  }

  arnMessage.append(res);
}

function bot() {
  
  botMessage.textContent = '';

  let input = window.prompt("Que veux-tu dire à Acné-bot ?");
  let answer;

  if (input === null || input === '') {
    answer = "T'es en PLS ?"
  } else if (input.trim().endsWith('?')) {
    answer = "Ouais Ouais...";
  } else if (input === input.toUpperCase()) {
    answer = "Pwa, calme-toi...";
  } else if (input.toLowerCase().includes('fortnite')) {
    answer = "On s'fait une partie en soum-soum ?";
  } else {
    answer = "balek."
  }

  botMessage.append(answer);

}



























































