import React from 'react';
import './about.scss';

const About = () => {
    return (
        <>
            <div className='about-height pt-5'>
                <h2 className='text-center mt-5 text-white'>Manque d'organisation</h2>
                <div className='container my-5 pt-5'>
                    <div className="row">
                        <div className="col">
                            <h4 className='text-center'>Définis ton but</h4>
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                {/* <i className="fas fa-arrow-up"></i> */}
                                <i class="fas fa-flag-checkered"></i>
                            </div>
                        </div>
                        <div className="col">
                            <h4 className='text-center'>Organise ton avancement</h4>
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                <i className="fas fa-file"></i>
                            </div>
                        </div>
                        <div className="col">
                            <h4 className='text-center'>Motive toi à chaque étapes</h4>
                            <div className='d-flex justify-content-center align-items-center mt-5'>
                                <i className="fas fa-chart-line"></i>
                            </div>
                        </div>
                    </div>
                    {/* <h2 className='text-center mt-7'>Reçois des notifications pour te tenir au courant de ton avancement</h2> */}
                </div>
                {/* <div className='background-image-about'></div> */}
                
            </div>
        </>
    )
};
export default About;