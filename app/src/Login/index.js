import React, { Component } from "react";
import {Link } from "react-router-dom";
import './login.scss';
// import api from '../common/http-service';
import { setLocalStorage } from '../common/localStorage'


export class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginform: {
        Name: '',
        phone: '',
        email: '',
        pass: '',
      },
      errors: {}
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

    if (!loginform["Name"]) {
      IsValid = false;
      errors["Name"] = "Enter The Name";
    }

    if (!loginform["phone"]) {
      IsValid = false;
      errors["phone"] = "Enter The Phone No";
    }

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

  
  // useEffect(data) {
  //     let errors = {};
  //     console.log('login Data', data)

  //     api.post('user/login', data).then(response => {
  //         // console.log('Routing History', this.props.history)
  //         console.log('Login', response)
  //         setLocalStorage(response);
  //         this.props.history.push('/app/brokeraccount');
  //     })
  //         .catch(error => {

  //              //console.log('Login error', error.response.data.message)

  //             if(error.response){
  //             let errorData =  error.response
  //             if ( errorData && errorData.data.message === 'USER_DOES_NOT_EXIST') {
  //                 errors["email"] =errorData.data.message;
  //             }
  //             else {
  //                 errors["pass"] = errorData.data.message
  //             }
  //             this.setState({
  //                 errors: errors
  //             });
  //         }
  //         });
  // };

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      this.useEffect(this.state.loginform)
      this.clearFormData()
    }
  }
  
  clearFormData() {
    let loginform = {};
    loginform["Name"] = "";
    loginform["phone"] = "";
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
                      {/* <div className="row pt-2 px-3">
                      <div className="col-6 ">
                          <label className="pt-3 my-0">Name</label>
                          <input name="Name" type="" className="form-control input-style"
                            placeholder="Name" value={this.state.loginform.Name}
                            onChange={this.handleChange} />
                          {this.state.errors.Name &&
                            <label className="text-danger my-0">
                              {this.state.errors.Name}
                            </label>
                          }
                        </div>
                        <div className="col-6 ">
                          <label className="pt-3 my-0">Phone</label>
                          <input name="phone" type="" className="form-control input-style"
                            placeholder="Phone" value={this.state.loginform.phone}
                            onChange={this.handleChange} />
                          {this.state.errors.name &&
                            <label className="text-danger my-0">
                              {this.state.errors.phone}
                            </label>
                          }
                        </div>
                      </div> */}
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
                        {
                          this.state.errorMessage &&
                          <label className="error text-danger my-0"> {"Invalid Password"} </label>}
                      </div>
                      {/* <div>
                        <p className="col-12  my-0 text-right">
                          <Link className="text-danger pt-1 font-weight-bold" to={"/forgot"}>Forgot password..?</Link>
                        </p>
                      </div> */}
                      {/* <div className="col-12 pt-3 text-center prof-bg">
                        <label>Profession</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <select value={this.state.profession} onChange={this.handleChange} className="form-select" aria-label="Default select example">
                          <option value="Software Developer">Software Developer</option>
                          <option value="Software Engineer" >Software Engineer</option>
                          <option value="Network Engineer">Network Engineer</option>
                          <option value="IT Security">IT Security</option>
                        </select>
                      </div> */}
                      <div className="col-12 py-3 px-3">
                        <button className="col-12 btn button-bg " value="Submit" >Login</button>
                        <p className=" pt-3 pb-2 text-center">
                          Don't Have an Account..?  <Link className="text-danger font-weight-bold" to={"/signup"}>Create</Link>
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