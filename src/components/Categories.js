import React from 'react'

const Categories = ({id, link, imageId, text}) => {
  return (
     <a href={link} key={id} className='min-w-36'>
      <div key={id}>
        <img
          src={imageId}
          alt={text}
        />
      </div>
    </a>
  )
}

export default Categories
