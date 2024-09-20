import { Container } from "react-bootstrap";
// import { Button } from "react-bootstrap";

// import DynamicComponent from "../props_children/PropsChildrenPattern";
// import ElemClone from "../props_children/ElemClone";
// import Column from "../props_children/Column";
// import { Message, Counter } from "../render_props/Message";
// import Form from "../ref/Form";
// import NewForm from "../portal/NewForm";
import Slider from "../useState/UseState";
import CurrencyConvector from "../currency_convector/CurrencyConvector";

import './App.css';

function App() {
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

			<CurrencyConvector/>


		</Container>
    
  	);
}

export default App;
