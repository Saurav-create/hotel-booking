import React, { Component } from "react";
import { Formik } from "formik";
import axios from 'axios';
import { connect } from "react-redux";
import Spinner from "./Spinner/Spinner";
import {dataSubmit,roomCount,reduce, putRoomData} from '../redux/actionCreators';





const mapDispatchToProps = dispatch =>{
    return{
        dataSubmit: ()=>dispatch(dataSubmit()),
        roomCount: (roomType)=>dispatch(roomCount(roomType)),
        reduce: ()=>dispatch(reduce()),
        putRoomData: ()=>dispatch(putRoomData()),
    }
}
const mapStateToProps = state =>{
    return{
        roomData: state.roomCount,
    }
}



class Form extends Component {

    state = {
        isLoading: false,
    }

    goBack = () => {
        this.props.history.goBack('form.js');
    }


    render() {

        const form = (
            <div>
                <Formik
                    initialValues={
                        {
                            name: '',
                            phone: ''

                        }
                    }
                    onSubmit={
                        (values) => {
                            this.setState({
                                ...this.state,
                                isLoading: true,
                            })
                            const feedback = { values };
                            

                            if(feedback.values.phone!= "" && feedback.values.name!=""){
                                axios.post('https://hotel-booking-a373a-default-rtdb.firebaseio.com/feedback.json', feedback)
                                .then(response => {
                                    if (response.status === 200) {
                                        this.setState({
                                            isLoading: false,
                                        });
                                        alert("Feedback Submitted Successfully");
                                        
                                       this.props.dataSubmit();
                                       this.props.reduce();
                                       this.props.putRoomData();
                                    //    this.props.roomCount();
                                    

                                    
                                    }
                                    else {
                                        this.setState({
                                            isLoading: false,
                                        });
                                    }
                                })
                                

                            }
                            else{
                                alert("Please enter all the information");
                                this.setState({
                                    isLoading: false,
                                });
                            }


                            

                        }
                    }


                    

                >

                    {({ values, handleChange, handleSubmit }) => (<div style={{
                        border: "1px grey solid",
                        padding: "15px",
                        borderRadius: "7px",
                        width: "70%",
                        alignItems: "center",
                        marginLeft: "15%"
                    }}>

                        <br />
                        <br />

                        <form onSubmit={handleSubmit} >
                            <label>Name</label>

                            <input
                                name="name"
                                placeholder="Enter Your Name"
                                className="form-control"
                                value={values.name}
                                onChange={handleChange}
                                style={{
                                    height: '30%',
                                    width: "50%",
                                    margin: "10px",
                                    padding: "10px"
                                }}
                            />

                            <br />
                            <label>Phone</label>
                            <input
                                name="phone"
                                placeholder="Phone Number"
                                className="form-control"
                                value={values.phone}
                                onChange={handleChange}
                                style={{
                                    height: '20px',
                                    width: "50%",
                                    margin: "10px",
                                    padding: "30px"
                                }}
                            />

                            <br />

                            <button type="submit" className="btn btn-success">Book This Room</button>
                        </form>

                    </div>)}

                </Formik>
                <br />
                <hr />
            </div>
        );




        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);