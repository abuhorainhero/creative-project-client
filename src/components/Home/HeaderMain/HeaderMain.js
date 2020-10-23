import React from 'react';
import { Button } from 'react-bootstrap';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <section className='container mt-5'>
            <div className="row">
                <div className="col-md-5">
                    <h1 className='font-weight-bold pt-4'>Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
                    <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni corporis fugiat, temporibus eum eveniet mollitia soluta dolores molestias pariatur.</p>
                    <Button variant="dark">Hire us</Button>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={frame} alt="" />
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;