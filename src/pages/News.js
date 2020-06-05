import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CommonHeader from '../components/CommonHeader';
import BreakingNews from '../components/News/BreakingNews';
import LatestNews from '../components/News/LatestNews';
import CTA from '../components/CTA';

const News = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/http://40.90.179.136:8080/comlogik_api/v1/news')
      .then((response) => {
        const _breakingNews = [];
        const _latestNews = [];
        const news = response.data.data.news;
        news.forEach((toFilter) => {
          if (toFilter.isBreakingNews) _breakingNews.push(toFilter);
          else _latestNews.push(toFilter);
        });
        setBreakingNews(_breakingNews);
        setLatestNews(_latestNews);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CommonHeader
        image="static/news-hero.gif"
        label="NEWS"
        heading="What's trending today in healthcare?"
        sentence="Be informed! Find out here what’s happening in and around the country regarding the
        healthcare industry."
      ></CommonHeader>
      <BreakingNews data={breakingNews} />
      <LatestNews data={latestNews} />
      <CTA />
    </>
  );
};

export default News;
