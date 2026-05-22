import React from "react";

// LEgacy React used to be Class compoents that extends React.compoent 
// hads it's own fnc methods and uses render function to return jsx with this keyword
// and store state as a js object
class ClassCounter extends React.Component {
    state = {
        count: 0
    }

    increament = () => {
        this.setState({
           count : this.state.count + 1
        })
    }

    render(){
        return (
            <div>
                <p>Count: {this.state.count} </p>
                <button onClick={this.increament}>Increament</button>
            </div>
        )
    }

}

export default ClassCounter