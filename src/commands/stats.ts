import { BotCommand, BotCommandHandler, BotCommandInfo } from ".";
import redis from "../storage/redis";
import axios from "axios";
import logger from "../utils/logger";
import overfast from "../overfast/overfast";

const info: BotCommandInfo = {
    name: "Stats",
    triggers: ["stats", "stat", "стата", "статы", "статс"],
};

const execute: BotCommandHandler = async (context) => {
    const replyMessage = context.replyMessage;

    if (!replyMessage) return;

    const senderId = replyMessage.senderId;
    const tag = await redis.get(String(senderId));

    if (!tag) {
        context.reply("Пользователь не привязал свой тег к боту =(");

        return;
    }

    overfast.get_player_stats(tag.replace("#", "-")).then();
};

const stats: BotCommand = {
    info: info,
    execute: execute,
};

export default stats;
