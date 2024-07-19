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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "61455433843,923005705557";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_35_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTUwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUyLFxuICAgICAgICA4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODksXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDk4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NixcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICA2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNixcbiAgICAgICAgMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjExLFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBDOFplZGhaZGhCU21IM2JzRTZZTkRia3VUb0RpR1dxUG4vSGQxdEswVEE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjE0NTU0MzM4NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYxQzgzQTg1M0IwREU5MjM3RTAwQjYzQjZBNUY2RjU4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTM2MDE0NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjYxNDU1NDMzODQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4OUI1MjM3Nzg1MEFDNENFQkMzNzJCRjYwRDcwRTRDMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEzNjAxNDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiczFEZkNrQzdUUzJWZ3kzY29lM3ZUQVwiLFxuICBcInBob25lSWRcIjogXCIzODU5ZjMzNi0wZTMyLTQwNDMtYTM5Yy03MTI1MDUyNzkwNjVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUxLFxuICAgICAgMTM2LFxuICAgICAgMTc5LFxuICAgICAgMjcsXG4gICAgICAxMjUsXG4gICAgICAzOSxcbiAgICAgIDIyOCxcbiAgICAgIDczLFxuICAgICAgMTg3LFxuICAgICAgMTQ1LFxuICAgICAgMTM2LFxuICAgICAgMTk0LFxuICAgICAgNjUsXG4gICAgICA1NCxcbiAgICAgIDgsXG4gICAgICA0OCxcbiAgICAgIDE5MSxcbiAgICAgIDksXG4gICAgICAzOCxcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgNzIsXG4gICAgICA2MSxcbiAgICAgIDc1LFxuICAgICAgMjEsXG4gICAgICAxMDMsXG4gICAgICAzMSxcbiAgICAgIDE1MSxcbiAgICAgIDE0OCxcbiAgICAgIDI0MyxcbiAgICAgIDIyMCxcbiAgICAgIDIzNSxcbiAgICAgIDIyOCxcbiAgICAgIDM4LFxuICAgICAgMjQ3LFxuICAgICAgMTAsXG4gICAgICAyNTEsXG4gICAgICAxODQsXG4gICAgICAyMTQsXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSVEc5V0w0TlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNjE0NTU0MzM4NDM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmLzwnZmD4oKHXCIsXG4gICAgXCJsaWRcIjogXCIxMDc3MTQwODg4MjA3NTc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbVAwT1lIRUltKzU3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkcyUCsvQ2dDSGQrckFBdlVpSW50K1AreFRodjdaV1JkL0NuaGdpSTVVQms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiN3p4NG9pL3BlTllNQ3IwUDZXemxFTHNML0ZpOU1aNXdzRXNJWUxyRGc0d0xieURxQ1hwVE5vVHl5NXVIcjBhRXQ2bk5IM1Q1WHFJbUlGZ2x4Y2NqQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWHVDZ3VXekJJdGdYYXJwcmtEdUxFU0IrMXBBZGpSUGZiY3ErUHFkdVBaRkU1OVltcW9XRFh5N2k4Zm5DOXl3Z1Q0MDlXU24wU01vWlJoN2hGS0J2aHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNjE0NTU0MzM4NDM6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzNjAxNDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDMWhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMxaC5qc29uIjogIntcImtleURhdGFcIjpcIjFFYXVIdnpzQVhiaDZvd1ZvbXh5K3pHTnNBYjI0TUlNVUJCS1daSFoxZms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA5NDI3MDM2MSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMzYwMTQzMzYxXCJ9Igp9"  // PUT your SESSION_ID 


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
