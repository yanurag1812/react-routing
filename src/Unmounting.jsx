import React from 'react';



function Unmounting() {

  return (

    <>

      <div class="container">



        <h1 style={{
          textAlign: "center", border: '2px solid black', backgroundColor: 'yellow', marginlift: "15px", borderRadius: '5px',

          width: '600px',

          display: "block", margin: "auto", marginTop: "5px"
        }}>This is Unmounting

        </h1>

        <p style={{
          textAlign: "center", border: '2px solid black', backgroundColor: 'white', borderRadius: '5px',

          width: '600px',

          display: "block", margin: "auto", marginTop: "5px"
        }} >

          <b> Unmounting </b> <br />

          This is the last phase in the component’s lifecycle. As the name clearly suggests, the component gets unmounted from the DOM in this phase. The method that is available in this phase is: <br />



          1. componentWillUnmount():-This method is called before the unmounting of the component takes place. Before the removal of the component from the DOM, ‘componentWillUnMount’ executes. This method denotes the end of the component’s lifecycle.

        </p>

      </div>

    </>

  );

}



export default Unmounting;