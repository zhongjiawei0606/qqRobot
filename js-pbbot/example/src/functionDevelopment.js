// 引入机器人依赖
const {
    createBotServer,
    EventHandler,
    Msg,
    Bot,
} = require('pbbot');

const request = require('request');

const tool = require('../tool/index');

module.exports = {
    // 美图
    accessToBeautiful(bot, qq, isGroup) {
        request.post({
            url: 'https://api.apiopen.top/getImages',
            form: {
                count: 1
            }
        }, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                const res = JSON.parse(body);
                const imgUrl = res.result[0].img;
                let msg = Msg.builder().image(imgUrl);
                if (!isGroup) {
                    bot.sendPrivateMessage(qq, msg);
                } else {
                    bot.sendGroupMessage(qq, msg)
                }
            }
        })
    },
    // 历史上的今天
    historyToday(bot, qq, isGroup) {
        const key = 'fcee754357c8297ea1c774a0a9ce8422';
        const date = `${parseInt(tool.dateFormat('mm', new Date()))}/${parseInt(tool.dateFormat('dd', new Date()))}`;
        request(`http://v.juhe.cn/todayOnhistory/queryEvent.php?date=${date}&key=${key}`, (err, response, body) => {
            if (!err && response.statusCode == 200) {
                const res = JSON.parse(body);
                const dateList = res.result;
                let msgList = '';
                dateList.forEach(element => {
                    msgList += `[${element.date}] ${element.title}\n`;
                });
                let msg = Msg.builder().text(msgList);
                if (!isGroup) {
                    bot.sendPrivateMessage(qq, msg);
                } else {
                    bot.sendGroupMessage(qq, msg)
                }
            }
        })
    },
    // 算命
    fortuneTellers(bot, qq, groupId) {
        const key = '0d45ae8d31c430f1c7354c6daef52353';
        request(`http://japi.juhe.cn/qqevaluate/qq?qq=${qq}&key=${key}`, (err, response, body) => {
            if (!err && response.statusCode == 200) {
                const res = JSON.parse(body);
                const data = res.result.data;
                if (!groupId) {
                    let msg = Msg.builder().text(data.conclusion + '\n').text(data.analysis);
                    bot.sendPrivateMessage(qq, msg);
                } else {
                    let msg = Msg.builder().at(qq).text('\n').text(data.conclusion + '\n').text(data.analysis);
                    bot.sendGroupMessage(groupId, msg)
                }
            }
        })
    }
}