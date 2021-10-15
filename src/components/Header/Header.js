import React, { Component } from "react";
import './Header.css';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { Logout } from "../../redux/actionCreators";






const mapStateToProps = state => {
    return {
        token: state.token,
    }
}
const mapDispatchToProps= dispatch =>{
    return{
        Logout: ()=> dispatch(Logout()),
    }
}


const Header = props => {



    let links = null;
    if (props.token === null) {

        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact to='/login' className="NavLink">Login</NavLink>
                </NavItem>
            </Nav>
        )
    }
    else {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink exact to='/' className="NavLink">Homepage</NavLink>
                </NavItem>
                <button 
                onClick={props.Logout}
                style={{
                    width: "100px",
                    margin:"10px",
                    padding:"10px",
                    backgroundColor: "#a2b223",
                    borderRadius:"5px",
                    
                }}
                >
                    Logout
                    </button>
            </Nav>
        )
    }
    return (
        <div>
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px",
            }}>
                {links}

            </Navbar>
        </div>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
