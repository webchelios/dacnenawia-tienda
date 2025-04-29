import { heroContent } from "../constants/constants"

export const Home = (element) => {

    const heroContainer = document.createElement('div')
    const heroLeft = document.createElement('div')
    const heroRight = document.createElement('div')

    const imgHero = document.createElement('img')
    imgHero.setAttribute('src', 'https://i.pinimg.com/474x/da/f5/bc/daf5bc10c639301647c89dd84bfcc8a2.jpg')

    heroLeft.append(imgHero)

    const h2Title = document.createElement('h2')
    h2Title.textContent = heroContent.title
    const pSubtitle = document.createElement('p')
    pSubtitle.textContent = heroContent.subtitle
    const callToAction = document.createElement('button')
    callToAction.innerText = heroContent.button

    heroRight.append(h2Title,pSubtitle,callToAction)

    heroContainer.append(heroLeft, heroRight)

    element.append(heroContainer)
}