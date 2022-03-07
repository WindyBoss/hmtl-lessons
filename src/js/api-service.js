const LINK = 'https://pokeapi.co/api/v2/pokemon';

function fetchPokemon(searchQuery) {
  return fetch(`${LINK}/${searchQuery}`).then(response => response.json());
};


export default { fetchPokemon };