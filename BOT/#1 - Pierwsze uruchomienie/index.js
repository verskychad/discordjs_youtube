const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();

const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
    ]
})

client.on('ready', () => {
    client.user.setActivity('Minecraft', { type: ActivityType.Playing });
    console.log('Bot sie odpalil!')
})

client.login(process.env.TOKEN);