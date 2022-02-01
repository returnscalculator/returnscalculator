import React from "react";
import {
    Card,
    CardGroup,
  } from "react-bootstrap";
  import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

import "./index.css"

const Grid = () => {
  return (
<div className="cardgrid">

    
    <Link to="/mf" className="labeltext">
    <div className="cardbutton">
    <img className="image" src={require('./images/mutual.png')} />
    <p className="labeltext">Mutual Funds Calculator</p>
    </div>
    </Link>

    <Link to="/sip" className="labeltext">
    <div className="cardbutton">
    <img className="image" src={require('./images/SIP.png')} />
    <p className="labeltext">SIP Calculator</p>
    </div>
    </Link>

    
    <Link to="/stocks" className="labeltext">
    <div className="cardbutton">
    <img className="image" src={require('./images/stocks.png')} />
    <p className="labeltext">Stocks Returns Calculator</p>
    </div>
    </Link>

    <Link to="/fd" className="labeltext">
    <div className="cardbutton">
    <img className="image" src={require('./images/FD.png')} />
    <p className="labeltext">Fixed Deposit Calculator</p>
    </div>
    </Link>

    <Link to="/lumpsum" className="labeltext">
    <div className="cardbutton">
    <img className="image" src={require('./images/lumpsum.png')} />
    <p className="labeltext">Lumpsum investment Calculator</p>
    </div>
    </Link>

    <Link to="/rd" className="labeltext">
    <div className="cardbutton">
    <img className="image" src={require('./images/RD.png')} />
    <p className="labeltext">Recurring Deposit Calculator</p>
    </div>
    </Link>



 
</div>
  );
};


export default Grid;