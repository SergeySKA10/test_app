import { Component } from "react";
// использования приема render-props
const Message = (props) => {
    return (
        <h2 style={{textAlign: 'center'}}>The counter is {props.counter}</h2>
    )
}

class Counter extends Component {
    state = {
        counter: 0
    }

    changeCounter = () => {
        this.setState(({counter}) => ({
            counter: counter + 1
        }))
    }

    render() {
        return (
            <>
                <button
                    className={'btn btn-primary d-block mx-auto'}
                    onClick={this.changeCounter}>
                    Click me
                </button>
                {this.props.render(this.state.counter)}
            </>
        )
    }
}

export {Message, Counter};