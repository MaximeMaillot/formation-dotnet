import React from 'react';
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../../Views/HomeView/Home"
import AddPerson from "../../Views/AddPersonView/AddPerson"
import List from "../../Views/ListView/List"

const Navbar = ({ contacts, updateContacts }) => {
    return (
        <div>
            <BrowserRouter>
                <div className='navbar d-flex flex-row justify-content-center'>
                    <button className='btn'>
                        <Link to="/" >Home</Link>
                    </button>
                    <button className='btn'>
                        <Link to="/list">List</Link>
                    </button>
                    <button className='btn'>
                        <Link to="/add">AddPerson</Link>
                    </button>
                </div>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/list' element={<List contacts={contacts} updateContacts={updateContacts}></List>}></Route>
                    <Route path='/add' element={<AddPerson contacts={contacts} updateContacts={updateContacts}></AddPerson>}></Route>
                    <Route path='/*' element={<Home></Home>}></Route>
                </Routes>
                <div className='container'>
                    <Outlet />
                </div>
            </BrowserRouter >
        </div >
    );
};

export default Navbar;