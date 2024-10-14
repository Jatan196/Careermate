import React from 'react';
import './CounsLanding.css'

function CounsLanding() {
  return (
    <div className="Nav-bar">
      <header className="header">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">CareerMate</h1>
          <nav>
            <ul className="Nav_bar">
              <li><a href="#" className="hover:underline">HOME</a></li>
              <li><a href="#" className="hover:underline">ADD SLOT</a></li>
              <li><a href="#" className="hover:underline">REQUEST</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="hero_section">
          <h1>give guidence to others.</h1>
          <p className="cta-text">guide the right path to student with your experince...</p>
        </section>

        <section className="about_section">
          <div className="about_box">
            <h2>ABOUT US</h2>
            <p>
              We at CareerMate aim at providing the best guidence and motivation to help students shape their future.
              We believe that choosing a right career option is necessary as building a brighter future
              and fostering the skills of student require proper guidence and planning...
            </p>
          </div>
        </section>

        <section className="why">
          <div className="why-box">
            <h2>WHY TO GUIDE RIGHT CAREER PATH?</h2>
            <p>Guiding the right career path is essential for personal fulfillment and long-term success...</p>
          </div>
        </section>

        <section className="Session">
          <h2 className="expart">Expert Career Guidance</h2>
          <p className="expart-more">Unlock Your Potential with Personalized Career Counselling</p>
        </section>
      </main>

      <footer className="footer-section">
        <div className="footer-box">
          <p>CareerMate Counselling</p>
        </div>
      </footer>

    </div>
  )
}

export default CounsLanding;