import React, { useState, useEffect, useRef } from "react";
import UIkit from "uikit";

import { getFeatured } from "../api";

const FeaturedModal = () => {
  const modalRef = useRef(null);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getFeatured();
        setData(response.data.data);
      } catch (error) {
        // TODO: Add proper error handling
        console.log("Failed to load featured data");
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (data.length) UIkit.modal(modalRef.current).show();
  }, [data]);

  if (!data.length) return null;

  return (
    <div ref={modalRef} data-uk-modal="">
      <div className="bg-transparent uk-modal-dialog uk-margin-auto-vertical">
        <button
          className="uk-modal-close-outside uk-close-large"
          type="button"
          data-uk-close=""
        />
        <div data-uk-slider="autoplay: true; autoplay-interval: 7000; pause-on-hover: false">
          <ul className="uk-slider-items">
            {data.reverse().map((featured) => (
              <>
                {featured.link.length !== 0 ? (
                  <a href={featured.link} target="_blank">
                    <li
                      className="flex items-center justify-center"
                      key={featured.id}
                    >
                      <img className="" src={featured.image} />
                    </li>
                  </a>
                ) : (
                  <li
                    className="flex items-center justify-center"
                    key={featured.id}
                  >
                    <img className="" src={featured.image} />
                  </li>
                )}
              </>
            ))}
          </ul>
          <a
            className="uk-position-center-left uk-slidenav-large"
            data-uk-slidenav-previous=""
            data-uk-slider-item="previous"
          />
          <a
            className="uk-position-center-right uk-slidenav-large"
            data-uk-slidenav-next=""
            data-uk-slider-item="next"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedModal;
