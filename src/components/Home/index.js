// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeContainer = isDarkTheme
        ? 'home-container-dark'
        : 'home-container-light'
      const homeText = isDarkTheme ? 'home-text-dark' : 'home-text-light'
      return (
        <>
          <Navbar />
          <div className={homeContainer}>
            {isDarkTheme ? (
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            ) : (
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            )}
            <h1 className={homeText}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
