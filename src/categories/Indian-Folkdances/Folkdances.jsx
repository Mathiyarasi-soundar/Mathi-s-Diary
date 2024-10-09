import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Folkdanceitems from './Folkdanceitems'

function Folkdances() {
  return (
    <>
      <Navbar />
      <div className="categories-container">
        <h1>Indian Folk-dances</h1>
        <p>India is known for its rich cultural heritage and traditions. Dance is a part of life from ancient times to the most cultured communities.Generally, dance forms in India are classified into two categories namely classical and folk dance. As per the local tradition, these dance forms have been originated from various parts of India. </p>
        <p>Basically, Indian folk and tribal dances are simple and are performed to express joy during the arrival of seasons, the birth of a child, weddings, and festivals. Folk art is the common possession of a group of people or a particular locality. The identity of the originators is forgotten, but the style is preserved down the ages.</p>
        <div className="contents">
          {Folkdanceitems.map((item, index) => (
            <div key={index}>
              <h2>{item.head}</h2>
              <img src={item.image} alt="Indian Folk-dances" />
              <p>{item.about}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Folkdances