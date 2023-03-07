import React from 'react';
import Contact from '../../Components/ContactComponent/Contact';
import "./List.css";

const List = ({ contacts, updateContacts }) => {
    return contacts ? (
        <React.Fragment>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact, index) => {
                            return <Contact contact={contact} key={index}></Contact>
                        })
                    }
                </tbody>
            </table>
            <div className='text-center'>
                <button className='btn btn-secondary' onClick={() => { updateContacts([]) }}>Clear</button>
            </div>
        </React.Fragment>
    ) : (
        <div className='text-center'><h2>Pas de contacts</h2></div>
    )
};

export default List;