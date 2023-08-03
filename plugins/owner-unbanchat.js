let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*│✔️│𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝 𝚏𝚞𝚎 𝚍𝚎𝚜𝚋𝚊𝚗𝚎𝚊𝚍𝚘 𝚎𝚡𝚒𝚝𝚘𝚜𝚊𝚖𝚎𝚗𝚝𝚎*\n\n\n*│✔️THIS CHAT WAS SUCCESSFULLY DAMAGED*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
handler.register = true
export default handler
