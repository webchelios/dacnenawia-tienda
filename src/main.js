import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="navbar"></div>
    <div id="home"></div>
    <div id="store"></div>
  </div>
`

Navbar(document.querySelector('#navbar'))
Home(document.querySelector('#home'))
Store(document.querySelector('#store'))