import React, {Component} from 'react';


class ErrorBoundary extends Component{
    constructor(props){
        super()
        this.state={
            hasError: false
        }
    }



    // If this is triggered, render h1 tag.
    componentDidCatch(error, info){
        this.setState({hasError: true})
    }


    render(){
        if(this.state.hasError){
            return <h1>Something went wrong!</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;