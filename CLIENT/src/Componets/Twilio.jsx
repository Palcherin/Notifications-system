
import React, { useState } from 'react';
import axios from 'axios';

const Twilio = () => {
  const [numbers, setNumbers] = useState('');
  const [message, setMessage] = useState('');

  const handleSendBulkSMS = async () => {
    try {
      // Split the phone numbers into an array
      const phoneNumbersArray = numbers.split(',');
 
      // Iterate through phone numbers and send SMS
      for (const phoneNumber of phoneNumbersArray) {
        await sendSms(phoneNumber, message);
      }

      // Handle success or show a success message
      console.log('Bulk SMS sent successfully!');
    } catch (error) {
      console.error('Error sending bulk SMS:', error);
      // Handle error or show an error message
    }
  };
// console.log(text, recipient);
  const sendSms = async (recipient, textmessage) => {
    // Make an API request to the SMS gateway
    // Use the appropriate library and API endpoint based on your SMS gateway provider
    try {
      // Example using axios and Twilio
      const endpoint = `https://api.twilio.com/2010-04-01/Accounts/ACcc651cab6ead886b4fb3c47091271c20/${message}`;
      // US0f9a43cdacbb2809a27e08185a5834c5
      const response = await axios.post(
        endpoint,
        new URLSearchParams({
          To: recipient,
          From: '+14843218140', // Replace with your Twilio phone number
          Body: textmessage,
        }),
        {
          auth: {
            username: 'ACcc651cab6ead886b4fb3c47091271c20',
            password: '821bd6efff60b74d774fddf724673998',
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      console.log('SMS sent:', response.data);
    } catch (error) {
      console.error( error);
      throw error;
    }
  };

  return (
    <div className='block bg-slate-100 w-[500px]  pl-20'>
      <label>Phone Numbers (comma-separated):</label><br/>
      <input type="text" value={numbers} onChange={(e) => setNumbers(e.target.value)} className='h-[50px]'/><br/>

      <label>Message:</label><br/>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='w-[400px] h-[150px]'/>

      <button onClick={handleSendBulkSMS} className='bg-pink-900 py-2 px-4 font-bold' >Send Bulk SMS</button>
    </div>
  );
};

export default Twilio;

