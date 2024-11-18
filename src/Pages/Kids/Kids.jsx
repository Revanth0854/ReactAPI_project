import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Data } from '../../App'
import axios from 'axios'
import '../Home/Home.css'
import Footer from '../../Components/Footer/Footer'

const Kids = () => {
  const { urls } = useContext(Data)
  const [products, setProducts] = useState([])
  const [isLowToHigh, setIsLowToHigh] = useState(false)
  const [isHighToLow, setIsHighToLow] = useState(false)
  const [tops, setTops] = useState(false)
  const [bottoms, setBottoms] = useState(false)

  const getData = async () => {
    try {
      const response = await axios(urls.productsUrl)
      const data = response.data
      setProducts(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleLowToHighChange = () => {
    setIsLowToHigh(!isLowToHigh)
    if (!isLowToHigh) {
      setIsHighToLow(false)
    }
  }

  const handleHighToLowChange = () => {
    setIsHighToLow(!isHighToLow)
    if (!isHighToLow) {
      setIsLowToHigh(false)
    }
  }

  const handleTopsChange = () => {
    setTops(!tops)
    if (!tops) {
      setBottoms(false)
    }
  }

  const handleBottomsChange = () => {
    setBottoms(!bottoms)
    if (!bottoms) {
      setTops(false)
    }
  }

  let fliteredItems = products.filter(item => (item.category == "kids"))

  if(tops === true){
    fliteredItems = fliteredItems.filter(item=>(item.subcategory==="top"))
  }

  if(bottoms === true){
    fliteredItems = fliteredItems.filter(item=>(item.subcategory==="bottom"))
  }

  if (isLowToHigh === true) {
    fliteredItems.sort((a, b) => { return a.price - b.price })
  }
  if (isHighToLow === true) {
    fliteredItems.sort((a, b) => { return b.price - a.price })
  }

 

  return (
    <div>
      <Navbar />
      <h1 style={{ fontFamily: "Cursive", fontSize: "40px", color: "white", padding: "20px 0", background: "#242424", textAlign: "center" }}>Kids-Section</h1>
      <div className="buttons-new">

        <div class="dropdown">
          <button>Sort</button>
          <div class="dropdown-content">
            <h3><input type="checkbox" checked={isLowToHigh} onChange={handleLowToHighChange} disabled={isHighToLow} />Low-to-High</h3>
            <h3><input type="checkbox" checked={isHighToLow} onChange={handleHighToLowChange} disabled={isLowToHigh} />High-to-Low</h3>
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Filter</button>
          <div class="dropdown-content">
            <h3><input type="checkbox" checked={tops} onChange={handleTopsChange} disabled={bottoms} />Tops</h3>
            <h3><input type="checkbox" checked={bottoms} onChange={handleBottomsChange} disabled={tops} />Bottoms</h3>

          </div>
        </div>
      </div>

      <div className="Cards">


        {
          fliteredItems.map((item, index) => (
            <div className="s4card" key={index}>
              <img src={item.image} alt="" />
              <div className="cardDescription">
                <h2>{item.name}</h2>
                <h3> ₹ {item.price} /-</h3>
                <h4>{item.description}</h4>
              </div>
            </div>
          ))
        }
      </div>
      <Footer />

    </div>
  )
}

export default Kids
