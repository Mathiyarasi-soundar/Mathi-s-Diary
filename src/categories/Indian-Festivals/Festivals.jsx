import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Festivalsitem from './Festivalsitem'
import './Festivals.css'

function Festivals() {
  return (
    <>
      <Navbar />
      <div className="categories-container">
        <h1>Indian Festivals</h1>
        <p>The spirit of India is expressed year-round in festivals as diverse as the country's landscapes and as lively as its people. Enthusiastic celebrations of gods and goddesses, saints and prophets, history, culture and the advent of new seasons occur almost daily throughout the country. By taking part in these colorful festivities, you will see the vitality of India today as it embraces the traditions of its fascinating past.</p>
        <p>There are some important festivals of India which you should not miss out! Below here we have provided a list of the important festivals for that particular state.</p>
        <div className="contents">
          {Festivalsitem.map((item, index) => (
            <div key={index}>
              <h2>{item.head}</h2>
              <img src={item.image} alt="Indian Festivals" />
              <p>{item.about}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Festivals