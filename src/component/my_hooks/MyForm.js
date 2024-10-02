import { useState } from 'react';
import {Container} from 'react-bootstrap';

function useInputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const validateInput = () => {
        return value.search(/\d/) >= 0;
    }

    return {value, onChange, validateInput};
}

const MyForm = () => {
    // const [text, setText] = useState('');
    // const [textArea, setTextArea] = useState('');

    const input = useInputWithValidate(''),
          textArea = useInputWithValidate('');

    const color = input.validateInput() ? 'text-danger' : null;


    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input 
                        value={`${input.value} / ${textArea.value}`} 
                        type="text" 
                        className={`form-control ${color}`}
                        readOnly/>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input 
                        onChange={input.onChange}
                        value={input.value} 
                        type="email" 
                        className="form-control" 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea 
                        onChange={textArea.onChange}
                        value={textArea.value}
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3">
                    </textarea>
                </div>
            </form>
        </Container>
    )
}


export default MyForm;