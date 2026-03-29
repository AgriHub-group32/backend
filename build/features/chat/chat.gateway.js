"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const authToken_service_1 = require("../../utils/authToken.service");
const chat_service_1 = require("./chat.service");
let ChatGateway = class ChatGateway {
    constructor(authTokenService, chatService) {
        this.authTokenService = authTokenService;
        this.chatService = chatService;
        this.onlineUsers = new Map();
    }
    async handleConnection(client) {
        setTimeout(() => {
            if (!this.getKeyByValue(this.onlineUsers, client.id)) {
                client.disconnect();
            }
        }, 5000);
    }
    handleDisconnect(client) {
        const userId = this.getKeyByValue(this.onlineUsers, client.id);
        if (userId)
            this.onlineUsers.delete(userId);
    }
    async handleAuthenticate(client, data) {
        try {
            const userId = await this.authTokenService.verifyToken(data.token);
            this.onlineUsers.set(userId, client.id);
            client.emit('authenticated', { userId });
        }
        catch {
            client.emit('error', { message: 'Authentication failed' });
            client.disconnect();
        }
    }
    async handleSendMessage(client, data) {
        const senderId = this.getKeyByValue(this.onlineUsers, client.id);
        if (!senderId)
            return client.emit('error', { message: 'Not authenticated' });
        const room = await this.chatService.findOrCreateRoom(senderId, data.recipient_id);
        const message = await this.chatService.createMessage(room.id, senderId, data.recipient_id, data.text, data.reply_to_id);
        const recipientSocketId = this.onlineUsers.get(data.recipient_id);
        if (recipientSocketId) {
            this.server.to(recipientSocketId).emit('new_message', message);
            await this.chatService.markAsDelivered(message.id);
            client.emit('message_delivered', { message_id: message.id });
        }
        client.emit('message_sent', message);
    }
    async handleMarkRead(client, data) {
        const userId = this.getKeyByValue(this.onlineUsers, client.id);
        if (!userId)
            return;
        const message = await this.chatService.markAsRead(data.message_id, userId);
        if (message) {
            const senderSocketId = this.onlineUsers.get(message.sender_id);
            if (senderSocketId) {
                this.server.to(senderSocketId).emit('message_read', { message_id: data.message_id });
            }
        }
    }
    handleTyping(client, data) {
        const userId = this.getKeyByValue(this.onlineUsers, client.id);
        if (!userId)
            return;
        const recipientSocketId = this.onlineUsers.get(data.recipient_id);
        if (recipientSocketId) {
            this.server.to(recipientSocketId).emit('user_typing', {
                chat_room_id: data.chat_room_id,
                user_id: userId,
            });
        }
    }
    getKeyByValue(map, value) {
        for (const [k, v] of map) {
            if (v === value)
                return k;
        }
        return undefined;
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('authenticate'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleAuthenticate", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('send_message'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleSendMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('mark_read'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "handleMarkRead", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('typing'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleTyping", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true, namespace: '/chat' }),
    __metadata("design:paramtypes", [authToken_service_1.AuthTokenService,
        chat_service_1.ChatService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map