import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, Container, Card } from 'semantic-ui-react';
import get from 'lodash/get';

import AppLayout from '../AppLayout';
import CharityGrid from '../Home/CharityGrid';

import 'firebase/auth';

const styles = {
  homeContainer: {
    marginTop: '64px',
    display: 'grid',
    grid: 'auto / auto',
    justifyContent: 'center',
  },
};

const Index = (props: any) => {
  return (
    <AppLayout {...props}>
      <div style={styles.homeContainer}>
        <CharityGrid title="Chilren's charities" />
        <CharityGrid title="Food Sustainability and Insecurity" hideDivider />
      </div>
    </AppLayout>
  )
};

export default Index;