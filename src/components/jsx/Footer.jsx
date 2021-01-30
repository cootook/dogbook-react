import React from 'react';
import stl from '../scss/Footer.module.scss';
import imgMail from '../icons/icon-email.svg';
import imgPhone from '../icons/icon-phone.svg';

export default function Footer() {
  return (
    <footer className={stl.wrapper}>
      <div className={stl.content}>
              <h4 className={stl.content_item_heading}>For questions and suggestions</h4>
              <a href="mailto:email@shelter.com" className={stl.content_item_link} target="_blank" rel="noreferrer">
                  <div className={stl.content_item_img_wrapper}>
                      <img src={imgMail} alt="mail"/>
                  </div>
                  <h4 className={stl.content_item_text}>email@shelter.com</h4>
              </a>
              <a href="tel:+13 674 567 75 54" className={stl.content_item_link} target="_blank" rel="noreferrer">
                  <div className={stl.content_item_img_wrapper}>
                      <img src={imgPhone} alt="phone"/>
                  </div>
                  <h4 className={stl.content_item_text}>+13 674 567 75 54</h4>
              </a>          
      </div>
    </footer>
  )
}
