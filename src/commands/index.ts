import { ContextDefaultState, MessageContext } from "vk-io";
import ping from "./ping";
import bindtag from "./bindtag";

export type BotCommandHandler = (
    context: MessageContext<ContextDefaultState> & object
) => Promise<void>;

export interface BotCommandInfo {
    name: string;
    triggers: string[];
}

export interface BotCommand {
    info: BotCommandInfo;
    execute: BotCommandHandler;
}

const commands = {
    ping: ping,
    bindtag: bindtag,
};

export default commands;
