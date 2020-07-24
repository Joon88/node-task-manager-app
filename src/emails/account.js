const sgMail = require("@sendgrid/mail");

const sendGridApiKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendGridApiKey);

const sendWelcomeEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: "joon.oracle@gmail.com",
      subject: "Welcome to the app!",
      text: `Hey ${name}! Thanks for joining in. Let me know how you get along with the app.`,
    });
  } catch (e) {
    //throw new Error({ error: "SendGrid mail server issue!" });
    console.log("SendGrid server Error!!!", e);
  }
};

const sendCancellationEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: "joon.oracle@gmail.com",
      subject: "Sorry to see you leave!",
      text: `Goodbye ${name}! Hope to see you again soon.`,
    });
  } catch (e) {
    //throw new Error({ error: "SendGrid mail server issue!" });
    console.log("SendGrid server Error!!!", e);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
