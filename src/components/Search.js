import React from 'react'

const Search = ({type, value, placeholder, onChange, className}) => {
  return (
    <input type={type} value={value} placeholder={placeholder} onChange={onChange} className={className}/>
  )
}

export default Search
