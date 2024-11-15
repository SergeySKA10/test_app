import { Transition, CSSTransition } from 'react-transition-group';
import './Modal.css';

// вариант csstransition

const Modal = (props) => {
    const duration = 300;

    return (
        <CSSTransition 
            in={props.show} 
            timeout={duration}
            onEnter={() => props.setShowTrigger(false)} // относится к скрытию или показу кнопки открытия модального окна
            onExited={() => props.setShowTrigger(true)}
            classNames="modal"
            mountOnEnter
            unmountOnExit>
                <div className="modal mt-5 d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Typical modal window</h5>
                            <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body content</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
                            <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
        </CSSTransition>
    )
}

// вариант transition

// const Modal = (props) => {
//     const duration = 300;

//     const defaultStyle = {
//         transition: `all ${duration}ms ease-in-out`,
//         opacity: 0,
//         visibility: 'hidden' // добавляем свойство
//     }

//     // + добавляем свои свойства, visibility иначе конопка будет находится за модальным окном
//     const transitionStyles = {
//     entering: { opacity: 1, visibility: 'visible' },
//     entered:  { opacity: 1, visibility: 'visible' },
//     exiting:  { opacity: 0, visibility: 'hidden' },
//     exited:  { opacity: 0, visibility: 'hidden' },
//     };

//     return (
//         <Transition 
//             in={props.show} 
//             timeout={duration}
//             onEnter={() => props.setShowTrigger(false)}
//             onExited={() => props.setShowTrigger(true)}>
//             {state => (
//                 <div className="modal mt-5 d-block" style={{
//                     ...defaultStyle,
//                     ...transitionStyles[state]
//                   }}>
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title">Typical modal window</h5>
//                             <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <p>Modal body content</p>
//                         </div>
//                         <div className="modal-footer">
//                             <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
//                             <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
//                         </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </Transition>
//     )
// }

export default Modal;