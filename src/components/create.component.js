
import React, { Component } from 'react';

export default class Create extends Component {
    constructor(props){
        super(props);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBussinessName = this.onChangeBussinessName.bind(this);
        this.onChangeGSTNumber = this.onChangeGSTNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            person_name : "", 
            gst_number : "",
            bussiness_name:""

        }
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(`The values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.business_gst_number}`)
        this.setState({
          person_name: '',
          business_name: '',
          business_gst_number: ''
        })
      }
    onChangeBussinessName(e){
        this.setState({
            bussiness_name:e.target.value
        })
    }
    onChangeGSTNumber(e){
        this.setState({
            gst_number : e.target.value
        })
    }
    onChangePersonName(e){
        this.setState({
            person_name:e.target.value
        })
    }
    
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Business</h3>
                <form>
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input type="text" 
                        className="form-control"
                        value={this.state.person_name}
                        onChange={this.onChangePersonName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input 
                              type="text" 
                              className="form-control" 
                              value={this.state.bussiness_name}
                              onChange={this.onChangeBussinessName}/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text" 
                        className="form-control" 
                        value={this.state.gst_number}
                        onChange={this.onChangeGSTNumber}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

