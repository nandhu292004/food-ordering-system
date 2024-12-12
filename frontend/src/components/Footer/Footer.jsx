import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivary</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get IN TOUCH</h2>
                <ul>
                    <li>+1 212-679-4552</li>
                    <li>contect@tomato.com</li>
                </ul>
            </div>
            
            
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </div>
  )
}
