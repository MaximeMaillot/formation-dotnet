import React, { Fragment, useState } from 'react';
import "./FormationList.css"
import { coursList } from "../../datas/CoursList"
import FormationCard from '../../components/FormationCard/FormationCard';
import Category from '../../components/CategoryComponent/Category';

const FormationList = () => {
    const [activeCategory, setActiveCategory] = useState('');

    const categoryList = coursList.map((cours) => {
        this.acc.includes(cours.category)
            ? this.acc
            : this.acc.concat(cours.category, []);
    }, { acc: [] })

    return (
        <div className='formation-list'>
            <h2>Nos formations</h2>
            <div className='row'>
                <div className="col-8">
                    <Category
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                        categoryList={categoryList}
                    />
                </div>
                <div className="col-4">
                    {/* Panier */}
                </div>
            </div>
            <div className='card-container d-flex flex-wrap justify-content-around'>
                {coursList.map((cours, index) => {
                    return (
                        <Fragment key={index}>
                            <FormationCard formation={cours} />
                        </Fragment>)
                })}
            </div>
        </div>
    );
};

export default FormationList;