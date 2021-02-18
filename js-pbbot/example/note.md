#### 事件处理

---

* handleConnect *处理连接*
* handleDisconnect *处理断开*
* handlePrivateMessage *处理私聊消息*
* handleGroupMessage *处理群聊消息*
* handleGroupUploadNotice *处理群组上传通知*
* handleGroupAdminNotice *处理群组管理员通知*
* handleGroupDecreaseNotice *处理群组退群通知*
* handleGroupIncreaseNotice *处理群组进群通知*
* handleGroupBanNotice *处理群组踢人通知*
* handleFriendAddNotice *处理好友添加通知*
* handleFriendRequest *处理好友请求*
* handleGroupRequest 处理入群请求

#### 消息拼接

---

* builder 创建消息
* text(String) 文本内容
* tts(String) 语音消息
* at(qq) 艾特群成员
* atAll 艾特全体成员
* face(id) 表情
* image(url) 图片
* reply(*messageId*) 回复消息
* gift(qq,礼物id) 送礼物

#### 消息发送

---

* sendPrivateMessage(qq,消息内容) 私聊
* sendGroupMessage(群号,消息内容) 群聊