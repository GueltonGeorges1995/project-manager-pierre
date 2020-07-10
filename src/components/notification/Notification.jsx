import React from 'react';
import './notification.scss';
const Notification = () => {
    return (
        <>
            <div className="notification-height">
                <div className="container">
                    <h2 className='text-center mt-5'>Reçois des notifications pour te tenir au courant de ton avancement</h2>
                    <div className='mt-5'>
                        <div className="notification-box d-flex  align-items-center notification-box-backgroundColor-1 mb-4">
                            <div className='background-icon-notification ml-4 background-icon-notification-color-1'>
                                <i className="fas fa-bullhorn icon-box-1"></i>
                            </div>
                            <div className='mx-5'>
                                <p className='text-white m-0 notification-text-size'>You have a new notification waiting for you !</p>
                            </div>
                        </div>

                        <div className="notification-box d-flex  align-items-center notification-box-backgroundColor-2 mb-4">
                            <div className='background-icon-notification ml-4 background-icon-notification-color-2'>
                                <i className="fas fa-exclamation-triangle icon-box-2"></i>
                            </div>
                            <div className='margin-left-notification-2'>
                                <p className='text-notification-2 m-0 notification-text-size'>You have one task left ! Go on !</p>
                            </div>
                        </div>


                        <div className="notification-box d-flex align-items-center notification-box-backgroundColor-3">
                            <div className='background-icon-notification ml-4 background-icon-notification-color-3'>
                                <i className="fas fa-check-circle icon-box-3"></i>
                            </div>
                            <div className='margin-left-notification-3'>
                                <p className='text-notification-3 m- notification-text-size'>You finished your project ! GGWP !</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Notification