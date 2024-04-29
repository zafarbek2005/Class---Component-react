import React, { Component } from 'react'
import axios from '../Api/Index'
import B from './img/b.svg'
import './Products.scss'
import star from './img/star.svg'

export class Products extends Component {
    constructor() {
        super()
        this.state ={
            data :null,
            loading:false
        }
    }
    componentDidMount(){
        axios
        .get('/Products')
        .then(res => this.setState({data:res.data.products}))
        .catch(res=> console.log(res))
    }
  render() {

    return (
    
      <>
      
      
     


        <div className="wrapper ">
        {
            this.state.data?.slice(0,6).map((el) => 

            <div className="card">
            <img src= {el.images[0]} alt={el.title} />
            <div className="title">
              <h3>{el.title}</h3>
              <p>16$</p>
            </div>
            <p id='w' title= {el.description}> {el.description}</p>
            <div className="icon">
              <p>+</p>
              <img src= {star} alt="" />
            </div>
        </div>)
        }
          
        </div>

   
   
        
      
      </>

    )
  }
}

export default Products