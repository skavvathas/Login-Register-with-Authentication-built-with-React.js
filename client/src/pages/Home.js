import { useState, useEffect } from 'react';
import { useAuthContext } from "../hooks/useAuthContext";

import { useLogout } from '../hooks/useLogout';
import { Link } from 'react-router-dom';
import './Home.css';


// rendered in the /home route
export default function Home(){
  const {user} = useAuthContext();
  const { logout } = useLogout();
  const [posts, setPosts] = useState([]);

  const handleClick = () => {
    logout()
  }

  return (
    
    <div className="wrapper">

      
      <div className="main text-centered titles">
        
          Hello {user.user.username}
          <div className="button-marg">
            <button type="button"  onClick={handleClick}><Link to="/" className="btn btn-secondary">Log out</Link></button>
          </div>
        
        
      </div>
      
    
    </div>
  );
}

// user from useAuthContext
// AuthContext {user: {…}} (console)
/* user: 
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDI4ODU0N2MzZTU1NmY4ZmRkOGMyNmQiLCJpYXQiOjE2ODAzNzcxNTksImV4cCI6MTY4MDYzNjM1OX0.8lXzgC9zYaCz4-xhePZOmf04fq7K2Hn86IsimvXf2oA"
    user: 
      email: "skavvathas@gmail.com"
      firstName: "Spiros"
      lastName: "Kavvathas"
      password: "25f9e794323b453885f5181f1b624d0b"
      username: "skavvathas"
      __v: 0
      _id: "64288547c3e556f8fdd8c26d" */
// user.token for the token of the user
// user.user.firstName for the first name of the user
// use.user.username for the username
// etc
