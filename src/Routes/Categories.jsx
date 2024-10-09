import React from 'react'
import '../Styles/Categories.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import festival from '../Images/main images/indian-festivals.jpg'
import dance from '../Images/main images/indian-dance.jpg'
import wedding from '../Images/main images/indian-weddings.jpg'
import cuisine from '../Images/main images/indian-cuisine.png'
import clothing from '../Images/main images/indian-clothings.png'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className='head'>Categories of Indian Cultures</h1>
        <p className='main-para'>Many elements of Indian culture, such as Indian festivals, Weddings, Clothings, cuisine, languages, dance, music, and movies have had a profound impact across the Indosphere, Greater India, and the world. The British Raj further influenced Indian culture, such as through the widespread introduction of the English language, which resulted in a local English dialect and influences on the Indian languages.</p>
        <div className="category-div">
          <div>
            <img src={festival} alt="Indian Festivals" />
            <div className="para">
              <h1>Indian Festivals</h1>
              <p>India, being a multi-cultural, multi-ethnic and multi-religious society, celebrates holidays and festivals of various religions. The three national holidays in India, the Independence Day, the Republic Day and the Gandhi Jayanti, are celebrated with zeal and enthusiasm across India. In addition, many Indian states and regions have local festivals depending on prevalent religious are very popular. Several harvest festivals such as Makar Sankranti, Sohrai, Hornbill, Pongal and Onam festival are also fairly popular.</p>
              <h3><Link to='./indian-festivals' className='explore'>Explore Now</Link></h3>
            </div>
          </div>

          <div>
            <img src={dance} alt="Indian Folk-dances" />
            <div className="para">
              <h1>Indian Folk-dances</h1>
              <p>Indian folk dances, which typically consist of a few simple steps, are performed throughout the world to celebrate a new season, childbirth, weddings, festivals, and other social occasions. In some Indian folk dances, men and women perform separately; in others, they dance together. On most occasions, the dancers will sing accompanied by musicians. Most folk dances have intricately-designed costumes. Although a number of structured, ancient folk and tribal dances exist, many others are evolving.</p>
              <h3><Link to='./indian-folkdances' className='explore'>Explore Now</Link></h3>
            </div>
          </div>

          <div>
            <img src={wedding} alt="Indian Weddings" />
            <div className="para">
              <h1>Indian Weddings</h1>
              <p>Weddings are festive occasions in India with extensive decorations, colors, music, dance, costumes and rituals that depend on the religion of the bride and the groom. The nation celebrates about 10 million weddings per year, of which over 80% are Hindu weddings.
                While there are many festival-
                related rituals in Hinduism, vivaha such as wedding is the most extensive personal ritual an adult Hindu undertakes in his or her life. Typical Hindu families spend significant effort and financial resources to celebrate weddings.</p>
              <h3><Link to='./indian-weddings' className='explore'>Explore Now</Link></h3>
            </div >
          </div>

          <div>
            <img src={cuisine} alt="Indian Cuisine" />
            <div className="para">
              <h1>Indian Cuisine</h1>
              <p>Indian food is as diverse as India. Indian cuisines use numerous ingredients, deploy a wide range of food preparation styles, cooking techniques, and culinary presentations. From salads to sauces, from vegetarian to meat, from spices to sensuous, from bread to desserts, Indian cuisine is invariably complex. Harold McGee, a favourite of many Michelin-starred chefs, writes "for sheer inventiveness with the milk itself as the primary ingredient, no country on earth can match India."</p>
              <h3><Link to='./indian-cuisine' className='explore'>Explore Now</Link></h3>
            </div >
          </div>

          <div>
            <img src={clothing} alt="Indian Clothings" />
            <div className="para">
              <h1>Indian Clothings</h1>
              <p>Traditional clothing in India greatly varies across different parts of the country and is influenced by local culture, geography, climate, and rural/urban settings. Popular styles of dress include draped garments such as sari and mekhela sador for women and the kurta, dhoti or lungi or panche for men. Stitched clothes are also popular such as churidar or salwar-kameez for women with dupatta. The salwar is often loose fitting, while churidar is a tighter cut. The dastar, a headgear worn by Sikhs is common in Punjab.</p>
              <h3><Link to='./indian-clothings' className='explore'>Explore Now</Link></h3>
            </div >
          </div>
        </div >
      </div >
      <Footer />
    </>
  )
}

export default Categories
// India is known for its love of food and spices. Indian cuisine varies from region to region, reflecting the local produce, cultural diversity, and varied demographics of the country. Generally, Indian cuisine can be split into five categories – northern, southern, eastern, western, and northeastern. The diversity of Indian cuisine is characterised by the differing use of many spices and herbs, a wide assortment of recipes and cooking techniques. Though a significant portion of Indian food is vegetarian, many Indian dishes also include meats like chicken, mutton, beef (both cow and buffalo), pork and fish, egg and other seafood. Fish-based cuisines are common in eastern states of India, particularly West Bengal and the southern states of Kerala and Tamil Nadu