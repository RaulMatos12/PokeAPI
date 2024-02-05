function carregarDetalhesDoPikachu() {
   const pikachuId = 25;
     const apiUrl = 'https://pokeapi.co/api/v2/pokemon/' + pikachuId + '/';
   const spriteUrl = 'https://pokeapi.co/api/v2/pokemon-form/' + pikachuId + '/';
fetch(apiUrl)
.then(function(response) {
if (!response.ok) {
   throw new Error('Erro na requisição: ' + response.status);
}
  return response.json();
})
  .then(function(data) {
const detailsElement = document.getElementById('pokemonDetails');
detailsElement.innerHTML = `
p><strong>Altura:</strong> ${data.height} decímetros</p>
<p><strong>Peso:</strong> ${data.weight} hectogramas</p>
`;
   fetch(spriteUrl)
 .then(function(spriteResponse) {
 if (!spriteResponse.ok) {
throw new Error('Erro na requisição: ' + spriteResponse.status);
}
  return spriteResponse.json();
})
  .catch(function(error) {
console.error('Erro:', error);
});
})
  .catch(function(error) {
console.error('Erro:', error);
});
}
