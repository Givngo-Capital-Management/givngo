import React from 'react';
import { Divider, Card, Container } from 'semantic-ui-react';
import CharityPreview from '../Charity/CharityPreview';
import CharityGridHeader from './CharityGridHeader';

export default function CharityGrid(props) {
  const { title, charities, hideDivider } = props;
  
  let previews = []

  for (let i = 0; i < charities.length; i++) {
    const charity = charities[i]
    previews.push(
      <CharityPreview
        key={i}
        charity={charity}
      />
    )
  }

  return (
    <Container>
      <CharityGridHeader title={title} />
      <Card.Group itemsPerRow={4}>
        {previews}
      </Card.Group>

      {hideDivider ? null : <Divider />}
    </Container>
  );
}
