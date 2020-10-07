import React from 'react';
import ContentRouter from './utils/navigation/ContentRouter';

class App extends React.Component {

  render() {
    return (
        <div style={{ backgroundImage: "linear-gradient(145deg, #02B497 0%, #006484 60%)", minHeight: "100vh" }}>
          <ContentRouter />
        </div>
    );
  }

} export default App;
