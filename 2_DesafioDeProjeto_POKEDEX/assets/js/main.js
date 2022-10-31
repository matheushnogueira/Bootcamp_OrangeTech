const pokemonList = document.getElementById("pokemonList")

const loadMoreButton = document.getElementById("loadMore")

const primeiraGeração = document.getElementById("primeira")
const segundaGeração = document.getElementById("segunda")
const terceiraGeração = document.getElementById("terceira")


const maxRecords = 151;
let offset = 0;  
const limit = 12;

// primeiraGeração.addEventListener('click', () => {
//    maxRecords = 151
//    offset = 0

//    loadPokemonItens(offset)
//    loadMoreButton(offset, maxRecords)
// })
 
// segundaGeração.addEventListener('click', () => {
//    maxRecords = 251
//    offset = 151

//    loadPokemonItens(offset)
//    loadMoreButton(offset, maxRecords)
// })

// terceiraGeração.addEventListener('click', () => {
//    maxRecords = 386
//    offset = 251

//    loadPokemonItens(offset)
//    loadMoreButton(offset, maxRecords)
// })

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
      pokemonList.innerHTML += newHtml
   })
}

loadPokemonItens(offset, limit)

// loadMoreButton.addEventListener('click', () => {
//    offset += limit

//    const qtdRecordNextPage = offset + limit

//    if (qtdRecordNextPage >= maxRecords){
//       const newLimit = maxRecords - offset
//       loadPokemonItens(offset, newLimit)

//       loadMoreButton.parentElement.removeChild(loadMoreButton)
//    }else{ loadPokemonItens(offset, limit) } 
// })

