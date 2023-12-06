import React, { useEffect, useState } from 'react'
import footlogo from "../../assets/Logo.svg"
import { Container } from '../../utils/Utils'
import { Link } from 'react-router-dom'
import { FaArrowUp } from "react-icons/fa6";
import "./Footer.scss"

const Footer = () => {
    const [timezones, setTimezones] = useState({
        newYork: '',
        london: '',
        tokyo: '',
        // Add more timezones as needed
      });
    
      useEffect(() => {
        const getTimeInTimeZone = (timezone) => {
          return new Date().toLocaleTimeString('en-US', { timeZone: timezone });
        };
    
        setTimezones({
          newYork: getTimeInTimeZone('America/New_York'),
          london: getTimeInTimeZone('Europe/London'),
          tokyo: getTimeInTimeZone('Asia/Tokyo'),
          // Update times for other time zones
        });
    
        // Update time every second
        const interval = setInterval(() => {
          setTimezones({
            newYork: getTimeInTimeZone('America/New_York'),
            london: getTimeInTimeZone('Europe/London'),
            tokyo: getTimeInTimeZone('Asia/Tokyo'),
            // Update times for other time zones
          });
        }, 1000);
    
        // Clean up interval on component unmount
        return () => clearInterval(interval);
      }, []);
  return (
    <footer>
        <Container>
            <div className="footer-main">
                <div className='footer-top'>
                    <div className="logo">
                        <img src={footlogo} alt="" />
                    </div>
                    <div className="uls">
                        <ul className='first-li'>
                            <li>
                                <Link>Newsroom</Link>
                            </li>
                            <li>
                                <Link>Spotify Jobs</Link>
                            </li>
                            <li>
                                <Link>Spotify.com</Link>
                            </li>
                            <li>
                                <Link>Spotify R&D Engineering</Link>
                            </li>
                            <li>
                                <Link>Spotify R&D Research</Link>
                            </li>
                            <li>
                                <Link>Spotify R&D Insights</Link>
                            </li>
                        </ul>
                        <ul className='second-li'>
                            <li>
                                <Link>Instagram</Link>
                            </li>
                            <li>
                                <Link>Twitter</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="times">
                        <div>
                            <p>SE<sup>GBG . STO</sup></p>
                            <span>{timezones.tokyo.padStart(11, 0)}</span>
                        </div>
                        <div>
                            <p>UK<sup>LDN</sup></p>
                            <span>{timezones.london.padStart(11, 0)}</span>
                        </div>
                        <div>
                            <p>US<sup>NY . BOS</sup></p>
                            <span>{timezones.newYork.padStart(11, 0)}</span>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <ul>
                        <li><Link>© 2020 Spotify AB</Link></li>
                        <li><Link>Legal</Link></li>
                        <li><Link>Privacy</Link></li>
                        <li><Link>Cookies</Link></li>
                        <li><Link>Revoke access</Link></li>
                        <li><Link>RSS</Link></li>
                    </ul>
                    <Link>Back to top <span><FaArrowUp/></span></Link>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer