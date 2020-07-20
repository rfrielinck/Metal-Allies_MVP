import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./main.css";
import "./Buyandsupplybuttons.css";
import "./navbar.css";

function Main() {
  return (
    <div>
<div class="headertext">
<p>About Metal Allies</p></div>
  <div class="text"><p>
  Metal Allies is a global platform connecting international buyers with suppliers in Europe. A starting online sourcing platform for OEM, custom parts and components, helping companies in procurement and meeting output quotas.
  <br></br>
  <br></br>
  We have customers in 0 countries, increasing production efficiency and reducing manufacturing costs. We have partnerships with zero's of industry supply chain service providers, both upstream and downstream.
  </p></div>
      
      <div class="row">
          
          <Link to="/Buyer">
          <li>   
          <div class="left">
          <p>Buyers</p>
          <div class="secondary-text">
              <p>Send Quote request</p>
              </div>
          </div>
          </li>
          </Link>
          
          <Link to="/Supplier">
          <li>   
          <div class="right">
          <p>Suppliers</p>
          <div class="secondary-text">
              <p>Receive Quote request</p>
              </div>
          </div>
          </li>
          </Link>
        </div>
      
      <div className="content" />
      
      <div className="footer">
      <div className="footertext">
            <p>
            <div className="navbar-logo">
              Metal Allies
            </div>
            </p>
            <p>
              Powerpils BV<br></br>
              Residentie Rotzooi<br></br>
              Enschede GP Skyboxlaan 123A<br></br>
              1234 AB Enschede<br></br>
            </p>
            <p>
            info@metal-allies.com<br></br>
            06-123456
            </p>
          </div>
      
      
      
      
      </div>
      <changeName />
    </div>
  );
}

export default Main;
