const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaOqbIr2P59sgcIri51d";
global.website=process.env.GURL || "https://api.whatsapp.com/send?phone=+923479191154" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝘼𝙃𝙈₇" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50946328288,923005705557";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_32_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgODgsXG4gICAgICAgIDM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MyxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MixcbiAgICAgICAgNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQjA2Z0xFZnROdC9QNi9hL0V5K1REdTI2SFF2L1FGWGtqZzdGNjdCSXhLcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib19EMFJxZGVUSUdCc3ZiOEJEc0N4Z1wiLFxuICBcInBob25lSWRcIjogXCIyOWVkMzQwZi1hNmRmLTQ1MDgtOWE2Yy0zOTlkZDdjYzBiYTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk0LFxuICAgICAgMTA5LFxuICAgICAgMTU0LFxuICAgICAgNTEsXG4gICAgICAzMixcbiAgICAgIDUxLFxuICAgICAgMTI5LFxuICAgICAgMTE1LFxuICAgICAgMjAzLFxuICAgICAgMTU1LFxuICAgICAgNzgsXG4gICAgICAyMzQsXG4gICAgICAyNTQsXG4gICAgICAxNzksXG4gICAgICAxNzYsXG4gICAgICA0MyxcbiAgICAgIDE4OSxcbiAgICAgIDEzLFxuICAgICAgMjI3LFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgNTMsXG4gICAgICAyMjksXG4gICAgICA3OSxcbiAgICAgIDMwLFxuICAgICAgMzQsXG4gICAgICAyNTQsXG4gICAgICAyMzQsXG4gICAgICAxMjEsXG4gICAgICAyNDAsXG4gICAgICA4LFxuICAgICAgMTk4LFxuICAgICAgOTAsXG4gICAgICA3NyxcbiAgICAgIDEzNyxcbiAgICAgIDE5NSxcbiAgICAgIDM0LFxuICAgICAgMTQ3LFxuICAgICAgNDQsXG4gICAgICAyNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN05KVjZOQlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjUwOTQ2MzI4Mjg4OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWhtXCIsXG4gICAgXCJsaWRcIjogXCIxMDY4Mzc3NjQ0ODExNzA6MzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnVqajZJRkVOcXhqTFVHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0SmFqbjFuZ05hWGtlNDhFazd3d096MktzV29ycU1LdUZqNDlVSXBxRzJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllQbCtXa29JaUxHK3lkOTNDL1NIQUdpbkpGc1E5V1NQQktCSUJQRElxSnI1azF0bGxOdmh6ZzNyTTJNZEtDTldxL0F5R0U1cXhNZ3dXTUFxWEhTY0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVYV1hxcTJiSVRMa211K3M5L1hkNnRMSVZpelJFYmJtSkRWaENFN0xwRVdmNUxVZXk5SHRpMWFqS2pvMGkwbXJmR0hqcVZrQyt2RVJQVFh6R08yVmpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQ2MzI4Mjg4OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE5NjQ3NjYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFITWRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhNZC5qc29uIjogIntcImtleURhdGFcIjpcIlEvWjhTYjkvRm1mczN2NWhTMytKNituSzJqOGJpVGFLMmVaUU5nYjU0WTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQxMzczMDc3OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxOTY0MDg2NjUzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "𝘼𝙃𝙈₇" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝘼𝙃𝙈₇ 𝙎𝙩𝙞𝙘𝙠𝙚𝙧𝙨",
  packname: process.env.PACK_NAME || "Made By",
  botname : process.env.BOT_NAME  || "𝘼𝙃𝙈₇",
  ownername:process.env.OWNER_NAME|| "𝘼𝙃𝙈₇",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "1",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
