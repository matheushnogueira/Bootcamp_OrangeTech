const pokemonList = document.getElementById("pokemonList")

// Barra de pesquisa
function search_pokemon() {
   let input = document.getElementById('searchbar').value
   input=input.toLowerCase();
   let x = document.getElementsByClassName('pokemon');
     
   for (i = 0; i < x.length; i++) { 
       if (!x[i].innerHTML.toLowerCase().includes(input)) {
           x[i].style.display="none";
       }
       else {
           x[i].style.display="list-item";                 
       }
   }
}

// Lista de pokemons
let offset = 0;  
const limit = 151;

function loadPokemonItens(offset, limit) {
   pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
      const newHtml = pokemons.map((pokemon) => 
      `
      <li class="pokemon ${pokemon.type}">
         <span class="number">#${pokemon.number}</span>
         <span class="name">${pokemon.name}</span>
         <div class="detail">
            <ol class="types">
               ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" 
               alt="${pokemon.name}">
         </div>
      </li>
      `
      ).join("")
      pokemonList.innerHTML = newHtml
   })
}

loadPokemonItens(offset, limit)