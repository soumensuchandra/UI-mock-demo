import React from 'react'
import "./Card.css"
import avatar from './image/product.jpg';

function Card(props) {
    const { name = 'John Doe', description, ...rest } = props
    return (
        <div className="card">
        <img src={avatar} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}
export default Card;
