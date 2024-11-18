import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Data } from '../../App'
import axios from 'axios'
import '../Home/Home.css'
import Footer from '../../Components/Footer/Footer'

const Women = () => {
  const { urls } = useContext(Data)
  const [products, setProducts] = useState([])

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

  return (
    <div>
      <Navbar />
      <h1 style={{ fontFamily: "Cursive", fontSize: "40px", color: "white", borderRadius: "20px", background: "#242424", textAlign: "center" }}>Womens-Section</h1>
      <div className="Cards">
        {
          products.filter(item => (item.category == "women"))
            .map((item, index) => (
              <div className="s4card" key={index}>
                <img src={item.image} alt="" />
                <div className="cardDescription">
                  <h2>{item.name}</h2>
                  <h3> ₹ {item.price} /-</h3>
                  <h4>{item.description}</h4>
                </div>
              </div>
            )).slice(0, 8)
        }
      </div>
      <Footer />
    </div>
  )
}

export default Women
