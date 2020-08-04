import React from 'react';
import logo from './logo.svg';
import ContentRouter from './ContentRouter';
import Header from './Header'

function App() {
  return ( 
    <div style={{ backgroundImage: "linear-gradient(145deg, #02B497 0%, #006484 60%)", height: "100vh" }}>
      <Header />
      <ContentRouter />
    </div>
  );
}

export default App;
