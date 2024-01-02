// Import all modules.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Token = require('./models/token');
const crypto = require('crypto');
const verifyEmail = require('./verifyMail');
const User = require('./models/userModel');
const jwt = require('jsonwebtoken');
const Resetrouter = require('./resetPassRoutes');
const exerciseRouter = require('./exerciseDataRoutes');
const exercises = require('./exerciseData');
const exerciseList = require('./models/exerciseDataSchema');
const WorkoutRouter = require('./workout');
const newExerciserouter = require('./addNewExercise');
const ForgotRouter= require('./ForgotPassword')
const baseUrl=require('./baseUrl');
const PaymentRoutes=require('./paymentRoutes')
// Creating app instance to use express functionality
const app = express();
// Using Middlewares
app.use(express.json());
// Helps server-side app to read URL-encoded data being sent from client side app.
app.use(express.urlencoded({extended: true}));
// Cors is used because the server and react app are running on diff server, so for sending requests from server to app we need cors.
app.use(cors());
// Connecting to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/WowFit', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
// Creating Routes for login
// app.post('/login', async (req, res) => {
//   const {email, password} = req.body;
//   try {
//     const user = await User.findOne({email: email});
//     if (user && user.verified) {
//       const match = await bcrypt.compare(password, user.password);
//       if (match) {
//         // res.send({message: 'Login Successfully', user: user});
//         res.send({ success: true, message: 'Login Successfully', user: user });
//       } else {
//         res.send({success:false,message: "Invalid Password"});
//       }
//     } else {
//       res.send({sucess:false,message: 'User not registered or verified yet'});
//     }
//   } catch (error) {
//     console.error(error);
//     res.send({error: 'Error logging in user'});
//   }
// });
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user && user.verified) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // const token = jwt.sign({ userId: user._id }, 'Hgyigd8hhg3729v%,poQ@5fgbF', {
        //   expiresIn: '1h', // Set the token expiration time as per your requirement
        // });
        const tokenPayload = {
          userId: user._id,
          subscriptionId: user.subscriptionId, // Add the subscriptionId to the token payload
        };
        const token = jwt.sign(tokenPayload, 'Hgyigd8hhg3729v%,poQ@5fgbF', {
          expiresIn: '1h', // Set the token expiration time as per your requirement
        });
        console.log(token)
        res.send({
          success: true,
          message: 'Login Successfully',
          user: user,
          token: token,
        });
      } else {
        res.send({ success: false, message: 'Invalid Password' });
      }
    } else {
      res.send({
        success: false,
        message: 'User not registered or verified yet',
      });
    }
  } catch (error) {
    console.error(error);
    res.send({ error: 'Error logging in user' });
  }
});
// Creating Routes for Confirm token, if token is already present with the user_id
// then set the verified to true and delete the token from token collection when account is verified.
app.get('/confirm/:token', async (req, res) => {
  try {
    const token = await Token.findOne({token: req.params.token});
    if (token) {
      const decoded = jwt.verify(
        req.params.token,
        'Hgyigd8hhg3729v%,poQ@5fgbF',
      );
      await User.updateOne({_id: token.userId}, {$set: {verified: true}});
      await Token.findByIdAndRemove(token._id);
      res.send('Email Verified');
    } else {
      res.status(400).send('Invalid token');
    }
  } catch (error) {
    console.error(error);
    res.status(400).send('An error occurred');
  }
});
// Creating Routes for register, it finds if the user email is already in db, if not then create a new user,
// when the user is saved in db, a token is generated using crypto, the token is also saved in db,
// then it checks the token and sends the email
app.post('/register', async (req, res) => {
  const {email, password} = req.body;
  //console.log("Email recieved",email)
  try {
    const user = await User.findOne({email});
    if (user) {
      res.send({success:false, message: 'Email already exists'});
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = new User({email, password: hash});
      const savedUser = await newUser.save();
      const tokenPayload = {userId: savedUser._id, email};
      const secretKey = 'Hgyigd8hhg3729v%,poQ@5fgbF';
      const token = jwt.sign(tokenPayload, secretKey);
      const newToken = new Token({userId: savedUser._id, token});
      await newToken.save();
      const link = `${baseUrl}confirm/${token}`;
      await verifyEmail(email, link);
      res.send({success:true,message: 'Verification Email sent, check your mail',user:user});
    }
  } catch (error) {
    console.error(error);
    res.send({error: 'Error registering user'});
  }
});
exerciseList.countDocuments({})
  .then(count => {
    if (count > 0) {
      console.log('Documents already exist. Skipping insertion.');
      return;
    }
    return exerciseList.insertMany(exercises);
  })
  .then(result => {
    if (result) {
      console.log('Documents inserted:', result.length);
    } else {
      console.log('No documents inserted.');
    }
  })
  .catch(error => {
    console.error('Error inserting documents:', error);
  });
  app.use('/list',exerciseRouter)
  app.use('/workout',WorkoutRouter)
  app.use('/add', newExerciserouter)
  app.use('/pass',ForgotRouter)
  app.use('/payments', PaymentRoutes);
// Creating server.
app.listen(7000, () => {
  console.log('Server started at port 7000');
});


  

