import React, {Component} from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef(); // создание обычного Ref
    }

    componentDidMount() {
        //this.myRef.current.focus(); // изначальное фокусирование на элементе с рефом

        // условие выполнения фокуса при наличии рефа
        if (this.secondRef) {
            this.secondRef.style.color = 'red';
        }
    }

    setFocus = () => {
        this.myRef.current.focus(); // функция фокусирование на элементе с рефом
    }

    // функциональный способ установки рефа - callback ref

    setInputRef = (elem) => {
        this.secondRef = elem;
    }

    render() {
        return (
            <>
                <form ref={this.setInputRef} className="w-50 border mt-5 p-3 m-auto border-primary">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" 
                            ref={this.myRef}
                            className="form-control border-primary" 
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.setFocus} className="form-control border-primary" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </>
        )
    }
}