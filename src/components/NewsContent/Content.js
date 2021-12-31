import React from 'react';
import { sanitize } from 'dompurify';

import { Column } from '../Grid';

const Content = ({ date, title, image, content }) => {
  return (
    <Column className="uk-width-1-1 uk-width-expand@m">
      <div>
        <h5 className="meta">{date.toUpperCase()}</h5>
        <h1 className="uk-margin-remove">{title}</h1>
        <div className="uk-width-1-1 uk-margin-medium uk-margin-remove-horizontal">
          <img src={image} />
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: sanitize(content) }}
        />
      </div>
    </Column>
  );
};

export default Content;
