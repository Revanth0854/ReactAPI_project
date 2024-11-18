import { createContext } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Men from './Pages/Mens/Men'
import Women from './Pages/Women/Women'
import Kids from './Pages/Kids/Kids'
export const Data = createContext()

function App() {

  const productsUrl = "http://localhost:3000/products"
  const logosUrl = "http://localhost:3000/logos"
  const cardsUrl = "http://localhost:3000/cards"
  const trendsUrl = "http://localhost:3000/trends"

  const contextValue = {
    urls: { productsUrl, logosUrl, cardsUrl, trendsUrl }

  }
  return (
    <>
      <Data.Provider value={contextValue}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mens' element={<Men />} />
            <Route path='/womens' element={<Women />} />
            <Route path='/kids' element={<Kids />} />
          </Routes>
        </Router>
      </Data.Provider>




    </>
  )
}

export default App
