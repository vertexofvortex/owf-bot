import { BotCommand, BotCommandHandler, BotCommandInfo } from ".";
import redis from "../storage/redis";
import logger from "../utils/logger";

const info: BotCommandInfo = {
    name: "Bind tag",
    triggers: ["bind", "bindtag", "привязать"],
};

const execute: BotCommandHandler = async (context) => {
    const tag = context.text?.split(" ")[1];
    const tagFormat = /.{3,12}#\d+$/; // ancient cursed letters (don't read it aloud)

    if (!tag) {
        context.reply("Укажи свой BattleTag после команды!");

        return;
    }

    if (!tagFormat.test(tag)) {
        context.reply("Это не похоже на BattleTag... Ты уверен, что это он?");

        return;
    }

    const oldTag = await redis.get(String(context.senderId));

    redis
        .set(String(context.senderId), tag)
        .then(() => {
            if (oldTag) {
                context.reply(`Тег успешно изменён с ${oldTag} на ${tag}`);
            } else {
                context.reply(`Тег ${tag} успешно привязан!`);
            }
        })
        .catch((error) => {
            context.reply(
                "Произошла неизвестная ошибка ¯\\_(ツ)_/¯. Передай разработчику, что это как-то связано с Redis"
            );

            throw error;
        });
};

const bindtag: BotCommand = {
    info: info,
    execute: execute,
};

export default bindtag;
