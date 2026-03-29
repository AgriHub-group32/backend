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
exports.CallGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const authToken_service_1 = require("../../utils/authToken.service");
let CallGateway = class CallGateway {
    constructor(authTokenService) {
        this.authTokenService = authTokenService;
        this.onlineUsers = new Map();
        this.activeCalls = new Map();
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
        if (userId) {
            this.endCallsForUser(userId);
            this.onlineUsers.delete(userId);
        }
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
    handleCallInitiate(client, data) {
        const callerId = this.getKeyByValue(this.onlineUsers, client.id);
        if (!callerId)
            return client.emit('error', { message: 'Not authenticated' });
        const targetSocketId = this.onlineUsers.get(data.target_user_id);
        if (!targetSocketId) {
            return client.emit('call_failed', { message: 'User is offline' });
        }
        this.activeCalls.set(callerId, data.target_user_id);
        this.server.to(targetSocketId).emit('call_incoming', {
            caller_id: callerId,
        });
    }
    handleCallAccept(client, data) {
        const calleeId = this.getKeyByValue(this.onlineUsers, client.id);
        if (!calleeId)
            return;
        const callerSocketId = this.onlineUsers.get(data.caller_id);
        if (callerSocketId) {
            this.server.to(callerSocketId).emit('call_accepted', { callee_id: calleeId });
        }
    }
    handleCallReject(client, data) {
        const calleeId = this.getKeyByValue(this.onlineUsers, client.id);
        if (!calleeId)
            return;
        this.activeCalls.delete(data.caller_id);
        const callerSocketId = this.onlineUsers.get(data.caller_id);
        if (callerSocketId) {
            this.server.to(callerSocketId).emit('call_rejected', { callee_id: calleeId });
        }
    }
    handleCallEnd(client, data) {
        const userId = this.getKeyByValue(this.onlineUsers, client.id);
        if (!userId)
            return;
        this.activeCalls.delete(userId);
        this.activeCalls.delete(data.target_user_id);
        const targetSocketId = this.onlineUsers.get(data.target_user_id);
        if (targetSocketId) {
            this.server.to(targetSocketId).emit('call_ended', { user_id: userId });
        }
    }
    handleWebRTCOffer(client, data) {
        const userId = this.getKeyByValue(this.onlineUsers, client.id);
        if (!userId)
            return;
        const targetSocketId = this.onlineUsers.get(data.target_user_id);
        if (targetSocketId) {
            this.server.to(targetSocketId).emit('webrtc_offer', {
                user_id: userId,
                sdp: data.sdp,
            });
        }
    }
    handleWebRTCAnswer(client, data) {
        const userId = this.getKeyByValue(this.onlineUsers, client.id);
        if (!userId)
            return;
        const targetSocketId = this.onlineUsers.get(data.target_user_id);
        if (targetSocketId) {
            this.server.to(targetSocketId).emit('webrtc_answer', {
                user_id: userId,
                sdp: data.sdp,
            });
        }
    }
    handleICECandidate(client, data) {
        const userId = this.getKeyByValue(this.onlineUsers, client.id);
        if (!userId)
            return;
        const targetSocketId = this.onlineUsers.get(data.target_user_id);
        if (targetSocketId) {
            this.server.to(targetSocketId).emit('webrtc_ice_candidate', {
                user_id: userId,
                candidate: data.candidate,
            });
        }
    }
    endCallsForUser(userId) {
        const calleeId = this.activeCalls.get(userId);
        if (calleeId) {
            this.activeCalls.delete(userId);
            const calleeSocketId = this.onlineUsers.get(calleeId);
            if (calleeSocketId) {
                this.server.to(calleeSocketId).emit('call_ended', { user_id: userId });
            }
        }
        for (const [callerId, cId] of this.activeCalls) {
            if (cId === userId) {
                this.activeCalls.delete(callerId);
                const callerSocketId = this.onlineUsers.get(callerId);
                if (callerSocketId) {
                    this.server.to(callerSocketId).emit('call_ended', { user_id: userId });
                }
            }
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
exports.CallGateway = CallGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], CallGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('authenticate'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], CallGateway.prototype, "handleAuthenticate", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('call_initiate'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], CallGateway.prototype, "handleCallInitiate", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('call_accept'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], CallGateway.prototype, "handleCallAccept", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('call_reject'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], CallGateway.prototype, "handleCallReject", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('call_end'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], CallGateway.prototype, "handleCallEnd", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('webrtc_offer'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], CallGateway.prototype, "handleWebRTCOffer", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('webrtc_answer'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], CallGateway.prototype, "handleWebRTCAnswer", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('webrtc_ice_candidate'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], CallGateway.prototype, "handleICECandidate", null);
exports.CallGateway = CallGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: true, namespace: '/calls' }),
    __metadata("design:paramtypes", [authToken_service_1.AuthTokenService])
], CallGateway);
//# sourceMappingURL=call.gateway.js.map