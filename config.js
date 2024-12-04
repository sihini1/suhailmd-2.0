const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_40_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTE3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDYyLFxuICAgICAgICA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgODcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwLFxuICAgICAgICA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NixcbiAgICAgICAgODAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNixcbiAgICAgICAgNyxcbiAgICAgICAgNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg1LFxuICAgICAgICA2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICA3NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJxcWtheHIxVjRMOVhpc1JKaGlpY3ZuaGVodWN4YmNQd21LKzgrdExyRGxrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQxMDE4OTA2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI5MzIyQTZGMkE2MkUwNDkyRDRBMDEyNERBREYyQUZCQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMzMTI0NDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc0MTAxODkwNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRkNGQzlBQzJDRTgzNDZBRjUxOUQ4QTJENUMwRjFDNTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMzEyNDQ2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInBHQXhfLUxxUU5hcVZDTmxMVXM3VHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWZkNTU1ZGEtMjIzNS00ZDcwLWIwYzItY2IwYTE4ODEzMDVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAxNTQsXG4gICAgICAxMjEsXG4gICAgICAzMSxcbiAgICAgIDI1LFxuICAgICAgMTYxLFxuICAgICAgMzksXG4gICAgICA1NyxcbiAgICAgIDQ2LFxuICAgICAgMTYsXG4gICAgICA5MixcbiAgICAgIDE2MCxcbiAgICAgIDQ1LFxuICAgICAgMTQ4LFxuICAgICAgMTg0LFxuICAgICAgMTA3LFxuICAgICAgNzYsXG4gICAgICAxNjcsXG4gICAgICA4NyxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDcwLFxuICAgICAgMjI4LFxuICAgICAgMTA1LFxuICAgICAgMjI0LFxuICAgICAgMTI0LFxuICAgICAgNDMsXG4gICAgICAxNTAsXG4gICAgICAxNDksXG4gICAgICA4MCxcbiAgICAgIDEwOCxcbiAgICAgIDE0MSxcbiAgICAgIDE1MixcbiAgICAgIDQ4LFxuICAgICAgMTg1LFxuICAgICAgMTQzLFxuICAgICAgMTU3LFxuICAgICAgMTkxLFxuICAgICAgMjIyLFxuICAgICAgMTg3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlAzNjgxRVBOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc0MTAxODkwNjoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE2OTM1Mjk5NzQ4MDc4OjE5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlNhZGVlcGEgVGhhdGhzYXJhXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmZLbHZvRUVMYi93TG9HR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBcEI3STN2S3F1TzVHaVpTOWpCRjlTa1pVKzJWY0NJVGF6WjJtbncwWUdZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllpWUJXcEhlVEEzNWxFYXkyaGVKZ0tuaXRjaTRsUVgvV0dIN253Y2pWUlVEcjB0MUZWeFRlUW00c3BiRDdFZVJJZjhrb3p3L1FmRDRXNXorMnA5L0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxDYllDa1B2bkVoSXZkVCtXbWh1SVN6cStQaW91WkxmdGx4eU9UNFlZbWRjVG1pL2pENmpZbUZUZVlKUmRoR1VOUXIzZVNjMjhVWUNGL2w5MEFsdWdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQxMDE4OTA2OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMzMTI0NDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMbHhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxseC5qc29uIjogIntcImtleURhdGFcIjpcIlBYMlo3ZVJGejhVbGdid3pOWVB5SWplbmd5VWtKck4rVW1vbm84YmtlbzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMyOTk2NDMwOCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzIzNDY2MTQ1M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "✨ sadeepa 🌟🍃",
  ownername:process.env.OWNER_NAME|| "✨ sadeepa 🌟🍃",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
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
