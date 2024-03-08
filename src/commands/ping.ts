import { BotCommand, BotCommandHandler, BotCommandInfo } from ".";

const info: BotCommandInfo = {
    name: "Ping",
    triggers: ["ping", "пинг"],
};

const execute: BotCommandHandler = async (context) => {
    context.reply("Понг");
};

const ping: BotCommand = {
    info: info,
    execute: execute,
};

export default ping;
