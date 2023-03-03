import React from 'react';
import CarScale from '../CarScaleComponent/CarScale';
import "./FormationCard.css"

const FormationCard = ({ formation }) => {
    return (
        <div className='card'>
            <div className='card-title'>
                {formation.name}
            </div>
            <div>
                <img className="logo-image" src={formation.logo} alt={`logo ${formation.name}`} onClick={() => {
                    console.log(formation.name)
                }}></img>
            </div>
            <div className='category'>
                <span>Categorie : <b>{formation.category}</b></span>
            </div>
            <div className='difficulte'>
                <span className='diff-label'>Difficulté : {formation.difficulte}</span>
                <CarScale scaleValue={formation.difficulte} />
            </div>
            <div className='price'>
                <span>Prix : <b>{formation.price}€</b></span>
            </div>
        </div>
    );
};

export default FormationCard;