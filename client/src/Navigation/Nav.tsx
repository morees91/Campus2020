import * as React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Login from '../LoginPage/Login';

import Register from '../RegisterPage/Register';
import AdminInterface from '../AdminstrationInterface/AdminInterface';



 interface Props {
    
}
 
 interface State {
    
}
 
class Nav extends React.Component<Props, State> {
    
    render() { 
        return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
      <Link to="/Login" className="nav-link ">Login</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

    </ul>
  </div>
</nav>
<Switch>


<Route exact path="/" component={()=><AdminInterface/>}/>
<Route path="/Login" component={()=><Login/>}/>
<Route path="/Register" component={()=><Register/>}/>




</Switch>
</div>
          );
    }
}
 
export default Nav;