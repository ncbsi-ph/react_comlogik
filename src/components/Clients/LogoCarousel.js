import React, { Component } from 'react';

import { Grid, Column } from '../Grid';

export default class LogoCarousel extends Component {
  render() {
    return (
      <Grid childWidth="1-1">
        <Column>
          <div data-uk-slider="center: true; autoplay: true; autoplay-interval: 1500">
            <div className="uk-slider-container">
              <ul className="uk-slider-items" data-uk-grid="">
                <li>
                  <img src="https://via.placeholder.com/125x125"></img>
                </li>
                <li>
                  <img src="https://via.placeholder.com/125x125"></img>
                </li>
                <li>
                  <img src="https://via.placeholder.com/125x125"></img>
                </li>
                <li>
                  <img src="https://via.placeholder.com/125x125"></img>
                </li>
                <li>
                  <img src="https://via.placeholder.com/125x125"></img>
                </li>
                <li>
                  <img src="https://via.placeholder.com/125x125"></img>
                </li>
                <li>
                  <img src="https://via.placeholder.com/125x125"></img>
                </li>
                <li>
                  <img src="https://via.placeholder.com/125x125"></img>
                </li>
                <li>
                  <img src="https://via.placeholder.com/125x125"></img>
                </li>
                <li>
                  <img src="https://via.placeholder.com/125x125"></img>
                </li>
              </ul>
            </div>
          </div>
        </Column>
      </Grid>
    );
  }
}
