import React, { useState, useEffect } from 'react';
import { parse, format } from 'date-fns';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Section, Grid } from '../components/Grid';
import Breadcrumb from '../components/NewsContent/Breadcrumb';
import Content from '../components/NewsContent/Content';
import { apiUrl } from '../helpers/helpers';

const NewsContent = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl()}news.php?id=${id}`)
      .then((response) => {
        const _data = [];
        console.log(response);
        response.data.data.news.forEach((news) => {
          _data.push(news);
        });
        const toRender = _data.map((news) => {
          return (
            <Content
              key={news.id}
              date={format(
                parse(news.dateAdded, 'yyyy-MM-dd HH:mm:ss.SSS', new Date()),
                'MMMM dd, yyyy'
              )}
              title={news.title}
              image={news.image}
              content={news.news}
            />
          );
        });
        setIsLoaded(true);
        setData(toRender);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Breadcrumb />
      <Section>
        <Grid className="uk-grid-medium">{isLoaded ? data : null}</Grid>
      </Section>
    </>
  );
};

export default NewsContent;
