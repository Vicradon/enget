require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const myNum = process.env.MY_NUM;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({body: 'Hi there!', from: '+19852431170', to: myNum})
      .then(message => console.log(message.sid));