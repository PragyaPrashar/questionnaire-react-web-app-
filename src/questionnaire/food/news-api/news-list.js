import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NewsItemSports from "./news-item";


const NewsListFood = () => {
    const [articles, setArticles] = useState([])
    const num = Math.floor(Math.random() * 100) + 1;


    useEffect(()=>{
        const getArticles = async () => {

            fetch(`https://newsapi.org/v2/everything?q=dessert&apiKey=b961a950d9754aa8be3d2457a7a76422`)
                .then((res) => res.json())
                .then((result) => {
                    console.log(result.articles[num]);
                    setArticles(result.articles[num]);
                });
        }
        getArticles().then(r => console.log(r))
    },[])

    return (
        <div>
                    <NewsItemSports
                        title={articles.title}
                        description={articles.description}
                        url={articles.url}
                        urlToImage={articles.urlToImage}
                        />

        </div>
    )
}

export default NewsListFood