import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import heroImg from './HomeAssets/heroImg.png'
import './Home.css'
import axios from 'axios'
import order from './HomeAssets/orders.png'
import { Data } from '../../App'
import man from './HomeAssets/man.png'
import letter from './HomeAssets/newsletter.png'
import send from './HomeAssets/send.png'
import facebook from './HomeAssets/facebook.png'
import insta from './HomeAssets/insta.png'
import twitter from './HomeAssets/twitter.png'
import Footer from '../../Components/Footer/Footer'




const Home = () => {

    const { urls } = useContext(Data)

    const [products, setProducts] = useState([])
    const [logos, setLogos] = useState([])
    const [trends, setTrends] = useState([])
    const [cards, setCards] = useState([])

    const getPosts = async () => {
        try {
            const products = await axios.get(urls.productsUrl)
            const data = products.data
            setProducts(data)
            const logos = await axios.get(urls.logosUrl)
            const logoData = logos.data
            setLogos(logoData)
            const trends = await axios.get(urls.trendsUrl)
            const trendsData = trends.data
            setTrends(trendsData)
            const cards = await axios.get(urls.cardsUrl)
            const cardsData = cards.data
            setCards(cardsData)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    const filteredMen = products.filter(item => (item.category === "men")).slice(0, 2)
    const filteredWomen = products.filter(item => (item.category === "women")).slice(0, 1)
    const filteredKids = products.filter(item => (item.category === "kids")).slice(0, 1)

    const filterData = [...filteredMen, ...filteredWomen, ...filteredKids]

    const [type, setType] = useState("all")

    const handleClick = (e) => {
        setType(e.target.value)
    }

    return (
        <>
            <Navbar />
            <div className="hero">
                <div className="heroLeft">
                    <h3>TRENDING COLLECTION</h3>
                    <h1>Explore Summer Collection</h1>
                    <button className='btn'>Shop Now</button>
                </div>
                <div className="heroRight">
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <div className="section-2">
                <img src={order} alt="" />
            </div>
            <div className="cards">
                {
                    cards.map((item, index) => (
                        <div className="card" key={index}>
                            <div className="cardLeft">
                                <h1>{item.head1}</h1>
                                <h3>{item.head2}</h3>
                                <button className='cardBtn'>{item.btn}</button>
                            </div>
                            <div className="cardRight">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="section-4">
                <h1>New Arrivals</h1>
                <h4>Check out most promising product bought by our buyers</h4>
                <div className="buttons">
                    <button value="all" onClick={handleClick} >All</button>
                    <button value="mens" onClick={handleClick}>Mens</button>
                    <button value="womens" onClick={handleClick}>Womens</button>
                    <button value="kids" onClick={handleClick}>Kids</button>
                </div>
                <div className="s4Cards">
                    {type === "all" &&
                        filterData.map((item, index) => (
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
                    {
                        type === "mens" &&
                        products.filter(item => (item.category == "men"))
                            .map((item, index) => (
                                <div className="s4card" key={index}>
                                    <img src={item.image} alt="" />
                                    <div className="cardDescription">
                                        <h2>{item.name}</h2>
                                        <h3> ₹ {item.price} /-</h3>
                                        <h4>{item.description}</h4>
                                    </div>
                                </div>
                            )).slice(0, 4)
                    }
                    {
                        type === "womens" &&
                        products.filter(item => (item.category === "women"))
                            .map((item, index) => (
                                <div className="s4card" key={index}>
                                    <img src={item.image} alt="" />
                                    <div className="cardDescription">
                                        <h2>{item.name}</h2>
                                        <h3> ₹ {item.price} /-</h3>
                                        <h4>{item.description}</h4>
                                    </div>
                                </div>
                            )).slice(0, 4)
                    }
                    {
                        type === "kids" &&
                        products.filter(item => (item.category === "kids"))
                            .map((item, index) => (
                                <div className="s4card" key={index}>
                                    <img src={item.image} alt="" />
                                    <div className="cardDescription">
                                        <h2>{item.name}</h2>
                                        <h3> ₹ {item.price} /-</h3>
                                        <h4>{item.description}</h4>
                                    </div>
                                </div>
                            )).slice(0, 4)
                    }
                </div>
            </div>
            <div className="brands">
                <div className="brand">

                    <div className="box">
                        <h1>Top Brands Deal</h1>
                        <h4>Up To 60% off on brands</h4>
                    </div>

                    <div className="boxes">

                        {
                            logos.map((item, index) => (
                                <div className="logos" key={index}>
                                    <img src={item.image} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="trending">
                <h1>Trending Collection</h1>
                <h4>Check out most promising product bought by our buyers</h4>
                <div className="s4Cards">

                    {
                        trends.map((item, index) => (
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
            </div>
            <div className="section-5">
                <div className="s5head">
                    <h1>Reviews</h1>
                    <h4>This is what our customers have to say </h4>
                </div>
                <div className="s5card">
                    <div className="cardLeftImage">
                        <img src={man} alt="" />
                    </div>
                    <div className="cardRightContent">
                        <h4>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum
                        </h4>
                        <h3>Sameer Jain</h3>
                    </div>
                </div>
            </div>

            {/* =========NEWSLETTER SECTION========== */}
            
            <div className="newsLetter">
                <img src={letter} alt="" />
                <div className="letterHead">
                    <h1>Subscibe Newsletter</h1>
                    <h4>Subscribe to our email and get updates right in your inbox</h4>
                </div>
                <div className="email">
                    <input type="text" placeholder='Enter Your Email' />
                    <img src={send} alt="" />
                </div>
                <div className="icons">
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Home
