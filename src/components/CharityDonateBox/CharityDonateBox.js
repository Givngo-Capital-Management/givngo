import React from 'react';
import './CharityDonateBox.scss';
import { Button } from 'semantic-ui-react';

export default function CharityDonateBox() {
  return (
    <div className="charity-donate-box">
      <div className="charity-donate-box-header">
        <p>Donate now</p>
      </div>
      <div className="charity-donate-box-content">
        <div className="ui equal width grid">
          <div className="equal width row">
            <div className="ten wide column">
              <h3 className="ui header">
                <div className="content">
                  Donate to Charity name
                  <div className="sub header">Charity short description</div>
                </div>
              </h3>
            </div>
            <div className="six wide column">
              <Button className="donate ui right floated" color="orange">
                Donate
              </Button>
            </div>
          </div>
        </div>

        <h3>Total raised: $132,619</h3>
      </div>
    </div>
  );
}