import React, {useEffect} from 'react';
import { motion, useCycle } from 'framer-motion';
import './notification.scss';

const firstAnimationVariants = {
    leftAnimation1: {
        x: '-40rem',
        opacity: 0,

        transition: {
            x: {
                duration: 3
            },
            opacity: {
                duration: 3
            }
        }
    },
    upAnimation1: {
        y: '-25rem',
        transition: {
            y: {
                duration: 3
            }
        }
    },
    rightAnimation1: {
        x: '0rem',
        transition: {
            x: {
                duration: 3
            }
        }
    },
    downAnimation1: {
        y: '0rem',
        opacity: 1,
        transition: {
            y: {
                duration: 3,
                
            },
            opacity: {
                duration: 3
            }
        }
    }
};

const secondAnimationVariants = {
    downAnimation2: {
        y: '6rem',
        opacity: 1,
        transition: {
            y: {
                duration: 3,
            },
            opacity: {
                duration: 3
            }
        }
    },
    rightAnimation2: {
        x: '40rem',
        opacity: 0,
        transition: {
            x: {
                duration: 3
            },
            opacity: {
                duration: 3
            }
        }
    },
    upAnimation2: {
        y: '-11rem',
        transition: {
            y: {
                duration : 3
            }
        }
    },
    leftAnimation2: {
        x: '0rem',
        transition: {
            x: {
                duration: 3
            }
        }
    }
};

const thirdAnimationVariants = {
    downAnimation3: {
        y: '12rem',
        opacity: 1,
        transition: {
            y: {
                duration: 3,
                delay: 3
            },
            opacity: {
                duration: 3,
                delay: 1
            }
        }
    },
    leftAnimation3: {
        x: '-40rem',
        opacity: 0,
        transition: {
            x: {
                duration: 3,
                delay: 3
            },
            opacity: {
                duration: 3,
                delay: 3
            }
        }
    },
    upAnimation3: {
        y: '0rem',
        transition: {
            y: {
                duration: 3,
                delay: 3

            }
        }
    },
    rightAnimation3: {
        x: '0rem',
        transition: {
            x: {
                duration: 3,
                delay: 3

            },
        }
    }
};


const Notification = () => {

    const [animation1, cycleAnimation1] = useCycle('leftAnimation1', 'upAnimation1', 'rightAnimation1', 'downAnimation1');
    const [animation2, cycleAnimation2] = useCycle('downAnimation2', 'rightAnimation2', 'upAnimation2', 'leftAnimation2');
    const [animation3, cycleAnimation3] = useCycle('downAnimation3', 'leftAnimation3', 'upAnimation3', 'rightAnimation3');
    
    useEffect(() => {
        setInterval(() => {
            cycleAnimation1();
            cycleAnimation2();
            cycleAnimation3();
        }, 3000);
    }, []);

    return (
        <>
            <div className="notification-height">
            <hr/>
                <div className="container">
                    <h2 className='text-center mt-5'>Reçois des notifications pour te tenir au courant de ton avancement</h2>
                    <div className='mt-5'>
                        <motion.div 
                            className="notification-box d-flex  align-items-center notification-box-backgroundColor-1 mb-4"
                            variants={thirdAnimationVariants}
                            animate={animation3}
                            >
                            <div className='background-icon-notification ml-4 background-icon-notification-color-1'>
                                <i className="fas fa-bullhorn icon-box-1"></i>
                            </div>
                            <div className='mx-5'>
                                <p className='text-white m-0 notification-text-size'>You have a new notification waiting for you !</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="notification-box d-flex  align-items-center notification-box-backgroundColor-2 mb-4"
                            variants={secondAnimationVariants}
                            animate={animation2}
                            >
                            <div className='background-icon-notification ml-4 background-icon-notification-color-2'>
                                <i className="fas fa-exclamation-triangle icon-box-2"></i>
                            </div>
                            <div className='margin-left-notification-2'>
                                <p className='text-notification-2 m-0 notification-text-size'>You have one task left ! Go on !</p>
                            </div>
                        </motion.div>


                        <motion.div 
                            className="notification-box d-flex align-items-center notification-box-backgroundColor-3"
                            variants={firstAnimationVariants}
                            animate={animation1}
                            >
                            <div className='background-icon-notification ml-4 background-icon-notification-color-3'>
                                <i className="fas fa-check-circle icon-box-3"></i>
                            </div>
                            <div className='margin-left-notification-3'>
                                <p className='text-notification-3 m-0 notification-text-size'>You finished your project ! GGWP !</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Notification;