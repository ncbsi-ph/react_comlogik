import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';

const Loading = () => {
  return (
    <div
      data-uk-height-viewport=""
      className="uk-width-1-1 uk-flex uk-flex-column uk-flex-center uk-flex-middle"
      style={{
        zIndex: 9999,
        position: 'fixed',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <SyncLoader color="#4983d0" />
    </div>
  );
};

export default Loading;
