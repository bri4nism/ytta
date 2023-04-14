/**
   * Made By Code Crew Team 🕴️
   * Subscribe NZRLAFNDI
   * Follow https://github.com/NzrlAfndi
*/

const fs = require('fs')
const chalk = require('chalk')

global.ownerNumber = ['6281320843460']
global.ownerName = 'Egi'

global.botName = 'Hostage'
global.footer = 'Made with ❤️ by Egi'
global.thumb = 'https://telegra.ph/file/a9c87ad6a537229b3e4ea.jpg'
global.payment = 'https://telegra.ph/file/3b3926a09be8c22b45d81.jpg'

global.packname = 'Hostage Bot'
global.author = 'Developed by Egi'

global.prefa = ['.']

global.quotes = {
  welcome: '*Welcome cuy! gausah banyak tingkah & selalu patuhi peraturan yg ada di Grup ini.*',
  leave: '*Goodbye cuy!*'
}

global.mess = (type, m) => {
  let msg = {
    done: 'Done cuy',
    wait: 'Wait cuy',
    owner: 'Perintah ini hanya dapat digunakan oleh Owner!',
    premium: 'Perintah ini hanya dapat digunakan oleh Premium!',
    group: 'Perintah ini hanya dapat digunakan di group!',
    private: 'Perintah ini hanya dapat digunakan di private chat!',
    admin: 'Perintah ini hanya dapat digunakan oleh admin group!',
    botAdmin: 'Bot bukan admin, tidak dapat mengakses fitur tersebut',
    bot: 'Fitur ini hanya dapat diakses oleh Bot',
    dead: 'Fitur ini sedang dimatikan!',
    media: 'Reply media',
    error: "No Results Found"
  } [type]
  if (msg) return m.reply(msg, m.from, { quoted: m })
}

//===> JANGAN DI HAPUS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
