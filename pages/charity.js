import React from 'react';
import { Grid } from 'semantic-ui-react';
import Video from '../components/Charity/Video';
import RelatedCharities from '../components/Charity/RelatedCharities';
import CharityMetadata from '../components/Charity/CharityMetadata';
import CharityInfoBox from '../components/Charity/CharityInfoBox';
import CharityDonateBox from '../components/Charity/CharityDonateBox';
import AppLayout from '../components/AppLayout';

export default function Charity() {
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
