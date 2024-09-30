import React from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';
import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <h3>Copyright &copy; 2024</h3>
            <div className="social-media">
                <Link to="https://www.instagram.com/eventgem/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={23} />
                </Link>
                <Link to="https://www.facebook.com/EventGem" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF size={23} />
                </Link>
                <Link to="https://twitter.com/EventGem" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={23} />
                </Link>
                <Link to="https://www.youtube.com/@EventGem" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={23} />
                </Link>
                <Link to="mailto:contact@eventgem.com" target="_blank" rel="noopener noreferrer">
                    <IoMail className="fas fa-envelope" size={23}></IoMail>
                </Link>
            </div>
        </div>
    );
}

export default Footer;
