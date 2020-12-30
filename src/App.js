import React from 'react';
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import DetailsPage from 'pages/DetailsPage'
import LandingPages from 'pages/LandingPages';
import Checkout from 'pages/Checkout';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPages} />
        <Route exact path="/properties/:id" component={DetailsPage}/>
        <Route path="/checkout" component={Checkout}></Route>

        <ToastContainer></ToastContainer>
      </Router>
    </div>
  );
}

export default App;
