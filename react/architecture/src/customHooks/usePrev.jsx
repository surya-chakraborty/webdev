import {useEffect, useRef} from 'react'

const usePrev = (value) => {

    const ref = useRef(undefined)

    // update ref value on state change 'value'
    useEffect(() => {
        ref.current = value
    }, [value])

    // return the prev value (current value of ref before it's updated )
  return ref.current
}

export default usePrev