import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="flex-1">
   
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 text-warning">
    <li><Link to='login'>Login</Link></li>
    <li><Link to='/'>signup</Link></li>
      
    </ul>
  </div>
</div>
    );
};

export default Header;