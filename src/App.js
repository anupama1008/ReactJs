import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import Menu from "./Components/Menu";
import Rooms from "./Components/Rooms";
import Signin from "./Components/Signin";
import AddRoom from "./Components/AddRoom";
import Signup from "./Components/Signup";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( 
      <Router>
        <> 
        <Navbar/> 
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route index element={<Home />} />  
          <Route exact path='/rooms' element={<Rooms />} />
          <Route exact path='/contacts' element={<Contacts />} />
          <Route exact path='/menu' element={<Menu />} />

          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/addroom' element={<AddRoom />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
        </>

      </Router>
  );
}

export default App;
