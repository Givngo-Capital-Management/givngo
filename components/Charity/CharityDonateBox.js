import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import styles from './CharityDonateBox.module.scss';

export default function CharityDonateBox() {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <p>Donate now</p>
      </div>
      <div className={styles.content}>
        <Grid>
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
        </Grid>

        <h3>Total raised: $132,619</h3>
      </div>
    </div>
  );
}
