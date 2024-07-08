import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResults,setResults]=useState(0)
    //document.title=`${props.category} -GetNews APP`
  
    const updatenews=async()=>{
    props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=616cb58f30e5478896a47c9b95050214&page=${page}&pagesize=${props.pagesize}`
    setLoading(true)
    let data=await fetch(url);
    props.setProgress(30);
    let parsedata=await data.json();
    setArticles(parsedata.articles);
    setResults(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
    useEffect(()=>{
        updatenews();
    },[])

    const fetchMoreData = async()=>{
    setPage(page+1);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=616cb58f30e5478896a47c9b95050214&page=${page+1}&pagesize=${props.pagesize}`

    let data=await fetch(url);
    let parsedata=await data.json();
    
    setArticles(articles.concat(parsedata.articles));
    setResults(parsedata.totalResults); 
  }
  
    return (
      <>
        <h2 className='text-center my-8 fs-xl'>Latest News Based On {props.category}</h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
        <div className='container'>
        <div className='row mb-7 my-3 '>
            {articles.map((element)=>{
                return <div className='col-lg-4 col-md-3 col-xs-1 col-sm-2'>
                <Newsitem key={element.url} title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage} url={element.url}
                author={element.author?element.author:"unkonwn"} publishedAt={element.publishedAt} source={element.source.name}/>
            </div>
            })}
            
            
        </div>
        </div>
        </InfiniteScroll>
       
     </>
    )
  
}
News.defaultProps={
    country:'Us',
    pagesize:'10',
    category:'general'
}
News.propsTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string,
}
export default News;