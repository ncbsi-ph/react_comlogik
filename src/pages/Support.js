import React, { Component } from 'react';

import Landing from '../components/Support/Landing';
import Actions from '../components/Support/Actions';
import CTA from '../components/CTA';

export default class Support extends Component {
  render() {
    return (
      <>
        <Landing />
        <Actions />
        {/* <CTA /> */}
      </>
    );
  }
}
