import { Component } from 'react'

/*
Error Boudary are class based comps that helps in displaying
fallback ui and catching error efficiently on children components
it has two methods static getDerivedStateFromError(error) updates satte to render the fallback ui and 
componentDidCatch(err, info) to log error information

It only catch error in - Lifecycle methods, constructors, Child comps rendering 
not in - event handlers, async errors.
*/

class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(){
        return { hasError: true }
    }

    componentDidCatch(error, info){
        console.log("Error Ocuured: ", error, info)
    }

    render(){

        if(this.state.hasError){
            return <h1>Something went wrong.</h1>
        }

        return this.props.children
    }
}

export default ErrorBoundary
