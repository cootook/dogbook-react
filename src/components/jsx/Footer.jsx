import React from 'react';
import imgMail from '../icons/icon-email.svg';
import imgPhone from '../icons/icon-phone.svg';
import imgLocation from '../icons/icon-marker.svg';
import imgPuppy from '../images/footer-puppy.png';

export default function Footer() {
  return (
    <footer className="footer_wrapper">
      <div className="footer_content">
          <div className="footer_content_item contact">
              <h3 className="footer_content_item_heading">For questions and suggestions</h3>
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
          <div className="footer_content_item we_are">
              <h3 className="footer_content_item_heading">We are waiting for your visit</h3>
              <a href="https://yandex.ru/maps/-/CCQ3bHuDxC" className="footer_content_item_link" target="_blank" rel="noreferrer">
                  <div className="footer_content_item_img_wrapper">
                      <img src={imgLocation} alt="location mark"/>
                  </div>
                  <h4 className="footer_content_item_text we_are_text">1 Central Street, Boston (entrance from the store)</h4>
              </a>
              <a href="https://yandex.ru/maps/-/CCQ3bHuDxC" className="footer_content_item_link" target="_blank" rel="noreferrer">
                  <div className="footer_content_item_img_wrapper">
                      <img src={imgLocation} alt="location mark"/>
                  </div>
                  <h4 className="footer_content_item_text">18 South Park, London </h4>
              </a>
          </div>
          <div className="footer_content_img_puppy_wrapper">
              <img className="footer_content_img_puppy_img" src={imgPuppy} alt="lovely puppy"/>
          </div>
      </div>
    </footer>
  )
}
