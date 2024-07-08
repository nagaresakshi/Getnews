import React, { Component } from "react";
import PropTypes from "prop-types";

const Newsitem =(props)=>{
    let { title, description, imageurl, url, author, publishedAt,source } = props;
    return (
      <div>
        <div className="card">
        <div style={{display:'flex',justifycontent:'flex-end',
          position:'absolute',
          right:'0'
        }}>
        <span className=" badge rounded-pill bg-dark" >
                {source}
              </span>
              </div>  
          <img
            className="card-img-top"
            src={
              !imageurl
                ? "https://www.hindustantimes.com/ht-img/img/2024/07/01/1600x900/results_222603a6-641a-11e8-b4a9-2154dcd09999_1719802345240.jpg"
                : imageurl
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}..
              
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By:{author} on:{new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a href={url} className="btn btn-sm btn-success">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default Newsitem;