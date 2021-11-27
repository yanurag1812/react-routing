import React from 'react';



function Updating() {

  return (

    <>

      <h1 style={{
        textAlign: "center", border: '2px solid black', backgroundColor: 'yellow', marginlift: "15px", borderRadius: '5px',

        width: '600px',

        display: "block", margin: "auto", marginTop: "5px",
      }}>This is Updating</h1>

      <p style={{
        textAlign: "center", border: '2px solid black', backgroundColor: 'white', borderRadius: '5px',

        width: '600px',

        display: "block", margin: "auto", marginTop: "5px"
      }}><b>Updating</b> <br />

        This is the third phase through which our component passes. After the mounting phase where the component has been created, the update phase comes into the scene. This is where component’s state changes and hence, re-rendering takes place. <br />



        In this phase, the data of the component (state & props) updates in response to user events like clicking, typing and so on. This results in the re-rendering of the component. The methods that are available in this phase are: <br />



        shouldComponentUpdate()

        This method determines whether the component should be updated or not. By default, it returns true. But at some point, if you want to re-render the component on some condition, then shouldComponentUpdate method is the right place. <br />



        Suppose, for example, you want to only re-render your component when there is a change in prop — then utilize the power of this method. It receives arguments like nextProps and nextState which help us decide whether to re-render by doing a comparison with the current prop value. <br />



        2. componentWillUpdate()



        Like other methods, its name is also self-explanatory. It is called before the re-rendering of the component takes place. It is called once after the ‘shouldComponentUpdate’ method. If you want to perform some calculation before re-rendering of the component and after updating the state and prop, then this is the best place to do it. Like the ‘shouldComponentUpdate’ method, it also receives arguments like nextProps and nextState. <br />



        3. ComponentDidUpdate()



        This method is called just after the re-rendering of the component. After the new (updated) component gets updated on the DOM, the ‘componentDidUpdate’ method is executed. This method receives arguments like prevProps and prevState.</p>

    </>

  );

}



export default Updating;