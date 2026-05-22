import React from "react";

// Legacy React used to be Class compoents that extends React.compoent 
// hads it's own fnc methods and uses render function to return jsx with this keyword
// and store state as a js object

// On functional components: useFecct mimics mount based on state chnage and cleanup functions
// and cleeanup function as component will unmount.
class ClassCounter extends React.Component {
    // state = {
    //     count: 0
    // }

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        // runs code just after construtor call and mounting , best for data fetching
        console.log('Compoent Mounted')
    }

    componentDidUpdate(){
        // runs when component re-renders based on props or state chnages 
        console.log('Compoent Updated')
    }
    
    componentWillUnmount(){
        // runs just before component unmounts, best for writing cleanup function 
        console.log('Compoent will mounted')
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