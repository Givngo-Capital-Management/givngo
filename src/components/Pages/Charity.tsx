import React from 'react';
import {Grid} from 'semantic-ui-react';

import AppLayout from '../AppLayout';
import Video from '../Charity/Video';
import RelatedCharities from '../Charity/RelatedCharities';
import CharityMetadata from '../Charity/CharityMetadata';
import CharityInfoBox from '../Charity/CharityInfoBox';
import CharityDonateBox from '../Charity/CharityDonateBox';

import 'firebase/auth';

const Charity = (props: any) => {
  return (
    <AppLayout>
      <Video id="374481280" title="breast friends" />
      <div style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <CharityMetadata />
            <CharityInfoBox />
          </Grid.Column>
          <Grid.Column width={6} floated="right">
            <div>
              <CharityDonateBox />
              <RelatedCharities />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </AppLayout>
  )
};

export default Charity;