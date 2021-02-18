import { Bot } from "./Bot";
import { onebot } from "../proto/proto";
import IGroupMessageEvent = onebot.IGroupMessageEvent;
import IPrivateMessageEvent = onebot.IPrivateMessageEvent;
import IGroupUploadNoticeEvent = onebot.IGroupUploadNoticeEvent;
import IGroupAdminNoticeEvent = onebot.IGroupAdminNoticeEvent;
import IGroupDecreaseNoticeEvent = onebot.IGroupDecreaseNoticeEvent;
import IGroupIncreaseNoticeEvent = onebot.IGroupIncreaseNoticeEvent;
import IGroupBanNoticeEvent = onebot.IGroupBanNoticeEvent;
import IFriendAddNoticeEvent = onebot.IFriendAddNoticeEvent;
import IGroupRecallNoticeEvent = onebot.IGroupRecallNoticeEvent;
import IFriendRecallNoticeEvent = onebot.IFriendRecallNoticeEvent;
import IFriendRequestEvent = onebot.IFriendRequestEvent;
import IGroupRequestEvent = onebot.IGroupRequestEvent;

export class EventHandler {
  // 处理连接
  static async handleConnect(bot: Bot) {}
  // 处理断开
  static async handleDisconnect(bot: Bot) {}
  // 处理私聊消息
  static async handlePrivateMessage(bot: Bot, event: IPrivateMessageEvent) {}
  // 处理群聊消息
  static async handleGroupMessage(bot: Bot, event: IGroupMessageEvent) {}
  // 处理群组上传通知
  static async handleGroupUploadNotice(
    bot: Bot,
    event: IGroupUploadNoticeEvent
  ) {}
  // 处理群组管理员通知
  static async handleGroupAdminNotice(
    bot: Bot,
    event: IGroupAdminNoticeEvent
  ) {}
  // 处理群组退群通知
  static async handleGroupDecreaseNotice(
    bot: Bot,
    event: IGroupDecreaseNoticeEvent
  ) {}
  // 处理群组进群通知
  static async handleGroupIncreaseNotice(
    bot: Bot,
    event: IGroupIncreaseNoticeEvent
  ) {}
  // 处理群组踢人通知
  static async handleGroupBanNotice(bot: Bot, event: IGroupBanNoticeEvent) {}
  // 处理好友添加通知
  static async handleFriendAddNotice(bot: Bot, event: IFriendAddNoticeEvent) {}

  static async handleGroupRecallNotice(
    bot: Bot,
    event: IGroupRecallNoticeEvent
  ) {}

  static async handleFriendRecallNotice(
    bot: Bot,
    event: IFriendRecallNoticeEvent
  ) {}
  // 处理好友请求
  static async handleFriendRequest(bot: Bot, event: IFriendRequestEvent) {}
  // 处理入群请求
  static async handleGroupRequest(bot: Bot, event: IGroupRequestEvent) {}
}
