import React from 'react';
import './CharityPreview.scss';
import { Button, Image } from 'semantic-ui-react';

export default function CharityPreview() {
  return (
    <div className="charity-preview">
      <div className="image-container">
        <Image src="http://via.placeholder.com/210x118" />
        <div className="time-label">
          <span>05:22</span>
        </div>

        <div className="charity-info">
          <div className="semi-bold show-max-two-lines">Video title</div>
          <div className="charity-preview-metadata-container">
            <div className="charity-title">Charity name</div>
            <div>
              <span>November 2, 2020</span>
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
    </div>
  );
}
