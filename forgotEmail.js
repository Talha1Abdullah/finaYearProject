// //  const nodemailer = require('nodemailer');
// //  const sendResetPasswordEmail = async (email, link) => {
// //    try {
// //     //create a transporter object that specifies the email,service to use and authentication credentials
// //      let transporter = nodemailer.createTransport({
// //       service: 'Gmail',
// //      auth: {
// //          user: 'sumanbatool223@gmail.com',
// //          pass: 'wtqcdibfkleacmdv',
// //        },
// //      });
// //      const generateOTP = () => {
// //       return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
// //     };
   
// //        let info = await transporter.sendMail({
// //        from: 'sumanbatool223@gmail.com',
// //         to: email,
// //          subject: 'Reset your password',
// //        html: `
// //        <div>
// //        <h2 style="color: #333;">Reset Password</h2>
// //         <p>Hi ${email},You are receiving this email because you (or someone else) have requested to reset your password for our app. If you did not request this, please ignore this email and your password will remain unchanged</p>
// //         // <a href=${link}>Click here to reset Your Password</a>
// //         <p>Hi ${email},Your Password reset OTP is ${otp}</p>

// //          </div>`,
// //      });
// //      console.log(' Reset Password mail sent Successfully');
// //   } catch (err) {
// //     console.error(err);
// //      res.send({err: 'failed to send'});
// //    }
// //  };
// //  module.exports = sendResetPasswordEmail;

// // // Create a Nodemailer transporter
// // // const transporter = nodemailer.createTransport({
// // //   service: 'your_email_service_provider', // e.g., 'gmail'
// // //   auth: {
// // //     user: 'your_email_address',
// // //     pass: 'your_email_password',
// // //   },
// // // });

// // // // Function to generate a random OTP
// // // const generateOTP = () => {
// // //   return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
// // // };

// // // // Function to send the OTP to the user's email
// // // const sendOTP = (email, otp) => {
// // //   const mailOptions = {
// // //     from: 'your_email_address',
// // //     to: email,
// // //     subject: 'Password Reset OTP',
// // //     html: `<p>Your password reset OTP is: ${otp}</p>`,
// // //   };

// // //   transporter.sendMail(mailOptions, (error, info) => {
// // //     if (error) {
// // //       console.error('Error sending email:', error);
// // //     } else {
// // //       console.log('OTP email sent:', info.response);
// // //     }
// // //   });
// // // };
// const nodemailer = require('nodemailer');

// const sendResetPasswordEmail = async (email, otp) => {
//   try {
//     // Create a transporter object that specifies the email service to use and authentication credentials
//     let transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: 'sumanbatool223@gmail.com',
//         pass: 'wtqcdibfkleacmdv',
//       },
//     });

//     const generateOTP = () => {
//       return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//     };

//     const otp = generateOTP(); // Generate the OTP

//     let info = await transporter.sendMail({
//       from: 'sumanbatool223@gmail.com',
//       to: email,
//       subject: 'Reset your password',
//       html: `
//         <div>
//           <h2 style="color: #333;">Reset Password</h2>
//           <p>Hi ${email}, You are receiving this email because you (or someone else) have requested to reset your password for our app. If you did not request this, please ignore this email and your password will remain unchanged</p>
//           <p>Hi ${email}, Your Password reset OTP is ${otp}</p>
//         </div>`,
//     });

//     console.log('Reset Password mail sent Successfully');
//   } catch (err) {
//     console.error(err);
//     res.send({ err: 'failed to send' });
//   }
// };

// module.exports = sendResetPasswordEmail;
const nodemailer = require('nodemailer');

exports.sendMail = async (email, subject, text) => {
  try {
    const transport = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'muhtalha99@gmail.com',
        pass: 'pdxgzpobkjhdklua',
      },
    });

    const mailOptions = {
      from: 'muhtalha99@gmail.com',
      to: email,
      subject,
      text,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


