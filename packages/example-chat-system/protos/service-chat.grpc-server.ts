// @generated by protobuf-ts 2.0.0-alpha.12 with parameters server_grpc1,optimize_code_size
// @generated from protobuf file "service-chat.proto" (package "spec", syntax proto3)
// tslint:disable
import { PostResponse } from "./service-chat";
import { PostRequest } from "./service-chat";
import { ChatEvent } from "./service-chat";
import { JoinRequest } from "./service-chat";
import * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service spec.ChatService
 */
export interface IChatService extends grpc.UntypedServiceImplementation {
    /**
     * returns a response header "x-token" to authorize Post() calls.
     * streams all chat messages.
     *
     * @generated from protobuf rpc: Join(spec.JoinRequest) returns (stream spec.ChatEvent);
     */
    join: grpc.handleServerStreamingCall<JoinRequest, ChatEvent>;
    /**
     * post a message to the chat.
     * must set "x-token" request header obtained from Join().
     *
     * @generated from protobuf rpc: Post(spec.PostRequest) returns (spec.PostResponse);
     */
    post: grpc.handleUnaryCall<PostRequest, PostResponse>;
}
/**
 * @grpc/grpc-js definition for the protobuf service spec.ChatService.
 *
 * Usage: Implement the interface IChatService and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IChatService = ...
 * server.addService(chatServiceDefinition, service);
 * ```
 */
export const chatServiceDefinition: grpc.ServiceDefinition<IChatService> = {
    join: {
        path: "/spec.ChatService/Join",
        originalName: "Join",
        requestStream: false,
        responseStream: true,
        responseDeserialize: bytes => ChatEvent.fromBinary(bytes),
        requestDeserialize: bytes => JoinRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(ChatEvent.toBinary(value)),
        requestSerialize: value => Buffer.from(JoinRequest.toBinary(value))
    },
    post: {
        path: "/spec.ChatService/Post",
        originalName: "Post",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => PostResponse.fromBinary(bytes),
        requestDeserialize: bytes => PostRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(PostResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(PostRequest.toBinary(value))
    }
};