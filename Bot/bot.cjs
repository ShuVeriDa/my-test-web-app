const {Telegraf} = require('telegraf')
const TOKEN = "6664405728:AAHKI4UmsDZyZ297MPbkvb-FTxzk_8VZD8s"
const bot = new Telegraf(TOKEN)

const web_link = "https://luxury-jelly-10c540.netlify.app"

bot.start((ctx) => ctx.reply('Марша дог1ийла!!!', {
  reply_markup: {
    keyboard: [[{text: "web app", web_app: {url: web_link}}]]
  }
}))

bot.launch()