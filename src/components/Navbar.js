import { sections } from "../constants/constants"
import './Navbar.css'

export const Navbar = ( element ) => {

    const navbarElement = document.createElement('nav')
    
    const navbarLogo = document.createElement('a')
    navbarLogo.setAttribute('href', `#`)
    const navbarLogoTitle = document.createElement('h1')
    navbarLogoTitle.textContent = "Dacnenawia"
    navbarLogo.append(navbarLogoTitle)

    const navbarUl = document.createElement('ul')
    navbarUl.classList.add('section-list')
    sections.forEach((section) => {
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = section
        a.setAttribute('href', `/${section}`)
        li.append(a)
        navbarUl.append(li)
    })

    navbarElement.append(navbarLogo, navbarUl)

    element.append(navbarElement)
}