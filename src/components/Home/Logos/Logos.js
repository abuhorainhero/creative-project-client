import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Logos = () => {
    return (
        <section className="container my-5 py-5">
            <div className="row pt-5 text-center">
                <div className="col-lg-2 col-md-4 col-6">
                    <img style={{ height: '60px', padding: '10px'}} className='img-fluid' src={slack} alt="" />
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <img style={{ height: '60px', padding: '10px'}} src={google} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <img style={{ height: '60px', padding: '10px'}} src={uber} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <img style={{ height: '60px', padding: '10px'}} src={netflix} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                    <img style={{ height: '60px', padding: '10px'}} src={airbnb} alt="" className="img-fluid" />
                </div>
            </div>
        </section>
    );
};

export default Logos;