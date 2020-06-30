import React from 'react';
import './header.scss';
import imageHeader from '../../assets/images/—Pngtree—purple days about project management,_3772747.png';
const Header = () => {
    return (
        <>
        <div className='position-relative overflow-hidden header-height'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand" href="#">Project Manager</a>
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
                                <button className='mr-3 start-button'>Démarrer</button>
                                <button className='connexion-button'>Connexion</button>
                            </div>
                        </div>
                        <div className="col-4">
                            <div>
                                <img src={imageHeader} className='img-fluid' alt="image header"/>
                            </div>
                        </div>
                    </div>
                    <div className='backrgound-imageg-header'></div>
                </div>
            </div>  
        </>
    )
};
export default Header