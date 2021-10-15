import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { connect } from "react-redux";
import { trySubmit } from "../redux/actionCreators";


const mapDispatchToProps = dispatch =>{
    return{
        trySubmit: ()=>dispatch(trySubmit())
    }
}


class Cardpic extends Component {
    render(){
    return (
        <div>
            <Card>
                <CardImg top width="30%" src={this.props.src} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{this.props.details}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button onClick={this.props.trySubmit}>Button</Button>
                </CardBody>
            </Card>
        </div>
    );
}
}


export default connect(null,mapDispatchToProps)(Cardpic);