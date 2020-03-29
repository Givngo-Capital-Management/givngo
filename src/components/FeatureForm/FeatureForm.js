import React from 'react'
import './FeatureForm.scss'

export default function FeatureForm() {
  return(
    <div className="form-layout">
      <div className="form-block">
        <h2 className="form-header">Increase your<br />charity donations</h2>
        <div className="form-text">Leave your contact information below, and we'll be in touch soon to help you get started</div>
        <form id="contact-form" name="email-form" className="form" method="post">
            <label for="name" className="field-label">Name</label>
            <input type="text" className="name-text-field w-input" maxLength="256" name="name" id="name-2" placeholder="Name" />
            <label for="email" className="field-label">Email Address</label>
            <input type="email" className="name-text-field w-input" maxLength="256" name="email" id="email-2" placeholder="Email Address" />
            <input id="contact-form-btnSubmit" type="submit" value="get started" data-wait="Please wait..." className="button-form w-button" />
        </form>
        <div className="w-form-done">
          <div>Thank you! We will contact you soon!</div>
        </div>
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the contact information, please try again.</div>
        </div>
      </div>
    </div>
  )
}