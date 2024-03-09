import { BotCommand, BotCommandHandler, BotCommandInfo } from ".";
import overfast from "../overfast/overfast";
import redis from "../storage/redis";
import logger from "../utils/logger";
import axios from "axios";

const info: BotCommandInfo = {
    name: "Rank",
    triggers: ["rank", "ранк", "ранг", "чё по рангу"],
};

const execute: BotCommandHandler = async (context) => {
    const replyMessage = context.replyMessage;

    if (!replyMessage) return;

    const senderId = replyMessage.senderId;
    const tag = await redis.get(String(senderId));

    if (!tag) return;

    overfast
        .get_player_summary(tag.replace("#", "-"))
        .then((response) => {
            const ranks = response.data.competitive?.pc;

            if (!ranks) {
                context.reply(
                    "Кажется, этот пользователь ещё не заходил в соревновательную игру"
                );

                return;
            }

            context.reply(
                `Текущие звания игрока ${response.data.username} в ${ranks.season} сезоне:

🛡️ Танк -- ${ranks.tank ? `${ranks.tank.division} ${ranks.tank.tier}` : "❌ не откалиброван"}
🔫 Урон -- ${ranks.damage ? `${ranks.damage.division} ${ranks.damage.tier}` : "❌ не откалиброван"}
➕ Саппорт -- ${ranks.support ? `${ranks.support.division} ${ranks.support.tier}` : "❌ не откалиброван"}
♻️ Открытая очередь -- ${ranks.open ? `${ranks.open.division} ${ranks.open.tier}` : "❌ не откалиброван"}`
            );
        })
        .catch((error) => {
            context.reply(
                `Ошибка получения данных (${error.response.status}) =(`
            );

            logger.error(
                `An error occured while fetching stats for player ${tag}`
            );
            logger.trace(error);
        });
};

const rank: BotCommand = {
    info: info,
    execute: execute,
};

export default rank;
