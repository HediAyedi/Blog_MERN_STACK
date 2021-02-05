import './App.css';
import React from 'react';
import { Home } from "./components/screens/Home";
import  Category  from "./components/screens/Category";
import Single from "./components/screens/Single";
import { BrowserRouter , Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <Route exact path="/">
    <Home />
    </Route>

    <Route path="/category">
    <Category />
    </Route>

    <Route path="/singlepost">
    <Single />
    </Route>


    </BrowserRouter>
  );
}

export default App;
