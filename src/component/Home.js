import React from 'react';
import { NavLink } from 'react-router-dom';
function Home() {
    return (
        /* Header Starts */
        <div>

            <section className="top_matches pb-8 pb-md-10">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 gx-0 gx-sm-4">
                            <div className="top_matches__main pt-20">
                                <div className="row w-100 mb-8 mb-md-10 pt-md-5">
                                    <div className="banner">
                                        <div className='col-12'>
                                            <img src='assets/images/banner (1).jpg' alt='Banner' />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="top_matches__title d-flex align-items-center gap-2 mb-4 mb-md-6">
                                            <img src="assets/images/icon/king.png" alt="Icon" />
                                            <h3>TOP Games</h3>
                                        </div>
                                        <div className="top_matches__content">
                                            <div className='row'>
                                                <div className='col-lg-3 col-xs-12 main-colfor_col'>
                                                    <div className='imagewrapper'>
                                                        <img src='assets/images/games/t1.jpg' />
                                                    </div>
                                                </div>
                                                <div className='col-lg-9'>
                                                    <div className='row justify-content-center'>
                                                        <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                                            <img src='assets/images/games/game-xx1.png' />
                                                        </div>
                                                        <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                                            <img src='assets/images/games/game-xx2.png' />
                                                        </div>
                                                        <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                                            <img src='assets/images/games/game-xx3.png' />
                                                        </div>
                                                        <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                                            <img src='assets/images/games/game-xx4.png' />
                                                        </div>
                                                        <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                                            <img src='assets/images/games/game-xx5.png' />
                                                        </div>
                                                        <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                                            <img src='assets/images/games/game-xx6.png' />
                                                        </div>
                                                        <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                                            <img src='assets/images/games/game-xx7.png' />
                                                        </div>
                                                        <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                                            <img src='assets/images/games/game-xx8.png' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100 mb-8 mb-md-10 top-180px">
                                    <div className="col-12">
                                        <div className="top_matches__title d-flex align-items-center gap-2 mb-4 mb-md-6">
                                            <img src="assets/images/icon/live-match.png" alt="Icon" />
                                            <h3>Live Matches</h3>
                                        </div>
                                        <div className="top_matches__content">
                                            <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                                <div className="row gx-0 gy-xl-0 gy-7">
                                                    <div className="col-xl-5 col-xxl-4">
                                                        <div className="top_matches__clubname">
                                                            <div
                                                                className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                <div className="d-flex align-items-center gap-1">
                                                                    <img src="assets/images/icon/floorball.png" alt="Icon" />
                                                                    <span className="fs-eight cpoint">Turkiye . Super
                                                                        Lig</span>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                    <div className="d-flex align-items-center gap-1">
                                                                        <img src="assets/images/icon/live.png" alt="Icon" />
                                                                        <img src="assets/images/icon/play.png" alt="Icon" />
                                                                    </div>
                                                                    <span className="fs-eight cpoint">56′ 2nd
                                                                        half</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                <div>
                                                                    <div className="d-flex align-items-center gap-2 mb-4">
                                                                        <img src="assets/images/icon/cf-ttigres-uanl.png"
                                                                            alt="Icon" /> <span className="fs-seven cpoint">CF Tigres
                                                                                UANL</span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <img src="assets/images/icon/club-america.png"
                                                                            alt="Icon" /> <span className="fs-seven cpoint">Club
                                                                                America</span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                    <div className="d-flex flex-column gap-1">
                                                                        <span
                                                                            className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                                                        <span
                                                                            className="top_matches__cmncard-countcercle  rounded-17 fs-seven">0</span>
                                                                    </div>
                                                                    <span className="v-line lg d-none d-xl-block"></span>
                                                                    <div className="d-flex flex-column gap-5">
                                                                        <img className="cpoint"
                                                                            src="assets/images/icon/line-chart.png" alt="Icon" />
                                                                        <img className="cpoint" src="assets/images/icon/star2.png"
                                                                            alt="Icon" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7 col-xxl-8">
                                                        <div className="top_matches__clubdata">
                                                            <div className="table-responsive">
                                                                <table className="table mb-0 pb-0">
                                                                    <thead>
                                                                        <tr className="text-center">
                                                                            <th scope="col"><span className="fs-eight">1x2</span>
                                                                            </th>
                                                                            <th scope="col"><span className="fs-eight">Double
                                                                                chance</span>
                                                                            </th>
                                                                            <th scope="col"><span className="fs-eight">Total</span>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="pt-4">
                                                                                <div
                                                                                    className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">1.45</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">3.45</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">2.25</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="pt-4">
                                                                                <div
                                                                                    className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">1
                                                                                            or draw</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">1.39</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">1
                                                                                            or 2</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">3.45</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw
                                                                                            or 2</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">2.45</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="pt-4">
                                                                                <div
                                                                                    className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                            0.5</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">3.45</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                            0.5</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">1.39</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                            5</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">1.39</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4">
                                                <div className="row gx-0 gy-xl-0 gy-7">
                                                    <div className="col-xl-5 col-xxl-4">
                                                        <div className="top_matches__clubname">
                                                            <div
                                                                className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4 ">
                                                                <div className="d-flex align-items-center gap-1">
                                                                    <img src="assets/images/icon/floorball.png" alt="Icon" />
                                                                    <span className="fs-eight cpoint">Turkiye . Super
                                                                        Lig</span>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                                                                    <div className="d-flex align-items-center gap-1">
                                                                        <img src="assets/images/icon/live.png" alt="Icon" />
                                                                        <img src="assets/images/icon/play.png" alt="Icon" />
                                                                    </div>
                                                                    <span className="fs-eight cpoint">56′ 2nd
                                                                        half</span>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="top_matches__cmncard-left d-flex align-items-center justify-content-between pe-xl-10">
                                                                <div>
                                                                    <div className="d-flex align-items-center gap-2 mb-4">
                                                                        <img src="assets/images/icon/cmn-footbal.png"
                                                                            alt="Icon" /> <span className="fs-seven cpoint">Petroleros
                                                                                de
                                                                                FC</span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center gap-2">
                                                                        <img src="assets/images/icon/cmn-footbal.png"
                                                                            alt="Icon" /> <span
                                                                                className="fs-seven cpoint">Escorpiones
                                                                            FC</span>
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    className="d-flex align-items-center gap-4 position-relative pe-xl-15">
                                                                    <div className="d-flex flex-column gap-1">
                                                                        <span
                                                                            className="top_matches__cmncard-countcercle  rounded-17 fs-seven">1</span>
                                                                        <span
                                                                            className="top_matches__cmncard-countcercle  rounded-17 fs-seven">2</span>
                                                                    </div>
                                                                    <span className="v-line lg d-none d-xl-block"></span>
                                                                    <div className="d-flex flex-column gap-5">
                                                                        <img className="cpoint"
                                                                            src="assets/images/icon/line-chart.png" alt="Icon" />
                                                                        <img className="cpoint" src="assets/images/icon/star2.png"
                                                                            alt="Icon" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-7 col-xxl-8">
                                                        <div className="top_matches__clubdata">
                                                            <div className="table-responsive">
                                                                <table className="table mb-0 pb-0">
                                                                    <thead>
                                                                        <tr className="text-center">
                                                                            <th scope="col"><span className="fs-eight">1x2</span>
                                                                            </th>
                                                                            <th scope="col"><span className="fs-eight">Double
                                                                                chance</span>
                                                                            </th>
                                                                            <th scope="col"><span className="fs-eight">Total</span>
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="pt-4">
                                                                                <div
                                                                                    className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">1</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">1.45</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">3.45</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">2</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">2.25</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="pt-4">
                                                                                <div
                                                                                    className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">1
                                                                                            or draw</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">1.39</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">1
                                                                                            or 2</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">3.45</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">draw
                                                                                            or 2</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">2.45</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td className="pt-4">
                                                                                <div
                                                                                    className="top_matches__innercount d-flex align-items-center gap-2 ">
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                            0.5</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">3.45</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">under
                                                                                            0.5</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">1.39</span>
                                                                                    </div>
                                                                                    <div
                                                                                        className="top_matches__innercount-item clickable-active py-1 px-7 rounded-3 n11-bg text-center">
                                                                                        <span
                                                                                            className="fs-seven d-block mb-2 text-nowrap">over
                                                                                            5</span>
                                                                                        <span
                                                                                            className="fw-bold d-block">1.39</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="row w-100">
                                    <div className="col-12">
                                        <div className="top_matches__title d-flex align-items-center gap-2 mb-4 mb-md-6">
                                            <img src="assets/images/icon/clock-icon.png" alt="Icon" />
                                            <h3>Popular Games</h3>
                                        </div>

                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                        <img src='assets/images/games/game-xx1.png' />
                                    </div>
                                    <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                        <img src='assets/images/games/game-xx2.png' />
                                    </div>
                                    <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                        <img src='assets/images/games/game-xx3.png' />
                                    </div>
                                    <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                        <img src='assets/images/games/game-xx4.png' />
                                    </div>
                                    <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                        <img src='assets/images/games/game-xx5.png' />
                                    </div>
                                    <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                        <img src='assets/images/games/game-xx6.png' />
                                    </div>
                                    <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                        <img src='assets/images/games/game-xx7.png' />
                                    </div>
                                    <div className='col-xs-6 col-sm-4 col-lg-3 gamess'>
                                        <img src='assets/images/games/game-xx8.png' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
export default Home;
