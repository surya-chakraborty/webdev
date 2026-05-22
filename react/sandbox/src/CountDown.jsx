import { useEffect, useState } from 'react'

const CountDown = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {

        // runs only on mount and the setInterval keep undating the prev value +1 on every second.
        console.log('Compoent Mounted')
        const interval  = setInterval(() => {
            setSeconds((prev) => prev + 1)
        }, 1000)

        // clear the timer when component unmounts
        return () => {
            console.log('Component Unmounted')
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            {seconds} seconds eclapsed
        </div>
    )
}

export default CountDown