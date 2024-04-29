import React, { Component } from 'react'
import './Home.scss'
import Tova from './img/tapa.svg'
import home from './img/home.svg'
import home1 from './img/home1.svg'
import home2 from './img/home2.svg'
import opa from './img/opa.svg'

export default class Home extends Component {
  render() {
    return (

      <>
      <main>
        <section className='Conteiner'>

        <div className="main-section">
            <div className="main-text">
               <h1>Making time a good time by making food the good food.</h1>
               <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,</p>
                
                <div className="btn">
                  <button>Order Now</button>
                  <button id='bt'>Food Details</button>
                </div>
            </div>
            
            <div className="tova">
              <img src= {Tova} alt="" />
            </div>
        </div>

          <div className="text">
             <p>Features</p> 
             <h3>Food with a New Passion</h3>
          </div>

          <div className="Food-Delivery">
             <div className="card">
                <img src= {home} alt="" />
                <h3>Quality Food</h3>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
             </div>
             <div className="card">
                <img src= {home1} alt="" />
                <h3>Quality Food</h3>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
             </div>
             <div className="card">
                <img src= {home2} alt="" />
                <h3>Quality Food</h3>
                <p>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
             </div>

          </div>

          <div className="read-me">

            <div className="opa">
              <img src= {opa} alt="" />
            </div>

            <div className="about-us">
              <p>About us</p>
              <h3>Food Stalls with Persons but  to  Product marketing plane
catlogues etc to. </h3>
<p id='pi'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also 
equipment  make your marketing plane Effective.</p>

              <button>Read More</button>
            </div>


          </div>

          <div className="menu">
          <h6>Menu</h6>
          <h3>Food Full of treaty Love</h3>
          <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
        </div>
      
        </section>
      </main>
      
      
      
      
      </>

    )
  }
}
