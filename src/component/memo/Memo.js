import { memo, useState, PureComponent, Component } from "react";

function propsCheck(prevProps, nextProps) {
    return prevProps.mail.name === nextProps.mail.name;
}

const Form = memo((props) => {
    console.log('render');
    return (
        <form className="w-50 border mt-5 p-3 m-auto">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                <input value={props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </form>
    )
}, propsCheck); // второй аргумент propsCheck для проерки mail.name (глубокая проверка см. функцию)

// class Form extends PureComponent {

//     render() {
//         console.log('render')
//         return (
//             <form className="w-50 border mt-5 p-3 m-auto">
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                     <input value={this.props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
//                     </div>
//                     <div className="mb-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                     <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//             </form>
//         )
//     }
// } // встроенный метод shouldComponentUpdate - для неглубокой проверки объектов

// class Form extends Component {
//     shouldComponentUpdate(nextProps, nextState) {
//         return this.props.mail.name === nextProps.mail.name ? false : true;
//     }

//     render() {
//         console.log('render')
//         return (
//             <form className="w-50 border mt-5 p-3 m-auto">
//                 <div className="mb-3">
//                     <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                     <input value={this.props.mail.name} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>
//                     </div>
//                     <div className="mb-3">
//                     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                     <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                 </div>
//             </form>
//         )
//     }
// } // реализация memo в классе при глубокой проверке свойств объекта


const ResultMemo = () => {
    const [data, setData] = useState({
        // mail: "name@example.com",
        mail: {
            name: "name@example.com",
        },
        text: 'some text'
    });

    return (
        <>
            <Form mail={data.mail} text={data.text}/>
            <button 
                onClick={() => setData({
                    // mail: "second@example.com",
                    mail: {
                        name: "same@example.com",
                    },
                    text: 'second text'
                })}>
                Click me
            </button>
        </>
    );
}
export default ResultMemo;