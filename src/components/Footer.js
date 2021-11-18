import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
  
  <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        GRACIAS POR SU VISITA
        </p>
      
      
      </section>
      
      <section>
      
          <div class='footer-link-items'>
            <h2>Redes Sociales</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
          
          </div>
       
    
        
           
        
      </section>
      </div>
)}

export default Footer;
