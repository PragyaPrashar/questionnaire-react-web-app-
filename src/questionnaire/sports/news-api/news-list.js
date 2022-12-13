import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NewsItemSports from "./news-item";


const NewsListSports = () => {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        const getArticles = async () => {

            fetch(`https://newsapi.org/v2/everything?q=football&apiKey=f74e7bc8eebb430980f2f83de2cd93e2`)
                .then((res) => res.json())
                .then((result) => {
                    console.log(result.articles[2]);
                    setArticles(result.articles[2]);
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

export default NewsListSports