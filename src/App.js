import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import Menu from "./Components/Menu";
import Rooms from "./Components/Rooms";
import Signin from "./Components/Signin";
import AddRoom from "./Components/AddRoom";
import Signup from "./Components/Signup";
import Forget from "./Components/Forget";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return ( 
    <Router>
      <> 
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addroom' element={<AddRoom />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forget' element={<Forget />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;