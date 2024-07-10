import React from 'react'
import './Footer.css'

import img from '../../assets/img10.png'
import img1 from '../../assets/img11.png'
import logo from '../../assets/logo.png'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
    
      <>
        <section className='footer'>
        <div className='footer__main'>
            <div className='footer__section'>
                <div className='footer__logo-container'>
                    <img src={logo} alt="" className='footer__logo' />
                </div>
                <div className='footer__mission'>
                    <p>Empowering web developers and small businesses, our mission is to simplify life. Leveraging cutting-edge technology, backed by 24/7 exceptional support.</p>
                </div>
                <div className='footer__social-media'>
                    <div className='footer__social-media-item'>
                        <FaSquareInstagram size={30} />
                    </div>
                   
                    <div className='footer__social-media-item'>
                        <FaYoutube size={30} />
                    </div>
                    <div className='footer__social-media-item'>
                        <FaFacebook size={30} />
                    </div>
                    <div className='footer__social-media-item'>
                        <FaXTwitter size={30} />
                    </div>
                </div>
            </div>
            <div className='footer__features'>
                <div className='footer__feature-item'>
                    <h6>Features</h6>
                    <ul>
                        <li>Security & Technology</li>
                        <li>Industry Leading Support</li>
                        <li>Uptime Guarantee</li>
                        <li>Server Locations</li>
                        <li>Control Panel</li>
                    </ul>
                </div>
            </div>
        </div>
      
    </section>
      <div className='footer__bottom'>
      <div className='footer__bottom-content'>
        
              <h6>copyright 2024 | All rights reserved</h6>
        
         
      </div>
  </div>
  </>
    )
}

export default Footer