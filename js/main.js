//Get a dog photo from the dog.ceo api and place the photo in the DOM


document.querySelector('button').addEventListener('click', getPokemon)

function getPokemon(){

    let chosenOne = document.querySelector('input').value
function loopArr(arr){
  for (let i = 0; i < arr.length; i++){
  }
}

fetch(`https://api.pokemontcg.io/v2/cards?q=name:${chosenOne}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let card = data.data[Math.floor(Math.random()*data.data.length)]
      console.log(card)
       document.querySelector('h2').innerText = card.name
       document.getElementById('hp').innerText = card.hp + " hp"
       document.querySelector('img').src = card.images.small
       document.getElementById('rarity').innerText = card.rarity
       document.getElementById('desc').innerText = card.flavorText
       document.getElementById('attack1').innerText = card.attacks[0].name
       document.getElementById('attack2').innerText = card.attacks[1].name
       document.getElementById('attDesc1').innerText = card.attacks[0].text
       document.getElementById('attDesc2').innerText = card.attacks[1].text
          })
    .catch(err => {
        console.log(`error ${err}`)
    });

  }

 
// THis is from nick's website
//     document.querySelector('#button-addon2').addEventListener('click', generateCards)
// function generateCards(){
// document.querySelector('#cards-container').innerHTML = ""
// let userPokemonInput = document.querySelector('.form-control').value
// console.log(userPokemonInput)
// let url = `https://api.pokemontcg.io/v2/cards?q=name:${userPokemonInput}`
//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)



        
//   fetch(url)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     console.log(data