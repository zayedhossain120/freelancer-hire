import React, { useEffect, useState } from 'react';
import Freelancer from '../Freelancer/Freelancer';
import Calculate from '../Calculate/Calculate';
import './Portfolio.css'
const Portfolio = () => {
    const [gigs, setGig] = useState([]);
    const [calculate, setCalculate] = useState([]);
    useEffect(() => {
        fetch('freelancer.json')
            .then(res => res.json())
            .then(data => setGig(data));
    }, [])
    const hireFreelance = (gig) => {
        // const freelancerHour = gigs.find(gig => gig.balance)
        setCalculate(gig.balance);

    }

    return (
        <div className='container'>
            <div className='freelancer-gig'>
                {
                    gigs.map(gig => <Freelancer
                        gig={gig}
                        hireFreelance={hireFreelance}
                    ></Freelancer>)
                }
            </div>
            <div className='calculate'>
                <Calculate calculate={calculate}></Calculate>
            </div>
        </div>
    );
};

export default Portfolio;