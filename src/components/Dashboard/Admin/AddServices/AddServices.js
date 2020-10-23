import React from 'react';
import Sidebar from '../../Sheard/Sidebar/Sidebar';

const AddServices = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                <input type="text" className="form-control"/>
                    
                    <input type="text" className="form-control"/>
                </div>
            </div>
        </section>
    );
};

export default AddServices;