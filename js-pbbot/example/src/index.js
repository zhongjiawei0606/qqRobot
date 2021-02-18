// 引入机器人
let {
  createBotServer,
  EventHandler,
  Msg
} = require('pbbot')
// 机器人连接
EventHandler.handleConnect = async (bot) => {
  console.log(`机器人已连接: ${bot.botId.toString()}`)
}
// 机器人断开
EventHandler.handleDisconnect = async (bot) => {
  console.log(`机器人已断开: ${bot.botId.toString()}`)
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
}
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
}
// 端口号
const port = 8081;
// 创建机器人
createBotServer(port)