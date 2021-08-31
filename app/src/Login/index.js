import React, { Component } from "react";
import {Link } from "react-router-dom";
import './login.scss';
import { getLocalStorage, setLocalStorage } from '../common/localStorage'


export class Login extends Component {

  constructor() {
    super();
    this.state = {
      loginform: {
        email: '',
        pass: '',
      },
      errors: {},
      errorMessage : null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  

  handleChange(event) {
    let loginform = this.state.loginform;
    loginform[event.target.name] = event.target.value;
    this.setState({
      loginform
    });
  }
  validate() {
    let loginform = this.state.loginform;
    let errors = {};
    let IsValid = true;

    if (!loginform["email"]) {
      IsValid = false;
      errors["email"] = "Enter Your Email";
    }

    if (!loginform["pass"]) {
      IsValid = false;
      errors["pass"] = "Enter The Password";
    }

    this.setState({
      errors: errors
    });
    return IsValid;
  }

 
  useEffect(data) {
    this.state.errorMessage=null;
    const localData = getLocalStorage();
    
    console.log("Stored Data",localData.signupform);
    let aData = localData.signupform;
    let LData = data;
    if(aData.email === LData.email && aData.pass === LData.pass)
    {
      console.log("sucesss");
      this.props.history.push('/home');
    }
    else
    {
        this.state.errorMessage="Invalid Credentials"
    }
    // Data entered By the User
    console.log("login Data Entered",data);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      this.useEffect(this.state.loginform)
      this.clearFormData()
    }
  }
  
  clearFormData() {
    let loginform = {};
    loginform["email"] = "";
    loginform["pass"] = "";
    this.setState({ loginform: loginform });
  }
  

  state = {
    items: [],
    errorMessage: ''
  }
  render() {
    return (
      <div id="login">
        <form className="login-bg pt-5 " onSubmit={this.handleSubmit}>
          <div className="pt-md-5">
            <div className=" pt-md-5">
              <div className=" pt-md-5">
                <div className="container-bg col-sm-10 col-md-8  col-lg-5 col-xl-3 container px-0 shadow " >
                  <div className="col-12 px-0 ">
                    <div className="col-12 px-0 card-header text-center">
                      <label className="w-100 my-0"> Login</label>
                    </div>
                    <div className="col-12">
                      <div className="col-12 py-2 px-3">
                        <label className="pt-3 my-0 ">Email address</label>
                        <input name="email" type="email" className="form-control input-style w-100"
                          placeholder="Enter email" value={this.state.loginform.email}
                          onChange={this.handleChange} />
                        {this.state.errors.email &&
                          <label className="text-danger my-0">
                            {this.state.errors.email}
                          </label>
                        }
                      </div>
                      <div className="col-12 pt-2 px-3">
                        <label className="my-0">Password</label>
                        <input name="pass" type="password" className="form-control input-style col-12"
                          placeholder="Enter password" value={this.state.loginform.pass}
                          onChange={this.handleChange} />
                        {this.state.errors.pass &&
                          <label className="text-danger my-0">
                            {this.state.errors.pass}
                          </label>
                        }
                      </div>
                      
                      <div className="col-12 py-3 px-3">
                        {
                          this.state.errorMessage && 
                          <label className="text-danger text-center my-3">
                            {this.state.errorMessage}
                          </label>
                        }
        
                        <button className="col-12 btn button-bg " value="Submit">
                          <Link className="text-white" to={"/home"} >Login</Link>
                          </button>
                        <p className=" pt-3 pb-2 text-center">
                          Don't Have an Account..?  <Link className="text-danger font-weight-bold" to={'/signup'}>Create</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
}