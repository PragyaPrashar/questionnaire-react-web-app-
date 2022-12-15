import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NewsItemTech from "./news-item";


const NewsListTech = () => {
    const [articles, setArticles] = useState([])
    const num = Math.floor(Math.random() * 100) + 1;

    useEffect(()=>{
        const getArticles = async () => {

            fetch(`https://newsapi.org/v2/everything?q=technology&apiKey=90821318c32a40699e0c02c709583c53`)
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
                    <NewsItemTech
                        title={articles.title}
                        description={articles.description}
                        url={articles.url}
                        urlToImage={articles.urlToImage}
                        />

        </div>
    )
}

export default NewsListTech