import React from 'react';
import './about.scss';

const About = () => {
    return (
        <>
            <div className='about-height pt-5'>
                <h2 className='text-center mt-5 text-white about-title'>Manque d'organisation</h2>
                <div className='container my-5 pt-5'>
                    <div className="row">
                        <div className="col">
                            <h4 className='text-center about-subtitle'>Définis ton but</h4>
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                <i className="fas fa-flag-checkered"></i>
                            </div>
                        </div>
                        <div className="col">
                            <h4 className='text-center about-subtitle'>Organise ton avancement</h4>
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                <i className="fas fa-file"></i>
                            </div>
                        </div>
                        <div className="col">
                            <h4 className='text-center about-subtitle'>Motive toi à chaque étapes</h4>
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                <i className="fas fa-chart-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default About;