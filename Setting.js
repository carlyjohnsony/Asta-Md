const fs = require('fs-extra')
//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '260776642930' ;
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://nipsy:
200518kay@cluster0.94tna.mongodb.net/" ; 
global.port=5000  ;
global.audio = '' ; 
global.video = '' ;
global.blockJids = process.env.BLOCK_JID ||'120363169665426586@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363169665426586@g.us' ;
global.email = 'astromedia0010@outlook.com' ; 
global.github = 'https://github.com/Astropeda/Asta-Md' ;
global.location = 'Zambia lusaka' ;
global.timezone  = process.env.TIME_ZONE || 'Africa/Lusaka'
global.gurl = '' ; 
global.sudo =  process.env.SUDO || "260760431115" ;
global.devs = "2348039607375"; //Dont change it
global.mztit = process.env.MZTIT ||"Asta-Md", 
global.Gname = process.env.GNAME ||"Asta-Md-sᴜᴘᴘᴏʀᴛ",
global.zyt = process.env.ZYT || '1',
global.waUrl = process.env.WAURL ||"",
global.website = '' ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/54efddccf41281ad7ec51.jpg' ;
module.exports = {
  sessionName: process.env.SESSION_ID || '',
  botname: process.env.BOT_NAME || 'Asta-Md',
  ownername:  process.env.OWNER_NAME || `Ni Pu si`,
  author:  process.env.PACK_AUTHER || 'Nipsy's 🍒', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'true',
  packname:  process.env.PACK_NAME || "Creations 😩" , 
  autoreaction: process.env.AUTO_REACTION || 'false',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true', 
  antifake :   process.env.FAKE_COUNTRY_CODE ||'212',
  readmessage: process.env.READ_MESSAGE || 'false',
  HANDLERS: process.env.PREFIX || '.',
  warncount : process.env.WARN_COUNT || 2,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog:process.env.MSGS_IN_LOG ||'false',
  pmMsgsInLog:process.env.PM_MSGS_IN_LOGS ||'false',
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false', 
  antilink: process.env.ANTILINK_VALUES || 'all',
  antilinkaction: process.env.BRANCH || 'remove',
  BRANCH: process.env.BRANCH || 'Main',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "34wcCGPoe3yaGtpiBZgx4SN7",
  caption :process.env.CAPTION || "\t*ᴘᴏᴡᴇʀᴇᴅ ʙʏ Asta-Md* ",
  promote_demote_messages : process.env.PROMOTE_DEMOTE_MESSAGES || 'true' ,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY ||'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' ,
  VERSION: process.env.VERSION || 'V.4.5.0',
  LANG: process.env.THEME|| 'Nipsy',
  menu : process.env.MENU || '',
  WORKTYPE: process.env.WORKTYPE || 'private'
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
