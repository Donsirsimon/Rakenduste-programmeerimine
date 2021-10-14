import React, { useState } from "react"

/*class Greetings extends React.Component {
    state = {
        counter: 0
    }

    increaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    
    render(){
        return <h1 onClick={this.increaseCounter}>Greetings counter {this.state.counter}</h1>  }
    }*/
const Greetings = ({name}) => {
    const [counter, setCounter] = useState(0)
    const [info, setInfo] = useState("no info")
    const [loading, setLoading] = useState(false)


    return (
        <>
            <h1>Name: {name}</h1>
            <h1>Info: {info}</h1>
            <h1>Counter: {counter}</h1>
            <input type="text" onChange={event => setInfo(event.target.value)}/><br/>
            <button onClick={() => setLoading(!loading)}>Toggle Loading true/false</button>
            {loading?
                <div>loading true</div>
                :
                <div>loading false</div>
            }
        </>
    )    
    //<h1 onClick={() => setCounter(counter+1)}>Greetings {name}, counter {counter}</h1>
}    

export default Greetings