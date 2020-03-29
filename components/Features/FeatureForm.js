import React from 'react';
import styles from './FeatureForm.module.scss';

export default function FeatureForm() {
  return (
    <div className={styles['form-layout']}>
      <div className={styles['form-block']}>
        <h2 className={styles['form-header']}>
          Increase your
          <br />
          charity donations
        </h2>
        <div className={styles['form-text']}>
          Leave your contact information below, and we&apos;ll be in touch soon
          to help you get started
        </div>
        <form
          id="contact-form"
          name="email-form"
          className={styles.form}
          method="post"
        >
          <label htmlFor="name-2" className={styles['field-label']}>
            Name
            <input
              type="text"
              className={[styles['name-text-field'], styles['w-input']].join(
                ' ',
              )}
              maxLength="256"
              name="name"
              id="name-2"
              placeholder="Name"
            />
          </label>

          <label htmlFor="email-2" className={styles['field-label']}>
            Email Address
            <input
              type="email"
              className={[styles['name-text-field'], styles['w-input']].join(
                ' ',
              )}
              maxLength="256"
              name="email"
              id="email-2"
              placeholder="Email Address"
            />
          </label>
          <input
            id="contact-form-btnSubmit"
            type="submit"
            value="get started"
            data-wait="Please wait..."
            className={[styles['button-form'], styles['w-button']].join(' ')}
          />
        </form>
        <div className={styles['w-form-done']}>
          <div>Thank you! We will contact you soon!</div>
        </div>
        <div className={styles['w-form-fail']}>
          <div>
            Oops! Something went wrong while submitting the contact information,
            please try again.
          </div>
        </div>
      </div>
    </div>
  );
}
