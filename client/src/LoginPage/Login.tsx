import * as React from 'react';
import { Link } from 'react-router-dom';



export interface Props {
    
}
 
export interface State {
  LoginOk:string
    
}

 
class Login  extends React.Component<Props, State> {
    constructor(props:Props){
super(props);
this.state={

LoginOk:""

}

    }


  Login =()=>{


this.setState({

LoginOk:"Login Ok"


})


  
  }

    render() { 
        return ( 
<div>
  <h3>Login</h3>
<form className="container">
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <div className="row">
<Link to="/" className="col-md"><button type="button"  className="btn btn-primary" onClick={this.Login}>Login</button></Link>
<Link to ="/Register" className="col-md"><button type="button" className="btn btn-primary">Register</button></Link>


  </div>
  
</form>
        <h3>{this.state.LoginOk}</h3>
</div>

         );
    }
}
 
export default Login;