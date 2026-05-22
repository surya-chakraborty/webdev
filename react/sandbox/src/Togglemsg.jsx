import {useState} from 'react'

const Togglemsg = () => {
    const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
        <button onClick={function(){
            setIsVisible(!isVisible)
        }}>Set visibility</button>

        {isVisible && <p>This Message is conditionally rendered!</p>}
    </div>
  )
}

export default Togglemsg