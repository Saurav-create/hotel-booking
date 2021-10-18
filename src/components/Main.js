import React, { Component } from "react";
import Homepage from "./Homepage";
import Header from "./Header/Header";
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginNew from './Login';
import { connect } from "react-redux";
import { authCheck ,newUpdateRoomData} from "../redux/actionCreators";
import axios from "axios";



const mapStateToProps = state => {
    return {
        token: state.token,
        roomCount: state.roomCount,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        authCheck: () => dispatch(authCheck()),
        newUpdateRoomData: (upData)=>dispatch(newUpdateRoomData(upData)),
        
    }
}

class Main extends Component {

    componentDidMount() {
        axios.get('https://hotel-booking-a373a-default-rtdb.firebaseio.com/roomData.json')
                 .then(response=>{
                     let upData = response.data;
                  this.props.newUpdateRoomData(upData);
                   
                 })
        this.props.authCheck();
  
        

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