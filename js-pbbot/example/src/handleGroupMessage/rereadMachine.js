// 引入机器人依赖
const {
    Msg
} = require('pbbot');

const request = require('request');

module.exports = {
    rereadMachine(bot, rawMsg, groupId) {
        if (rawMsg[0] === 'f' || rawMsg[0] === 'F') {
            let msg = Msg.builder().tts(rawMsg.substring(1));
            bot.sendGroupMessage(groupId, msg)
        }
    },
    martianLanguage(bot, rawMsg, groupId) {
        if (rawMsg[0] === 'h' || rawMsg[0] === 'H') {
            let text = encodeURI(rawMsg.substring(1));
            const key = '83271599a4ab2480a4f2a2796c8d136b';
            request(`http://japi.juhe.cn/charconvert/change.from?text=${text}&type=2&key=${key}`, (err, response, body) => {
                if (!err && response.statusCode == 200) {
                    const res = JSON.parse(body);
                    let msg = Msg.builder().text(res.outstr);
                    bot.sendGroupMessage(groupId, msg)
                }
            })
        }
    }
}