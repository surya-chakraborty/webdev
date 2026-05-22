// Inline styling : in react, it allows you to add css styles directly as a elemnt of  js objects
// why two {{}} while applying style
// as the first bracket is for js code and css is a js object here with key-value pairs 
// and the secodn bracket is the object synatax body

const Modals = ({isOpen, onClose, children}) => {
    if(!isOpen) return null

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            // to make the modal at the centre of screen
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                background: 'white',
                padding: '20px',
                borderRadius: '5px'
            }}>
                <button onClick={onClose}>close</button>
                {children}
            </div>
        </div>
    )
}

export default Modals