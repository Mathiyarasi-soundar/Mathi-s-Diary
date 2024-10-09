import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Weddingitems from './Weddingitems'

function Weddings() {
  return (
    <>
      <Navbar />
      <div className="categories-container">
        <h1>Indian Weddings</h1>
        <p>Weddings in India vary according to the region, the religion, the community and the personal preferences of the bride and groom. They are festive occasions in India, and in most cases celebrated with extensive decorations, colour, music, dance, outfits and rituals that depend on the community, region and religion of the bride and the groom, as well as their preferences.  India celebrates about 10 million weddings per year, of which about 80% are Hindu weddings.</p>
        <div className="contents">
          {Weddingitems.map((item, index) => (
            <div key={index}>
              <h2>{item.head}</h2>
              <img src={item.image} alt="Indian Weddings" />
              <p>{item.about}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Weddings