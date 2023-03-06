import React from 'react';
import Contact from '../../Components/ContactComponent/Contact';
import "./List.css";

const List = ({ contacts, updateContacts }) => {
    return contacts.length > 0 ? (
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
            <button className='btn btn-secondary' onClick={() => { updateContacts([]) }}>Clear</button>
        </React.Fragment>
    ) : (
        <div>Pas de contacts</div>
    )
};

export default List;