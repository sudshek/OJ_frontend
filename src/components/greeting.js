import React from 'react'
import { Dropdown } from 'semantic-ui-react';

import { Button } from 'semantic-ui-react';

import { Link , Router} from 'react-router-dom';
import { Redirect } from "react-router";
import login from './login';
import axios from "axios";
import Homepage from '../components/homepage'
export default class Drop extends React.Component {
    state = {
        redirection:false, 
        errorMessage:"",
        name:""
        
    }
    constructor(props) {
        super(props);
        this.state.name = this.props.name;
        if(this.props.status===1)
        {
            this.state.status = "Contribute";
     
        }
        else{
            this.state.status = "Wanna Contribute";
        }
        
    
    };
    
    handleLogoutClick = () => {
       
        const logout_axios = axios.create({
            withCredentials: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "x-www-form-urlencoded"
            }

        });
        var self = this;        
        logout_axios.post("http://localhost:8080/user/logout").then(function (response) {
            response = response.data;

            console.log("Greeting")
            console.log(response);
            if (response.success === 1) {
                console.log("Success  ")
                self.setState({ redirection: true });
                // window.location.reload();
            }
            
            else if (response.success === 0) {
                self.setState({
                    errorMessage: "Your account cannot be logged out, Please check your network",
                })
            }
        }).catch(function (error) {
            self.setState({
                errorMessage: "Your account cannot be logged out, Please check your network",
            })
        });
    }
    
    render() {
        
        const options = [
            { key: 1, text: <Link to='/updateProfile'>Profile Settings</Link>, value: 1 },
            { key: 4, text: <Link to="/"><div onClick={this.handleLogoutClick}>Log Out</div></Link>, value: 4 }

        ];
        console.log("ERender " , this.state);
        if (this.state.redirection===true) {
            console.log("REDIRECTION AT GREETING")
            
         window.location.reload();
          }
        return (
            <div>            <Dropdown text={"Hello " + this.state.name} options={options} />
            
            {this.props.status==1 ? <Link to="/contribute">Contribute</Link> : <Link to="/contribute">Wanna Contribute</Link>}
           </div>

        )
    }

}