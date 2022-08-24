let elSiteDiv = document.querySelector(".content");

pokemons.forEach(function (pokemon) {
	let elListDiv = document.createElement("div");
	let elListImage = document.createElement("img");
	let elListTitle = document.createElement("h3");
	let elListText = document.createElement("p");

	elListDiv.className = "col-4 w-25 card m-2 ms-auto";
	elListDiv.setAttribute("style", "width: 18rem;");
	elListImage.setAttribute("class", "card-img-top");

	elListImage.src = pokemon.img;
	elListTitle.textContent = pokemon.name;
	elListText.textContent = `Capabilities: ${pokemon.weaknesses.join(' ')}`;

	elListDiv.append(elListImage, elListTitle, elListText);
	elSiteDiv.appendChild(elListDiv);
});
