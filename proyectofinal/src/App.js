
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './views/Login';
import Home from './views/Home';
import Register from './views/Register';
import Navbar from './components/Navbar';
import RequireAuth from './components/RequireAuth';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './context/UserProvider';
import AdminView from './views/AdminView';
import EmployeeView from './views/EmployeeView';
import getRolService from './services/getRolService';
import { UserRolContext } from './context/UserRolProvider';

const App = () => {

  const { user,rol} = useContext(UserContext);
  //const { userRol} = useContext(UserRolContext);

  //console.log("roooool: ",userRol)


  if (user == false ) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1 >esto no es</h1>
      <Navbar />
      <Routes>
        <Route path='/*' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }></Route>

        {!user &&<Route path='/login' element={<Login />}></Route>}
        <Route path='/register' element={<Register />}></Route>
        <Route path='/admin' element={
          <RequireAuth>
              <AdminView />
          </RequireAuth>
        }></Route>
        
        <Route path='/empleado' element={
          <RequireAuth>
              <EmployeeView />
          </RequireAuth>
        }></Route>


      </Routes>
    </>


  );
}

export default App;
