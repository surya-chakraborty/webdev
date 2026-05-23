import {useEffect, useRef, useState} from 'react'

const Chat = () => {
    const chatBoxRef = useRef(null)
    const [messages, setMessages] = useState(["Hello", "How are you ?"])
    const addMessage = () => {
        setMessages((prevMessages) => [...prevMessages, "New Message!"])
    }

    useEffect(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight
    }, [messages])
    return (
        <>
            <div>
                <div ref={chatBoxRef} style={{ height: '200px', overflowY: 'scroll', border: '1px solid black'}}>
                    {
                        messages.map((m, index) => {
                            return <div key={index}> {m} </div>
                        })
                    }
                    </div> 
                    <button onClick={addMessage}>add message</button>
            </div>
        
        </>
    )
}

export default Chat