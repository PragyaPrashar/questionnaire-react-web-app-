import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const CategoriesSidebar = () => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <Link to="/quans" className={`list-group-item
                    ${active === 'home'?'active':''} bg-dark`}>
                <i className="bi bi-quora text-white "></i>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "></span>
            </Link>

            <Link to="/quans/discover" className={`list-group-item
                    ${active === 'discover'?'active':''}  ${active === 'discover'?'bg-dark':''}`}>
                <i className={`bi bi-binoculars-fill ${active === 'discover'?'text-white':''} `}></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className= {`d-none d-xxl-inline-block d-xl-inline-block d-lg-none`}> Discover</span>
            </Link>

            <Link to="/quans/travel" className={`list-group-item
                    ${active === 'travel'?'active':''} ${active === 'travel'?'bg-dark':''}`}>
                <i className={`bi bi-airplane-fill ${active === 'travel'?'text-white':''}`}></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Travel</span>
            </Link>

            <Link to="/quans/health" className={`list-group-item
                    ${active === 'health'?'active':''} ${active === 'health'?'bg-dark':''}`}>
                <i className={`bi bi-hospital-fill ${active === 'health'?'bg-dark':''}`}></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Health</span>
            </Link>

            <Link to="/quans/technology" className={`list-group-item
                    ${active === 'technology'?'active':''} ${active === 'technology'?'bg-dark':''}`}>
                <i className={`bi bi-motherboard-fill ${active === 'technology'?'bg-dark':''}`}></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Technology</span>
            </Link>

            <Link to="/quans/movies" className={`list-group-item
                    ${active === 'movies'?'active':''} ${active === 'movies'?'bg-dark':''}`}>
                <i className={`bi bi-camera-reels-fill ${active === 'movies'?'bg-dark':''}`}></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Movies</span>
            </Link>

            <Link to="/quans/food" className={`list-group-item
                    ${active === 'food'?'active':''} ${active === 'food'?'bg-dark':''}`}>
                <i className={`bi bi-cart-dash-fill ${active === 'food'?'bg-dark':''}`}></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Food</span>
            </Link>

            <Link to="/quans/music" className={`list-group-item
                    ${active === 'music'?'active':''} ${active === 'music'?'bg-dark':''} `}>
                <i className={`bi bi-music-player-fill ${active === 'music'?'bg-dark':''}`}></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Music</span>
            </Link>

            <Link to="/quans/sports" className={`list-group-item
                    ${active === 'sports'?'active':''} ${active === 'sports'?'bg-dark':''}`}>
                <i className={`bi bi-dice-5-fill ${active === 'sports'?'bg-dark':''}`}></i><span>&nbsp;&nbsp;&nbsp;</span>
                <span className="d-none d-xxl-inline-block d-xl-inline-block d-lg-none "> Sports</span>
            </Link>
        </div>
    );
};
export default CategoriesSidebar;