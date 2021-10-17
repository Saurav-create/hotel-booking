import React, { Component } from "react";
import Homepage from "./Homepage";
import Header from "./Header/Header";
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginNew from './Login';
import { connect } from "react-redux";
import { authCheck, updateRoomData } from "../redux/actionCreators";
import NewCaro from "./NewCaro";



const mapStateToProps = state => {
    return {
        token: state.token,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
        updateRoomData: () => dispatch(updateRoomData()),
    }
}

class Main extends Component {

    componentDidMount() {
        this.props.authCheck();
        this.props.updateRoomData();
    }


    render() {
        let routes = null;
        if (this.props.token === null) {
            routes = (
                <Switch>

                    <Route path="/login" exact component={LoginNew} />

                    <Redirect to="/login" />

                </Switch>
            )

        }
        else {
            routes = (<Switch>

                <Route path="/" component={Homepage} />
                <Redirect to="/" />

            </Switch>)
        }


        return (
            <div>
                <Header />
                {}
                {routes}


            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);