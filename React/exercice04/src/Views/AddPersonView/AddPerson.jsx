import React from 'react';
import "./AddPerson.css";

const AddPerson = ({ contacts, updateContacts }) => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                updateContacts(
                    [...contacts, {
                        nom: e.target.nom.value,
                        prenom: e.target.prenom.value,
                        email: e.target.email.value,
                        telephone: e.target.telephone.value
                    }]
                )
            }}>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name='nom' />
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" name='prenom' />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name='email' />
                <label htmlFor="telephone">Téléphone</label>
                <input type="tel" id='telephone' name='telephone' />
                <button type='submit'>Valider</button>
            </form>
        </div >
    );
};

export default AddPerson;