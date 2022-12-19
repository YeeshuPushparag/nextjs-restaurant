import React from 'react';
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';



const Footer = () => (
  <footer id="footer">

    <div className="footer-container">
      <div className="find-us">
        <h2 className='footer-subhead'>Our Location</h2>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>

      <div className="footer-icons">
      <Link href="/" className="link">
      <h2 className='footer-head'>Osteria</h2>
      </Link>
        <div className="footer-icons-list">
          <FiFacebook className='footer-icons-list-icon' color="#fff" fontSize={30}/>
          <FiTwitter className='footer-icons-list-icon' color="#fff" fontSize={30}/>
          <FiInstagram className='footer-icons-list-icon' color="#fff" fontSize={30}/>
        </div>
      </div>

      <div className="working-hours">
        <h2 className='footer-subhead'>Working Hours</h2>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p className="p__opensans">Copyright &copy; Created by Yeeshu Pushparag.</p>
    </div>

  </footer>
);

export default Footer;