import React from 'react'
import Character from '../components/Character'

const CharacterList = ({char}) => {
  // console.log('CLG THE PROPS in CHARACTERLIST:', props.char)
  return(
    
        <div className="newChar" >
        {char.map((char,i) => <Character {...char} key={i}/>)}
        </div>
  )
}

export default CharacterList

// props = {
//     gender: "male",
//     height: "6 foot",
//     mass:"150lbs"
  
// }