import { BotCommand, BotCommandHandler, BotCommandInfo } from ".";
import logger from "../utils/logger";

const info: BotCommandInfo = {
    name: "Ping",
    triggers: ["ping", "пинг"],
};

const execute: BotCommandHandler = async (context) => {
    const createdTime = context.createdAt * 1000;
    const currentTime = Date.now();

    logger.debug(createdTime, currentTime);

    context.reply(`Понг (${Math.abs(createdTime - currentTime)} мс)`);
};

const ping: BotCommand = {
    info: info,
    execute: execute,
};

export default ping;
