import React, { useState, useEffect } from 'react';
import {Grid} from 'semantic-ui-react';

import AppLayout from '../../AppLayout';
import Video from '../../Charity/Video';
import RelatedCharities from '../../Charity/RelatedCharities';
import CharityMetadata from '../../Charity/CharityMetadata';
import CharityInfoBox from '../../Charity/CharityInfoBox';
import CharityDonateBox from '../../Charity/CharityDonateBox';

import firebase from 'firebase/app';
import 'firebase/database';
import {Charity} from '../../../types';
import { useRouter } from 'next/router';

const CharityPage = (props: any) => {
  const [charity, setCharity] = useState<Charity>();
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    const listener = firebase.database()
      .ref(`charities/${id}`)
      .on('value', (snapshot) => {
        if (snapshot) {
          setCharity(snapshot.val());
        }
      });
    return listener(null);
  }, []);

  return (
    <AppLayout>
      <Video id={charity?.video_id} title={charity?.video_title} />
      <div style={{ paddingLeft: 20, paddingRight: 20 }}>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <CharityMetadata charity={charity ? charity : {}} />
            <CharityInfoBox charity={charity ? charity : {}} />
          </Grid.Column>
          <Grid.Column width={6} floated="right">
            <div>
              <CharityDonateBox charity={charity ? charity : {}}/>
              <RelatedCharities />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </AppLayout>
  )
};

export default CharityPage;