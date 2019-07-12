import React from 'react'
import Character from '../components/Character'

const CharacterList = ({char}) => {
  // console.log('CLG THE PROPS in CHARACTERLIST:', props.char)
  return(
    
        <div className="newChar" >
        {char.map((char,i) => <Character char={char} name={char.name} gender={char.gender} height={char.height} mass={char.mass} key={i}/>)}
        </div>
  )
}

export default CharacterList