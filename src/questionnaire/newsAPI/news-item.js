import React from 'react'
import "./newsitem.css"

const NewsItem = ({title, description, url, urlToImage}) => {
    return (
        <div className="news-app ">
            <div className="news-item">
                <img className="news-img" src={urlToImage} alt={urlToImage}/>
                <h3><a className="wd-text-color" href={url}>{title}</a></h3>
                <p className="news-description">{description}</p>
            </div>
        </div>
    )
}

export default NewsItem

