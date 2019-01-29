import React from 'react'
import { Dropdown } from 'semantic-ui-react';

import { Button } from 'semantic-ui-react';

import {Link} from 'react-router-dom';
import login from './login';

export default class Drop extends React.Component{
    constructor(props){
        super(props);
        this.setState({
            name:this.props.name
        })
    };
   

   render(){
    const options = [
      { key: 1, text: <Link to='/updateProfile'>Profile Settings</Link>, value: 1 },
      { key: 4, text: <Link to="/"><div onClick={this.handleLogoutClick}>Log Out</div></Link>, value: 4 }
      
    ]
    return(
      <Dropdown text={"Hello " + this.props.name} options={options} />
    )
}
    
}