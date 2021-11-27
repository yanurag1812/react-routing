import React from "react";

import {

  BrowserRouter as Router,

  Switch,

  Route,

  Link

} from "react-router-dom";

import Unmounting from "./Unmounting";

import Mounting from "./Mounting";

import Updating from "./Updating";




function Header() {

  return (

    <Router>

      <div>

        <div style={{

          padding: '20px',

          width: '600px',

          display: "block",

          margin: 'auto',

          color: "white",

          backgroundColor: "red",

          textAlign: "center",

          border: '2px solid black',

          marginTop: '20px',

        }}>

          <nav>

            <h1>Component Life Cycle </h1>

            <ul style={{ paddingtop: '2PX' }}>

              <li style={{ display: 'inline-block', padding: "10px", border: '2px solid black', margin: "10px", color: "white", borderRadius: '5px', }}>

                <Link to="/"><b>Mounting</b></Link>

              </li>

              <li style={{ display: 'inline-block', padding: "10px", border: '2px solid black', margin: "10px", color: "black", borderRadius: '5px' }}>

                <Link to="/Updating"><b>Updating</b></Link>

              </li>

              <li style={{ display: 'inline-block', padding: "10px", border: '2px solid black', margin: "10px", color: "black", borderRadius: '5px' }}>

                <Link to="/Unmounting"><b>Unmounting</b></Link>

              </li>

            </ul>

          </nav>

        </div>

        <Switch>

          <Route path="/Updating">

            <Updating />

          </Route>

          <Route path="/Unmounting">

            <Unmounting />

          </Route>

          <Route exact path="/">

            <Mounting />

          </Route>

        </Switch>

      </div>

    </Router>

  );

}



export default Header;