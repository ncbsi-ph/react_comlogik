import React, { useState, useEffect } from 'react';
import { parse, format } from 'date-fns';
import { useParams } from 'react-router-dom';

import { Section, Grid } from '../components/Grid';
import Breadcrumb from '../components/NewsContent/Breadcrumb';
import Content from '../components/NewsContent/Content';
import { getNews } from '../api';

const NewsContent = () => {
  const { id, title_id } = useParams();

  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await getNews(id);
        setLoading(false);
        setNews(response.data.data);
      } catch (error) {
        setLoading(false);
        // TODO: To the next dev, add proper error handling 😆
        console.log('Error loading news');
      }
    };
    getData();
  }, [id]);

  return (
    <>
      <Breadcrumb />
      <Section>
        <Grid className="uk-grid-medium">
          {news && (
            <Content
              date={format(
                parse(news.date_added, 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
                'MMMM dd, yyyy'
              )}
              title={news.title}
              image={news.thumbnail}
              content={news.news_content}
            />
          )}
        </Grid>
      </Section>
    </>
  );
};

export default NewsContent;
