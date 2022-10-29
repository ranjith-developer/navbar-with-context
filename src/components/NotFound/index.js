// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFound = isDarkTheme
        ? 'notfound-container-dark'
        : 'notfound-container-light'

      const textStyle = isDarkTheme ? 'notfound-text-dark' : ''
      return (
        <>
          <Navbar />
          <div className={notFound}>
            <img
              className="notfound-image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={textStyle}>Lost Your Way?</h1>
            <p className={textStyle}>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
