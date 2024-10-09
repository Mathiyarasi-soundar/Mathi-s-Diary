import './Footer.css'
import React from 'react'
import Footeritems from './Footeritems'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-top">
                <div className='footer-logo'>
                    <h1> Mathi's Diary 📖  </h1>
                    <p>Gather your knowledge with Mathi's Diary.</p>
                </div>
            </div>
            <div className="footer-bottom">
                {Footeritems.map((item, index) => (
                    <div key={index}>
                        <h4>{item.head}</h4>
                        <a href="/"><i className={item.icon1}></i>{item.anchor1}</a>
                        <a href="/"><i className={item.icon2}></i>{item.anchor2}</a>
                        <a href="/"><i className={item.icon3}></i>{item.anchor3}</a>
                        <a href="/"><i className={item.icon4}></i>{item.anchor4}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Footer