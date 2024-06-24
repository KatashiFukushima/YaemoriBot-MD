import pkg from '@whiskeysockets/baileys'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = pkg

var handler = m => m
handler.all = async function (m) {

global.getBuffer = async function getBuffer(url, options) {
try {
options ? options : {}
var res = await axios({
method: "get",
url,
headers: {
'DNT': 1,
'User-Agent': 'GoogleBot',
'Upgrade-Insecure-Request': 1
},
...options,
responseType: 'arraybuffer'
})
return res.data
} catch (e) {
console.log(`Error : ${e}`)
}}

let pp = ''
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/327f6ad853cb4f405aa80.jpg')

//creador
global.creador = 'Wa.me/573012482597'
global.ofcbot = `${conn.user.jid.split('@')[0]}`

//Reacciones De Comandos.!
global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//sms espera
global.wait = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waitt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waittt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';
global.waitttt = '*⏰️ 𝗘𝘀𝗽𝗲𝗿𝗲 𝗨𝗻 𝗠𝗼𝗺𝗲𝗻𝘁𝗼 ...*';

//Mensajes Fakes

global.fkontak = { key: { participants:"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

var canal = 'https://whatsapp.com/channel/0029Va8GeVFAO7REOj3qnW37' 
var canal2 = 'https://whatsapp.com/channel/0029VaGGynJLY6d43krQYR2g' 
var canal3 = 'https://whatsapp.com/channel/0029Va4QjH7DeON0ePwzjS1A'
var grupofb = 'https://www.facebook.com/groups/872989990425789/?ref=share&mibextid=NSMWBT' 
var git = 'https://github.com/OfcDiego' 
var youtube = 'https://www.youtube.com/@Yoshiko_team' 
var github = 'https://github.com/OfcDiego/YaemoriBot-MD' 
var facebook = 'https://www.facebook.com/groups/872989990425789' 

global.redesMini = [canal, canal2, canal3, grupofb, git, youtube, github, facebook].getRandom()

global.canalesMini = [canal, canal2, canal3].getRandom()

var img = 'https://qu.ax/dXNm.jpg'
var img2 = 'https://qu.ax/NeBt.jpg'
var img3 = 'https://qu.ax/EFKB.jpg'
var img4 = 'https://qu.ax/pnKB.jpg'
var img5 = 'https://qu.ax/LuwU.jpg'
var img6 = 'https://qu.ax/Avth.jpg'
var img7 = 'https://qu.ax/YsDx.jpg'
var img8 = 'https://qu.ax/JhJn.jpg'
var img9 = 'https://qu.ax/TVlC.jpg'
var img10 = 'https://qu.ax/cMOE.jpg'

global.miniImg = [img, img2, img3, img4, img5, img6, img7, img8, img9, img10].getRandom()

//• ↳ ◜𝑻𝑰𝑬𝑴𝑷𝑶 𝑹𝑷𝑮◞ • ⚔
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 1: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 2: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 3: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 4: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 5: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 6: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 7: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌅'; break; case 8: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 9: hour = 'Lɪɴᴅᴀ Mᴀɴ̃ᴀɴᴀ 🌄'; break; case 10: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 11: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 12: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 13: hour = 'Lɪɴᴅᴏ Dɪᴀ 🌤'; break; case 14: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 15: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 16: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 17: hour = 'Lɪɴᴅᴀ Tᴀʀᴅᴇ 🌆'; break; case 18: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 19: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 20: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 21: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 22: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break; case 23: hour = 'Lɪɴᴅᴀ Nᴏᴄʜᴇ 🌃'; break;}
global.saludo = "" + hour;

const moji = (await axios.get(`https://raw.githubusercontent.com/KatashiFukushima/YaemoriBot-MD/main/storage/juegos/emojis.json`)).data
const emoji = await moji[Math.floor(moji.length * Math.random())]

var credit = 'X8KpIFJlcXVlc3RlZCBieSBDdXJpb3NpdHlCb3Rf'
global.cred = Buffer.from(credit, 'base64')

global.nombre = conn.getName(m.sender)
global.taguser = '@' + m.sender.split("@s.whatsapp.net")
var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: `${packname}`, orderTitle: 'Bang', thumbnail: miniImg, sellerJid: '0@s.whatsapp.net'}}}

//global.fake = { contextInfo:{ forwardingScore: 0, externalAdReply: {title: '🌟 Bienvenido ' + nombre, body: team, sourceUrl: redesMini, thumbnailUrl: miniImg }}} //Fake simple

global.fake = { contextInfo: { mentionedJid: conn.parseMention(wm), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363178367665133@newsletter', serverMessageId: '', newsletterName: '💫👁️‍🗨️ Katashi Fukushima 🥷🏻🚀' }, externalAdReply: { title: packname, body: `ꪶໍٜ߭۫ިׅ࣪۬߭ׄ🥷ꫂꥈ Hola! ` + nombre, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: miniImg, thumbnail: miniImg, sourceUrl: redesMini }}}, { quoted: m } //fake con reenviado de canal
}

export default handler
