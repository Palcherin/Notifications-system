// import React, { useState } from 'react';
// import axios from 'axios'; // or your preferred HTTP client
// // Import necessary library for your SMS gateway (e.g., twilio)

// const Twilio = () => {
//   const [numbers, setNumbers] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSendBulkSMS = async () => {
//     try {
//       // Split the phone numbers into an array
//       const phoneNumbersArray = numbers.split(',');

//       // Iterate through phone numbers and send SMS
//       for (const phoneNumber of phoneNumbersArray) {
//         await sendSms(phoneNumber, message);
//       }

//       // Handle success or show a success message
//       console.log('Bulk SMS sent successfully!');
//     } catch (error) {
//       console.error('Error sending bulk SMS:', error);
//       // Handle error or show an error message
//     }
//   };

//   const sendSms = async (recipient, textmessage) => {

//     // Make an API request to the SMS gateway
//     // Use the appropriate library and API endpoint based on your SMS gateway provider
//     try {
//       // Example using axios and Twilio
//       const response = await axios.post(
        
//        consst  endpoint=`https://api.twilio.com/2010-04-01/Accounts/${`ACcc651cab6ead886b4fb3c47091271c20`}/Messages`
      
//         ,{
//           to: recipient,
//           body: textmessage,
//         },
//         {
//           auth: {
//             username:'ACcc651cab6ead886b4fb3c47091271c20',
//             password: '821bd6efff60b74d774fddf724673998',
//           },
//         }
//       );

//       console.log('SMS sent:', response.data);
//     } catch (error) {
//       console.error('Error sending SMS:', error);
//       throw error;
//     }
//   };

//   return (
//     <div className='block bg-slate-100 w-[300px] h-[50vh] pl-20'>
//       <label>Phone Numbers (comma-separated):</label><br/>
//       <input type="text" value={numbers} onChange={(e) => setNumbers(e.target.value)}  className='h-[50px]'/><br/>

//       <label>Message:</label><br/>
//       <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

//       <button onClick={handleSendBulkSMS}>Send Bulk SMS</button>
//     </div>
//   );
// };

// export default Twilio;