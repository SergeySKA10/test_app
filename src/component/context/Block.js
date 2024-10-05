import { useState } from 'react';
import dataContext from './context';
import Form from './Form';

const {Provider} = dataContext;



const Block = () => {
    const [data, setData] = useState({
        mail: "context@example.com",
        text: 'text',
        forceChangeMail: forceChangeMail
    });

    function forceChangeMail() {
        setData({...data, mail: 'new context'})
    }

    return (
        <Provider value={data}>
            <div style={{display: 'block', margin: '10px auto'}} className="border border-primary">
                <Form text={data.text}/>
            </div>
            <button 
                onClick={() => setData({
                    mail: "second@example.com",
                    text: 'second text',
                    forceChangeMail: forceChangeMail
                })}>
                Click me
            </button>
        </Provider>  
    )
}

export default Block;