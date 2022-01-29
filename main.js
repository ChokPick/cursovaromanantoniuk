const TelegramApi = require('node-telegram-bot-api')

const request = require('request')

const token = '5193623994:AAHyM1kopkoEM_QtdRn_qVLPTecC1VI_MHk'

const bot = new TelegramApi(token, {polling: true})

bot.onText(/\/start/, async (msg) =>{
    console.log(msg)

})