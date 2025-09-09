

// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || ""{"noiseKey":{"private":{"type":"Buffer","data":"gIWtM5HdvLmaxpqLSbDFgUafUiv2zJhGTHVZ1RD8hWg="},"public":{"type":"Buffer","data":"Nqww2M3dyyT+HFHoULxHo+7fLA3ilPVmH8vC9AWc0C4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SLJM/QJmVAF8jQsVpYmbLKfoaKb+GfJMIDKG304tTUI="},"public":{"type":"Buffer","data":"vaS3wIceWnLPp1pnYKBuhZ3PilO3vLuhIjBD/6LxNho="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"wJ4PQKOS6chnOz41hTsy5MxWJhV0EUJQvlXhI1QUVFM="},"public":{"type":"Buffer","data":"Z1DDoHKyKyIBEsF+ykzfTLR9cNBAuJXJHnw2YWLf10M="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2Oi64Z0c2efTPvDBDMYkX5glRzw3u18bJbHDkQRscXc="},"public":{"type":"Buffer","data":"RI3e6vuUsR8tamCaf5PfXpF8myzJZU4YG4mECXXUTkM="}},"signature":{"type":"Buffer","data":"xteerWUxrB3H82aC1ACC0XOpPv7/aV2WzH+DW6sTRsZyIEdiwZDC2f4l4tMz7JmukMCCUOMbN1Q+b2J3wS6PiQ=="},"keyId":1},"registrationId":172,"advSecretKey":"svDGhzuH/+7LpRKpHdmAEIGRcMmSpC9DY8tHFvsKlBE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"3XLL3-SHT-Cfp3dF9-FHNA","phoneId":"61769c8d-f9db-4d83-a236-2111d82e45a5","identityId":{"type":"Buffer","data":"G/Fk9XylvsPq7v/Zjr1fsN//54w="},"registered":true,"backupToken":{"type":"Buffer","data":"wZaAY48S1xaX9Sh+XK5aodhFMGo="},"registration":{},"pairingCode":"6VENW7BJ","me":{"id":"254715722567:23@s.whatsapp.net","name":"𝖇𝖗𝖎𝖆𝖓 𝖓𝖌𝖊𝖙𝖎𝖈𝖍"},"account":{"details":"CN/688QDENrth8EGGB0gACgA","accountSignatureKey":"KlNCqt+814oxFQiFY+vmFSH5EU+iubwSIAikZOeLhUE=","accountSignature":"3AEOZFvxPzqHd1zi84bn1AZvTbWF3t6r/rWxkTZZByBsVI5a1AaH/i9/y7xdtmn+E13EBRAnthOA1NWhsXBZCw==","deviceSignature":"5vSid9MG+d3XB6fqytlhQSB/wbke62eaIgYsRmS+eLD6DjGm+vA/fg8afTkqh59BkpOkclcrMrJtRF6p48K5jQ=="},"signalIdentities":[{"identifier":{"name":"254715722567:23@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BSpTQqrfvNeKMRUIhWPr5hUh+RFPorm8EiAIpGTni4VB"}}],"platform":"smba","lastAccountSyncTimestamp":1747056358,"myAppStateKeyId":"AAAAAAWj"}
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  AUTOREACT_STATUS: process.env.AUTOREACT_STATUS !== undefined ? process.env.AUTOREACT_STATUS === 'true' : false,
   /*auto block only for 221 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "©HansTz",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255659728029",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
