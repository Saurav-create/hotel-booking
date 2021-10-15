import React, { Component } from "react";
import { Formik } from "formik";
import { auth } from "../redux/actionCreators";
import { connect } from "react-redux";







const mapDispatchToProps = dispatch =>{
    return{
        auth: (email,password,mode)=> dispatch(auth(email,password,mode)) 
    }
}




class LoginNew extends Component {

    state = {
        mode: "login"
    }

    render() {


        let formMode = null;

        if (this.state.mode === "signup") {
            formMode = (
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            confirmPassword: "",
                        }
                    }

                    onSubmit={
                        (values) => {
                            console.log(values);
                            this.props.auth(values.email,values.password,this.state.mode);
                        }
                    }

                    validate={
                        (values) => {
                            let errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }

                            if (!values.password) {
                                errors.password = 'Required';
                            } else if (values.password.length < 4) {
                                errors.password = 'Must be atleast 4 characters!';
                            }
                            if (this.state.mode === "Sign Up") {
                                if (!values.confirmPassword) {
                                    errors.confirmPassword = 'Required';
                                } else if (values.password !== values.confirmPassword) {
                                    errors.confirmPassword = 'Password field does no match!';
                                }
                            }


                            return errors;
                        }
                    }
                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                        <div style={{
                            border: "1px grey solid",
                            padding: "15px",
                            borderRadius: "7px",
                            width: "70%",
                            alignItems: "center",
                            marginLeft: "15%",
                            marginTop: "5%",
                        }}>
                            <form onSubmit={handleSubmit}>
                                <label>Email</label>
                                <input
                                    name="email"
                                    placeholder="Enter your Email"
                                    value={values.email}
                                    onChange={
                                        handleChange
                                    }
                                    style={{
                                        height: '30%',
                                        width: "50%",
                                        margin: "10px",
                                        padding: "10px"
                                    }} />
                                <br />
                                <span style={{ color: "red" }}>{errors.email}</span>
                                <br />
                                <label>Password</label>
                                <input
                                    name="password"
                                    placeholder="Enter your Password"
                                    value={values.password}
                                    onChange={
                                        handleChange
                                    }
                                    style={{
                                        height: '30%',
                                        width: "50%",
                                        margin: "10px",
                                        padding: "10px"
                                    }} />
                                <br />
                                <span style={{ color: "red" }}>{errors.password}</span>
                                <br />
                                <label>Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    placeholder="Enter your Password"
                                    value={values.confirmPassword}
                                    onChange={
                                        handleChange
                                    }
                                    style={{
                                        height: '30%',
                                        width: "50%",
                                        margin: "10px",
                                        padding: "10px"
                                    }} />
                                <br />
                                <span style={{ color: "red" }}>{errors.confirmPassword}</span>
                                <button type="submit" >Submit</button>
                            </form>
                        </div>
                    )}
                </Formik>
            )
        }

        else {
            formMode = (
                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            confirmPassword: "",
                        }
                    }

                    onSubmit={
                        (values) => {
                            console.log(values);
                            this.props.auth(values.email,values.password,this.state.mode);
                        }
                    }

                    validate={
                        (values) => {
                            let errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }

                            if (!values.password) {
                                errors.password = 'Required';
                            } else if (values.password.length < 4) {
                                errors.password = 'Must be atleast 4 characters!';
                            }
                            if (this.state.mode === "Sign Up") {
                                if (!values.confirmPassword) {
                                    errors.confirmPassword = 'Required';
                                } else if (values.password !== values.confirmPassword) {
                                    errors.confirmPassword = 'Password field does no match!';
                                }
                            }


                            return errors;
                        }
                    }
                >
                    {({ values, handleChange, handleSubmit, errors }) => (
                        <div style={{
                            border: "1px grey solid",
                            padding: "15px",
                            borderRadius: "7px",
                            width: "70%",
                            alignItems: "center",
                            marginLeft: "15%",
                            marginTop: "5%",
                        }}>
                            <form onSubmit={handleSubmit}>
                                <label>Email</label>
                                <input
                                    name="email"
                                    placeholder="Enter your Email"
                                    value={values.email}
                                    onChange={
                                        handleChange
                                    }
                                    style={{
                                        height: '30%',
                                        width: "50%",
                                        margin: "10px",
                                        padding: "10px"
                                    }} />
                                <br />
                                <span style={{ color: "red" }}>{errors.email}</span>
                                <br />
                                <label>Password</label>
                                <input
                                    name="password"
                                    placeholder="Enter your Password"
                                    value={values.password}
                                    onChange={
                                        handleChange
                                    }
                                    style={{
                                        height: '30%',
                                        width: "50%",
                                        margin: "10px",
                                        padding: "10px"
                                    }} />
                                <br />
                                <span style={{ color: "red" }}>{errors.password}</span>
                                <br />
                                <button type="submit" >Submit</button>
                            </form>
                        </div>
                    )}
                </Formik>
            )
        }


        const toggleMode = () => {
            this.setState({
                ...this.state,
                mode: this.state.mode === "login" ? "signup" : "login"
            })
        }

        return (
            <div>
                <button style={{
                    width: "50%",
                    padding: "15px",
                    marginTop: "10px",
                    backgroundColor: "green",
                    borderRadius: "5px"
                }} onClick={toggleMode}>
                    {this.state.mode === "login" ? "Switch to Sign-Up" : "Switch to Login"}
                </button>
                {formMode}
            </div>
        );
    }
}


export default connect(null,mapDispatchToProps)(LoginNew);