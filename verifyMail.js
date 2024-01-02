const nodemailer = require('nodemailer');
const verifymail = async (email, link) => {
  try {
    //create a transporter object that specifies the email,service to use and authentication credentials
    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'sumanbatool223@gmail.com',
        pass: 'bojvilkrilagghft',
      },
    });
    let info = await transporter.sendMail({
      from: 'sumanbatool223@gmail.com',
      to: email,
      subject: 'Account Verification',
      html: `
      <div>
      <h2 style="color: #333;">Welcome to wowfit</h2>
      <p style="color: #333;">Hi ${email}</p>
      <a href=${link}>Click here to verify your account</a>
      </div>`,
    });
    console.log('Mail sent Successfully');
  } catch (error) {
    console.log(error, 'Mail failed to send');
  }
};
module.exports = verifymail;
