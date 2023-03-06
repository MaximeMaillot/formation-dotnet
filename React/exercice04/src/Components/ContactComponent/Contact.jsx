import React from 'react';
import "./Contact.css";


const Contact = ({ contact }) => {
    return (
        <tr>
            <td>{contact.nom}</td>
            <td>{contact.prenom}</td>
            <td>{contact.email}</td>
            <td>{contact.telephone}</td>
        </tr>
    );
};

export default Contact;