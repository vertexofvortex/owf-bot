import { error } from "console";
import { BotCommand, BotCommandHandler, BotCommandInfo } from ".";
import overfast from "../overfast/overfast";
import redis from "../storage/redis";
import logger from "../utils/logger";
import Template, { Templates } from "../template/template";
import { Components } from "../overfast/openapi";

const info: BotCommandInfo = {
    name: "Hero",
    triggers: ["hero", "герой", "персонаж"],
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

    const hero = context.text?.split(" ")[1];

    if (!hero) {
        context.reply("Укажи имя героя");

        return;
    }

    const reply = await context.reply("Запрашиваю результаты у Близов...");

    try {
        const playerSummary = (
            await overfast.get_player_summary(tag.replace("#", "-"))
        ).data;
        const statsSummary = (
            await overfast.get_player_stats_summary(tag.replace("#", "-"))
        ).data;

        if (!statsSummary.heroes) {
            reply.editMessage({
                message: "Ничего не найдено...",
            });

            return;
        }

        const heroSummary =
            statsSummary.heroes[
                hero as keyof Components.Schemas.PlayerHeroesStats
            ];

        if (!heroSummary) {
            reply.editMessage({
                message: "Ничего не найдено...",
            });

            return;
        }

        const message = Template.parse(Templates.MessageHero, {
            username: playerSummary.username,
            title: playerSummary.title,
            seasonNumber: playerSummary.competitive?.pc?.season,
            heroSegment: Template.parse(Templates.SegmentHero, {
                username: playerSummary.username,
                hero: hero,
                time_played: (heroSummary.time_played / 3600).toFixed(2),
                games_played: heroSummary.games_played,
                games_won: heroSummary.games_won,
                games_lost: heroSummary.games_lost,
                winrate: heroSummary.winrate,
                avg_eliminations: heroSummary.average.eliminations,
                avg_deaths: heroSummary.average.deaths,
                avg_healing: heroSummary.average.healing,
                total_eliminations: heroSummary.total.eliminations,
                total_deaths: heroSummary.total.deaths,
                total_healing: heroSummary.total.healing,
                total_kda: heroSummary.kda,
            }),
        });

        reply.editMessage({
            message: message,
        });
    } catch (error) {
        reply.editMessage({
            message: "Произошла непредвиденная ошибка =(",
        });

        logger.error(`An error occured while fetching stats for player ${tag}`);
        logger.trace(error);
    }
};

const hero: BotCommand = {
    info: info,
    execute: execute,
};

export default hero;
