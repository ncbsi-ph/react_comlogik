import React, { Component } from 'react';
import Landing from '../components/Support/Landing';
import Actions from '../components/Support/Actions';
import { Helmet } from 'react-helmet';
export default class Support extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Support - Comlogik Business Systems</title>
          <link rel="canonical" href="https://comlogikph.com/support" />
          <meta
            name="description"
            content="Get support from Comlogik Business Systems. We're here to help with any questions or challenges you may face."
          />
          <meta
            property="og:title"
            content="Support - Comlogik Business Systems"
          />
          <meta
            property="og:description"
            content="Find the help you need with our comprehensive support options designed to assist you in optimizing our solutions."
          />
          <meta
            property="og:image"
            content="https://comlogikph.com/static/support-hero.png"
          />
          <meta property="og:type" content="website" />
        </Helmet>
        <Landing />
        <Actions />
      </>
    );
  }
}
