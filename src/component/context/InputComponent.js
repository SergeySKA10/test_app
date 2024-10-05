import dataContext from "./context";
import { useContext } from "react";

const InputComponent = () => {
    const context = useContext(dataContext);

    return (
        <input 
            value={context.mail}
            onFocus={context.forceChangeMail} 
            type="email" 
            className='form-control' 
            id="exampleFormControlInput1" 
            placeholder="name@example.com"/>
    );
}

export default InputComponent;


// В Классе С ПОМОЩЬЮ Consumer


// import { Component } from "react";
// import dataContext from "./context";

// const {Consumer} = dataContext;

// class InputComponent extends Component {

//     render() {
//         return (
//             <Consumer>
//                 {
//                     value => {
//                         return (
//                             <input value={value.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" onFocus={value.forceChangeMail}/>
//                         )
//                     }
//                 }
//             </Consumer>
            
//         );
//     }
// }

// export default InputComponent;


// В Классе С ПОМОЩЬЮ СТАТИЧНОГО СВОЙСТВА

// import { Component } from "react";
// import dataContext from "./context";

// class InputComponent extends Component {
//     static contextType = dataContext;

//     render() {
//         console.log(this.context);
//         return (
//             <input value={this.context.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com" onFocus={this.context.forceChangeMail}/>  
//         );
//     }
// }

// export default InputComponent;
