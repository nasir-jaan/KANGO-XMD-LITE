//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Y1YlA4WkdRQWwvd0lEa2paTU0xVnZXa0Y4QklHcXQ0WVdRRGltQ3gxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidk5QSVJucEwwV2lUVE53a05CNXlKQks3N0FsNDJPeTg0clZoZUxzS1hCND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSUU1VXpCSzdlN0h2RGlmbzYxUlFSVUN5cGg5bUxJSU5WV0cxOHZOUDI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCOXlPQ1pyY0dHTGVoMDlOZ2lEVjhwYjVSRTRqeEhFNmlHeGdZMWJ5dFVvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktDek1Hd2pDZG5wTVBHeFptcWpVS0dBWnZXRE9LWWYrU0tlaWpNdVp4bkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IiswU3YvUEdETVlkaUFMV2t1eDdUSkhFdmVBRmNLQzJRaTVqZTFNVWNDMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBGdmV2L3ZUQVpKOWl3aUg4MkxRbkdCclZ1K1YrZ3ZMM3ErcFhKejRHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0lqSUdYQ0lzckJ2SmpWWi9HVTNDYUJ5QnFWakdYUDlhdnZtNmlNeUZERT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFiWnhXUEZLTzJtK2k0bzUyV2M3WjFRUHpZZ01sN2JWRUplbCsvZ1NhRHNyWjd2VElKWHdqdU42QlJLeFFiTHJVbDRFZzkwRWM3dGxrbi9MUzRIVWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6InFZVDF6S1B4a2kxRVlkMkQxNzd3c09uSk5oeGp6RVJDbEtmSkdSVUQ4WmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSjIzTlNYRFoiLCJtZSI6eyJpZCI6IjkyMzE0MjIzNTIxNzo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjMzMzM3NzA0Njk4MTA4OjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKN2VxWjhIRUxqOTBja0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJVeWkxcnRpYkpVa1pXaWtRVXpVeGdZNFM5OEw5VHZTUmJPRkxGNmlvZ2xRPSIsImFjY291bnRTaWduYXR1cmUiOiI2clBib2F3VEt4TkUzQjhsNCs5a0VtK0d3bWt4a0ZYR2xzQmkzdGZDUXNNZ1dEamk2R2s4eVVEaXBKREJ3NXNHWHBPenRmR21LeE1OMVNWajVrRWZEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibHE4MWt2QWhQU0JJNUYrNkZyeVZ5bjlrWGtnTGFPOHFMTVdUZW9lVFBsdW8xVXJKOUYwQW1BTEswaGs4RjhNQ2NIRUZ4UkwydGRZMDFNYm93QkZLaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMzMzc3MDQ2OTgxMDg6NEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk1vdGE3WW15VkpHVm9wRUZNMU1ZR09FdmZDL1U3MGtXemhTeGVvcUlKVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUJRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY1MDQ4MDEwLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBvRiJ9' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '923242235217' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['''];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
