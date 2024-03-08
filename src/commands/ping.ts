import { BotCommand, BotCommandHandler, BotCommandInfo } from ".";

const info: BotCommandInfo = {
    name: "Ping",
    triggers: ["ping", "пинг"],
};

const execute: BotCommandHandler = async (context) => {
    const createdTime = context.createdAt * 1000;
    const currentTime = Date.now();

    context.reply(`Понг (${Math.abs(createdTime - currentTime)} мс)`);
};

const ping: BotCommand = {
    info: info,
    execute: execute,
};

export default ping;
