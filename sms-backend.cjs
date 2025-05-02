// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACeffbc45a8cf6533b098636efbaac9e79';
const authToken = 'aa1a6e4a19009bffba58c5a6f693b340';


const client = twilio(accountSid, authToken);

async function createMessage() {
  const message = await client.messages.create({
    body: "help needed send police to this location",
    from: "+16056006029",
    to: "+918700280644",
  });

  console.log(message.body);
}

createMessage();
