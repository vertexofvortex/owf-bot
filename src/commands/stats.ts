import { BotCommand, BotCommandHandler, BotCommandInfo } from ".";
import redis from "../storage/redis";
import axios from "axios";
import logger from "../utils/logger";

const info: BotCommandInfo = {
    name: "Stats",
    triggers: ["stats", "stat", "стата", "статы", "статс"],
};

const execute: BotCommandHandler = async (context) => {
    const userId = context.senderId;
    const tag = await redis.get(String(userId));

    if (!tag) {
        context.reply("Пользователь не привязал свой тег к боту =(");

        return;
    }

    axios
        .get(`https://overfast-api.tekrop.fr/players/${tag.replace("#", "-")}`)
        .then((response) => {
            context.reply(
                `Никнейм: ${response.data.summary.username}, подпись: ${response.data.summary.title}`
            );
        })
        .catch((error: any) => {
            context.reply(
                `Ошибка получения данных (${error.response.status}) =(`
            );

            logger.error(
                `An error occured while fetching stats for player ${tag}`
            );
            logger.trace(error);
        });
};

const stats: BotCommand = {
    info: info,
    execute: execute,
};

export default stats;
