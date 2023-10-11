import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import Edit from "./components/edit";
import Create from "./components/create";
import Authenticate from "./components/authenticate";

const App = () => {
  let auth = false
  if(auth === false) {
    return (
    <Authenticate />
    );
  } else {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    );
  }
};
 
export default App;