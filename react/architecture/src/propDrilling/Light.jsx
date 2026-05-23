
const Light = ({ bulbOn }) => {
  return (
    <div>
        {bulbOn ? 'Bulb On' : 'Bulb Off'}
    </div>
  )
}

export default Light