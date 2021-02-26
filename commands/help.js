const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setTitle('')
  .setColor('')
  .setDescription('')
  .addField('')
  .setTimestamp()//Leave this blank
  .setFooter('')
  message.channel.send(embed)
}
