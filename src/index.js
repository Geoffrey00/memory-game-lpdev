import "./scss/app.scss";


document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'cool',
        img: '../src/assets/images/cool.png'
      },
      {
        name: 'happy',
        img: '../src/assets/images/happy.png'
      },
      {
        name: 'glasses',
        img: '../src/assets/images/glasses.png'
      },
      {
        name: 'scared',
        img: '../src/assets/images/scared.png'
      },
      {
        name: 'sport',
        img: '../src/assets/images/sport.png'
      },
      {
        name: 'music',
        img: '../src/assets/images/music.png'
      },
      {
        name: 'cool',
        img: '../src/assets/images/cool.png'
      },
      {
        name: 'happy',
        img: '../src/assets/images/happy.png'
      },
      {
        name: 'glasses',
        img: '../src/assets/images/glasses.png'
      },
      {
        name: 'scared',
        img: '../src/assets/images/scared.png'
      },
      {
        name: 'sport',
        img: '../src/assets/images/sport.png'
      },
      {
        name: 'music',
        img: '../src/assets/images/music.png'
      }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const stateCont = document.querySelector('.state')

    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', '../src/assets/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', '../src/assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', '../src/assets/images/blank.png')
        stateCont.innerHTML = `<div class="red">C'est la même carte, réfléchis un peu !</div>`
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        stateCont.innerHTML = `<div class="green">Trouvé !</div>`
        cards[optionOneId].setAttribute('src', '../src/assets/images/white.png')
        cards[optionTwoId].setAttribute('src', '../src/assets/images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', '../src/assets/images/blank.png')
        cards[optionTwoId].setAttribute('src', '../src/assets/images/blank.png')
        stateCont.innerHTML = `<div class="red">Raté !</div>`
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.innerHTML = `<span class="green">C'est gagné !</span>`
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  

  console.log('Tout fonctionne');