import React, { Component } from "react";
import Drop from "../components/greeting";
import axios from "axios";
import Header from "../components/header"
import SubmitArticle from "../components/submitArticle";
import SubmitProblem from "../components/submitProblem";
import {
  Button,
  Form,
  Grid,
  Image,
  Message,
  Segment,
  Dropdown,
  Select,
  Dimmer,
  Icon,
  Responsive
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";

export default class Contribute  extends Component{
    state = {
        loggedin:false,
        username:"",
        user_status:""
    }
    constructor(props){
        super(props)
        this.state.article_color = null;
        this.state.problem_color = null;

    }
    componentDidMount = () => {
        // this.getuser();
        console.log("HEREasdjnakjsdnk");
        const user_axios = axios.create({
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "x-www-form-urlencoded"
          }
        });
        var self = this;
        console.log("asdasd00");
        user_axios.get("http://localhost:8080/user/profile").then(function (response) {
          response = response.data;
          console.log("RESPONSE", response);
          if (response.success === 0) {
            console.log("FAILURE1");
            self.setState({
              loggedin: false
            });
            console.log("FAILURE2");
          } else {
            console.log("HERERERER");
            console.log(response.user);
            self.setState({
              loggedin: true,
              username: response.user.username,
              user_status: response.user.status
            });
            console.log("Changed Visibility");
          }
          this.setState({ complete: true });
          console.log("asdmasjbdajasd");
          console.log(this.state);
        });
      }
    handleArticle = ()=>{
        this.setState({
            article_color:"green",
            problem_color: null
        })
    }

    handleProblem = ()=>{
        this.setState({
            article_color:null,
            problem_color: "green"
        })
    }
    render()
    {
        return(
        <div>
        <Header loggedin={this.state.loggedin} username={this.state.username} status={this.state.user_status}/>
        <Button.Group>
        <Button color={this.state.article_color} onClick={this.handleArticle}>Contribute an article</Button>
        <Button.Or />
        <Button color={this.state.problem_color} onClick={this.handleProblem}>Contribute A Problem</Button>
      </Button.Group>
      { this.state.article_color!=null ?  <SubmitArticle/> : null}
      { this.state.problem_color!=null ?  <SubmitProblem/> : null}
        </div>
        );}
}