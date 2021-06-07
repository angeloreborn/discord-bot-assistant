// Require Discord
const Discord = require('discord.js');

// Select a file from your computer
// The forward slashes are used to navigate folders
//   ./ -> means the file is in the same directory as this file
//  ../ -> goes 1 directory upwards 

// Search online on how to navigate folders

const path_to_image = './assets/discordjs.png';

const file = new Discord.MessageAttachment(path_to_image);


// Build your embed with the image
const exampleEmbed = new Discord.MessageEmbed()
	.setImage('attachment://discordjs.png')


channel.send(exampleEmbed);