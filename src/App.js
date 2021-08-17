
import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return(
    <div className="App">
  
      <Header />
     
      
       <div children="app__body">
           <Sidebar/>
            {/*feeds  */}
             {/*widgets  */}
             </div>
      
    </div>
  );
 
}

export default App;
