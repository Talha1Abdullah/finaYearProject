function generateToken() {
    return crypto.randomBytes(20).toString('hex');
  }
  app.post('/resetPassword', async (req, res) => {
    try {
      const {email} = req.body;
      // Generate a secure random token
      const token = generateToken();
      // Find the user with the given email
      const user = await User.findOne({email:email});
      if (!user) {
        // If the user does not exist, display an error message
        res.send({message: 'No account with that email address exists.'});
      }
      // Update the user's reset password fields
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      await user.save();
      // Send a reset password email to the user
       const link = `http://192.168.10.11:9000/reset/${token}`;
      await sendResetPasswordEmail(email, link);
      // Display a success message to the user
      res.send({
        message:
          'An email has been sent with instructions on how to reset your password.',
      });
    } catch (err) {
      console.error(err);
      res.send({error: 'There was an error resetting your forgot password.'});
    }
  });
  
  
  app.get('/:userid/:token', async (req, res) => {
    try {
      console.log("userid")
       res.status(200).json({
        message: 'Data received successfully.'
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while processing the request.'
      });
    }
  })
  app.post('/resetPassword',async (req, res) =>{
    try {
      const {email} = req.body;
      const token = generateToken();
      const user = await User.findOne({email: email});
      if (!user) {
        res.send({message: 'No account with that email address exists.'});
      }
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      await user.save();
      const link = `http://192.168.10.11:9000/resetPassword/${user._id}/${token}`;
      await sendResetPasswordEmail(email, link);
      res.send({
        message:
          'An email has been sent with instructions on how to reset your password.',
      });
    } catch (err) {
      console.error(err);
      res.send({error: 'There was an error in sending Mail.'});
    }
  })
  app.post('resetPassword/:userid/:token', async (req, res) =>{
    const {userid, token} =
    req.params.body;
  try {
    const user = await User.findOne({_id: userid, resetPasswordToken: token});
    if (!user) {
      res.send({
        message: 'The reset password link is invalid or has expired.',
      });
    }
    const isTokenValid = user.resetPasswordToken === token;
    const isntExpired = user.resetPasswordExpires > Date.now();
    console.log(isTokenValid, isntExpired);
    if (isTokenValid && isntExpired) {
      const {password} = req.body;
      const hashedNewPassword = await bcrypt.hash(password, Number(10));
      //deleting the token and expiry time after updating password
      User.updateOne(
        {_id: token.userid},
        {
          $set: {password: hashedNewPassword},
          $unset: {
            resetPasswordExpires: 1,
            resetPasswordToken: 1,
          },
        },
      );
      res.status(200).send({message: 'Password updated successfully'});
    } else res.status(400).send({Error: 'Invalid Link or Expired'});
    await user.save();
    const email = user.email;
    await sendConfirmationEmail(email);
  } catch (err) {
    console.error(err);
    res.send({error: 'There was an error resetting your password.'});
  }
}
)
const addExercise = async (exerciseName, category) => {
  try {
    // Find the document that matches the selected category
    const categoryDocument = await db.collection('exercises').findOne({ category: category });
    if (categoryDocument) {
      // Retrieve the icon associated with the category
      const icon = categoryDocument.icon;
      // Create a new exercise document
      const exercise = {
        name: exerciseName,
        category: category,
        icon: icon
      };
      // Insert the new exercise document into the collection
      await db.collection('exercises').insertOne(exercise);
      console.log('Exercise added successfully');
    } else {
      console.log('Category not found');
    }
    // Close the connection
    client.close();
  } catch (error) {
    console.error('Error adding exercise:', error);
  }
};
addExercise('Push-ups', 'Strength Training');
