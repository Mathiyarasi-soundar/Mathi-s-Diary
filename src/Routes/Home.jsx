import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Styles/Home.css'
import Footer from '../Footer/Footer'
import culture from '../Images/main images/I-culture8.jfif'
import cultural from '../Images/main images/cultural-india.jfif'
import festivals from '../Images/main images/indian-festivals1.jpg'
import dance from '../Images/main images/indian-dance1.jpg'
import wedding from '../Images/main images/indian-weddings1.jpg'
import cuisine from '../Images/main images/indian-cuisine1.png'
import clothing from '../Images/main images/indian-clothings1.png'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Navbar />
      <div classname='home-container'>
        <div className="culture-image">
          <img src={culture} alt="Cultures in India" />
          <h1>Cultures of India</h1>
        </div>
        <div className="culture-content">
          <div className="culture-intro">
            <h1>Indian Cultures</h1>
            <p>Indian culture is the heritage of social norms and technologies that originated in or are associated with the ethno-linguistically diverse India, pertaining to the Indian subcontinent until 1947 and the Republic of India post-1947. The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonisation, or influence, particularly in South Asia and Southeast Asia. India's languages, religions, dance, music, architecture, food, and customs differ from place to place within the country.</p>
          </div>
          <div className="cultural-india">
            <div className="image">
              <img src={cultural} alt="Cultural India" />
            </div>
            <div className="para">
              <p>Indian culture, often labelled as a combination of several cultures, has been influenced by a history that is several millennia old, beginning with the Indus Valley Civilization and other early cultural areas.</p>
              <p>India has 28 states and 8 union territories with different cultures and is the most populated country in the world. The Indian culture, often labeled as an amalgamation of several various cultures, spans across the Indian subcontinent and has been influenced and shaped by a history that is several thousand years old. Throughout the history of India, Indian culture has been heavily influenced by Dharmic religions</p>
            </div>
          </div>
          <div className="culture-religious">
            <h1>Religious Culture</h1>
            <p>The second most populous country in the world with dozens of religions, languages, and ethnic groups shape the incredibly diverse culture of India. In fact, India’s cultural history spans more than 4,500 years! In the country of the Ganges River and the majestic Himalayan Mountains, travelers can discover a mix of traditional sarees and modern suits, learn Yoga, and visit food carts with fried vegetables and fish lining the streets.</p>
            <p>Indian-origin religions Hinduism, Jainism, Buddhism, and Sikhism, are all based on the concepts of dharma and karma. Ahimsa, the philosophy of nonviolence, is an important aspect of native Indian faiths whose most well-known proponent was Shri Mahatma Gandhi, who used civil disobedience to unite India during the Indian independence movement-this philosophy further inspired Martin Luther King Jr. and James Bevel during the American civil rights movement. Foreign-origin religion, including Abrahamic religions, such as Judaism, Christianity and Islam, are also present in India, as well as Zoroastrianism and Baháʼí Faith both escaping persecution by Islam have also found shelter in India over the centuries.</p>
          </div>
          <div className="culture-explore">
            <h1>Exploring the Culture of India</h1>
            <p>Many elements of Indian culture, such as Indian festivals, Weddings, Clothings, cuisine, languages, dance, music, and movies have had a profound impact across the Indosphere, Greater India, and the world. The British Raj further influenced Indian culture, such as through the widespread introduction of the English language, which resulted in a local English dialect and influences on the Indian languages.</p>
            <div className="explore-content">
              <div className="explore-image">
                <img src={festivals} alt="Indian Festivals" />
                <img src={dance} alt="Indian Folk-dances" />
                <img src={wedding} alt="Indian Weddings" />
                <img src={cuisine} alt="Indian Cuisine" />
                <img src={clothing} alt="Indian Clothings" />
                <div className="explore-text">
                  <h2><Link to='/categories' className='text'>Explore Now</Link></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home