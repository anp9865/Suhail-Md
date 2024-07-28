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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_46_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MSxcbiAgICAgICAgNixcbiAgICAgICAgMTMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM0LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwLFxuICAgICAgICA3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODMsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgODcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICA4MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibU04QlVSTk9PcTd0S21TVEdvYW1TUWRYVHNGSWNtQ0xveCtuWkhUbTBaTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIzMzc1NzA1NDQxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjY1Nzc2RjYwMzgyQ0RGRjVCMUUzREE2QzQ5NkRFOUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMTk1OTg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMzM3NTcwNTQ0MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZFQjY4M0QzRTBFOEYxNzYxMzk3N0ZCOTAxMTg4MjFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjE5NTk4N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKSjcxYVV1cFFRLUV1SUs5UGpvQ1VBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI5OWM1MDNkLWQ1ODctNGYwYi1iMGI5LTczMGZiMjFiNDBmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICA3NyxcbiAgICAgIDI1MCxcbiAgICAgIDYxLFxuICAgICAgMjQ5LFxuICAgICAgMzUsXG4gICAgICA2MixcbiAgICAgIDIwMCxcbiAgICAgIDE4MyxcbiAgICAgIDExOSxcbiAgICAgIDU5LFxuICAgICAgNDUsXG4gICAgICAxMDQsXG4gICAgICAxNzEsXG4gICAgICAxNTAsXG4gICAgICAxMTgsXG4gICAgICA5MixcbiAgICAgIDEyMyxcbiAgICAgIDIyMCxcbiAgICAgIDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjIsXG4gICAgICAxNDksXG4gICAgICA4MCxcbiAgICAgIDEwNixcbiAgICAgIDI1MCxcbiAgICAgIDIxMCxcbiAgICAgIDExMCxcbiAgICAgIDIwNyxcbiAgICAgIDIxMixcbiAgICAgIDExMCxcbiAgICAgIDY4LFxuICAgICAgMTMzLFxuICAgICAgMTMzLFxuICAgICAgNzAsXG4gICAgICAxODIsXG4gICAgICAzLFxuICAgICAgMTc2LFxuICAgICAgNjksXG4gICAgICA3MCxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFMlhaSktBOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMzM3NTcwNTQ0MTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzE1MjAzNjU4NjMxMDg6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJhaG1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNNlhvODRERUkzQW1yVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhHMGZEcFpzc3Z6dFM3YnRjVDF5cG5IQ2pMTjh2cVQxR1FCczVQWWxNVkk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibG16RFlxYkRtVklRQy85VHgrQmF4MmNXaytLTHI1YXpqODhmWml2RFprOHpxOFNSWWR3cTdUTndRbFgwdi9UNFh4UUs5Qkk2VVRKLzBSRk5rVzZjQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTHBDYjVlK240cHRKLy9lMHplcUcwcHJHZlVIUTcyZVBRWFJUVzdCNmthT1VoR1I4UTV3RFpjTENFT0pnazJ4NURGSWN4ZW12MTJSQXJUTmF4QTlSaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMzM3NTcwNTQ0MTI6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxOTU5ODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGbTRcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZtNC5qc29uIjogIntcImtleURhdGFcIjpcIlVlWkNMRWR4c3B4WXN3dUMxT3BlNnFWTGdvNFp3cDZSclhLSVVlc08rZWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTY5NDYwNjg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIxOTQ1NDQxNTFcIn0iCn0="  // PUT your SESSION_ID 


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
