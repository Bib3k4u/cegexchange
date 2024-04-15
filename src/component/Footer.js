import React from 'react';
import { NavLink } from 'react-router-dom';
import BottomNavbar from './BottomNavbar';

function Footer() {
    return (
        <footer class="footer_section pt-10 pt-md-15 pt-lg-20 p2-bg pb-12 pb-md-0">
            <div class="container-fluid">
                <div class="row mb-10 mb-md-15 mb-lg-20">
                    <div class="col-12">
                        <div class="footer_section__main">
                            <div class="row gy-8">
                                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-2 col-xxl-2">
                                    <div class="footer_section__sports">
                                        <h4 class="mb-5 mb-md-6">Sports</h4>
                                        <ul class="d-flex flex-column gap-5">
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Sports</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Live Betting</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Virtuals</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Football</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Basketball</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Ice Hockey</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-2 col-xxl-2">
                                    <div class="footer_section__promotions">
                                        <h4 class="mb-5 mb-md-6">Promotions</h4>
                                        <ul class="d-flex flex-column gap-5">
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Sports Promotions</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Tournaments</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Achievements</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Bonus Shop</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2">
                                    <div class="footer_section__help">
                                        <h4 class="mb-5 mb-md-6">Help</h4>
                                        <ul class="d-flex flex-column gap-5">
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Help</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Bet Slip Check</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Deposits /
                                                    Withdrawals</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Sports results</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Sports stats</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                    <div class="footer_section__security">
                                        <h4 class="mb-5 mb-md-6">Security and Privacy</h4>
                                        <ul class="d-flex flex-column gap-5">
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Privacy Policy</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Terms and
                                                    Conditions</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Cookie Policy</a>
                                            </li>
                                            <li class="iconstyle d-flex align-items-center">
                                                <i class="ti ti-arrow-badge-right fs-five"></i>
                                                <a class="fs-ten n4-color" href="javascript:void(0)">Sports results</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div class="col-sm-8 col-md-5 col-lg-6 col-xxl-3">
                                <div class="footer_section__community">
                                    <h4 class="mb-5 mb-md-6">Join our Community</h4>
                                    <ul class="d-flex align-items-center flex-wrap gap-5">
                                        <li>
                                            <a class="footer_section__community-sitem n4-color"
                                                href="javascript:void(0)">
                                                <i class="ti ti-brand-telegram fs-three"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="footer_section__community-sitem n4-color"
                                                href="javascript:void(0)">
                                                <i class="ti ti-brand-github-filled fs-three"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="footer_section__community-sitem n4-color"
                                                href="javascript:void(0)">
                                                <i class="ti ti-brand-x fs-three"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="footer_section__community-sitem n4-color"
                                                href="javascript:void(0)">
                                                <i class="ti ti-brand-facebook-filled fs-three"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="footer_section__community-sitem n4-color"
                                                href="javascript:void(0)">
                                                <i class="ti ti-brand-discord-filled fs-three"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="footer_section__community-sitem n4-color"
                                                href="javascript:void(0)">
                                                <i class="ti ti-currency-bitcoin bitcoin fs-three"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="footer_section__community-sitem n4-color"
                                                href="javascript:void(0)">
                                                <i class="ti ti-brand-instagram fs-three"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 px-0 mx-0">
                        <div class="brand-slider n6-bg pt-7 pb-1 pb-sm-2">
                            <div class="footer_section__slider swiper-wrapper d-flex align-items-center">
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/visa.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/netent.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/mastercard.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/skrill.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/maestro.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/webmoney.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/neteller.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/debit.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/netent.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/pragmathic-play.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/play-go.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/gamomat.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/paysafecard.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/netent.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/mastercard.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/skrill.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/maestro.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/webmoney.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/neteller.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/debit.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/netent.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/pragmathic-play.png" alt="Brand" />
                                </div>
                                <div class="footer_section__slider-brand swiper-slide px-4">
                                    <img src="assets/images/icon/play-go.png" alt="Brand" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mobile_box'>
                
            <BottomNavbar/>
                </div>
        <div className='fixed bottom-0 left-0 right-0 z-10'>
                
                
            </div>
        </footer>
    );
}
export default Footer;
