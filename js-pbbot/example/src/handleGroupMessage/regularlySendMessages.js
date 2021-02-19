// 引入机器人依赖
const {
    Msg
} = require('pbbot');
module.exports = {
    regularlySendMessages(date, bot) {
        if (date === '09:38:00') {
            const msg = Msg.builder().atAll().text(`定时推送，当前时间：${date}`);
            bot.sendGroupMessage(910929411, msg);
        }
    }
}