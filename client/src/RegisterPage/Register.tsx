import * as React from 'react';
import { Link } from 'react-router-dom';



export interface Props {

}

export interface State {
  RegisterOK: string

}

class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state={

RegisterOK:""

    }

  }


Register=()=>{


this.setState({

RegisterOK:"Register Ok"

})


}

  render() {
    return (
<div>
<h3>Register</h3>
      <form className="container">
       
        <div className="form-group Email">
          <label htmlFor="EmailInput">Email address</label>
          <input type="email" className="form-control" id="EmailInput" aria-describedby="emailHelp" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group PassOne">
          <label htmlFor="PasswordInput">Password</label>
          <input type="password" className="form-control" id="PasswordInput" />
        </div>
        <div className="form-group PassTwo">
          <label htmlFor="PasswordInputAgain">Password2</label>
          <input type="password" className="form-control" id="PasswordInputAgain" />
        </div>
        <div className="form-group Phonenumber">
          <label htmlFor="PhoneNumberInput">PhoneNumber</label>
          <input type="password" className="form-control" id="PhoneNumberInput" />
        </div>
        <div className="form-group Id">
          <label htmlFor="IDInput">Id</label>
          <input type="text" className="form-control" id="IDInput" />
        </div>
      
        <div className="row">
          <Link to="/Login" className="col-md"><button type="button" className="btn btn-primary">Login</button></Link>

          <div className="col-md"><button type="button" className="btn btn-primary" onClick={this.Register}>Register</button></div>


        </div>

      </form>
    <h3>{this.state.RegisterOK}</h3>
      </div>

    );
  }
}

export default Register;