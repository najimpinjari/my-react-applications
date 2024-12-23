import React from 'react';
import './App.css';


export const App = () => {
  return (
    <>    
          <React.Fragment>
          <Netflix/>
          <Netflix/>
          <Netflix/>
          <Netflix/>
          <Netflix/>
          </React.Fragment>
         

    </>
  );
};

const Netflix = () =>{
  return (
    <div>
      <div>
        
        <img src='shoe_image.png' alt="Queen of Tears" width="40%" height="40%" />
      </div>
      <h2>Name: Queen Of Tears</h2>
      <h3>Rating: 8.2</h3>
      <p>
        Summary: Baek Hyun-woo and Hong Hae-in navigate a tense
        relationship, both at home and at work. But upon deciding his
        future, Hyun-woo pays a...
      </p>
    </div>
  );
}


export default App
