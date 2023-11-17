import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import ScrollToTop from 'react-scroll-to-top';

const News = ({ country = 'in', pageSize = 8, category = 'general', setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // console.log(loading)
  useEffect(() => {
    const fetchData = async () => {
      setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=258548f6da1a432fa4a81a624f5623b5&page=1&pageSize=${pageSize}`;
      setLoading(true);
      try {
        const data = await fetch(url);
        const parsedData = await data.json();
        setProgress(50);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setProgress(100);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);

    };

    fetchData();
  }, [country, category, pageSize, setProgress]);

  const nextClick = async () => {
    setProgress(10);
    if (!(page + 1 > Math.ceil(totalResults / pageSize))) {
      window.scrollTo(0, 0);
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=258548f6da1a432fa4a81a624f5623b5&page=${page + 1}&pageSize=${pageSize}`;
      setLoading(true);
      try {
        const data = await fetch(url);
        const parsedData = await data.json();
        setProgress(50);
        setPage(page + 1);
        setArticles(parsedData.articles);
        setProgress(100);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      setLoading(false);
      
    }
  };

  const prevClick = async () => {
    setProgress(0);
    window.scrollTo(0, 0);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=258548f6da1a432fa4a81a624f5623b5&page=${page - 1}&pageSize=${pageSize}`;
    setLoading(true);
    try {
      const data = await fetch(url);
      const parsedData = await data.json();
      setProgress(50);
      setPage(page - 1);
      setArticles(parsedData.articles);
      setProgress(100); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
    
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ margin: '80px' }}>
        Top Headlines - <span style={{ color: 'red' }}>{category}</span>
      </h1>
      <div className="row">
        {articles.map((element) => (
          <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title ? element.title.slice(0, 50) : ''}
              description={element.description ? element.description.slice(0, 100) : ''}
              imageUrl={element.urlToImage ? element.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKQFZYhRFKtlmdWAH1PBN9kBmLmQl2olzAtXd35KpIRqZ6bFv2KHuMBAqyVmzdUrFZJA&usqp=CAU'}
              newsUrl={element.url}
              author={element.author ? element.author : 'Unknown'}
              publishedOn={element.publishedAt ? element.publishedAt : 'Not Specified'}
              source={element.source.name}
            />
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-between my-4">
        <button disabled={page <= 1} className="btn btn-dark" onClick={prevClick}>
          &laquo; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
          className="btn btn-dark"
          onClick={nextClick}
        >
          Next &raquo;
        </button>
      </div>
      <ScrollToTop smooth color="#FF0000" width="80px" height="30px" title="Scroll To Top" />
    </div>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News