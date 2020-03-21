import React from 'react';
import './CharityPreview.scss';
import { Image } from 'semantic-ui-react';

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
              <span>2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
