import { createContext } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Men from './Pages/Mens/Men'
import Women from './Pages/Women/Women'
import Kids from './Pages/Kids/Kids'
export const Data = createContext()

function App() {

  const productsUrl = "https://reactapi-server.onrender.com/products"
  const logosUrl = "https://reactapi-server.onrender.com/logos"
  const cardsUrl = "https://reactapi-server.onrender.com/cards"
  const trendsUrl = "https://reactapi-server.onrender.com/trends"

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
