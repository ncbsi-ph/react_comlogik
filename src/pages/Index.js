import React, { Component } from 'react';

import Landing from '../components/Index/Landing';
import Advantages from '../components/Index/Advantages';
import Products from '../components/Index/Products';
import Team from '../components/Index/Team';
import Testimonials from '../components/Index/Testimonials';
import CTA from '../components/CTA';
import Map from '../components/Map';

export default class Index extends Component {
  render() {
    return (
      <>
        <Landing></Landing>
        <Advantages></Advantages>
        <Products></Products>
        <Team></Team>
        <Testimonials></Testimonials>
        <CTA></CTA>
        <Map></Map>
      </>
    );
  }
}
