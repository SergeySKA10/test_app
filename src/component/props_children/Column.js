import { Row, Col } from "react-bootstrap";

// разделение на props на 2 колонки
const Column = (props) => {
    return (
        <Row className='m-5'>
            <Col className="border block">
                {props.left}
            </Col>
            <Col className="border">
                {props.right}
            </Col>
        </Row>
    )
}

export default Column;