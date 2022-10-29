// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutContainer = isDarkTheme
        ? 'about-container-dark'
        : 'about-container-light'
      const aboutText = isDarkTheme ? 'about-text-dark' : 'about-text-light'
      return (
        <>
          <Navbar />
          <div className={aboutContainer}>
            {isDarkTheme ? (
              <img
                className="about-image"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            ) : (
              <img
                className="about-image"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            )}
            <h1 className={aboutText}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
