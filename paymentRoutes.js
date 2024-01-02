const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51NgDKKJHRG4EXTAzjsC45hdbEf6aiIrG8c8kdyNzbuoOtIFvJcT1XPcDSJ4huFUYlBBU1kT84XSZQd0hf0xF6zSR00xSzuohGO');
const User = require('./models/userModel');

router.get('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  console.log("userId",userId)
  try {
    const user = await User.findById(userId);   
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});
  router.post('/subscribe', async (req, res) => {
    try {
      const email = req.body.email;
      const cardToken= req.body.cardToken
      console.log("Esha",cardToken)
      const existingUser = await User.findOne({ email: email });
    if (existingUser && existingUser.subscribed) {
      return res.json({ message: 'You have already subscribed' })
    }
      // Step 1: Create a Customer
      const customer = await stripe.customers.create({
        email: email,
        // Add more attributes as needed
      });
      console.log("Created Customer:", customer);
      // Step 2: Use the created customer's ID
      const customerId = customer.id;
      // Step 3: Check if customer exists
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      try {
        const paymentMethod = await stripe.paymentMethods.create({
          type: 'card',
          card: {
            token:'tok_visa'
          },   
        });
        // {console.log("Wawa",token)}
        // Attach Payment Method to Customer
        await stripe.paymentMethods.attach(paymentMethod.id, {
          customer: customerId,
        });
// Step 6: Set the attached payment method as the default for the customer
await stripe.customers.update(customerId, {
  invoice_settings: {
    default_payment_method: paymentMethod.id,
  },
});
  
    // Save the updated user information
        console.log("Payment Method ID:", paymentMethod.id);
          try {
          const subscription = await stripe.subscriptions.create({
            customer: customerId,
            items: [{ price: 'price_1NgDXqJHRG4EXTAzOi5SBrqg' }],
          });
          const user = await User.findOne({ email: email });
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
          user.subscribed = true;
          user.subscriptionId = subscription.id; // Store the Stripe subscription ID
          await user.save();
          console.log("Stripe Subscription Result:", subscription);
  
          res.json({ subscription });
       
        } catch (subscriptionError) {
          console.error("Stripe Subscription Error:", subscriptionError);
          res.status(500).json({
            error: 'Error creating subscription',
          });
        }
      } catch (paymentMethodError) {
        console.error("Stripe Payment Method Error:", paymentMethodError);
        res.status(500).json({
          error: 'Error creating payment method',
        });
      }
    } catch (customerError) {
      console.error("Stripe Customer Error:", customerError);
      res.status(400).json({
        error: customerError.message,
      });
    }
  });
  
module.exports = router;