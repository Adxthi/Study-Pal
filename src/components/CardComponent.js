import React from 'react'

export default function CardComponent({name,description}) {
  return (
    <div id={name} className="card mt-4">
        <div className="card-body">
          <h2  style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>{name}</h2>
          <p style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>{description}.</p>
          <a  className="btn btn-secondary" style={{fontFamily:'sans-serif',fontWeight:'bold',fontStyle:'italic'}}>Explore {name}</a>
        </div>
      </div>
  )
}
