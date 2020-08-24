import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommonHeader from '../components/CommonHeader';
import BreakingNews from '../components/News/BreakingNews';
import LatestNews from '../components/News/LatestNews';
import CTA from '../components/CTA';
import { apiUrl } from '../helpers/helpers';

const News = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl()}news.php`)
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
      .catch((error) => {});
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
