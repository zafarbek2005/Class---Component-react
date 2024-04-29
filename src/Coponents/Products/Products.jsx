import React, { Component } from 'react'
import axios from '../Api/Index'
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
    

      <div>
        <h1>Products</h1>

        {
            this.state.data?.map((el) => <img width={250} height={250}  src= {el.images[0]} alt= {el.title} /> )
        }

      </div>
    )
  }
}

export default Products