import React, {useEffect, useState} from 'react'
import NewsItemHealth from "./news-item";


const NewsListHealth = () => {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        const getArticles = async () => {

            fetch(`https://newsapi.org/v2/everything?q=health&apiKey=b961a950d9754aa8be3d2457a7a76422`)
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