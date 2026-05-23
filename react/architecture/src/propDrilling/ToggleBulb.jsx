
const ToggleBulb = ({bulbOn, setBulbOn}) => {
  return (
    <div>
        <button onClick={function(){
          setBulbOn(!bulbOn)
        }}>
          Toggle Bulb
        </button>
    </div>
  )
}

export default ToggleBulb