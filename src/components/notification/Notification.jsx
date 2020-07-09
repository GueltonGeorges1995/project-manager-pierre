import React from 'react';
import './notification.scss';
const Notification = () => {
    return (
        <>
            <div className="notification-height">
                <div className="container">
                    <h2 className='text-center mt-5'>Reçois des notifications pour te tenir au courant de ton avancement</h2>

                    

                        <div className="notification-box-1 d-inline-block">
                            <div className='d-flex justify-content-center align-items-center p-2'>
                                <div className='background-icon-notification-1  ml-2'>
                                    <i className="fas fa-bullhorn icon-box-1"></i>
                                </div>
                                 <div className='mx-5'>
                                    <p className='text-white m-0'>You have a new notification waiting for you !</p>
                                </div>
                            </div>
                        </div>

                         <div className="notification-box-2 d-inline-block">
                            <div className='d-flex justify-content-center align-items-center p-2'>
                                <div className='background-icon-notification-2  ml-2'>
                                    <i className="fas fa-exclamation-triangle icon-box-2"></i>
                                </div>
                                 <div className='mx-5'>
                                    <p className='text-notification-2 m-0'>You have one task left ! Go on !</p>
                                </div>
                            </div>
                        </div>

                         <div className="notification-box-3 d-inline-block">
                            <div className='d-flex justify-content-center align-items-center p-2'>
                                <div className='background-icon-notification-3  ml-2'>
                                    <i class="fas fa-check-circle icon-box-3"></i>
                                </div>
                                 <div className='mx-5'>
                                    <p className='text-notification-3 m-0'>You finished your project ! GGWP !</p>
                                </div>
                            </div>
                        </div>



            
                </div>
            </div>
        </>
    )
};

export default Notification