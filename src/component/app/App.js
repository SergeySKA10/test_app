//import { useState } from "react";
import { Container } from "react-bootstrap";
// import { Button } from "react-bootstrap";

// import DynamicComponent from "../props_children/PropsChildrenPattern";
// import ElemClone from "../props_children/ElemClone";
// import Column from "../props_children/Column";
// import { Message, Counter } from "../render_props/Message";
// import Form from "../ref/Form";
// import NewForm from "../portal/NewForm";
// import Slider from "../useState/UseState";
// import CurrencyConvector from "../currency_convector/CurrencyConvector";
// import DataHooks from "../data_newHooks/data_hooks";
// import MyForm from "../my_hooks/MyForm";
// import Books from "../books_router/Books";
// import ResultMemo from "../memo/Memo";
// import Block from "../context/Block";
// import Slider from '../reducer/Slider';
// import { SliderWithFirstFetch, SliderWithSecondFetch} from "../hoc/Sliders";
// import Modal from "../react_transition_group/Modal";
import CustomForm from "../form_formic_yup/Form";

import './App.css';
import './app.scss';

function App() {

	// const [showModal, setShowModal] = useState(false); // для модального окна (библиотека transition group)
	// const [showTrigger, setShowTrigger] = useState(true); // скрытие триггера вызвающего модальное окно

	return (
		<Container>
			{/* <DynamicComponent color={'primary'}>
				<h2 style={{textAlign: 'center'}}>Hello</h2>
				<h2 style={{textAlign: 'center'}}>World</h2>
			</DynamicComponent>

			<ElemClone>
				<h2>Clone</h2>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ab, aliquam molestias quasi dolores deleniti sed repellat, cum eum esse tempore vitae necessitatibus aspernatur eos, expedita nam dolor veniam laudantium?</p>
			</ElemClone>

			<Column
				left = {
					<Button className="d-block mx-auto" variant="primary" size="lg">LEFT</Button>
				}
				right = {
					<Button variant="outline-primary" size="lg" style={{display: 'block', margin: '0 auto'}}>RIGHT</Button>
				}
			/>

			<div className="mt-5">
				<Counter render={counter=> (
					<Message counter = {counter}/>
				)}/>
			</div>

			<Form/>

			<NewForm/> */}

			{/* <Slider/>	 */}

			{/* <CurrencyConvector/>  {/* конвектор валют */}

			{/* <MyForm/> создание собственных хуков */}

			{/* <DataHooks/> */}

			{/* <Books/> {/*работа с React Route v.6*/}

			{/* <ResultMemo/> */}
			
			{/* <Block/> */}

			{/* <Slider initial={false}/> */}

			{/* <SliderWithFirstFetch/>
			<SliderWithSecondFetch/> */}

			{/*использование библиотеки transition group (анимация)*/}

			{/* <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
			{
				showTrigger ? 
					<button 
						type="button" 
						className="btn btn-warning mt-5"
						onClick={() => setShowModal(true)}>Open Modal</button>
					: null
			} */}

			<div className="app">
				<CustomForm/>
			</div>
			
            

		</Container>
    
  	);
}

export default App;
