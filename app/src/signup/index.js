import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import './signup.scss';
import { setLocalStorage } from '../common/localStorage'

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      signupform: {
        Name: '',
        phone: '',
        email: '',
        pass: '',
        profession: '',
      },
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    let signupform = this.state.signupform;

    signupform[event.target.name] = event.target.value;

    this.setState({
        signupform,
        // profession:event.target.value,
    });
  }
  validate() {
    let signupform = this.state.signupform;
    let errors = {};
    let IsValid = true;

    if (!signupform["Name"]) {
      IsValid = false;
      errors["Name"] = "Enter The Name";
    }

    if (!signupform["phone"]) {
      IsValid = false;
      errors["phone"] = "Enter The Phone No";
    }

    if (!signupform["email"]) {
      IsValid = false;
      errors["email"] = "Enter Your Email";
    }

    if (!signupform["pass"]) {
      IsValid = false;
      errors["pass"] = "Enter The Password";
    }

    this.setState({
      errors: errors
    });
    return IsValid;
  }

  
  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      this.useEffect(this.state.signupform)
      this.clearFormData()
    }
  }


  clearFormData() {
    let signupform = {};
    signupform["Name"] = "";
    signupform["phone"] = "";
    signupform["email"] = "";
    signupform["pass"] = "";
    signupform["profession"] = "";
    this.setState({ signupform: signupform });
  }

  state = {
    items: [],
    errorMessage: ''
  }

  useEffect(data){
    setLocalStorage(this.state);
  }

  render() {
    return (
      <div id="signup">
        <form className="signup-bg pt-5 " onSubmit={this.handleSubmit}>
          <div className="pt-md-5">
            <div className=" pt-md-5">
              <div className=" pt-md-5">
                <div className="container-bg col-sm-10 col-md-8  col-lg-5 col-xl-3 container px-0 shadow " >
                  <div className="col-12 px-0 ">
                    <div className="col-12 px-0 card-header text-center">
                      <label className="w-100 my-0">SignUp</label>
                    </div>
                    <div className="col-12">
                      <div className="row pt-2 px-3">
                        <div className="col-6 ">
                          <label className="pt-3 my-0 ">Name</label>
                          <input name="Name" className="form-control input-style"
                            placeholder="Name" value={this.state.signupform.Name}
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
                            placeholder="Phone" value={this.state.signupform.phone}
                            onChange={this.handleChange} />
                          {this.state.errors.phone &&
                            <label className="text-danger my-0">
                              {this.state.errors.phone}
                            </label>
                          }
                        </div>
                      </div>
                      <div className="col-12 py-2 px-3">
                        <label className="pt-3 my-0 ">Email address</label>
                        <input name="email" type="email" className="form-control input-style w-100"
                          placeholder="Enter email" value={this.state.signupform.email}
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
                          placeholder="Enter password" value={this.state.signupform.pass}
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
                      
                      <div className="col-12 pt-3 text-center prof-bg">
                        <label>Profession</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <select 
                        // value={this.state.profession} 
                        value={this.state.signupform.profession} onChange={this.handleChange} className="form-select" aria-label="Default select example">
                          <option value="Software Developer">Software Developer</option>
                          <option value="Software Engineer" >Software Engineer</option>
                          <option value="Network Engineer">Network Engineer</option>
                          <option value="IT Security">IT Security</option>
                        </select>
                      </div>
                      <div className="col-12 py-3 px-3">
                        <button className="col-12 btn button-bg " value="Submit" >
                          <Link className="text-white">Create</Link>
                          </button>
                        <p className=" pt-3 pb-2 text-center">
                          Already Have an Account..? <Link className="text-danger font-weight-bold" to={"/"}>Go Back</Link>
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