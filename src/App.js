import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import "antd/dist/antd.css";
import Router from "./router";

const App = () => (
  <React.StrictMode>
     <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);



// function App() {
  

//   return (
    
//     <Switch>
//     <Route exact path="/" component={Login} />
//     <Route exact path="/profile-setup" component={Profile} />
//     <Route exact path="/mentors" component={Mentors}/>
//     </Switch>
  
//   );
// }

export default App;
