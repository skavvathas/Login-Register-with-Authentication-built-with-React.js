import React, {useState} from "react";
import { Link } from 'react-router-dom';

// rendered in the /select route
export default function Select(){
    return ( 
        <div class="background">
            <div className="center">
            <Link to="/login"><button type="button" className="btn btn-outline-info btn-lg" style={{margin: "10px"}}>Login</button></Link>
            <Link to="/register"><button type="button" class="btn btn-outline-success btn-lg">Register</button></Link>
            </div>
        </div>
        
    ); 
}