import React from 'react';
import { Button, Divider, Icon } from 'semantic-ui-react';
import './CharityMetadata.scss';

export default function CharityMetadata() {
  return (
    <div className="charity-metadata">
      <h3>Video title</h3>
      <div className="charity-stats">
        <span>Mar 19, 2020</span>
        <div className="charity-actions">
          <Button basic icon labelPosition="left">
            <Icon name="share" />
            Share
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
}
