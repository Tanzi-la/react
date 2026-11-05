import React from 'react'
import './Card.css'

const Card = ({...country}) => {
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{country.name }</h5>
          <p className="card-text">{country.capital}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card