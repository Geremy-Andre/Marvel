import React from 'react'

export const ImageGriditem = ( {id, title, url} ) => {
  console.log(title)
    return (
          <div className="col-md-3">
            <img className='card-img-top' src= {url} alt={title} />
            <p>{ title }</p>    
          </div>
    )
}