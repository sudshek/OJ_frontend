import React, { Component } from 'react';
import Header1 from '../components/header';
import axios from "axios";
import { Divider } from 'semantic-ui-react';

export default class Homepage extends Component {
    state = {
        username: "",
        loggedin : false,
        complete:false
    }
    getuser = () => {
        console.log("HEREasdjnakjsdnk");
        const user_axios = axios.create({
          withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "x-www-form-urlencoded"
            },
        });
        console.log("asdasd00");
        user_axios.get("http://localhost:8080/user/").then(function(response){
            response = response.data;
          console.log("RESPONSE",response)
        if(response.success===0)  
        {this.setState({
            loggedin: false,
          });}
          else{
            console.log("HERERERER")
            this.setState({
              loggedin:true,
              username:response.user,
             
            })
            console.log("Changed Visibility");
          }
          this.setState({complete:true})
          console.log("asdmasjbdajasd");
          console.log(this.state);
        })
    }
    constructor(props)
    {
        super(props);
    }
    componentDidMount(){
        // this.getuser();
        console.log("HEREasdjnakjsdnk");
        const user_axios = axios.create({
          withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "x-www-form-urlencoded"
            },
        });
        console.log("asdasd00");
        user_axios.get("http://localhost:8080/user/").then(function(response){
            response = response.data;
          console.log("RESPONSE",response)
        if(response.success===0)  
        {
            console.log("FAILURE1")
            this.setState({
            loggedin: false,
          });
          console.log("FAILURE2")
        }
          else{
            console.log("HERERERER");
            console.log(response.user);
            this.setState({
              loggedin:true,
              username:response.user
            });
            console.log("Changed Visibility");
          }
          this.setState({complete:true})
          console.log("asdmasjbdajasd");
          console.log(this.state);
        })
    }
    render() {
        return <Header1 username={this.state.username} loggedin={this.state.loggedin} />
    }
}