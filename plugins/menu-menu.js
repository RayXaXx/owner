import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen4
let vn = './views/Hola.mp3'
let img = await(await fetch('https://i.ibb.co/cCCtsN6/37736061-68f4-4a4b-aa04-9b105a73bb1c.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `┌「 *RayXaXx-BOT* ︎」
❱➭ *𝗛ᴏʟᴀ,➟${taguser}*
❱➭ *ᴏᴡɴᴇʀ:➟RayXaXx*
❱➭ *Número:➟51902061233*
❱➭ *ғᴇᴄʜᴀ:➟${date}*
❱➭ *ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:➟${uptime}*
❱➭ *ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}*
╰━━━━━━━━━━━━━━
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
┌ꨄ︎📽 *Download* 🎧ꨄ︎」
❱➭≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
❱➭ *.wikipedia <busqueda>*
❱➭ *.animeinfo <nombre>*
❱➭ *.play nombre de tu canción*
❱➭ *.tiktok link de video tiktok*
❱➭ *.ig link de tu video en ig*
❱➭ *.calculadora Ejemplo : .calc 2+2*
❱➭ *.ia chatgpt*
❱➭ *.iaimagen imagenes creadas*
❱➭ *.tts audio google*
╰━━━━━━━━━━━━━━
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
┌ꨄ🧩 ︎*𝐄𝐒𝐓𝐈𝐊𝐄𝐑𝐒* 👾ꨄ︎」 
❱➭≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡ 
❱➭ *.s <responder a imagen o video>*
❱➭ *.emojimix <emoji 1>&<emoji 2>*
❱➭ *.semoji <tipo> <emoji>*
❱➭ *.dado*
╰━━━━━━━━━━━━━━`.trim()
if (m.isGroup) {
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
handler.register = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}