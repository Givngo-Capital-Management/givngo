import React from 'react';
import CharityGrid from '../components/Home/CharityGrid';
import AppLayout from '../components/AppLayout';
import withRedux from '../store/withRedux';

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
