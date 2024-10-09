import React from 'react'
import '../Styles/About.css'
import image from '../Images/main images/logo.png'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-logo">
          <img src={image} alt="" />
          <h1>Mathi's Diary</h1>
        </div>
        <div className="about-content">
          <p>Mathi's Diary is a dynamic, continuously updated, rigorously fact-checked information source for students, teachers, and lifelong learners. Whether you need historical context for the latest evolving world crisis, want an engaging biography of someone in the news, or just would like to test your knowledge of world capitals, Mathi's Diary is the only place you need to look.</p>
          <p>As the Internet's premier collection of online encyclopedias, Mathi's Diary provides you reference entries from credible, published sources.
            Other Web sites that allow public editing of their pages to write reference entries can be fun. But when you need credible information from reliable sources you can cite, Mathi's Diary.
          </p>
          <p>Mathi's Diary purpose is to benefit readers by presenting information on all branches of knowledge.  Mathi's Diary consists of freely editable content, with articles that often contain numerous links guiding readers to more information.</p>
          <p>Mathi's Diary differs from printed references in important ways. It is continually created and updated, and encyclopedic articles on news events appear within minutes, making it more dynamic than most traditional resources. </p>
          <h2>Mission</h2>
          <p>At Mathi's Diary, we consider it part of our mission to provide information about educational resources far and wide, and this includes helping to meet the challenges faced by disadvantaged students, educators, families, and individuals who don’t have easy access to the learning materials they need.  To do that, we publish in costfree. </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About