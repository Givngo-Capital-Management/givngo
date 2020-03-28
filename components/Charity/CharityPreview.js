import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import './CharityPreview.scss';

export default function CharityPreview(props) {
  const { horizontal } = props;
  return (
    <div
      className={['charity-preview', horizontal ? 'horizontal' : null].join(
        ' ',
      )}
    >
      <div className="image-container">
        <Image src="http://via.placeholder.com/210x118" />
        <div className="time-label">
          <span>05:22</span>
        </div>
      </div>

      <div className="charity-info">
        <div className="semi-bold show-max-two-lines">Video title</div>
        <div className="charity-preview-metadata-container">
          <div className="charity-title">Charity name</div>
          <div>
            <span>November 2, 2020</span>
            <p>Short description</p>
          </div>
        </div>
        <Button className="mini compact ui orange basic smaller">
          <i className="heart outline icon" />
          Donate
        </Button>
        <a href="www.google.ca" className="charity-preview-link">
          <i className="star outline icon" />
          Follow
        </a>
        <a href="www.google.ca" className="charity-preview-link">
          <i className="share icon" />
          Share
        </a>
      </div>
    </div>
  );
}
