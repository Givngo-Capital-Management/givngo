import React, { useState, useEffect } from 'react';

import AppLayout from '../AppLayout';
import CharityGrid from '../Home/CharityGrid';

import firebase from 'firebase/app';
import 'firebase/database';

import {Charities, Charity} from '../../types';

const styles = {
  homeContainer: {
    marginTop: '64px',
    display: 'grid',
    grid: 'auto / auto',
    justifyContent: 'center',
  },
};

const Index = (props: any) => {
  const [charities, setCharities] = useState<Charities>({});

  useEffect(() => {
    const listener = firebase.database()
      .ref('charities')
      .on('value', (snapshot) => {
        if (snapshot) {
          setCharities(snapshot.val());
        }
      });
    return listener(null);
  }, []);

  const charitiesByCategory: { [category: string]: Charity[] } = {}
  Object.keys(charities).map((key, index) => {
    const category: string = charities[key].categories['name']
    charitiesByCategory[category] = charitiesByCategory[category] || [];
    charitiesByCategory[category].push({id: key, ...charities[key]});
  });

  let grids: any[] = []
  for (let i = 0; i < Object.keys(charitiesByCategory).length; i++) {
    const key = Object.keys(charitiesByCategory)[i]
    grids.push(
      <CharityGrid
        key={key}
        title={key} 
        charities={charitiesByCategory[key]} 
        hideDivider={i == Object.keys(charitiesByCategory).length - 1} />
    )
  }

  return (
    <AppLayout {...props}>
      <div style={styles.homeContainer}>
        {grids}
      </div>
    </AppLayout>
  )
};

export default Index;