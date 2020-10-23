import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center text-danger mt-5'>
            <h6>This URL does not exist</h6>
            <Link to='/home'>Go to Home</Link>
        </div>
    );
};

export default NotFound;