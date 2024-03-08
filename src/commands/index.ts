import { ContextDefaultState, MessageContext } from "vk-io";
import ping from "./ping";
import bindtag from "./bindtag";
import stats from "./stats";
import rank from "./rank";

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
    stats: stats,
    rank: rank,
};

export default commands;
