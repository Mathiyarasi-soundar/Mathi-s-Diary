import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Cuisineitems from './Cuisineitems'

function Cuisine() {
  return (
    <>
      <Navbar />
      <div className="categories-container">
        <h1>Indian Cuisine</h1>
        <p>Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.
          Indian food is also heavily influenced by religion, in particular Hinduism and Islam, cultural choices and traditions.</p>
        <p>Historical events such as invasions, trade relations, and colonialism have played a role in introducing certain foods to this country. The Columbian discovery of the New World brought a number of new vegetables and fruits to India. A number of these such as potatoes, tomatoes, chillies, peanuts, and guava have become staples in many regions of India.</p>
        <div className="contents">
          {Cuisineitems.map((item, index) => (
            <div key={index}>
              <h2>{item.head}</h2>
              <img src={item.image} alt="Indian Cuisine" />
              <p>{item.about}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cuisine