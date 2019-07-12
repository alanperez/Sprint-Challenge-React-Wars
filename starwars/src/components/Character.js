import React from 'react'


const Character = props => {
  return(
    <div className='ui card' style={{margin: '20px auto'}}>
      <div className='image'>

      </div>
      <div className='content'>
      <h1>{props.char.name}</h1>
         <p>{props.char.gender}</p>
         <p>{props.char.height}</p>
         <p>{props.char.mass}</p>
      </div>

      <div className='description'>

      </div>
    </div>
  )
}

export default Character