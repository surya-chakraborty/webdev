import {useRef} from 'react'

// What's useRef ? a hook used to create ref to a DOM element or value that:
// 1. Don't chnage accross re-renders
// 2. Or even if it changes, it doesn't cause re-renders as state variables 
// inputRef.current === actual DOM input element 

const InputFocus = () => {

    // create Ref varibale 
    const inputRef = useRef(null)


    return (
        <div>
            {/* attach ref vaibale to input element */}
            <input ref={inputRef} type="text" placeholder='Click on button to focus on me' />
            <button onClick={function(){
                // function to focus on refrence onClick
                inputRef.current.focus()
            }}> Focus on Input </button>
        </div>
  )
}

export default InputFocus