import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen4
let vn = './views/Hola.mp3'
let img = await(await fetch('https://i.ibb.co/3rQfcqY/LOGO-ACTUAL-RAYXAXX.jpg')).buffer()
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
let str = `┌「 *ꨄ︎RayXaXx-BOTꨄ* ︎」
❱➭ *𝗛ᴏʟᴀ,➟${taguser}*
❱➭ *ᴏᴡɴᴇʀ:➟RayXaXx*
❱➭ *Número➟51902061233*
❱➭ *ғᴇᴄʜᴀ:➟${date}*
❱➭ *ᴛɪᴇᴍᴘᴏᴀᴄᴛɪᴠᴏ:➟${uptime}*
❱➭ *ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}*
╰━━━━━━━━━━━━━━
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
┌ꨄ︎📽 *Descargas* 🎧ꨄ︎」
❱➭≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
❱➭ *.play nombre de tu canción*
❱➭ *.facebook tu link de fb*
❱➭ *.tiktok link de video tiktok*
❱➭ *.twitter tu link de twt*
❱➭ *.ig link de tu video en ig*
❱➭ *.google resultados de google*
❱➭ *.calculadora Ejemplo : .calc 2+2*
❱➭ *.ia chatgpt* no usar
❱➭ *.iaimagen imagenes creadas*
❱➭ *.tts audio google*
╰━━━━━━━━━━━━━━
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
┌ꨄ🧩 ︎*𝐄𝐒𝐓𝐈𝐊𝐄𝐑𝐒* 👾ꨄ︎」 
❱➭≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
❱➭ *.s <responder a imagen o video>*
❱➭ *.emojimix <emoji 1>&<emoji 2>*
❱➭ *.scircle <imagen>*
❱➭ *.sremovebg <imagen>*
❱➭ *.semoji <tipo> <emoji>*
❱➭ *.pat <@tag>*
❱➭ *.slap <@tag>*
❱➭ *.kiss <@tag>*
╰━━━━━━━━━━━━━━
ꨄ︎-----  -----  -----  -----  -----ꨄ
┌ꨄ✔️ *Activar&apagar* ❌ꨄ︎」
❱➭ *.enable public*
❱➭ *.disable public*
❱➭ *.enable restrict*
❱➭ *.disable restrict*
❱➭ *.enable pconly*
❱➭ *.disable pconly*
❱➭ *.enable anticall*
❱➭ *.disable anticall*
❱➭ *.enable simsimi*
❱➭ *.disable simsimi*
❱➭ *.enable modohorny*
❱➭ *.disable modohorny*
❱➭ *.enable antilink*
❱➭ *.disable antilink*
❱➭ *.enable antilink2*
❱➭ *.disable antilink2*
❱➭ *.enable detect*
❱➭ *.disable detect*
❱➭ *.enable detect2*
❱➭ *.disable detect2*
❱➭ *.enable antitoxic*
❱➭ *.disable antitoxic*
❱➭ *.enable antitraba*
❱➭ *.disable antitraba*
❱➭ *.enable antiarabes*
❱➭ *.disable antiarabes*
❱➭ *.enable modoadmin*
❱➭ *.disable modoadmin*
︎╰━━━━━━━━━━━━━━`.trim()
if (m.isGroup) {
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
await conn.sendFile(m.chat, vn, 'Hola.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
handler.register = false
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}