// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendSms = async (body)=>{
  let msgOptions ={
    from:process.env.TWILIO_PHONE,
    to:process.env.TO_NUMBER,
    body
  }
  try{
   const message   =  await client.messages.create(msgOptions)
   console.log(message)
  }
  catch(error){
    console.log(error)
  }
}

sendSms("This is the sms");
// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+15017122661',
//      to: '+254741699821'
//    })
//   .then(message => console.log(message.sid));
