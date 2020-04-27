import React from 'react'
import { Button, Modal, Icon, Image } from 'semantic-ui-react'
import DonationForm from './DonationForm'
import StripeProvider from './StripeProvider'

const DonateModal = (props: any) => {
  const { charity } = props;
  console.log('donate modal', charity);
  return (
    <StripeProvider>
      <Modal trigger={
        <Button className="mini compact ui orange basic smaller">
          <Icon name="heart outline" />
          Donate
        </Button>
      }>
        <Modal.Header>{`Donate to ${charity.name}`}</Modal.Header>
        <Modal.Content image>
          <Image middle wrapped size='medium' style={{paddingRight: 24}} src={charity.logo} />
          <Modal.Description>
            <DonationForm/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </StripeProvider>
  )
}

export default DonateModal