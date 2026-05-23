import { useState, useEffect } from 'react'

// custom Hooks are not react jsx compoents as they are not returning any piece of jsx
// rather they are just simple js function that's why props destrcuturing is not nedded.

export const useReFetch = (url, interval) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        setError(null)
        try{
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error('Failed to fetch')
            }
            const result = await res.json()
            setData(result)
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData() // initial fetch

        if(interval != null){
            // refetch on every interval
            const fetchInterval = setInterval(() => {
                fetchData()
            }, interval)

            // cleanup function : stop the timer before unmounting or state chnage and then start new timer
            return () => clearInterval(fetchInterval)
        }

    }, [url, interval])

    return {data, loading, error}
}