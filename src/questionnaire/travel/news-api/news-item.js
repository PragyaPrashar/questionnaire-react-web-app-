import React from 'react'
import "../../newsAPI/newsitem.css"


const NewsItemTravel = ({title, description, url, urlToImage}) => {
    return (
        <div className="news-app">
            <div className="news-item">
                <img className="news-img" src={urlToImage} alt={urlToImage}/>
                <h3><a className="wd-text-color" href={url}>{title}</a></h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default NewsItemTravel

