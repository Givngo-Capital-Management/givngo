import React from 'react';
import { Grid } from 'semantic-ui-react';
import { get } from 'lodash/object'

import Video from '../src/components/Charity/Video';
import RelatedCharities from '../src/components/Charity/RelatedCharities';
import CharityMetadata from '../src/components/Charity/CharityMetadata';
import CharityInfoBox from '../src/components/Charity/CharityInfoBox';
import CharityDonateBox from '../src/components/Charity/CharityDonateBox';
import AppLayout from '../src/components/AppLayout';

import withAuthUser from '../src/services/pageWrappers/withAuthUser';
import withAuthUserInfo from '../src/services/pageWrappers/withAuthUserInfo';


const Charity = (props) => {
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
  );
}

export default withAuthUser(withAuthUserInfo(Charity))