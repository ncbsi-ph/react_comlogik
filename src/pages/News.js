import React from 'react';

import CommonHeader from '../components/CommonHeader';
import LatestNews from '../components/News/LatestNews';
import AllNews from '../components/News/AllNews';
import CTA from '../components/CTA';

const News = () => {
  return (
    <>
      <CommonHeader
        image="static/news-hero.gif"
        label="NEWS"
        heading="Placeholder news heading"
        sentence="Etiam ut pellentesque lectus, et euismod magna. Nulla neque mi, euismod et eleifend eu, scelerisque ac velit. Sed placerat imperdiet elementum."
      ></CommonHeader>
      <LatestNews></LatestNews>
      <AllNews></AllNews>
      <CTA></CTA>
    </>
  );
};

export default News;
