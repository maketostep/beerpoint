// const TelegramApi = require('node-telegram-bot-api')

// const token = '6569694807:AAGSlCP1YWxKoROm2rVVxDHa_M2O93Z5Rb4'

// const bot = new TelegramApi(token, {polling: true})

// const userData = [
//     { id: 755586498, name: 'maketostep', points: 2 },
//     { id: 6569694805, name: 'maketostep2', points: 3 },
// ]

// function getPoints(ID) {
//     const finded = userData.find(user => user.id === ID)
//     return finded.points
// }

// function start() {
//     if( userData.find(user => user.id === userId) === undefined) {
//         userData.push({ id: userId, name: msg.from.username, points: 0})
//         return bot.sendMessage(chatId, `У тебя ${getPoints(userId)} поинтов`) 
//     }  
//     return bot.sendMessage(chatId, `У тебя ${getPoints(userId)} поинтов`)
// }

// start()

const text = '/add 66'

if(text[6] === undefined) {
    num = Number(text[5])
} else {
    num = Number(text[5] + text[6])
    console.log(typeof(num))
}
// return bot.sendMessage(chatId, 'Успешно')