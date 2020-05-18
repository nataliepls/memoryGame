document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
{
  name: 'avocado',
  img: 'images/avocado.png'
},
{
  name: 'avocado',
  img: 'images/avocado.png'
},
{
  name: 'corn',
  img: 'images/corn.png'
},
{
  name: 'corn',
  img: 'images/corn.png'
},
{
  name: 'flower',
  img: 'images/flower.png'
},
{
  name: 'flower',
  img: 'images/flower.png'
},
{
  name: 'hamburger',
  img: 'images/hamburger.png'
},
{
  name: 'hamburger',
  img: 'images/hamburger.png'
},
{
  name: 'hotdog',
  img: 'images/hotdog.png'
},
{
  name: 'hotdog',
  img: 'images/hotdog.png'
},
{
  name: 'ketchup',
  img: 'images/ketchup.png'
},
{
  name: 'ketchup',
  img: 'images/ketchup.png'
}
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create the board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
  card.addEventListener('click', flipCard)
  grid.appendChild(card)
  }
}

//check for matches
function checkForMatch (){
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0] === cardsChosen[1]){
    alert('Great! You found a Match!')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cardsWon.push(cardsChosen)
  } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again!')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = 'Congratulations! You found them All!'
  }
}

//flip the card
function flipCard(){
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}





createBoard()












})
