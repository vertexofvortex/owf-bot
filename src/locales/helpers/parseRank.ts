import { Components } from "../../overfast/openapi";

const divisions = {
    bronze: "Бронза",
    silver: "Серебро",
    gold: "Золото",
    platinum: "Платина",
    diamond: "Алмаз",
    master: "Мастер",
    grandmaster: "Грандмастер",
    ultimate: "Чемпион",
};

const parseRank = (rank: Components.Schemas.PlayerCompetitiveRank | null) =>
    rank ? `${divisions[rank.division]} ${rank.tier}` : `❌ не откалиброван`;

export default parseRank;
