const { MessageEmbed } = require('discord.js')

exports.run = async (client, message) => {
  let embed = new MessageEmbed()
  .setTitle('┏╋━━━ ◥◣◆ Help Commands ◆◢◤ ━━━╋┓')
  .setColor('#0086FF')
  .setDescription('‎\n**__Ini adalah beberapa command yang tersedia__**\n\n> **CORE**\n`help` | `bot` | `ping`\n\n> **RULES**\n`rulec1` | `rulec2` | `rulec3`\n`rulec4` | `rulec5` | `rulec6`') //ini cuma contoh
  .setTimestamp()
  .setFooter('MINEPLAY')
  message.channel.send(embed)
}
