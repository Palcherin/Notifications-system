//Dependencies: 
//yarn add express cors twilio 

const express = require('express'); 
const cors = require('cors');
const router = express.Router();
const twilio = require('twilio'); 

//twilio requirements -- Texting API 
const accountSid =process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN ; 
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/twilio', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { recipient, textmessage } = req.query;


    //Send Text
    client.messages.create({
        body: textmessage,
        to: recipient,  // Text this number
        from: '+12184274413' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

module.exports = router;
