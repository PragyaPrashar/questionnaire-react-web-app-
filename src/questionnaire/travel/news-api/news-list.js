import React, {useEffect, useState} from 'react'
import NewsItemTravel from "./news-item";


const NewsListTravel = () => {
    const [articles, setArticles] = useState([])
    const num = Math.floor(Math.random() * 100) + 1;

    useEffect(()=>{
        const getArticles = async () => {

            fetch(`https://newsapi.org/v2/everything?q=travel&apiKey=b217ba2f65ec4d268ff3e455c2758370`)
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
                    <NewsItemTravel
                        title={articles.title}
                        description={articles.description}
                        url={articles.url}
                        urlToImage={articles.urlToImage}
                        />

        </div>
    )
}

export default NewsListTravel