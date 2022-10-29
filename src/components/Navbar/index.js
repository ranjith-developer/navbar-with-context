// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickThemeButton = () => {
        toggleTheme()
      }

      const navBackground = isDarkTheme
        ? 'navbar-container-dark'
        : 'navbar-container-light'

      const listStyle = isDarkTheme ? 'list-style-dark' : 'list-style-light'
      return (
        <nav className={navBackground}>
          {isDarkTheme ? (
            <img
              className="nav-image"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
            />
          ) : (
            <img
              className="nav-image"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
            />
          )}
          <ul className="unordered-list">
            <Link className="link-style" to="/">
              <li className={listStyle}>Home</li>
            </Link>
            <Link className="link-style" to="/about">
              <li className={listStyle}>About</li>
            </Link>
          </ul>
          {isDarkTheme ? (
            <button
              type="button"
              testid="theme"
              className="button"
              onClick={onClickThemeButton}
            >
              <img
                className="nav-image"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            </button>
          ) : (
            <button
              type="button"
              testid="theme"
              className="button"
              onClick={onClickThemeButton}
            >
              <img
                className="nav-image"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            </button>
          )}
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
