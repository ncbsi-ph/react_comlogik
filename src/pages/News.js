import React from 'react';

import CommonHeader from '../components/CommonHeader';
import BreakingNews from '../components/News/BreakingNews';
import LatestNews from '../components/News/LatestNews';
import CTA from '../components/CTA';

const News = () => {
  return (
    <>
      <CommonHeader
        image="static/news-hero.gif"
        label="NEWS"
        heading="What's trending today in healthcare?"
        sentence="Be informed! Find out here what’s happening in and around the country regarding the
        healthcare industry."
      ></CommonHeader>
      <BreakingNews />
      <LatestNews />
      <CTA />
    </>
  );
};

export default News;
