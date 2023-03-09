import React from 'react';
import "./Navbar.css";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "../../Views/HomeView/Home"
import AddPerson from "../../Views/AddPersonView/AddPerson"
import List from "../../Views/ListView/List"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faAddressCard, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ contacts, updateContacts }) => {
    return (
        <div>
            <BrowserRouter>
                <div className='navbar d-flex flex-row justify-content-center'>
                    <Link to="/" ><FontAwesomeIcon icon={faHouse} className="font-icon" /></Link>
                    <Link to="/list"><FontAwesomeIcon icon={faAddressCard} className="font-icon" /></Link>
                    <Link to="/add"><FontAwesomeIcon icon={faUser} className="font-icon" /></Link>
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