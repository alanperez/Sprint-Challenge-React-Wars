import React from 'react'


const Character = ({name,gender,height,mass}) => {
  // console.log('char clg')
  return(
    <div className='ui card' style={{margin: '20px auto'}}>
      <div className='content'>
        <h1>{name}</h1>
         <p><strong>gender:</strong>   {gender}</p>
         <p><strong>height:</strong>   {height}</p>
         <p><strong>mass:</strong>   {mass}</p>
      </div>

      <div className='description'>

      </div>
    </div>
  )
}

export default Character