import React from 'react'
import './FeatureFormSection.scss'
import FeatureForm from '../FeatureForm/FeatureForm'

export default function FeatureFormSection() {
  return (
    <div id="Form-section" className="form-container">
      <div className="form-text-container">
        <div className="form-text-wrapper">
          <div className="text-container">
            <h1 className="header">Marketing and Publishing</h1>
            <p className="paragraph">We will publish your videos and ads to the highest converting audiences possible. We format videos to fit all major platforms like Facebook, Google, Youtube, Vimeo, Instagram and custom sites. Givngo success managers create highly targeted campaigns that provide live feedback maximizing your marketing ROI.</p>
            <ul className="list">
              <li>
                <div>We create videos, ads, promotions</div>
              </li>
              <li>
                <div>Run targeted marketing campaigns</div>
              </li>
              <li>
                <div>Grow your charity donations</div>
              </li>
            </ul>
            <div className="arrow">
              <img src="https://givngo.io/wp-content/themes/givngo/images/right-arrow-1.svg" width="60" alt className="image" />
            </div>
          </div>
          <FeatureForm />
        </div>
      </div>
    </div>
  )
}