let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomDiceImage = 'dice' + randomNumber1 + '.png'

let randomImageSource1 = 'images/' + randomDiceImage

let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomImageSource1)

let randomNumber2 = Math.floor(Math.random() * 6) + 1

let randomImageSource2 = 'images/dice' + randomNumber2 + '.png'

document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)
