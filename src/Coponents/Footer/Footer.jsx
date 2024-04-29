import React, { Component } from 'react'
import './Footer.scss'
import logo from './Img/logo.svg'


export class Footer extends Component {
  render() {
    return (

   <>
   
   <section id='f1'>
         
         <div className="Contact Conteiner">
         <p>Contact</p>
            <h3>Food Stalls with Persons but also specialized equipment, Skills to manage.</h3>
            <form>

                <input type="text" placeholder='           Enter your message' />
                <button>Send</button>
            </form>
         </div>
   </section>
   
   
<footer>
<section id='fut' className='Conteiner'>
        <div className="fotter-wrapper">

        <div className="footer-logo">
           <a href="#"> <img src= {logo} alt="Logo" /></a>
            <div className="links">
         <a href="#">www.company name.com</a> <br />
             <a href="#">companyname@gmail.com</a> <br />
             <a href="#">Phone: +7 485-118-03-25</a>
         </div>
        </div>
          
          <div className="items">
            <h3>Home</h3>
             <div className="item">
             <a href="#">Landingpage</a> <br />
            <a href="#">Documentation</a> <br />
            <a href="#">Documentation</a> <br />
            <a href="#">Documentation</a> <br />
            <a href="#">Web Design</a>
             </div>
          </div>
          <div className="items">
            <h3>Menu</h3>
             <div className="item">
             <a href="#">Landingpage</a> <br />
            <a href="#">Documentation</a> <br />
            <a href="#">Documentation</a> <br />
            <a href="#">Documentation</a> <br />
            <a href="#">Web Design</a>
             </div>
          </div>
          <div className="items">
            <h3>Company</h3>
             <div className="item">
             <a href="#">Landingpage</a> <br />
            <a href="#">Documentation</a> <br />
            <a href="#">Documentation</a> <br />
         
             </div>
          </div>
       





        </div>




</section>







</footer>
   
   
   
   
   
   
   
   
   </>






    )
  }
}

export default Footer