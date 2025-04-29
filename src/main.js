import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="navbar"></div>
    <div id="home"></div>
  </div>
`

Navbar(document.querySelector('#navbar'))
Home(document.querySelector('#home'))