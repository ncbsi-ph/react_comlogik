import React, { useEffect, useState } from 'react';

import CommonHeader from '../components/CommonHeader';
import BreakingNews from '../components/News/BreakingNews';
import LatestNews from '../components/News/LatestNews';
import CTA from '../components/CTA';
import { getNews } from '../api';

const News = () => {
  const [breakingNews, setBreakingNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getNews();
        const news = response.data.data;
        setBreakingNews(news.filter((value) => value.is_breaking_news));
        setLatestNews(news);
      } catch (error) {
        // TODO: To the next dev, add proper error handling 😆
        console.log('Error loading news');
      }
    };
    getData();
  }, []);

  return (
    <>
      <CommonHeader
        image="static/news-hero.gif"
        label="NEWS"
        heading="What's trending today in healthcare?"
        sentence="Be informed! Find out here what's happening in and around the country regarding the
        healthcare industry."
      />
      <BreakingNews data={breakingNews} />
      <LatestNews data={latestNews} />
      <CTA />
    </>
  );
};

export default News;
