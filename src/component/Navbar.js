import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        /* Header Starts */
        <div>

            <header className="header-section2 header-section">
                <nav  className="navbar navbar-expand-lg position-relative py-md-3 py-lg-6 workready">
                    <div className="collapse navbar-collapse justify-content-between" id="navbar-content">
                        <ul
                            className="navbar-nav2fixed  navbar-nav d-flex align-items-lg-center gap-4 gap-sm-5  py-2 py-lg-0 align-self-center">
                            <li className="dropdown show-dropdown">
                                <a href="/">Home</a>
                            </li>
                            <li className="dropdown show-dropdown">
                                <a href="floorball.html">Our Games</a>
                            </li>
                                                   
                            <li className="dropdown show-dropdown">
                                <a href="ecricket.html">Reffer & Earn</a>
                            </li>
                            <li className="dropdown show-dropdown">
                                <a href="ecricket.html">Afflitated</a>
                            </li>
                            <li className="dropdown show-dropdown">
                                <a href="cycling.html">Promotion</a>
                            </li>
                           

                        </ul>
                    </div>
                    <div className="right-area custom-pos position-relative d-flex gap-0 gap-lg-7 align-items-center me-5 me-xl-10 ">
                    <a href="#" className="cmn-btn px-lg-11" style={{ width: window.innerWidth < 640 ? '90px' : 'auto', fontSize: window.innerWidth < 640 ? '10px' : 'auto' }}>Demo Account</a>
                        <a style={{ width: window.innerWidth < 640 ? '50px' : 'auto', fontSize: window.innerWidth < 640 ? '10px' : 'auto' }} href="#" className="cmn-btn second-alt px-lg-11 rounded-2">Log In</a>
                        <a style={{ width: window.innerWidth < 640 ? '55px' : 'auto', fontSize: window.innerWidth < 640 ? '10px' : 'auto' }} href="#" className="cmn-btn px-lg-11">Sign Up</a>
                    </div>
                    
                </nav>
                <div id="div10" className="navigation left-nav-area box3 position-fixed">
                    <div className="logo-area slide-toggle3 trader-list position-fixed top-0 d-flex align-items-center justify-content-center pt-6 pt-md-8 gap-sm-4 gap-md-5 gap-lg-7 px-4 px-lg-8">
                    <button className="navbar-toggler mt-1 mt-sm-2 mt-lg-0" type="button" data-bs-toggle="collapse"
                        aria-label="Navbar Toggler" data-bs-target="#navbar-content" aria-expanded="true" id="nav-icon3">
                        <span></span><span></span><span></span><span></span>
                    </button>
                        <a className="navbar-brand d-center text-center gap-1 gap-lg-2 ms-lg-4" href="#">
                            <img className="logo" src="assets/images/logo.png" alt="Logo" />
                            {/* <img className="logo d-none d-xl-block" src="assets//images/logo-text.png" alt="Logo" /> */}
                        </a>
                    </div>
                    <div className="nav_aside px-5 p2-bg">
                        <div className="nav-clsoeicon">
                            <i className="ti ti-x left-nav-icon n8-color order-2 order-lg-0 d-block d-lg-none fs-three">menu</i>
                        </div>
                       <h5 className="mb-4 mb-md-6 mt-4 mt-md-6">Popular</h5>
                        <ul className="aside_namelist d-flex flex-column gap-2">
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="soccer.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/soccer-icon.png" alt="icon" />Soccer</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5 active">
                                <a href="tennis.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/soccer-icon.png" alt="icon" />Tennis</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="basketball.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/basketball.png" alt="icon" />Basketball</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="cricket.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/cricket.png" alt="icon" />Cricket</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="ecricket.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/ecricket.png" alt="icon" />eCricket</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="american-football.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/america-football.png" alt="icon" />American Football</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="ice-hockey.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/ice-hockey.png" alt="icon" />Ice Hockey</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="nba-2k.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/nba2k.png" alt="icon" />NBA 2K</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="volleyball.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/volleyball.png" alt="icon" />Volleyball</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="fifa-volta.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/fifa-volta.png" alt="icon" />FIFA: Volta</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="penalty-shootout.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/penalty-shootout.png" alt="icon" />Penalty Shootout </a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="handball.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/handball.png" alt="icon" />Handball</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="table-tennis.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/table-tennis.png" alt="icon" />Table Tennis</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                        </ul>
                        <hr className="py-0 my-5" />
                        <h5 className="mb-4 mb-md-6">Other sports</h5>
                        <ul className="aside_namelist d-flex flex-column gap-2 mb-15">
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="kabaddi.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/kabaddi.png" alt="icon" />Kabaddi</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="efighting.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/efighting.png" alt="icon" />eFighting</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="erocket-league.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/erocket-league.png" alt="icon" />eRocket League</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="aussie-rules.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/aussie-rules.png" alt="icon" />Aussie Rules </a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="rugby.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/rugby.png" alt="icon" />Rugby </a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="eshooter.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/eshooter.png" alt="icon" />eShooter</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="boxing.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/boxing.png" alt="icon" />Boxing</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="mma.html" className="d-flex align-items-center gap-2"><img src="./images/icon/mma.png"
                                    alt="icon" />MMA</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="futsal.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/futsal.png" alt="icon" />Futsal</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="bandy.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/bandy.png" alt="icon" />Bandy</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="waterpolo.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/waterpolo.png" alt="icon" />Waterpolo</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="floorball.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/floorball.png" alt="icon" />Floorball</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="cycling.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/cycling.png" alt="icon" />Cycling</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="specials.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/specials.png" alt="icon" />Specials</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="darts.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/darts.png" alt="icon" />Darts </a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="squash.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/squash.png" alt="icon" />Squash</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                            <li className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3 gap-5">
                                <a href="wrestling.html" className="d-flex align-items-center gap-2">
                                    <img src="./images/icon/wrestling.png" alt="icon" />Wrestling</a>
                                <button type="button" className="g1-color"><i className="ti ti-star"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Navbar;
