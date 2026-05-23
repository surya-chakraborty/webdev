import {useState, useEffect} from 'react'

// listens on internet status onnline or offline and return status with chnaged state
const useIsOnline = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const updateOnlineStatus = () => setIsOnline(navigator.onLine)

        window.addEventListener('online', updateOnlineStatus)
        window.addEventListener('offline', updateOnlineStatus)

        return () => {
            window.addEventListener('online', updateOnlineStatus)
            window.addEventListener('offline', updateOnlineStatus)
        }
    }, [])
  return isOnline
}

export default useIsOnline