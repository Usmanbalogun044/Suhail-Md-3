const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348133727356";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_54_04_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTczLFxuICAgICAgICA1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5MixcbiAgICAgICAgNSxcbiAgICAgICAgMTksXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc0LFxuICAgICAgICAzLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0MixcbiAgICAgICAgNzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDkwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDksXG4gICAgICAgIDU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMixcbiAgICAgICAgNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTEzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwa2NHS3I1MzFwZ0J4Z2NEcXFFNTl2cG1wUkVWMGxCTUVUbjZySXFPZHg0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKU1FxRFZUTFJIMmc5bUhubG9JRHhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU1ZDA2ODBhLWIxMjAtNDM4NC05OWRiLTY0YmM2NWZhZTgzMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxMjQsXG4gICAgICAyMTgsXG4gICAgICAxNzksXG4gICAgICA3NCxcbiAgICAgIDEwOSxcbiAgICAgIDEzMSxcbiAgICAgIDUyLFxuICAgICAgNDcsXG4gICAgICAyMTEsXG4gICAgICA1OSxcbiAgICAgIDIxLFxuICAgICAgMTc3LFxuICAgICAgMTU5LFxuICAgICAgMTk2LFxuICAgICAgMTE4LFxuICAgICAgMjA2LFxuICAgICAgMTE0LFxuICAgICAgOTAsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMTA5LFxuICAgICAgNzgsXG4gICAgICAyMDMsXG4gICAgICAyNSxcbiAgICAgIDE2OSxcbiAgICAgIDE1MixcbiAgICAgIDExMixcbiAgICAgIDc2LFxuICAgICAgMjA4LFxuICAgICAgMjQ3LFxuICAgICAgODcsXG4gICAgICAxMDcsXG4gICAgICAxMjUsXG4gICAgICAxNjQsXG4gICAgICAyNDcsXG4gICAgICAxMzAsXG4gICAgICAxNDYsXG4gICAgICAxMzYsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTVdjcHJFQ0VMaU94ODhHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLWVdHYWhON3FjZWRoZ2pIY1cxaEE5SmlaTHo0WTBkdXFPY1FDZVBiU0g0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndXUFNyVEFPZzhvSG9Ea1dEYXZDUzFwNWROVzd5SzgvVWpaRFdkbFJ0ZHNHdUVpd3dERUJtcmlZQTVSRGhSZkRIeU93SlBNWU9RdnVKRFNpYVZKV0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlY1YUptdmVQK3l4TUEwSk5jdHlpZjlOSlptRTE5VGZnV0QrOW5hWno0REtmWUJsS2pqM1BidDI2a3N2VmVZcVRselcrUzY3d0orazl1WWtVZmhlRGlBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzMzcyNzM1Njo1M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzU4MjQ5OTMzMjExODI6NTNAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTMzNzI3MzU2OjUzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc3NzQ1Mjg2MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFOdVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQU50Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTkhaVW13bE1vVGh2KzJPRHJoWnVYMFBjNjE3NktpVVhCTlJ5TC8xc0lpMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NDAyNTc2MDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc3MzY1NDg4NjgyNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFOdS5qc29uIjogIntcImtleURhdGFcIjpcIlkreSsxWTRuTXQweWtNdzhCbGpCQkdpanhVZ2VyRXl0UzYxQllHdUhua2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjQwMjU3NjA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NzYyNDg4ODE3MDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "dollarhunter",
  ownername:process.env.OWNER_NAME|| "dollarhunter<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
