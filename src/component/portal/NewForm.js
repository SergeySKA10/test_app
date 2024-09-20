import React, { Component } from "react";
import ReactDOM from 'react-dom';

export default class NewForm extends Component {

    state = {
        message: false
    }

    showMessage = () => {
        this.setState(({message}) => ({
            message: !message
        }))
    }

    render() {
        return (
            <>
                <form className="w-50 border mt-5 p-3 m-auto" 
                style={{'overflow': 'hidden', 
                        'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input  type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="button" className="btn btn-outline-primary"
                            onClick={this.showMessage}>
                        Покажи сообщение
                    </button>
                    {/* <div 
                    style={{'width': '500px', 
                            'height': '150px', 
                            'backgroundColor': 'red', 
                            'position': 'absolute', 
                            'right': '-50%', 
                            'bottom': '-50%',
                            'text-align': 'center'}}>
                        Hello, I'm message!!!
                    </div> */}
                    {/* /*вставляем портал*/}
                    {this.state.message ? 
                        <Portal>
				            <MessageForm/>
			            </Portal> :
                        null
                    }
                    
                </form>
            </>
        )
    }
}


// создаем новый компонент для отображения блока с сообщением, который сейчас находится в форме и затем компонент вставляем в форму
const MessageForm = () => {
    return (
        <div
        style={{'width': '500px', 
                'height': '150px', 
                'backgroundColor': 'blue', 
                'position': 'absolute', 
                'left': '0', 
                'bottom': '-33%',
                color: '#fff',
                textAlign: 'center',
                alignContent: 'center'}}>
            Hello, I'm message!!!
        </div> 
    )
}

// создаем отдельный компонент портала

const Portal = (props) => {
    const node = document.createElement('div'); // создаем блок для размещения на странице
    document.body.append(node);

    return ReactDOM.createPortal(props.children, node); // в 1 аргументе: что помещаем (элементы), второй аргумент: куда
}

export {Portal, MessageForm};