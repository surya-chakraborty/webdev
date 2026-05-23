import { useState} from 'react'
import Light from './Light'
import ToggleBulb from './ToggleBulb'

// As our application grows we migh need same copy of 
// state variables nand function on mutiple compoents , so to avoid
// duplication, we roll up the state to the top level compoent and pass on tree structure 
//  But it causes even passing props to the intermediate comps that doesn;t even need it and on state chnage
// it causes multiple re-renders , which is indeed a performance issue.

const Bulb = () => {
    const [bulbOn, setBulbOn] = useState(false)
  return (
    <div>
        <Light bulbOn={bulbOn} setBulbOn={setBulbOn}/>
        <ToggleBulb bulbOn={bulbOn} setBulbOn={setBulbOn}/>
    </div>
  )
}

export default Bulb