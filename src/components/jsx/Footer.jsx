import React from 'react';
import imgMail from '../icons/icon-email.svg';
import imgPhone from '../icons/icon-phone.svg';

export default function Footer() {
  return (
    <footer className="footer_wrapper">
      <div className="footer_content">
              <h4 className="footer_content_item_heading">For questions and suggestions</h4>
              <a href="mailto:email@shelter.com" className="footer_content_item_link" target="_blank" rel="noreferrer">
                  <div className="footer_content_item_img_wrapper">
                      <img src={imgMail} alt="mail"/>
                  </div>
                  <h4 className="footer_content_item_text">email@shelter.com</h4>
              </a>
              <a href="tel:+13 674 567 75 54" className="footer_content_item_link" target="_blank" rel="noreferrer">
                  <div className="footer_content_item_img_wrapper">
                      <img src={imgPhone} alt="phone"/>
                  </div>
                  <h4 className="footer_content_item_text">+13 674 567 75 54</h4>
              </a>          
      </div>
    </footer>
  )
}
