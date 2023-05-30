import React from 'react';
import './Freelancer.css'
const Freelancer = ({ gig, hireFreelance }) => {
    const { about, name, picture, balance, age } = gig;

    return (
        <div className='gig-card'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{about.slice(0, 25)}</p>
            <div className='hours'>
                <p><small>Age: {age}</small></p>
                <h4>Hour ${balance}</h4>
            </div>
            <button onClick={() => hireFreelance(gig)} className='hire-btn'><p>Hire Freelancer</p></button>

        </div>
    );
};

export default Freelancer;