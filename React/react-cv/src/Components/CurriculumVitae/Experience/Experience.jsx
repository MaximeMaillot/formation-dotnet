import React from 'react';
import "./Experience.scss"

const Experience = ({ experience }) => {
    function getAllStacks() {
        const stacks = []
        for (let i = 0; i < experience.tasks.length; i++) {
            if (experience.stacks[i].active) {
                stacks.push(experience.stacks[i].text)
            }
        }
        return stacks.join(" | ")
    }
    return (
        <div className='Experience'>
            <div className='Experience-title'><h3>{experience.title} chez {experience.entreprise} à {experience.city}</h3><span><b>{experience.duration} - {experience.date}</b></span></div>
            <ul className='Experience-descriptions'>
                {experience.tasks.map((task, index) => {
                    return task.active ? <li key={index}>{task.text}</li> : undefined
                })}
            </ul>
            <div className='Experience-stack'><b>Stack : </b>{getAllStacks()}</div>
        </div>
    );
};

export default Experience;