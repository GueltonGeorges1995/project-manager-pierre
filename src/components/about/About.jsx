import React from 'react';
import './about.scss';

const About = () => {
    return (
        <>
            <div className='about-height pt-5'>
                <h2 className='text-center mt-5 text-white about-title'>Manque d'organisation ?</h2>
                <div className='container my-5 pt-5'>
                    <div className="row">
                        <div className="col about-box mx-3 d-flex justify-content-center align-items-center">
                            <div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <i className="fas fa-flag-checkered"></i>
                                </div>
                                <h4 className='text-center about-subtitle mt-4'>Définis ton but</h4>
                            </div>
                        </div>
                        <div className="col about-box mx-3 d-flex justify-content-center align-items-center">
                            <div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <i className="fas fa-file"></i>
                                </div>
                                <h4 className='text-center about-subtitle mt-4'>Organise ton avancement</h4>
                            </div>
                        </div>
                        <div className="col about-box mx-3 d-flex justify-content-center align-items-center">
                            <div>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h4 className='text-center about-subtitle mt-4'>Motive toi à chaque étapes</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default About;