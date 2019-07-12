import React from 'react'


const Character = ({char}) => {
  console.log('char clg', char)
  return(
    <div className='ui card' style={{margin: '20px auto'}}>
      <div className='image'>

      </div>
      <div className='content'>
        <h1>{char.name}</h1>
         <p><strong>gender:</strong>   {char.gender}</p>
         <p><strong>height:</strong>   {char.height}</p>
         <p><strong>mass:</strong>   {char.mass}</p>
      </div>

      <div className='description'>

      </div>
    </div>
  )
}

export default Character