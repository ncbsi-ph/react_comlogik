import React from 'react';

const WorkPhotos = () => {
  return (
    <div
      className="uk-position-relative uk-visible-toggle"
      data-uk-slider=""
      tabIndex={-1}
    >
      <ul className="uk-slider-items uk-child-width-auto uk-grid-collapse" data-uk-grid="">
        <li>
          <img data-src="https://picsum.photos/200" data-uk-img="" />
        </li>
        <li>
          <img data-src="https://picsum.photos/200" data-uk-img="" />
        </li>
        <li>
          <img data-src="https://picsum.photos/200" data-uk-img="" />
        </li>
        <li>
          <img data-src="https://picsum.photos/200" data-uk-img="" />
        </li>
        <li>
          <img data-src="https://picsum.photos/200" data-uk-img="" />
        </li>
        <li>
          <img data-src="https://picsum.photos/200" data-uk-img="" />
        </li>
        <li>
          <img data-src="https://picsum.photos/200" data-uk-img="" />
        </li>
        <li>
          <img data-src="https://picsum.photos/200" data-uk-img="" />
        </li>
      </ul>
    </div>
  );
};

export default WorkPhotos;
