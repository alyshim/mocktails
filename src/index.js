function displayMocktail(response) {
  new Typewriter("#mocktail", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateMocktail(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "33ftabad4a7f60213o971b6848003fd4";
  let context =
    "You are a bartender experienced in mocktails. Your mission is to create an easy mocktail recipe and separate each line with a <br />. Make sure to follow the user instructions. Sign the mocktail recipe with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a Mocktail recipe with ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={apiKey}`;

  let mocktailElement = document.querySelector("#mocktail");
  mocktailElement.classList.remove("hidden");
  mocktailElement.innerHTML = `<div class="generating">⏳ Generating a Mocktail with ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayMocktail);
}

let mocktailFormElement = document.querySelector("#mocktail-generator-form");
mocktailFormElement.addEventListener("submit", generateMocktail);
