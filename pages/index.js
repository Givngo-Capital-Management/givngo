import React from 'react';
import CharityGrid from '../src/components/Home/CharityGrid';
import AppLayout from '../src/components/AppLayout';
import withRedux from '../src/store/withRedux';

const styles = {
  homeContainer: {
    marginTop: '64px',
    display: 'grid',
    grid: 'auto / auto',
    justifyContent: 'center',
  },
};

const Index = () => {
  return (
    <AppLayout>
      <div style={styles.homeContainer}>
        <CharityGrid title="Chilren's charities" />
        <CharityGrid title="Food Sustainability and Insecurity" hideDivider />
      </div>
    </AppLayout>
  );
};

export default withRedux(Index);
