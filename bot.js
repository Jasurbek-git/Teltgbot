const TelegramBot = require('node-telegram-bot-api');

// Replace with your actual token
const token = '7735210853:AAGGE5gMBzmVSPb06I_njLDBSOlO5zQMOvI';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches /start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Assalomu alaykum! Men sizning oddiy botimman.');
});

// Matches any text
bot.onText(/(.+)/, (msg, match) => {
  // 'msg' is the received Message object
  // 'match[1]' is the captured group result, which is the text matched by the regular expression
  bot.sendMessage(msg.chat.id, match[1]); 
});


