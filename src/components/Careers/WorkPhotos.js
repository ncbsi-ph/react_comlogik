import React from 'react';

const WorkPhotos = () => {
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-padding-remove"
      data-uk-slider=""
      tabIndex={-1}
    >
      <ul className="uk-slider-items uk-child-width-auto uk-grid-collapse" data-uk-grid="">
        <li>
          <img data-src="static/activities/work_1.jpg" data-uk-img="" width="350" />
        </li>
        <li>
          <img data-src="static/activities/work_2.jpg" data-uk-img="" width="350" />
        </li>
        <li>
          <img data-src="static/activities/pha.jpg" data-uk-img="" width="350" />
        </li>
        <li>
          <img data-src="static/activities/phapi.jpg" data-uk-img="" width="350" />
        </li>
        <li>
          <img data-src="static/activities/bday_1.jpg" data-uk-img="" width="350" />
        </li>
        <li>
          <img data-src="static/activities/outing_1.jpg" data-uk-img="" width="350" />
        </li>
        <li>
          <img data-src="static/activities/outing_2.jpg" data-uk-img="" width="350" />
        </li>
        <li>
          <img data-src="static/activities/thailand_3.jpg" data-uk-img="" width="350" />
        </li>
        <li>
          <img data-src="static/activities/thailand_1.jpg" data-uk-img="" width="350" />
        </li>
        <li>
          <img data-src="static/activities/thailand_2.jpg" data-uk-img="" width="350" />
        </li>
        <li>
          <img data-src="static/activities/thailand_4.jpg" data-uk-img="" width="350" />
        </li>
      </ul>
    </div>
  );
};

export default WorkPhotos;
