import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let menu = `*˚₊·˚₊· ͟͟͞͞➳❥ @${m.sender.split("@")[0]}*
*˚₊·˚₊· ͟͟͞͞➳❥* 𝙍𝙖𝙮𝙓𝙖𝙓𝙭 𝘽𝙊𝙏
*☆═━┈◈ ╰ ${vs} ㎇ ╯ ◈┈━═☆*
*│* 
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal1()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'creador' : 'owner'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupolista' : 'grouplist'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'estado' : 'status'}_ 
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'velocidad' : 'ping'}_ 
*│* ┊▸ ✦ _${lenguajeGB.lenguaje() == 'es' ? 'términos y condiciones' : 'terms'}_ 
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal3()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'google *texto*' : 'googlef *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'ia *texto*' : 'chatgpt *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'yts *texto*' : 'yts *text*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal4()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'imagen *texto*' : 'gimage *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'facebook *enlace*' : 'facebookdl *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mediafire *enlace*' : 'mediafiredl *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'play *nombre o enlace*' : 'play *name*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tiktok *enlace*' : 'tkdl *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'openiamage *texto*' : 'dalle *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'midjourney *texto*' : 'openjourney *text*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal5()}_ ◂◂*
*│* ┊
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'img *sticker*' : 'toimg *sticker*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'url *imagen*' : 'tourl *image*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp4 *sticker*' : 'tovideo *sticker*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'gif *video*' : 'togif *video*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'mp3 *video o audio*' : 'tovn *video or audio*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'tts *texto*' : 'totts *text*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal6()}_ ◂◂*
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'admins' : 'dmins'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'enlace' : 'linkgroup'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'inspeccionar *enlace*' : 'inspect *link*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal7()}_ ◂◂*
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'notificar *texto*' : 'hidetag'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'sacar *tag*' : 'kick *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'invitar *número*' : 'invite *number*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'daradmin *tag*' : 'promote *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'quitaradmin *tag*' : 'demote *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'prohibir *tag*' : 'deprive *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desprohibir *tag*' : 'undeprive *tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiardesc *texto*' : 'setdesc'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiarnombre *texto*' : 'setname'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'cambiarpp *imagen*' : 'setppgc *image*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevoenlace' : 'resetlink'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupo abrir' : 'group open'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'grupo cerrar' : 'group close'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'invocar' : 'tagall'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙ 
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal10()}_ ◂◂*
*│* ┊▸ ✦ _on_
*│* ┊▸ ✦ _off_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal11()}_ ◂◂*
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'verificar *nombre.edad*' : 'verify *name.age*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'anulareg *id de registro*' : 'unreg *id registration*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'idregistro' : 'idregister'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
*│*
*╰ ㊂ ▸▸ _${lenguajeGB.smsMenuTotal12()}_ ◂◂*
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'respaldo' : 'backup'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'banusuario *@tag*' : 'banuser *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbanusuario *@tag*' : 'unbanuser *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevabiobot *texto*' : 'setbiobot *texto*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevonombrebot *texto*' : 'setbiobot *texto*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'nuevafotobot *imagen*' : 'setppbot *image*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'actualizar' : 'update'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'banearchat' : 'banchat'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbanearchat' : 'unbanchat'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'salir' : 'leave'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bloquear *@tag*' : 'block *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'desbloquear *@tag*' : 'unblock *@tag*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'obtenercodigo *nombre de archivo*' : 'getplugin *filename*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'borrardatos *número*' : 'deletedatauser *number*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'unete *enlace*' : 'join *link*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcsubbot *texto*' : 'bcsubbot *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcc *texto*' : 'bcchats *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bcgc *texto*' : 'broadcastgc *text*'}_
*│* ┊▸ ✦ _${usedPrefix}${lenguajeGB.lenguaje() == 'es' ? 'bc *texto*' : 'broadcastall *text*'}_
*│* ╰∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙
 `.trim()
    
const vi = ['https://s31.aconvert.com/convert/p3r68-cdx67/fudrk-3qhve.mp4',
'https://s31.aconvert.com/convert/p3r68-cdx67/fudrk-3qhve.mp4',
'https://s31.aconvert.com/convert/p3r68-cdx67/fudrk-3qhve.mp4']

const getRandomImage = async () => {
try {
return { image: await vi.getRandom(), isVideo: true }
} catch (error) {
try {
return { image: await gataMenu.getRandom(), isVideo: false }
} catch (error) {
try {
return { image: await gataImg.getRandom(), isVideo: false }
} catch (error) {
return { image: imagen5, isVideo: false }
}}}}

const result = await getRandomImage();
const filename = result.isVideo ? 'menu.mp4' : 'menu.jpg';
await conn.sendFile(m.chat, result.image, filename, menu, fkontak, false, { mentions: [m.sender] })

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|\?)$/i
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
