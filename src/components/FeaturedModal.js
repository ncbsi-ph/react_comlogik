import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

import { Grid, Column } from '../components/Grid';
import { getFeatured } from '../api';

const FeaturedModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [data, setData] = useState([]);

  const handleClose = () => {
    setIsOpen(false);
  };

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

  if (!data.length) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={handleClose}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      className="uk-margin-auto-vertical uk-box-shadow-medium"
      style={{
        overlay: {
          padding: '50px 30px',
          display: 'flex',
          alignItems: 'flex-start',
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 1000,
          overflowY: 'auto',
        },
        content: {
          borderRadius: '4px',
          backgroundColor: 'white',
          outline: 0,
          overflowY: 'auto',
          transform: 'translateY(0)',
          boxSizing: 'border-box',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          marginTop: 'auto',
          marginBottom: 'auto',
          margin: '0 auto',
          position: 'relative',
          width: '750px',
          maxWidth: '750px',
        },
      }}
    >
      <Grid childWidth="1-1">
        <Column>
          <div className="uk-position-relative" tabIndex="-1" data-uk-slider="">
            <button
              type="button"
              data-uk-close=""
              onClick={handleClose}
              className="absolute z-50 uk-close-large right-4 top-4"
            />
            <ul
              className="uk-slider-items uk-child-width-1-1 uk-visible-toggle uk-light"
              data-uk-grid=""
            >
              {data.length ? (
                data.map((featured) => (
                  <li key={featured.id}>
                    <Grid childWidth="1-1" className="h-full">
                      <Column className="flex items-center justify-center h-full">
                        <img data-src={featured.image} data-uk-img="" />
                      </Column>
                    </Grid>
                  </li>
                ))
              ) : (
                <li>
                  <div className="uk-flex uk-flex-center">
                    <div data-uk-spinner="ratio: 3"></div>
                  </div>
                </li>
              )}
            </ul>
            <a
              className="uk-position-center-left uk-hidden-hover"
              data-uk-slidenav-previous=""
              data-uk-slider-item="previous"
            ></a>
            <a
              className="uk-position-center-right uk-hidden-hover"
              data-uk-slidenav-next=""
              data-uk-slider-item="next"
            ></a>
          </div>
        </Column>
      </Grid>
    </ReactModal>
  );
};

export default FeaturedModal;
