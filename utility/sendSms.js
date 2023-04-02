const dotenv = require('dotenv').config();

const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const twilio_call = process.env.TWILIO_CALL;

//twilio
const sendSMS = (to, sms) => {
   
    twilio.messages.create({
        from: twilio_call,
        to: to,
        body: sms,
    }).then(res => {
        console.log(`sms send`);
    }).catch(error => {
            console.log(error.messages);
        }
    );
};


module.exports = sendSMS;
