import React from 'react';
import CharityGrid from '../../components/CharityGrid/CharityGrid';
import './Home.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="responsive-charity-grid-container">
        <CharityGrid title="Chilren's charities" />
        <CharityGrid title="Food Sustainability and Insecurity" hideDivider />
      </div>
    </div>
  );
}
