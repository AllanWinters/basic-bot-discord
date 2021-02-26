const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setTitle('┏╋━━━ ◥◣◆ Hel')
  .setColor('#0086FF')
  .setDescription('')
  .addField('')
  .setTimestamp()
  .setFooter('MINEPLAY')
  message.channel.send(embed)
}
