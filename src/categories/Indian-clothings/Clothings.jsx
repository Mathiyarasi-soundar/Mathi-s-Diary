import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import Clothingsitem from './Clothingsitem'

function Clothings() {
  return (
    <>
      <Navbar />
      <div className="categories-container">
        <h1>Indian Clothings</h1>
        <p>India - a land of vibrant colours, intricate patterns, and exquisite craftsmanship, blending beautiful embellishments with rich fabrics. The age-old traditions, culture, and heritage are deeply reflected in the traditional clothing of India. From the elegant Kanjeevaram sarees of Tamil Nadu to the colourful Ghagra Cholis of Rajasthan, the traditional clothing of India is diverse, each embodying unique styles, traditions, and artistry.</p>
        <p>The traditional clothing of India is a testament to the diverse cultures that have flourished over millennia. From Kashmir to Kanyakumari, Indian traditional attire plays a crucial role in festivals, religious ceremonies, and celebrations, showcasing their identity and unique practices.
          During events like Diwali, Navratri, and weddings, people don their most exquisite traditional Indian dresses to honour their cultural heritage and express their identity. These Indian cultural clothing styles significantly vary from region to religion, people and community. </p>
        <div className="contents">
          {Clothingsitem.map((item, index) => (
            <div key={index}>
              <h2>{item.head}</h2>
              <img src={item.image} alt="Indian Clothings" />
              <p>{item.about}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Clothings