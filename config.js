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
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/JxJY873QyUU65Up2DvDSO1";
global.website=process.env.GURL || "https://chat.whatsapp.com/JxJY873QyUU65Up2DvDSO1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/da1876f8eebf102fcf10f.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923114397148" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923114397148";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923114397148,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_22_05_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAyMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDM5LFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDksXG4gICAgICAgIDc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICAzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDYzLFxuICAgICAgICAyNDksXG4gICAgICAgIDMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjksXG4gICAgICAgIDgwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOSxcbiAgICAgICAgOTksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODMsXG4gICAgICAgIDcwLFxuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvTDI1dDh6bW4yL211Wi9OSDlBN0FFOUU1d29YOVJkcUZYM2NYWjdyeS9jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjc3BOdXFPMFE2eXp5RXJFSlFpWThnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdmN2E3MzQ1LWQ2OTEtNDRjYi04NzFiLTJhOTYwNzMxYTk3YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MCxcbiAgICAgIDI1MyxcbiAgICAgIDcxLFxuICAgICAgMTcyLFxuICAgICAgMTgwLFxuICAgICAgNjIsXG4gICAgICA0LFxuICAgICAgMjUyLFxuICAgICAgMTYyLFxuICAgICAgMjI0LFxuICAgICAgMjAyLFxuICAgICAgMjExLFxuICAgICAgNzMsXG4gICAgICA2MixcbiAgICAgIDUzLFxuICAgICAgMTAzLFxuICAgICAgMTE4LFxuICAgICAgMTM2LFxuICAgICAgMTc2LFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM5LFxuICAgICAgMTYzLFxuICAgICAgMTUyLFxuICAgICAgMTMzLFxuICAgICAgOTgsXG4gICAgICAxMTYsXG4gICAgICA4NyxcbiAgICAgIDIyMCxcbiAgICAgIDIyOSxcbiAgICAgIDEzOSxcbiAgICAgIDQzLFxuICAgICAgOTEsXG4gICAgICAyMjQsXG4gICAgICAyNyxcbiAgICAgIDU4LFxuICAgICAgMTI4LFxuICAgICAgMjAzLFxuICAgICAgMTg2LFxuICAgICAgMjgsXG4gICAgICAzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIWjRLSkZSMlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTE0Mzk3MTQ4OjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW1pclwiLFxuICAgIFwibGlkXCI6IFwiNzU1NjU4ODk0OTkzNTE6NDBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSm5vNGhVUWhNUE9zUVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjNjhIMkdjOC93b0NNeDhMd3VXMnl1ZGJ5UFdXNDJKYllLdUNkYlJBd0NrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInRqZ3NOSHdLbWRXTTdZaFU0V3BTZmd0SjNmYXF1eUpvZ3pTOW5rc2ZoNXhjdUgyVWJ1RGNhQ1R2WHpBRTNVcEdMUE5SNmFrNDV0TmN2OXkxNmVxUUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImo0a3lnSXZRTUdmNG1UYUFKZVVMc1pZYVVra2thOFI1enEzcmdUL0NiVXlFMEc5SS9HWUlpVG8zcmZPUGZnZGFXYmptc093OXhGQ1VQaUlYa3dEakJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzExNDM5NzE0ODo0MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNDY1OTcxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFvb1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQW9vLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOENscVZoLzRVSXhRZ1IyWk9NdS9MTXRwdEZYVm1GM1Avb0JFdFZZdEZMST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NTY1OTE2MCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "MIAN AMIR" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "AMIR",
  ownername:process.env.OWNER_NAME|| "Mian Amir",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "AMIR"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "b25334b585e9c365ca65767daae1c290";
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
