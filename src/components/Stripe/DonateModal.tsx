import React from 'react'
import { Button, Modal, Icon, Image } from 'semantic-ui-react'
import DonationForm from './DonationForm'
import StripeProvider from './StripeProvider'

const DonateModal = (props: any) => {
  const { charity, button } = props;
  return (
    <StripeProvider>
      <Modal trigger={
        button
      }>
        <Modal.Header>{`Donate to ${charity && charity.name}`}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' style={{paddingRight: 24}} src={charity && charity.logo} />
          <Modal.Description>
            <DonationForm charity={charity}/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </StripeProvider>
  )
}

export default DonateModal