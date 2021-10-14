import React from "react";
import {
    Card, CardImg, CardBody,
} from 'reactstrap';


const Cardpic = (props) => {
    return (
        <div>
            <Card style={{padding: "10px", margin: "10px", marginLeft:"27%" }}>
                <CardImg top width="60%" src={props.src} alt="Card image cap" style={{
                    border: "5px solid black",
                    borderRadius: "5px",
                    
                }} />
                <CardBody>
                  {props.details}
                </CardBody>
                
            </Card>
        </div>
    );
}

export default Cardpic;