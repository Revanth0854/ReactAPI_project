import React from 'react'
import './Footer.css'
import image from './FooterAssets/navLogo.png'
const Footer = () => {
    return (

        <div className='mainFooter'>

            <div className='footer'>
                <div className="footMainContent">
                    <img src={image} alt="" />
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                </div>
                <div className="wrap">

                    <div className="foot">
                        <h2>Help</h2>
                        <p>Privacy Policy</p>
                        <p>Shipping & Delivery</p>
                        <p>Refund Policy</p>
                        <p>Track Your Order</p>
                    </div>
                    <div className="foot">
                        <h2>Store</h2>
                        <p>Men Fashion</p>
                        <p>Women Fashion</p>
                        <p>Kids Fashion</p>
                        <p>Other</p>
                    </div>
                    <div className="foot">
                        <h2>Support</h2>
                        <p>Feedback</p>
                        <p>Contact us</p>
                        <p>Download app</p>
                        <p>Terms & condition</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
