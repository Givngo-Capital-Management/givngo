import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import DonateModal from '../Stripe/DonateModal';
import styles from './CharityDonateBox.module.scss';

export default function CharityDonateBox(props) {
  const { charity } = props

  const donateButton = (
    <Button className="donate ui right floated" color="orange">
      Donate
    </Button>
  )

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
                  {`Donate to ${charity.name}`}
                </div>
              </h3>
            </div>
            <div className="six wide column">
              <DonateModal charity={charity} button={donateButton}/>
            </div>
          </div>
        </Grid>

        <h3>{`Total raised: $${charity.total_raised || 0}`}</h3>
      </div>
    </div>
  );
}
