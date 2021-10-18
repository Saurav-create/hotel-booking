import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { connect } from "react-redux";
import { trySubmit,changeRoomState} from "../redux/actionCreators";


const mapDispatchToProps = dispatch =>{
    return{
        trySubmit: (props)=>dispatch(trySubmit(props)),
        changeRoomState: (roomType)=>dispatch(changeRoomState(roomType)),
   
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
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Room left : {this.props.roomCount}</CardSubtitle>
                    <CardText></CardText>
                    <Button onClick={()=>{this.props.trySubmit(this.props.roomType) ; this.props.changeRoomState(this.props.roomType) }}>Book This Room</Button>
                </CardBody>
            </Card>
        </div>
    );
}
}


export default connect(null,mapDispatchToProps)(Cardpic);