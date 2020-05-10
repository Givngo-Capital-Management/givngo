import * as admin from 'firebase-admin'
import initFirebase from './initFirebase';

export const verifyIdToken = token => {
  const firebasePrivateKey = process.env.FIREBASE_PRIVATE_API_KEY;

  if (!admin.apps.length) {
    admin.initializeApp(
      {
        credential: admin.credential.cert({
          type: "service_account",
          project_id: process.env.FIREBASE_PROJECT_ID,
          private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
          private_key: firebasePrivateKey.replace(/\\n/g, '\n'),
          client_email: process.env.FIREBASE_CLIENT_EMAIL,
          client_id: process.env.FIREBASE_CLIENT_ID,
          auth_url: process.env.FIREBASE_AUTH_URI,
          token_url: process.env.FIREBASE_TOKEN_URI,
          auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
      }
    )
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch(error => {
      throw error
    })
}

export const database = (() => {
  const firebasePrivateKey = process.env.FIREBASE_PRIVATE_API_KEY;

  if (!admin.apps.length) {
    admin.initializeApp(
      {
        credential: admin.credential.cert({
          type: "service_account",
          project_id: process.env.FIREBASE_PROJECT_ID,
          private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
          private_key: firebasePrivateKey.replace(/\\n/g, '\n'),
          client_email: process.env.FIREBASE_CLIENT_EMAIL,
          client_id: process.env.FIREBASE_CLIENT_ID,
          auth_url: process.env.FIREBASE_AUTH_URI,
          token_url: process.env.FIREBASE_TOKEN_URI,
          auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
          client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
        }),
        databaseURL: process.env.FIREBASE_DATABASE_URL,
      }
    )
  }

  return admin.database()
})();