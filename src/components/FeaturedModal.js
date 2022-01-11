import React, { useState, useEffect, useRef } from 'react';
import UIkit from 'uikit';

import { Grid, Column } from '../components/Grid';
import { getFeatured } from '../api';

const FeaturedModal = () => {
  const modalRef = useRef(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getFeatured();
        setData(response.data.data);
      } catch (error) {
        // TODO: Add proper error handling
        console.log('Failed to load featured data');
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (data.length) UIkit.modal(modalRef.current).show();
  }, [data]);

  if (!data.length) return null;

  return (
    <div ref={modalRef} data-uk-modal="">
      <div className="uk-modal-dialog w-[750px] uk-margin-auto-vertical">
        <button
          className="uk-modal-close-outside uk-close-large"
          type="button"
          data-uk-close=""
        />
        <div className="uk-position-relative" tabIndex="-1" data-uk-slider="">
          <ul
            className="uk-slider-items uk-child-width-1-1 uk-visible-toggle uk-light"
            data-uk-grid=""
          >
            {data.length ? (
              data.map((featured) => (
                <li key={featured.id}>
                  <Grid childWidth="1-1" className="h-full">
                    <Column className="flex items-center justify-center h-full">
                      <img
                        className="object-contain h-full"
                        src={featured.image}
                      />
                    </Column>
                  </Grid>
                </li>
              ))
            ) : (
              <li>
                <div className="uk-flex uk-flex-center">
                  <div data-uk-spinner="ratio: 3" />
                </div>
              </li>
            )}
          </ul>
          <a
            className="uk-position-center-left uk-hidden-hover uk-slidenav-large"
            data-uk-slidenav-previous=""
            data-uk-slider-item="previous"
          />
          <a
            className="uk-position-center-right uk-hidden-hover uk-slidenav-large"
            data-uk-slidenav-next=""
            data-uk-slider-item="next"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedModal;
