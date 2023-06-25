
const mongoose = require('mongoose');

const uri = "MongooseUrl";

// Connect to the database


const TelegramBot = require('node-telegram-bot-api');

// Replace YOUR_TOKEN_HERE with your bot's API token
const token = '6038868555:AAGa23xVArUMVb4Ct65GnoGmNsSgcX9C-V8';


// Create a new bot instance
const bot = new TelegramBot(token, { polling: true });

// Listen for messages
bot.on('message',async (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;
  console.log(msg.from.id);


//start  
  if (message.match(/^\/start/)) {
    bot.sendMessage(chatId, `Welcome to my bot. Here are some available commands:
/create_dao - Create a new DAO
/dao_name [name] - Set the name of the DAO
/initial_members [members] - Set the initial members of the DAO
/add_proposer [username] - Add a proposer to the DAO
/proposer_options [options] - Set the options for the proposer
/set_proposer_option [option] - Set an option for the proposer
/dao_description [description] - Finish creating the DAO and get its description`);
  }

  // Check if the user wants to create a DAO
  if (message.match(/^\/create_dao/)) {
    bot.sendMessage(chatId, 'Sure, let\'s create a DAO. What would you like to name it?');
  }

  // Check if the user has entered a DAO name
  else if (message.match(/^\/dao_name/)) {
    const daoName = message.split(' ')[1];
    bot.sendMessage(chatId, `Great, the DAO will be called "${daoName}". Who will be the initial members of the DAO? Please list their Telegram usernames separated by commas.`);
  }

  // Check if the user has entered initial members
  else if (message.match(/^\/initial_members/)) {
    const initialMembers = message.split(' ')[1].split(',');
    bot.sendMessage(chatId, `Excellent. The initial members of the DAO will be ${initialMembers.join(', ')}. Please enter a brief description of the DAO's purpose.`);
  }

  // Check if the user has entered a DAO description
  else if (message.match(/^\/dao_description/)) {
    const daoDescription = message.split(' ')[1];
    bot.sendMessage(chatId, `Thank you. The DAO "${daoName}" has been created with the following information:
        Name: ${daoName}
        Initial members: ${initialMembers.join(', ')}
        Description: ${daoDescription}`);
  }

  else {
    bot.sendMessage(chatId, 'I\'m sorry, I didn\'t understand that command. Please type /create_dao to start creating a new DAO.');
  }
});
