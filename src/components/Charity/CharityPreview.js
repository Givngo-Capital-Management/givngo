import React from 'react';
import { Button, Image, Icon, Card } from 'semantic-ui-react';
import moment from 'moment'
import Link from 'next/link';
import DonateModal from '../Stripe/DonateModal';

export default function CharityPreview(props) {
  const { charity } = props;

  const id = charity ? charity.id : ""
  const name = charity ? charity.name : ""
  const videoDate = charity ? charity.video_date : ""
  const videoTitle = charity ? charity.video_title : ""
  const videoPreview = charity ? charity.video_preview : ""

  const date = moment.utc(videoDate * 1000).format('MMMM DD, YYYY').toString()

  const donateButton = (
    <Button className="mini compact ui orange basic smaller">
      <Icon name="heart outline" />
      Donate
    </Button>
  )

  const cardImage = (
    <Link href={`/charity/${id}`}>
      <a><Image src={videoPreview} /></a>
    </Link>
  )

  const cardHeader = (
    <Link href={`/charity/${id}`}>
      <a style={{color: 'black'}}>{videoTitle}</a>
    </Link>
  )

  const cardExtra = (
    <>
      <DonateModal charity={charity} button={donateButton}/>
      <a style={{color: '#ff8000', paddingLeft: 10}} href="www.google.ca">
        <Icon color='orange' name="star outline" />
        Follow
      </a>
      <a style={{color: '#ff8000', paddingLeft: 10}} href="www.google.ca">
        <Icon color='orange' name="share" />
        Share
      </a>
    </>
  )

  return (
    <Card
      image={cardImage}
      header={cardHeader}
      meta={`${name}\n${date}`}
      extra={cardExtra}
    />
  );
}
