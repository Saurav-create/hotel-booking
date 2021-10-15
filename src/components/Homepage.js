import React, {Component} from "react";
import Cardpic from "./card";
import premium from "./images/premium bed.jpg";
import regular from "./images/regular Double bed.jpg";
import single from "./images/single bed.jpg";
import Two from "./images/Two bed.jpg";
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap';
import CaroHeader from './CaroHeader';
import { connect } from "react-redux";
import Form from "./form";





const mapStateToProps = state =>{
    return{
        isOpen: state.isOpen,
    }
}




class Homepage extends Component {
    render(){
        return (
            <div>
                <div style={{
                    margin: "20px",
                    marginBottom: "40px",
                }}>
                    <CaroHeader />
                </div>
    
                <div>
                    <Container>
                        <Row> {CaroHeader}</Row>
                        <Row>
                            <Col md="3">
                                <Cardpic src={premium} details="Premium Bed for 2 person" />
                            </Col>
                            <Col md="3">
                                <Cardpic src={regular} details="Regular Bed for 2 person" />
                            </Col>
                            <Col md="3">
                                <Cardpic src={single} details="Single Bed 1 person" />
                            </Col>
                            <Col xs="3">
                                <Cardpic src={Two} details="Two Single Bed for 2 person" />
                            </Col>
                        </Row>
                    </Container>
                    <Modal isOpen={this.props.isOpen}>
                        <ModalBody>
                            <Form />
                        </ModalBody>
                    </Modal>
                </div>
    
            </div>
        )
    }
}


export default connect(mapStateToProps)(Homepage);