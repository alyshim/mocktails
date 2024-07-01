function generateMocktail(event) {
  event.preventDefault();

  new Typewriter("#mocktail", {
    strings: "Orange juice",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let mocktailFormElement = document.querySelector("#mocktail-generator-form");
mocktailFormElement.addEventListener("submit", generateMocktail);
