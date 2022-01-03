import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';

const HIMSModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

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
          width: '1000px',
          maxWidth: 'calc(100% - 0.01px)',
        },
      }}
    >
      <div
        className="uk-hidden@l uk-visible"
        style={{ position: 'relative', width: '100%', height: '100%' }}
      >
        <img src="static/hims_modal.jpg" />
        <div className="uk-padding">
          <div className="uk-flex uk-flex-column">
            <h3 className="text-gray-700">
              Smarter applications in response to COVID-19
            </h3>
            <div>
              <Link
                to="/contact-us"
                className="border-0 uk-button uk-button-primary"
                onClick={() => setIsOpen(false)}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="uk-visible@l"
        style={{ position: 'relative', width: '100%', height: '100%' }}
      >
        <img src="static/hims_modal.jpg" />
        <div style={{ position: 'absolute', top: '50%', left: 50 }}>
          <div className="uk-flex uk-flex-column">
            <h2
              className="text-gray-900 uk-text-emphasis"
              style={{ width: '60%' }}
            >
              Smarter applications in response to COVID-19
            </h2>
            <div>
              <Link
                to="/contact-us"
                className="border-0 uk-button uk-button-primary"
                onClick={() => setIsOpen(false)}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default HIMSModal;
