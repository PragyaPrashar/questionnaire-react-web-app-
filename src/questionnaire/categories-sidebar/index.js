import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const CategoriesSidebar = () => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a href="/" className="list-group-item"><i className="bi bi-quora "></i></a>

            <Link to="/quans/discover" className={`list-group-item
                    ${active === 'discover'?'active':''}`}>
                <i className="bi bi-binoculars-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Discover</span>
            </Link>

            <Link to="/quans/travel" className={`list-group-item
                    ${active === 'travel'?'active':''}`}>
                <i className="bi bi-airplane-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Travel</span>
            </Link>

            <Link to="/quans/health" className={`list-group-item
                    ${active === 'health'?'active':''}`}>
                <i className="bi bi-hospital-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Health</span>
            </Link>

            <Link to="/quans/technology" className={`list-group-item
                    ${active === 'technology'?'active':''}`}>
                <i className="bi bi-motherboard-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Technology</span>
            </Link>

            <Link to="/quans/movies" className={`list-group-item
                    ${active === 'movies'?'active':''}`}>
                <i className="bi bi-camera-reels-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Movies</span>
            </Link>

            <Link to="/quans/food" className={`list-group-item
                    ${active === 'food'?'active':''}`}>
                <i className="bi bi-cart-dash-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Food</span>
            </Link>

            <Link to="/quans/music" className={`list-group-item
                    ${active === 'music'?'active':''}`}>
                <i className="bi bi-music-player-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Music</span>
            </Link>

            <Link to="/quans/sports" className={`list-group-item
                    ${active === 'sports'?'active':''}`}>
                <i className="bi bi-dice-5-fill"></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Sports</span>
            </Link>
        </div>
    );
};
export default CategoriesSidebar;