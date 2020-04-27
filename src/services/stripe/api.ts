import axios from 'axios';

class StripeApi {
  paymentIntentsPath: string
  constructor() {
    this.paymentIntentsPath = 'api/payment_intents/'
  }

  async createPaymentIntent(data?: {}) {
    try {
      const response = await axios.post(
        `/api/payment_intents`,
        JSON.stringify(data || {}),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return await response.data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

const stripeApi = new StripeApi();
export default stripeApi;