import React from 'react';
import SignIn from './Login_page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './User';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </Router>
  );
}
export default App;
