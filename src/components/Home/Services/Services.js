import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="my-5">
            <h1>service</h1>
            <Link to='/addService'>Add a service</Link>
        </div>
    );
};

export default Services;