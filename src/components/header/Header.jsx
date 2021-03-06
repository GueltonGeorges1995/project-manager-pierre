import React from 'react';
import { motion } from 'framer-motion';

import './header.scss';
import imageHeader from '../../assets/images/project.png';

const Header = () => {
    return (
        <>
        <div className='header-height'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                    <svg width="60" height="48" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0328 20H1.47541C0 20 0 19.0909 0 18.6364V4.54545C0 3.81818 0.819672 3.63636 1.47541 3.63636H16.2295C16.8852 3.63636 18.1967 3.27273 18.1967 1.81818C18.1967 0.363636 19.5082 0 20.1639 0H28.0328C29.6066 0 30 0.606061 30 0.909091V18.1818C30 19.6364 28.6885 20 28.0328 20Z" fill="#FFB088"/>
                        <path d="M28.0328 22H1.47541C0 22 0 21.0909 0 20.6364V6.54545C0 5.81818 0.819672 5.63636 1.47541 5.63636H16.2295C16.8852 5.63636 18.1967 5.27273 18.1967 3.81818C18.1967 2.36364 19.5082 2 20.1639 2H28.0328C29.6066 2 30 2.60606 30 2.90909V20.1818C30 21.6364 28.6885 22 28.0328 22Z" fill="#FF9466"/>
                        <path d="M28.0328 24H1.47541C0 24 0 23.0909 0 22.6364V8.54545C0 7.81818 0.819672 7.63636 1.47541 7.63636H16.2295C16.8852 7.63636 18.1967 7.27273 18.1967 5.81818C18.1967 4.36364 19.5082 4 20.1639 4H28.0328C29.6066 4 30 4.60606 30 4.90909V22.1818C30 23.6364 28.6885 24 28.0328 24Z" fill="#F35627"/>
                        <path d="M15.3151 22.016C13.9308 22.016 13.5848 21.1069 13.5848 20.6524H17.0455C17.0455 21.1069 16.6994 22.016 15.3151 22.016Z" stroke="#FFD0B5"/>
                        <path d="M17.0455 20.107H13.5848V19.2888H17.0455V20.107Z" stroke="#FFD0B5"/>
                        <path d="M13.5848 19.2888C13.1316 18.0616 12.2993 15.2253 12.596 13.698C12.8926 12.1708 14.5323 11.8799 15.3151 11.9254C16.0979 11.8799 17.7376 12.1708 18.0343 13.698C18.3309 15.2253 17.4987 18.0616 17.0455 19.2888" stroke="#FFD0B5"/>
                        <path d="M15.1812 10.4729V9.12035C15.1812 9.05388 15.235 9 15.3015 9C15.368 9 15.4219 9.05388 15.4219 9.12035V10.4729C15.4219 10.5394 15.368 10.5933 15.3015 10.5933C15.235 10.5933 15.1812 10.5394 15.1812 10.4729Z" fill="black" stroke="#FFD0B5" strokeWidth="0.5"/>
                        <path d="M12.2356 11.1997L11.6281 10.0389C11.5964 9.97843 11.6174 9.89969 11.675 9.86303C11.7326 9.82636 11.8049 9.84566 11.8365 9.90612L12.444 11.067C12.4756 11.1274 12.4546 11.2062 12.3971 11.2428C12.3395 11.2795 12.2672 11.2602 12.2356 11.1997Z" fill="black" stroke="#FFD0B5" strokeWidth="0.5"/>
                        <path d="M18.1268 11.067L18.7343 9.90612C18.7659 9.84566 18.8382 9.82636 18.8958 9.86302C18.9533 9.89969 18.9743 9.97843 18.9427 10.0389L18.3352 11.1997C18.3036 11.2602 18.2313 11.2795 18.1737 11.2428C18.1161 11.2062 18.0951 11.1274 18.1268 11.067Z" fill="black" stroke="#FFD0B5" strokeWidth="0.5"/>
                    </svg>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#">Accueil</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="#">A Propos</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link " href="#">Notification</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link " href="#">Rejoins nous</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='container mt-7'>
                    <div className="row">
                        <div className="col-7">
                            <h1>De Nouveaux Projets En Tête ?</h1>
                            <h2 className='mt-4'>Commence les correctements et <span>surtout mène les à bouts !</span></h2>
                            <div className='mt-5 button-header-container'>
                                <motion.button 
                                    className='mr-3 start-button'
                                    whileHover={{
                                        backgroundColor: '#841003',
                                        borderColor: '#841003'
                                    }}
                                    >Démarrer</motion.button>
                                <motion.button 
                                    className='connexion-button'
                                    whileHover={{
                                        backgroundColor: '#F35627',
                                        color: '#fff'
                                    }}
                                    >Connexion</motion.button>
                            </div>
                        </div>
                        <div className="col-4 z-index-5">
                            <div>
                                <img src={imageHeader} className='img-fluid' alt="image header"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
};
export default Header