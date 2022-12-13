import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NewsItemHealth from "./news-item";


const NewsListHealth = () => {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        const getArticles = async () => {

            fetch(`https://newsapi.org/v2/everything?q=health&apiKey=f74e7bc8eebb430980f2f83de2cd93e2`)
                .then((res) => res.json())
                .then((result) => {
                    console.log(result.articles[1]);
                    setArticles(result.articles[1]);
                });
        }
        getArticles().then(r => console.log(r))
    },[])

    return (
        <div>
                    <NewsItemHealth
                        title={articles.title}
                        description={articles.description}
                        url={articles.url}
                        urlToImage={articles.urlToImage}
                        />

        </div>
    )
}

export default NewsListHealth