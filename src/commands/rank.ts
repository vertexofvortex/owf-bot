import { BotCommand, BotCommandHandler, BotCommandInfo } from ".";
import parseRank from "../locales/helpers/parseRank";
import overfast from "../overfast/overfast";
import redis from "../storage/redis";
import Template, { Templates } from "../template/template";
import logger from "../utils/logger";

const info: BotCommandInfo = {
    name: "Rank",
    triggers: ["rank", "ранк", "ранг", "чё по рангу"],
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

    const reply = await context.reply("Запрашиваю результаты у Близов...");

    overfast
        .get_player_summary(tag.replace("#", "-"))
        .then((response) => {
            const ranks = response.data.competitive?.pc;

            if (!ranks) {
                reply.editMessage({
                    message:
                        "Кажется, этот пользователь ещё не заходил в соревновательную игру",
                });

                return;
            }

            reply.editMessage({
                message: Template.parse(Templates.MessageRanks, {
                    username: response.data.username,
                    seasonNumber: ranks.season,
                    tankRank: parseRank(ranks.tank),
                    damageRank: parseRank(ranks.damage),
                    supportRank: parseRank(ranks.support),
                    openQueueRank: parseRank(ranks.open),
                }),
            });
        })
        .catch((error) => {
            reply.editMessage({
                message: `Ошибка получения данных =(\n\nHTTP-код: ${error.response.status}`,
            });

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
