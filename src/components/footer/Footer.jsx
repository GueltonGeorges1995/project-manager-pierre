import React from 'react';
import './footer.scss';

const Footer  = () => {
    return (
        <>
            <div className='footer-height position-relative'>
            <div className='background-footer'></div>
                <div className="container pt-5 margin-top-footer">
                    <div className="row">
                        <div className="col-3">
                            <h3>Project Manager</h3>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <i className="fab fa-linkedin-in icon-footer mr-2"></i>
                            <span><a href="https://google.com">Linkedin</a></span>
                        </div>
                        <div className="col-3 d-flex justify-content-center align-items-center">
                            <i className="fab fa-github icon-footer mr-2"></i>
                            <span><a href="https://google.com" target_blanck>Github</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;