// 引入机器人依赖
const {
  createBotServer,
  EventHandler,
  Msg,
} = require('pbbot');

const request = require('request');
// 工具包
const tool = require('../tool/index');
// 复读机
const rereadMachine = require('./handleGroupMessage/rereadMachine.js');
// 定时推送
const regularlySendMessages = require('./handleGroupMessage/regularlySendMessages.js');

const fd = require('./functionDevelopment.js')

const adminID = 1157445650;

// 机器人连接
EventHandler.handleConnect = async (bot) => {
  console.log(`[${bot.botId.toString()}]已连接`);
  bot.sendPrivateMessage(adminID, Msg.builder().text(`[${bot.botId.toString()}]已连接`).face(179));
}
// 机器人断开
EventHandler.handleDisconnect = async (bot) => {
  console.log(`[${bot.botId.toString()}]已断开`);
}
// 私聊处理
EventHandler.handlePrivateMessage = async (bot, event) => {
  // 消息内容
  const rawMsg = event.rawMessage;
  // QQ号
  const userId = event.userId;
  // QQ昵称
  const nickName = event.sender.nickname;
  // 日志
  console.log(`[私聊消息][${nickName}][${userId.toString()}]: ${rawMsg}`);
  if (rawMsg.includes('美图')) {
    fd.accessToBeautiful(bot, userId)
  }
  // 历史上的今天
  // if (rawMsg.includes('历史') && rawMsg.includes('今天')) {
  //   fd.historyToday(bot, userId)
  // }
  if (rawMsg.includes('算命')) {
    fd.fortuneTellers(bot, userId)
  }
};
// 群聊处理
EventHandler.handleGroupMessage = async (bot, event) => {
  // 消息内容
  const rawMsg = event.rawMessage;
  // QQ号
  const userId = event.userId;
  // QQ昵称
  const nickName = event.sender.nickname;
  // 群号
  const groupId = event.groupId;
  // 日志
  console.log(`[群聊消息][${groupId.toString()}][${nickName}][${userId.toString()}]: ${rawMsg}`);
  // 复读机
  await rereadMachine.rereadMachine(bot, rawMsg, groupId);
  // 火星文
  await rereadMachine.martianLanguage(bot, rawMsg, groupId);
  // 美图
  if (rawMsg.includes('美图') || rawMsg.includes('涩图')) {
    fd.accessToBeautiful(bot, groupId, true);
  }
  // 算命
  if (rawMsg.includes('算命')) {
    fd.fortuneTellers(bot, userId, groupId)
  }
}
// 端口号
const port = 8081;
// 创建机器人
createBotServer(port);