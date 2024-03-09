import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         * Ability
         */
        export interface Ability {
            /**
             * Name
             * Name of the ability
             * example:
             * Combat Roll
             */
            name: string;
            /**
             * Description
             * Description of the ability
             * example:
             * Roll in the direction you're moving and reload.
             */
            description: string;
            /**
             * Icon
             * Icon URL of the ability
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/24a3f2f619859812bba6b6374513fa971b6b19ccb34950c02118b41cc4f93142.png
             */
            icon: string; // uri
            /**
             * AbilityVideo
             * Video of the ability
             */
            video: {
                /**
                 * Thumbnail
                 * Thumbnail of the ability video
                 * example:
                 * https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt08db01a1d84b0c3b/6333c97e3922a2677fc88c3c/CASSIDY_COMBAT_ROLL.jpg
                 */
                thumbnail: string; // uri
                /**
                 * AbilityVideoLink
                 * Link to the ability video
                 */
                link: {
                    /**
                     * Mp4
                     * MP4 version
                     * example:
                     * https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt71688da0f7834fed/6333c9882dc7636608cc7078/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_CassidyPeacekeeper_WEB_16x9_1920x1080p30_H264.mp4
                     */
                    mp4: string; // uri
                    /**
                     * Webm
                     * WebM version
                     * example:
                     * https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltcff86b9875852be9/6333c9873917977bfd986103/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_CassidyPeacekeeper_WEB_16x9_1920x1080p30_H264.webm
                     */
                    webm: string; // uri
                };
            };
        }
        /**
         * AbilityVideo
         */
        export interface AbilityVideo {
            /**
             * Thumbnail
             * Thumbnail of the ability video
             * example:
             * https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt08db01a1d84b0c3b/6333c97e3922a2677fc88c3c/CASSIDY_COMBAT_ROLL.jpg
             */
            thumbnail: string; // uri
            /**
             * AbilityVideoLink
             * Link to the ability video
             */
            link: {
                /**
                 * Mp4
                 * MP4 version
                 * example:
                 * https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt71688da0f7834fed/6333c9882dc7636608cc7078/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_CassidyPeacekeeper_WEB_16x9_1920x1080p30_H264.mp4
                 */
                mp4: string; // uri
                /**
                 * Webm
                 * WebM version
                 * example:
                 * https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltcff86b9875852be9/6333c9873917977bfd986103/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_CassidyPeacekeeper_WEB_16x9_1920x1080p30_H264.webm
                 */
                webm: string; // uri
            };
        }
        /**
         * AbilityVideoLink
         */
        export interface AbilityVideoLink {
            /**
             * Mp4
             * MP4 version
             * example:
             * https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt71688da0f7834fed/6333c9882dc7636608cc7078/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_CassidyPeacekeeper_WEB_16x9_1920x1080p30_H264.mp4
             */
            mp4: string; // uri
            /**
             * Webm
             * WebM version
             * example:
             * https://assets.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/bltcff86b9875852be9/6333c9873917977bfd986103/OVERWATCH_WEBSITE_CHARACTER_CAPTURE_CassidyPeacekeeper_WEB_16x9_1920x1080p30_H264.webm
             */
            webm: string; // uri
        }
        /**
         * AverageStatsSummary
         */
        export interface AverageStatsSummary {
            /**
             * Eliminations
             * Average eliminations per 10 minutes
             */
            eliminations: number;
            /**
             * Assists
             * Average assists per 10 minutes
             */
            assists: number;
            /**
             * Deaths
             * Average deaths per 10 minutes
             */
            deaths: number;
            /**
             * Damage
             * Average damage done per 10 minutes
             */
            damage: number;
            /**
             * Healing
             * Average healing done per 10 minutes
             */
            healing: number;
        }
        /**
         * BlizzardErrorMessage
         */
        export interface BlizzardErrorMessage {
            /**
             * Error
             * Message describing the error
             * example:
             * Couldn't get Blizzard page (HTTP 503 error) : Service Unavailable
             */
            error: string;
        }
        /**
         * CareerStatCategory
         * Categories of general statistics displayed in the players API
         */
        export type CareerStatCategory = "assists" | "average" | "best" | "combat" | "game" | "hero_specific" | "match_awards" | "miscellaneous";
        /**
         * CareerStats
         * example:
         * {
         *   "all-heroes": [
         *     {
         *       "category": "best",
         *       "label": "Best",
         *       "stats": [
         *         {
         *           "key": "eliminations_most_in_game",
         *           "label": "Eliminations - Most in Game",
         *           "value": 22
         *         },
         *         {
         *           "key": "final_blows_most_in_game",
         *           "label": "Final Blows - Most in Game",
         *           "value": 10
         *         },
         *         {
         *           "key": "all_damage_done_most_in_game",
         *           "label": "All Damage Done - Most in Game",
         *           "value": 25326
         *         },
         *         {
         *           "key": "healing_done_most_in_game",
         *           "label": "Healing Done - Most in Game",
         *           "value": 8196
         *         },
         *         {
         *           "key": "defensive_assists_most_in_game",
         *           "label": "Defensive Assists - Most in Game",
         *           "value": 15
         *         },
         *         {
         *           "key": "offensive_assists_most_in_game",
         *           "label": "Offensive Assists - Most in Game",
         *           "value": 11
         *         },
         *         {
         *           "key": "objective_kills_most_in_game",
         *           "label": "Objective Kills - Most in Game",
         *           "value": 7
         *         },
         *         {
         *           "key": "objective_time_most_in_game",
         *           "label": "Objective Time - Most in Game",
         *           "value": 281
         *         },
         *         {
         *           "key": "multikill_best",
         *           "label": "Multikill - Best",
         *           "value": 3
         *         },
         *         {
         *           "key": "solo_kills_most_in_game",
         *           "label": "Solo Kills - Most in Game",
         *           "value": 10
         *         },
         *         {
         *           "key": "time_spent_on_fire_most_in_game",
         *           "label": "Time Spent on Fire - Most in Game",
         *           "value": 88
         *         },
         *         {
         *           "key": "environmental_kills_most_in_game",
         *           "label": "Environmental Kill - Most in Game",
         *           "value": 1
         *         },
         *         {
         *           "key": "kill_streak_best",
         *           "label": "Kill Streak - Best",
         *           "value": 7
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_game",
         *           "label": "Hero Damage Done - Most in Game",
         *           "value": 17735
         *         },
         *         {
         *           "key": "barrier_damage_done_most_in_game",
         *           "label": "Barrier Damage Done - Most in Game",
         *           "value": 7544
         *         },
         *         {
         *           "key": "assists_most_in_game",
         *           "label": "Assists - Most in Game",
         *           "value": 16
         *         },
         *         {
         *           "key": "objective_contest_time_most_in_game",
         *           "label": "Objective Contest Time - Most in Game",
         *           "value": 155
         *         }
         *       ]
         *     },
         *     {
         *       "category": "average",
         *       "label": "Average",
         *       "stats": [
         *         {
         *           "key": "hero_damage_done_avg_per_10_min",
         *           "label": "Hero Damage Done - Avg per 10 Min",
         *           "value": 7289
         *         },
         *         {
         *           "key": "deaths_avg_per_10_min",
         *           "label": "Deaths - Avg per 10 Min",
         *           "value": 6.41
         *         },
         *         {
         *           "key": "eliminations_avg_per_10_min",
         *           "label": "Eliminations - Avg per 10 Min",
         *           "value": 10.9
         *         },
         *         {
         *           "key": "assists_avg_per_10_min",
         *           "label": "Assists - Avg per 10 min",
         *           "value": 7.48
         *         },
         *         {
         *           "key": "healing_done_avg_per_10_min",
         *           "label": "Healing Done - Avg per 10 Min",
         *           "value": 2715
         *         },
         *         {
         *           "key": "objective_kills_avg_per_10_min",
         *           "label": "Objective Kills - Avg per 10 Min",
         *           "value": 4.7
         *         },
         *         {
         *           "key": "objective_time_avg_per_10_min",
         *           "label": "Objective Time - Avg per 10 Min",
         *           "value": 89
         *         },
         *         {
         *           "key": "final_blows_avg_per_10_min",
         *           "label": "Final Blows - Avg per 10 Min",
         *           "value": 3.85
         *         },
         *         {
         *           "key": "objective_contest_time_avg_per_10_min",
         *           "label": "Objective Contest Time - Avg per 10 Min",
         *           "value": 50
         *         }
         *       ]
         *     },
         *     {
         *       "category": "game",
         *       "label": "Game",
         *       "stats": [
         *         {
         *           "key": "time_played",
         *           "label": "Time Played",
         *           "value": 2807
         *         },
         *         {
         *           "key": "games_played",
         *           "label": "Games Played",
         *           "value": 5
         *         },
         *         {
         *           "key": "games_won",
         *           "label": "Game Won",
         *           "value": 1
         *         },
         *         {
         *           "key": "games_lost",
         *           "label": "Games Lost",
         *           "value": 4
         *         },
         *         {
         *           "key": "hero_wins",
         *           "label": "Hero Win",
         *           "value": 1
         *         }
         *       ]
         *     },
         *     {
         *       "category": "combat",
         *       "label": "Combat",
         *       "stats": [
         *         {
         *           "key": "damage_done",
         *           "label": "Damage Done",
         *           "value": 34098
         *         },
         *         {
         *           "key": "hero_damage_done",
         *           "label": "Hero Damage Done",
         *           "value": 34098
         *         },
         *         {
         *           "key": "deaths",
         *           "label": "Deaths",
         *           "value": 30
         *         },
         *         {
         *           "key": "eliminations",
         *           "label": "Eliminations",
         *           "value": 51
         *         },
         *         {
         *           "key": "objective_kills",
         *           "label": "Objective Kills",
         *           "value": 22
         *         },
         *         {
         *           "key": "final_blows",
         *           "label": "Final Blows",
         *           "value": 18
         *         },
         *         {
         *           "key": "objective_time",
         *           "label": "Objective Time",
         *           "value": 418
         *         },
         *         {
         *           "key": "multikills",
         *           "label": "Multikill",
         *           "value": 1
         *         },
         *         {
         *           "key": "environmental_kills",
         *           "label": "Environmental Kill",
         *           "value": 1
         *         },
         *         {
         *           "key": "objective_contest_time",
         *           "label": "Objective Contest Time",
         *           "value": 233
         *         }
         *       ]
         *     },
         *     {
         *       "category": "assists",
         *       "label": "Assists",
         *       "stats": [
         *         {
         *           "key": "assists",
         *           "label": "Assists",
         *           "value": 35
         *         },
         *         {
         *           "key": "healing_done",
         *           "label": "Healing Done",
         *           "value": 12703
         *         },
         *         {
         *           "key": "defensive_assists",
         *           "label": "Defensive Assists",
         *           "value": 29
         *         },
         *         {
         *           "key": "offensive_assists",
         *           "label": "Offensive Assists",
         *           "value": 21
         *         }
         *       ]
         *     }
         *   ],
         *   "ana": [
         *     {
         *       "category": "hero_specific",
         *       "label": "Hero Specific",
         *       "stats": [
         *         {
         *           "key": "scoped_accuracy_best_in_game",
         *           "label": "Scoped Accuracy - Best in Game",
         *           "value": 45
         *         },
         *         {
         *           "key": "self_healing",
         *           "label": "Self Healing",
         *           "value": 577
         *         },
         *         {
         *           "key": "self_healing_most_in_game",
         *           "label": "Self Healing - Most in Game",
         *           "value": 300
         *         },
         *         {
         *           "key": "enemies_slept",
         *           "label": "Enemies Slept",
         *           "value": 4
         *         },
         *         {
         *           "key": "nano_boost_assists",
         *           "label": "Nano Boost Assists",
         *           "value": 8
         *         },
         *         {
         *           "key": "unscoped_accuracy_best_in_game",
         *           "label": "Unscoped Accuracy - Best in Game",
         *           "value": 55
         *         },
         *         {
         *           "key": "enemies_slept_most_in_game",
         *           "label": "Enemies Slept - Most in Game",
         *           "value": 3
         *         },
         *         {
         *           "key": "nano_boost_assists_most_in_game",
         *           "label": "Nano Boost Assists - Most in Game",
         *           "value": 7
         *         },
         *         {
         *           "key": "biotic_grenade_kills",
         *           "label": "Biotic Grenade Kills",
         *           "value": 9
         *         },
         *         {
         *           "key": "damage_amplified",
         *           "label": "Damage Amplified",
         *           "value": 862
         *         },
         *         {
         *           "key": "damage_amplified_most_in_game",
         *           "label": "Damage Amplified - Most in Game",
         *           "value": 741
         *         },
         *         {
         *           "key": "healing_amplified",
         *           "label": "Healing Amplified",
         *           "value": 647
         *         },
         *         {
         *           "key": "healing_amplified_most_in_game",
         *           "label": "Healing Amplified - Most in Game",
         *           "value": 411
         *         },
         *         {
         *           "key": "nano_boost_assists_avg_per_10_min",
         *           "label": "Nano Boost Assists - Avg per 10 Min",
         *           "value": 5.61
         *         },
         *         {
         *           "key": "healing_amplified_avg_per_10_min",
         *           "label": "Healing Amplified - Avg per 10 Min",
         *           "value": 453
         *         },
         *         {
         *           "key": "biotic_grenade_kills_avg_per_10_min",
         *           "label": "Biotic Grenade Kills - Avg per 10 Min",
         *           "value": 6.31
         *         },
         *         {
         *           "key": "enemies_slept_avg_per_10_min",
         *           "label": "Enemies Slept - Avg per 10 Min",
         *           "value": 2.8
         *         },
         *         {
         *           "key": "unscoped_accuracy",
         *           "label": "Unscoped Accuracy",
         *           "value": 52
         *         },
         *         {
         *           "key": "scoped_accuracy",
         *           "label": "Scoped Accuracy",
         *           "value": 44
         *         },
         *         {
         *           "key": "self_healing_avg_per_10_min",
         *           "label": "Self Healing - Avg per 10 Min",
         *           "value": 404
         *         },
         *         {
         *           "key": "damage_amplified_avg_per_10_min",
         *           "label": "Damage Amplified - Avg per 10 Min",
         *           "value": 604
         *         }
         *       ]
         *     },
         *     {
         *       "category": "best",
         *       "label": "Best",
         *       "stats": [
         *         {
         *           "key": "eliminations_most_in_life",
         *           "label": "Eliminations - Most in Life",
         *           "value": 4
         *         },
         *         {
         *           "key": "all_damage_done_most_in_life",
         *           "label": "All Damage Done - Most in Life",
         *           "value": 1349
         *         },
         *         {
         *           "key": "weapon_accuracy_best_in_game",
         *           "label": "Weapon Accuracy - Best in Game",
         *           "value": 19
         *         },
         *         {
         *           "key": "kill_streak_best",
         *           "label": "Kill Streak - Best",
         *           "value": 4
         *         },
         *         {
         *           "key": "all_damage_done_most_in_game",
         *           "label": "All Damage Done - Most in Game",
         *           "value": 2978
         *         },
         *         {
         *           "key": "eliminations_most_in_game",
         *           "label": "Eliminations - Most in Game",
         *           "value": 7
         *         },
         *         {
         *           "key": "final_blows_most_in_game",
         *           "label": "Final Blows - Most in Game",
         *           "value": 3
         *         },
         *         {
         *           "key": "objective_kills_most_in_game",
         *           "label": "Objective Kills - Most in Game",
         *           "value": 4
         *         },
         *         {
         *           "key": "objective_time_most_in_game",
         *           "label": "Objective Time - Most in Game",
         *           "value": 51
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_game",
         *           "label": "Hero Damage Done - Most in Game",
         *           "value": 2291
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_life",
         *           "label": "Hero Damage Done - Most in Life",
         *           "value": 1194
         *         },
         *         {
         *           "key": "assists_most_in_game",
         *           "label": "Assists - Most in Game",
         *           "value": 16
         *         },
         *         {
         *           "key": "obj_contest_time_most_in_game",
         *           "label": "Obj Contest Time - Most in Game",
         *           "value": 46
         *         }
         *       ]
         *     },
         *     {
         *       "category": "average",
         *       "label": "Average",
         *       "stats": [
         *         {
         *           "key": "healing_done_avg_per_10_min",
         *           "label": "Healing Done - Avg per 10 Min",
         *           "value": 8560
         *         },
         *         {
         *           "key": "deaths_avg_per_10_min",
         *           "label": "Deaths - Avg per 10 Min",
         *           "value": 5.61
         *         },
         *         {
         *           "key": "eliminations_avg_per_10_min",
         *           "label": "Eliminations - Avg per 10 Min",
         *           "value": 9.11
         *         },
         *         {
         *           "key": "hero_damage_done_avg_per_10_min",
         *           "label": "Hero Damage Done - Avg per 10 Min",
         *           "value": 2645
         *         },
         *         {
         *           "key": "assists_avg_per_10_min",
         *           "label": "Assists - Avg per 10 min",
         *           "value": 22.42
         *         },
         *         {
         *           "key": "objective_time_avg_per_10_min",
         *           "label": "Objective Time - Avg per 10 Min",
         *           "value": 64
         *         },
         *         {
         *           "key": "all_damage_done_avg_per_10_min",
         *           "label": "All Damage Done - Avg per 10 Min",
         *           "value": 3235
         *         },
         *         {
         *           "key": "eliminations_per_life",
         *           "label": "Eliminations per Life",
         *           "value": 1.63
         *         },
         *         {
         *           "key": "objective_kills_avg_per_10_min",
         *           "label": "Objective Kills - Avg per 10 Min",
         *           "value": 4.91
         *         },
         *         {
         *           "key": "obj_contest_time_avg_per_10_min",
         *           "label": "Obj Contest Time - Avg per 10 Min",
         *           "value": 36
         *         },
         *         {
         *           "key": "final_blows_avg_per_10_min",
         *           "label": "Final Blows - Avg per 10 Min",
         *           "value": 2.1
         *         }
         *       ]
         *     },
         *     {
         *       "category": "game",
         *       "label": "Game",
         *       "stats": [
         *         {
         *           "key": "time_played",
         *           "label": "Time Played",
         *           "value": 856
         *         },
         *         {
         *           "key": "games_played",
         *           "label": "Games Played",
         *           "value": 2
         *         },
         *         {
         *           "key": "games_won",
         *           "label": "Game Won",
         *           "value": 1
         *         },
         *         {
         *           "key": "games_won",
         *           "label": "Game Won",
         *           "value": 1
         *         },
         *         {
         *           "key": "games_won",
         *           "label": "Game Won",
         *           "value": 1
         *         },
         *         {
         *           "key": "hero_wins",
         *           "label": "Hero Win",
         *           "value": 1
         *         },
         *         {
         *           "key": "win_percentage",
         *           "label": "Win Percentage",
         *           "value": 50
         *         },
         *         {
         *           "key": "games_lost",
         *           "label": "Game Lost",
         *           "value": 1
         *         }
         *       ]
         *     },
         *     {
         *       "category": "combat",
         *       "label": "Combat",
         *       "stats": [
         *         {
         *           "key": "eliminations",
         *           "label": "Eliminations",
         *           "value": 13
         *         },
         *         {
         *           "key": "deaths",
         *           "label": "Deaths",
         *           "value": 8
         *         },
         *         {
         *           "key": "final_blows",
         *           "label": "Final Blows",
         *           "value": 3
         *         },
         *         {
         *           "key": "all_damage_done",
         *           "label": "All Damage Done",
         *           "value": 4616
         *         },
         *         {
         *           "key": "objective_kills",
         *           "label": "Objective Kills",
         *           "value": 7
         *         },
         *         {
         *           "key": "objective_time",
         *           "label": "Objective Time",
         *           "value": 91
         *         },
         *         {
         *           "key": "hero_damage_done",
         *           "label": "Hero Damage Done",
         *           "value": 3774
         *         },
         *         {
         *           "key": "obj_contest_time",
         *           "label": "Obj Contest Time",
         *           "value": 51
         *         },
         *         {
         *           "key": "weapon_accuracy",
         *           "label": "Weapon Accuracy",
         *           "value": 18
         *         }
         *       ]
         *     },
         *     {
         *       "category": "assists",
         *       "label": "Assists",
         *       "stats": [
         *         {
         *           "key": "offensive_assists",
         *           "label": "Offensive Assists",
         *           "value": 18
         *         },
         *         {
         *           "key": "offensive_assists_most_in_game",
         *           "label": "Offensive Assists - Most in Game",
         *           "value": 11
         *         },
         *         {
         *           "key": "defensive_assists",
         *           "label": "Defensive Assists",
         *           "value": 29
         *         },
         *         {
         *           "key": "defensive_assists_most_in_game",
         *           "label": "Defensive Assists - Most in Game",
         *           "value": 15
         *         },
         *         {
         *           "key": "healing_done",
         *           "label": "Healing Done",
         *           "value": 12216
         *         },
         *         {
         *           "key": "healing_done_most_in_game",
         *           "label": "Healing Done - Most in Game",
         *           "value": 8196
         *         },
         *         {
         *           "key": "assists",
         *           "label": "Assists",
         *           "value": 32
         *         },
         *         {
         *           "key": "defensive_assists_avg_per_10_min",
         *           "label": "Defensive Assists - Avg per 10 Min",
         *           "value": 20.32
         *         },
         *         {
         *           "key": "offensive_assists_avg_per_10_min",
         *           "label": "Offensive Assists - Avg per 10 Min",
         *           "value": 12.61
         *         }
         *       ]
         *     }
         *   ],
         *   "cassidy": [
         *     {
         *       "category": "hero_specific",
         *       "label": "Hero Specific",
         *       "stats": [
         *         {
         *           "key": "deadeye_kills",
         *           "label": "Deadeye Kill",
         *           "value": 1
         *         },
         *         {
         *           "key": "deadeye_kills_most_in_game",
         *           "label": "Deadeye Kill - Most in Game",
         *           "value": 1
         *         },
         *         {
         *           "key": "fan_the_hammer_kills",
         *           "label": "Fan the Hammer Kill",
         *           "value": 1
         *         },
         *         {
         *           "key": "fan_the_hammer_kills_most_in_game",
         *           "label": "Fan the Hammer Kill - Most in Game",
         *           "value": 1
         *         },
         *         {
         *           "key": "magnetic_grenade_kills",
         *           "label": "Magnetic Grenade Kills",
         *           "value": 4
         *         },
         *         {
         *           "key": "magnetic_grenade_kills_most_in_game",
         *           "label": "Magnetic Grenade Kills - Most in Game",
         *           "value": 3
         *         },
         *         {
         *           "key": "long_range_final_blows",
         *           "label": "Long Range Final Blows",
         *           "value": 2
         *         },
         *         {
         *           "key": "magnetic_grenade_kills_avg_per_10_min",
         *           "label": "Magnetic Grenade Kills - Avg per 10 Min",
         *           "value": 3.02
         *         },
         *         {
         *           "key": "deadeye_kills_avg_per_10_min",
         *           "label": "Deadeye Kills - Avg per 10 Min",
         *           "value": 0.75
         *         },
         *         {
         *           "key": "magnetic_grenade_attach_rate",
         *           "label": "Magnetic Grenade Attach Rate",
         *           "value": 27
         *         },
         *         {
         *           "key": "fan_the_hammer_kills_avg_per_10_min",
         *           "label": "Fan the Hammer Kills - Avg per 10 Min",
         *           "value": 0.75
         *         },
         *         {
         *           "key": "long_range_final_blows_avg_per_10_min",
         *           "label": "Long Range Final Blows - Avg per 10 Min",
         *           "value": 1.51
         *         }
         *       ]
         *     },
         *     {
         *       "category": "best",
         *       "label": "Best",
         *       "stats": [
         *         {
         *           "key": "eliminations_most_in_life",
         *           "label": "Eliminations - Most in Life",
         *           "value": 5
         *         },
         *         {
         *           "key": "all_damage_done_most_in_life",
         *           "label": "All Damage Done - Most in Life",
         *           "value": 3275
         *         },
         *         {
         *           "key": "weapon_accuracy_best_in_game",
         *           "label": "Weapon Accuracy - Best in Game",
         *           "value": 53
         *         },
         *         {
         *           "key": "kill_streak_best",
         *           "label": "Kill Streak - Best",
         *           "value": 5
         *         },
         *         {
         *           "key": "all_damage_done_most_in_game",
         *           "label": "All Damage Done - Most in Game",
         *           "value": 10195
         *         },
         *         {
         *           "key": "eliminations_most_in_game",
         *           "label": "Eliminations - Most in Game",
         *           "value": 13
         *         },
         *         {
         *           "key": "final_blows_most_in_game",
         *           "label": "Final Blows - Most in Game",
         *           "value": 8
         *         },
         *         {
         *           "key": "objective_kills_most_in_game",
         *           "label": "Objective Kills - Most in Game",
         *           "value": 3
         *         },
         *         {
         *           "key": "objective_time_most_in_game",
         *           "label": "Objective Time - Most in Game",
         *           "value": 15
         *         },
         *         {
         *           "key": "critical_hits_most_in_game",
         *           "label": "Critical Hits - Most in Game",
         *           "value": 10
         *         },
         *         {
         *           "key": "critical_hits_most_in_life",
         *           "label": "Critical Hits - Most in Life",
         *           "value": 5
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_game",
         *           "label": "Hero Damage Done - Most in Game",
         *           "value": 6319
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_life",
         *           "label": "Hero Damage Done - Most in Life",
         *           "value": 1930
         *         },
         *         {
         *           "key": "critical_hit_kills_most_in_game",
         *           "label": "Critical Hit Kill - Most in Game",
         *           "value": 1
         *         },
         *         {
         *           "key": "obj_contest_time_most_in_game",
         *           "label": "Obj Contest Time - Most in Game",
         *           "value": 15
         *         }
         *       ]
         *     },
         *     {
         *       "category": "average",
         *       "label": "Average",
         *       "stats": [
         *         {
         *           "key": "deaths_avg_per_10_min",
         *           "label": "Deaths - Avg per 10 Min",
         *           "value": 8.3
         *         },
         *         {
         *           "key": "eliminations_avg_per_10_min",
         *           "label": "Eliminations - Avg per 10 Min",
         *           "value": 12.07
         *         },
         *         {
         *           "key": "hero_damage_done_avg_per_10_min",
         *           "label": "Hero Damage Done - Avg per 10 Min",
         *           "value": 6937
         *         },
         *         {
         *           "key": "critical_hit_kills_avg_per_10_min",
         *           "label": "Critical Hit Kills - Avg per 10 Min",
         *           "value": 0.75
         *         },
         *         {
         *           "key": "objective_time_avg_per_10_min",
         *           "label": "Objective Time - Avg per 10 Min",
         *           "value": 18
         *         },
         *         {
         *           "key": "all_damage_done_avg_per_10_min",
         *           "label": "All Damage Done - Avg per 10 Min",
         *           "value": 11813
         *         },
         *         {
         *           "key": "critical_hits_avg_per_10_min",
         *           "label": "Critical Hits - Avg per 10 Min",
         *           "value": 10.56
         *         },
         *         {
         *           "key": "eliminations_per_life",
         *           "label": "Eliminations per Life",
         *           "value": 1.45
         *         },
         *         {
         *           "key": "objective_kills_avg_per_10_min",
         *           "label": "Objective Kills - Avg per 10 Min",
         *           "value": 3.77
         *         },
         *         {
         *           "key": "obj_contest_time_avg_per_10_min",
         *           "label": "Obj Contest Time - Avg per 10 Min",
         *           "value": 18
         *         },
         *         {
         *           "key": "final_blows_avg_per_10_min",
         *           "label": "Final Blows - Avg per 10 Min",
         *           "value": 6.79
         *         }
         *       ]
         *     },
         *     {
         *       "category": "game",
         *       "label": "Game",
         *       "stats": [
         *         {
         *           "key": "time_played",
         *           "label": "Time Played",
         *           "value": 795
         *         },
         *         {
         *           "key": "games_played",
         *           "label": "Games Played",
         *           "value": 2
         *         },
         *         {
         *           "key": "games_lost",
         *           "label": "Games Lost",
         *           "value": 2
         *         }
         *       ]
         *     },
         *     {
         *       "category": "combat",
         *       "label": "Combat",
         *       "stats": [
         *         {
         *           "key": "eliminations",
         *           "label": "Eliminations",
         *           "value": 16
         *         },
         *         {
         *           "key": "deaths",
         *           "label": "Deaths",
         *           "value": 11
         *         },
         *         {
         *           "key": "final_blows",
         *           "label": "Final Blows",
         *           "value": 9
         *         },
         *         {
         *           "key": "all_damage_done",
         *           "label": "All Damage Done",
         *           "value": 15654
         *         },
         *         {
         *           "key": "objective_kills",
         *           "label": "Objective Kills",
         *           "value": 5
         *         },
         *         {
         *           "key": "objective_time",
         *           "label": "Objective Time",
         *           "value": 24
         *         },
         *         {
         *           "key": "critical_hits",
         *           "label": "Critical Hits",
         *           "value": 14
         *         },
         *         {
         *           "key": "hero_damage_done",
         *           "label": "Hero Damage Done",
         *           "value": 9193
         *         },
         *         {
         *           "key": "critical_hit_kills",
         *           "label": "Critical Hit Kill",
         *           "value": 1
         *         },
         *         {
         *           "key": "obj_contest_time",
         *           "label": "Obj Contest Time",
         *           "value": 24
         *         },
         *         {
         *           "key": "critical_hit_accuracy",
         *           "label": "Critical Hit Accuracy",
         *           "value": 10
         *         },
         *         {
         *           "key": "weapon_accuracy",
         *           "label": "Weapon Accuracy",
         *           "value": 38
         *         }
         *       ]
         *     }
         *   ],
         *   "orisa": [
         *     {
         *       "category": "hero_specific",
         *       "label": "Hero Specific",
         *       "stats": [
         *         {
         *           "key": "terra_surge_kills",
         *           "label": "Terra Surge Kill",
         *           "value": 1
         *         },
         *         {
         *           "key": "terra_surge_kills_most_in_game",
         *           "label": "Terra Surge Kill - Most in Game",
         *           "value": 1
         *         },
         *         {
         *           "key": "energy_javelin_kills",
         *           "label": "Energy Javelin Kills",
         *           "value": 2
         *         },
         *         {
         *           "key": "javelin_spin_kills",
         *           "label": "Javelin Spin Kills",
         *           "value": 2
         *         },
         *         {
         *           "key": "energy_javelin_kills_nyi",
         *           "label": "Energy Javelin Kills NYI",
         *           "value": 2
         *         },
         *         {
         *           "key": "javelin_spin_kills_nyi",
         *           "label": "Javelin Spin Kills NYI",
         *           "value": 2
         *         },
         *         {
         *           "key": "terra_surge_kills_avg_per_10_min",
         *           "label": "Terra Surge Kills - Avg per 10 Min",
         *           "value": 1.35
         *         },
         *         {
         *           "key": "javelin_spin_kills_avg_per_10_min",
         *           "label": "Javelin Spin Kills - Avg per 10 Min",
         *           "value": 0
         *         },
         *         {
         *           "key": "energy_javelin_kills_avg_per_10_min",
         *           "label": "Energy Javelin Kills - Avg per 10 Min",
         *           "value": 2.69
         *         }
         *       ]
         *     },
         *     {
         *       "category": "best",
         *       "label": "Best",
         *       "stats": [
         *         {
         *           "key": "eliminations_most_in_life",
         *           "label": "Eliminations - Most in Life",
         *           "value": 4
         *         },
         *         {
         *           "key": "all_damage_done_most_in_life",
         *           "label": "All Damage Done - Most in Life",
         *           "value": 5409
         *         },
         *         {
         *           "key": "weapon_accuracy_best_in_game",
         *           "label": "Weapon Accuracy - Best in Game",
         *           "value": 40
         *         },
         *         {
         *           "key": "kill_streak_best",
         *           "label": "Kill Streak - Best",
         *           "value": 4
         *         },
         *         {
         *           "key": "all_damage_done_most_in_game",
         *           "label": "All Damage Done - Most in Game",
         *           "value": 14969
         *         },
         *         {
         *           "key": "eliminations_most_in_game",
         *           "label": "Eliminations - Most in Game",
         *           "value": 5
         *         },
         *         {
         *           "key": "final_blows_most_in_game",
         *           "label": "Final Blow - Most in Game",
         *           "value": 1
         *         },
         *         {
         *           "key": "objective_kills_most_in_game",
         *           "label": "Objective Kills - Most in Game",
         *           "value": 4
         *         },
         *         {
         *           "key": "objective_time_most_in_game",
         *           "label": "Objective Time - Most in Game",
         *           "value": 114
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_game",
         *           "label": "Hero Damage Done - Most in Game",
         *           "value": 9078
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_life",
         *           "label": "Hero Damage Done - Most in Life",
         *           "value": 3181
         *         },
         *         {
         *           "key": "assists_most_in_game",
         *           "label": "Assists - Most in Game",
         *           "value": 2
         *         },
         *         {
         *           "key": "obj_contest_time_most_in_game",
         *           "label": "Obj Contest Time - Most in Game",
         *           "value": 114
         *         }
         *       ]
         *     },
         *     {
         *       "category": "average",
         *       "label": "Average",
         *       "stats": [
         *         {
         *           "key": "deaths_avg_per_10_min",
         *           "label": "Deaths - Avg per 10 Min",
         *           "value": 5.39
         *         },
         *         {
         *           "key": "eliminations_avg_per_10_min",
         *           "label": "Eliminations - Avg per 10 Min",
         *           "value": 6.73
         *         },
         *         {
         *           "key": "hero_damage_done_avg_per_10_min",
         *           "label": "Hero Damage Done - Avg per 10 Min",
         *           "value": 12226
         *         },
         *         {
         *           "key": "assists_avg_per_10_min",
         *           "label": "Assists - Avg per 10 min",
         *           "value": 2.69
         *         },
         *         {
         *           "key": "objective_time_avg_per_10_min",
         *           "label": "Objective Time - Avg per 10 Min",
         *           "value": 154
         *         },
         *         {
         *           "key": "all_damage_done_avg_per_10_min",
         *           "label": "All Damage Done - Avg per 10 Min",
         *           "value": 20159
         *         },
         *         {
         *           "key": "eliminations_per_life",
         *           "label": "Eliminations per Life",
         *           "value": 1.25
         *         },
         *         {
         *           "key": "objective_kills_avg_per_10_min",
         *           "label": "Objective Kills - Avg per 10 Min",
         *           "value": 5.39
         *         },
         *         {
         *           "key": "obj_contest_time_avg_per_10_min",
         *           "label": "Obj Contest Time - Avg per 10 Min",
         *           "value": 154
         *         },
         *         {
         *           "key": "final_blows_avg_per_10_min",
         *           "label": "Final Blows - Avg per 10 Min",
         *           "value": 1.35
         *         }
         *       ]
         *     },
         *     {
         *       "category": "game",
         *       "label": "Game",
         *       "stats": [
         *         {
         *           "key": "time_played",
         *           "label": "Time Played",
         *           "value": 446
         *         },
         *         {
         *           "key": "games_played",
         *           "label": "Games Played",
         *           "value": 1
         *         },
         *         {
         *           "key": "games_lost",
         *           "label": "Games Lost",
         *           "value": 1
         *         }
         *       ]
         *     },
         *     {
         *       "category": "combat",
         *       "label": "Combat",
         *       "stats": [
         *         {
         *           "key": "eliminations",
         *           "label": "Eliminations",
         *           "value": 5
         *         },
         *         {
         *           "key": "deaths",
         *           "label": "Deaths",
         *           "value": 4
         *         },
         *         {
         *           "key": "final_blows",
         *           "label": "Final Blow",
         *           "value": 1
         *         },
         *         {
         *           "key": "all_damage_done",
         *           "label": "All Damage Done",
         *           "value": 14969
         *         },
         *         {
         *           "key": "objective_kills",
         *           "label": "Objective Kills",
         *           "value": 4
         *         },
         *         {
         *           "key": "objective_time",
         *           "label": "Objective Time",
         *           "value": 114
         *         },
         *         {
         *           "key": "hero_damage_done",
         *           "label": "Hero Damage Done",
         *           "value": 9078
         *         },
         *         {
         *           "key": "obj_contest_time",
         *           "label": "Obj Contest Time",
         *           "value": 114
         *         },
         *         {
         *           "key": "weapon_accuracy",
         *           "label": "Weapon Accuracy",
         *           "value": 40
         *         }
         *       ]
         *     },
         *     {
         *       "category": "assists",
         *       "label": "Assists",
         *       "stats": [
         *         {
         *           "key": "offensive_assists",
         *           "label": "Offensive Assists",
         *           "value": 2
         *         },
         *         {
         *           "key": "offensive_assists_most_in_game",
         *           "label": "Offensive Assists - Most in Game",
         *           "value": 2
         *         },
         *         {
         *           "key": "assists",
         *           "label": "Assists",
         *           "value": 2
         *         },
         *         {
         *           "key": "offensive_assists_avg_per_10_min",
         *           "label": "Offensive Assists - Avg per 10 Min",
         *           "value": 2.69
         *         }
         *       ]
         *     }
         *   ],
         *   "reaper": [
         *     {
         *       "category": "hero_specific",
         *       "label": "Hero Specific",
         *       "stats": [
         *         {
         *           "key": "self_healing",
         *           "label": "Self Healing",
         *           "value": 487
         *         },
         *         {
         *           "key": "self_healing_most_in_game",
         *           "label": "Self Healing - Most in Game",
         *           "value": 487
         *         },
         *         {
         *           "key": "self_healing_avg_per_10_min",
         *           "label": "Self Healing - Avg per 10 Min",
         *           "value": 954
         *         }
         *       ]
         *     },
         *     {
         *       "category": "best",
         *       "label": "Best",
         *       "stats": [
         *         {
         *           "key": "eliminations_most_in_life",
         *           "label": "Eliminations - Most in Life",
         *           "value": 7
         *         },
         *         {
         *           "key": "all_damage_done_most_in_life",
         *           "label": "All Damage Done - Most in Life",
         *           "value": 3235
         *         },
         *         {
         *           "key": "weapon_accuracy_best_in_game",
         *           "label": "Weapon Accuracy - Best in Game",
         *           "value": 26
         *         },
         *         {
         *           "key": "kill_streak_best",
         *           "label": "Kill Streak - Best",
         *           "value": 7
         *         },
         *         {
         *           "key": "all_damage_done_most_in_game",
         *           "label": "All Damage Done - Most in Game",
         *           "value": 4978
         *         },
         *         {
         *           "key": "eliminations_most_in_game",
         *           "label": "Eliminations - Most in Game",
         *           "value": 9
         *         },
         *         {
         *           "key": "final_blows_most_in_game",
         *           "label": "Final Blows - Most in Game",
         *           "value": 2
         *         },
         *         {
         *           "key": "objective_kills_most_in_game",
         *           "label": "Objective Kills - Most in Game",
         *           "value": 3
         *         },
         *         {
         *           "key": "objective_time_most_in_game",
         *           "label": "Objective Time - Most in Game",
         *           "value": 22
         *         },
         *         {
         *           "key": "multikill_best",
         *           "label": "Multikill - Best",
         *           "value": 3
         *         },
         *         {
         *           "key": "critical_hits_most_in_game",
         *           "label": "Critical Hits - Most in Game",
         *           "value": 45
         *         },
         *         {
         *           "key": "critical_hits_most_in_life",
         *           "label": "Critical Hits - Most in Life",
         *           "value": 28
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_game",
         *           "label": "Hero Damage Done - Most in Game",
         *           "value": 3397
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_life",
         *           "label": "Hero Damage Done - Most in Life",
         *           "value": 2277
         *         },
         *         {
         *           "key": "obj_contest_time_most_in_game",
         *           "label": "Obj Contest Time - Most in Game",
         *           "value": 3
         *         }
         *       ]
         *     },
         *     {
         *       "category": "average",
         *       "label": "Average",
         *       "stats": [
         *         {
         *           "key": "healing_done_avg_per_10_min",
         *           "label": "Healing Done - Avg per 10 Min",
         *           "value": 954
         *         },
         *         {
         *           "key": "deaths_avg_per_10_min",
         *           "label": "Deaths - Avg per 10 Min",
         *           "value": 7.84
         *         },
         *         {
         *           "key": "eliminations_avg_per_10_min",
         *           "label": "Eliminations - Avg per 10 Min",
         *           "value": 17.63
         *         },
         *         {
         *           "key": "hero_damage_done_avg_per_10_min",
         *           "label": "Hero Damage Done - Avg per 10 Min",
         *           "value": 6655
         *         },
         *         {
         *           "key": "objective_time_avg_per_10_min",
         *           "label": "Objective Time - Avg per 10 Min",
         *           "value": 43
         *         },
         *         {
         *           "key": "all_damage_done_avg_per_10_min",
         *           "label": "All Damage Done - Avg per 10 Min",
         *           "value": 9753
         *         },
         *         {
         *           "key": "critical_hits_avg_per_10_min",
         *           "label": "Critical Hits - Avg per 10 Min",
         *           "value": 88.16
         *         },
         *         {
         *           "key": "eliminations_per_life",
         *           "label": "Eliminations per Life",
         *           "value": 2.25
         *         },
         *         {
         *           "key": "objective_kills_avg_per_10_min",
         *           "label": "Objective Kills - Avg per 10 Min",
         *           "value": 5.88
         *         },
         *         {
         *           "key": "obj_contest_time_avg_per_10_min",
         *           "label": "Obj Contest Time - Avg per 10 Min",
         *           "value": 6
         *         },
         *         {
         *           "key": "final_blows_avg_per_10_min",
         *           "label": "Final Blows - Avg per 10 Min",
         *           "value": 3.92
         *         }
         *       ]
         *     },
         *     {
         *       "category": "game",
         *       "label": "Game",
         *       "stats": [
         *         {
         *           "key": "time_played",
         *           "label": "Time Played",
         *           "value": 306
         *         },
         *         {
         *           "key": "games_played",
         *           "label": "Games Played",
         *           "value": 0
         *         },
         *         {
         *           "key": "games_lost",
         *           "label": "Games Lost",
         *           "value": 0
         *         }
         *       ]
         *     },
         *     {
         *       "category": "combat",
         *       "label": "Combat",
         *       "stats": [
         *         {
         *           "key": "eliminations",
         *           "label": "Eliminations",
         *           "value": 9
         *         },
         *         {
         *           "key": "deaths",
         *           "label": "Deaths",
         *           "value": 4
         *         },
         *         {
         *           "key": "final_blows",
         *           "label": "Final Blows",
         *           "value": 2
         *         },
         *         {
         *           "key": "all_damage_done",
         *           "label": "All Damage Done",
         *           "value": 4978
         *         },
         *         {
         *           "key": "objective_kills",
         *           "label": "Objective Kills",
         *           "value": 3
         *         },
         *         {
         *           "key": "objective_time",
         *           "label": "Objective Time",
         *           "value": 22
         *         },
         *         {
         *           "key": "multikills",
         *           "label": "Multikill",
         *           "value": 1
         *         },
         *         {
         *           "key": "critical_hits",
         *           "label": "Critical Hits",
         *           "value": 45
         *         },
         *         {
         *           "key": "hero_damage_done",
         *           "label": "Hero Damage Done",
         *           "value": 3397
         *         },
         *         {
         *           "key": "obj_contest_time",
         *           "label": "Obj Contest Time",
         *           "value": 3
         *         },
         *         {
         *           "key": "critical_hit_accuracy",
         *           "label": "Critical Hit Accuracy",
         *           "value": 7
         *         },
         *         {
         *           "key": "weapon_accuracy",
         *           "label": "Weapon Accuracy",
         *           "value": 26
         *         }
         *       ]
         *     }
         *   ],
         *   "reinhardt": [
         *     {
         *       "category": "hero_specific",
         *       "label": "Hero Specific",
         *       "stats": [
         *         {
         *           "key": "charge_kills",
         *           "label": "Charge Kills",
         *           "value": 2
         *         },
         *         {
         *           "key": "charge_kills_most_in_game",
         *           "label": "Charge Kills - Most in Game",
         *           "value": 2
         *         },
         *         {
         *           "key": "fire_strike_kills",
         *           "label": "Fire Strike Kills",
         *           "value": 4
         *         },
         *         {
         *           "key": "fire_strike_kills_most_in_game",
         *           "label": "Fire Strike Kills - Most in Game",
         *           "value": 4
         *         },
         *         {
         *           "key": "earthshatter_kills",
         *           "label": "Earthshatter Kills",
         *           "value": 2
         *         },
         *         {
         *           "key": "earthshatter_kills_most_in_game",
         *           "label": "Earthshatter Kills - Most in Game",
         *           "value": 2
         *         },
         *         {
         *           "key": "fire_strike_kills_avg_per_10_min",
         *           "label": "Fire Strike Kills - Avg per 10 Min",
         *           "value": 6.13
         *         },
         *         {
         *           "key": "charge_kills_avg_per_10_min",
         *           "label": "Charge Kills - Avg per 10 Min",
         *           "value": 3.06
         *         },
         *         {
         *           "key": "earthshatter_kills_avg_per_10_min",
         *           "label": "Earthshatter Kills - Avg per 10 Min",
         *           "value": 3.06
         *         }
         *       ]
         *     },
         *     {
         *       "category": "best",
         *       "label": "Best",
         *       "stats": [
         *         {
         *           "key": "eliminations_most_in_life",
         *           "label": "Eliminations - Most in Life",
         *           "value": 6
         *         },
         *         {
         *           "key": "all_damage_done_most_in_life",
         *           "label": "All Damage Done - Most in Life",
         *           "value": 4727
         *         },
         *         {
         *           "key": "kill_streak_best",
         *           "label": "Kill Streak - Best",
         *           "value": 6
         *         },
         *         {
         *           "key": "all_damage_done_most_in_game",
         *           "label": "All Damage Done - Most in Game",
         *           "value": 10357
         *         },
         *         {
         *           "key": "eliminations_most_in_game",
         *           "label": "Eliminations - Most in Game",
         *           "value": 8
         *         },
         *         {
         *           "key": "final_blows_most_in_game",
         *           "label": "Final Blows - Most in Game",
         *           "value": 3
         *         },
         *         {
         *           "key": "objective_kills_most_in_game",
         *           "label": "Objective Kills - Most in Game",
         *           "value": 3
         *         },
         *         {
         *           "key": "objective_time_most_in_game",
         *           "label": "Objective Time - Most in Game",
         *           "value": 167
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_game",
         *           "label": "Hero Damage Done - Most in Game",
         *           "value": 8657
         *         },
         *         {
         *           "key": "hero_damage_done_most_in_life",
         *           "label": "Hero Damage Done - Most in Life",
         *           "value": 3462
         *         },
         *         {
         *           "key": "assists_most_in_game",
         *           "label": "Assist - Most in Game",
         *           "value": 1
         *         },
         *         {
         *           "key": "environmental_kills_most_in_game",
         *           "label": "Environmental Kill - Most in Game",
         *           "value": 1
         *         },
         *         {
         *           "key": "obj_contest_time_most_in_game",
         *           "label": "Obj Contest Time - Most in Game",
         *           "value": 41
         *         }
         *       ]
         *     },
         *     {
         *       "category": "average",
         *       "label": "Average",
         *       "stats": [
         *         {
         *           "key": "deaths_avg_per_10_min",
         *           "label": "Deaths - Avg per 10 Min",
         *           "value": 4.6
         *         },
         *         {
         *           "key": "eliminations_avg_per_10_min",
         *           "label": "Eliminations - Avg per 10 Min",
         *           "value": 12.26
         *         },
         *         {
         *           "key": "hero_damage_done_avg_per_10_min",
         *           "label": "Hero Damage Done - Avg per 10 Min",
         *           "value": 13263
         *         },
         *         {
         *           "key": "assists_avg_per_10_min",
         *           "label": "Assists - Avg per 10 min",
         *           "value": 1.53
         *         },
         *         {
         *           "key": "objective_time_avg_per_10_min",
         *           "label": "Objective Time - Avg per 10 Min",
         *           "value": 256
         *         },
         *         {
         *           "key": "all_damage_done_avg_per_10_min",
         *           "label": "All Damage Done - Avg per 10 Min",
         *           "value": 15868
         *         },
         *         {
         *           "key": "eliminations_per_life",
         *           "label": "Eliminations per Life",
         *           "value": 2.67
         *         },
         *         {
         *           "key": "objective_kills_avg_per_10_min",
         *           "label": "Objective Kills - Avg per 10 Min",
         *           "value": 4.6
         *         },
         *         {
         *           "key": "obj_contest_time_avg_per_10_min",
         *           "label": "Obj Contest Time - Avg per 10 Min",
         *           "value": 63
         *         },
         *         {
         *           "key": "final_blows_avg_per_10_min",
         *           "label": "Final Blows - Avg per 10 Min",
         *           "value": 4.6
         *         }
         *       ]
         *     },
         *     {
         *       "category": "game",
         *       "label": "Game",
         *       "stats": [
         *         {
         *           "key": "time_played",
         *           "label": "Time Played",
         *           "value": 392
         *         },
         *         {
         *           "key": "games_played",
         *           "label": "Games Played",
         *           "value": 0
         *         },
         *         {
         *           "key": "games_lost",
         *           "label": "Games Lost",
         *           "value": 0
         *         }
         *       ]
         *     },
         *     {
         *       "category": "combat",
         *       "label": "Combat",
         *       "stats": [
         *         {
         *           "key": "eliminations",
         *           "label": "Eliminations",
         *           "value": 8
         *         },
         *         {
         *           "key": "deaths",
         *           "label": "Deaths",
         *           "value": 3
         *         },
         *         {
         *           "key": "final_blows",
         *           "label": "Final Blows",
         *           "value": 3
         *         },
         *         {
         *           "key": "all_damage_done",
         *           "label": "All Damage Done",
         *           "value": 10357
         *         },
         *         {
         *           "key": "objective_kills",
         *           "label": "Objective Kills",
         *           "value": 3
         *         },
         *         {
         *           "key": "objective_time",
         *           "label": "Objective Time",
         *           "value": 167
         *         },
         *         {
         *           "key": "environmental_kills",
         *           "label": "Environmental Kill",
         *           "value": 1
         *         },
         *         {
         *           "key": "hero_damage_done",
         *           "label": "Hero Damage Done",
         *           "value": 8657
         *         },
         *         {
         *           "key": "obj_contest_time",
         *           "label": "Obj Contest Time",
         *           "value": 41
         *         },
         *         {
         *           "key": "environmental_kills_avg_per_10_min",
         *           "label": "Environmental Kills - Avg per 10 Min",
         *           "value": 1.53
         *         }
         *       ]
         *     },
         *     {
         *       "category": "assists",
         *       "label": "Assists",
         *       "stats": [
         *         {
         *           "key": "offensive_assists",
         *           "label": "Offensive Assist",
         *           "value": 1
         *         },
         *         {
         *           "key": "offensive_assists_most_in_game",
         *           "label": "Offensive Assist - Most in Game",
         *           "value": 1
         *         },
         *         {
         *           "key": "assists",
         *           "label": "Assist",
         *           "value": 1
         *         },
         *         {
         *           "key": "offensive_assists_avg_per_10_min",
         *           "label": "Offensive Assists - Avg per 10 Min",
         *           "value": 1.53
         *         }
         *       ]
         *     }
         *   ],
         *   "tracer": [
         *     {
         *       "category": "hero_specific",
         *       "label": "Hero Specific",
         *       "stats": [
         *         {
         *           "key": "self_healing",
         *           "label": "Self Healing",
         *           "value": 130
         *         },
         *         {
         *           "key": "self_healing_most_in_game",
         *           "label": "Self Healing - Most in Game",
         *           "value": 130
         *         },
         *         {
         *           "key": "low_health_recalls",
         *           "label": "Low Health Recall",
         *           "value": 1
         *         },
         *         {
         *           "key": "low_health_recalls_most_in_game",
         *           "label": "Low Health Recall - Most in Game",
         *           "value": 1
         *         },
         *         {
         *           "key": "low_health_recalls_avg_per_10_min",
         *           "label": "Low Health Recalls - Avg per 10 Min",
         *           "value": 48.98
         *         },
         *         {
         *           "key": "self_healing_avg_per_10_min",
         *           "label": "Self Healing - Avg per 10 Min",
         *           "value": 6367
         *         }
         *       ]
         *     },
         *     {
         *       "category": "game",
         *       "label": "Game",
         *       "stats": [
         *         {
         *           "key": "time_played",
         *           "label": "Time Played",
         *           "value": 12
         *         },
         *         {
         *           "key": "games_played",
         *           "label": "Games Played",
         *           "value": 0
         *         },
         *         {
         *           "key": "games_lost",
         *           "label": "Games Lost",
         *           "value": 0
         *         }
         *       ]
         *     }
         *   ]
         * }
         */
        export interface CareerStats {
            /**
             * All-Heroes
             * Total of statistics for all heroes
             */
            "all-heroes"?: /**
             * All-Heroes
             * Total of statistics for all heroes
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Ana
             * Career statistics for Ana
             */
            ana?: /**
             * Ana
             * Career statistics for Ana
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Ashe
             * Career statistics for Ashe
             */
            ashe?: /**
             * Ashe
             * Career statistics for Ashe
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Baptiste
             * Career statistics for Baptiste
             */
            baptiste?: /**
             * Baptiste
             * Career statistics for Baptiste
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Bastion
             * Career statistics for Bastion
             */
            bastion?: /**
             * Bastion
             * Career statistics for Bastion
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Brigitte
             * Career statistics for Brigitte
             */
            brigitte?: /**
             * Brigitte
             * Career statistics for Brigitte
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Cassidy
             * Career statistics for Cassidy
             */
            cassidy?: /**
             * Cassidy
             * Career statistics for Cassidy
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Dva
             * Career statistics for D.Va
             */
            dva?: /**
             * Dva
             * Career statistics for D.Va
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Doomfist
             * Career statistics for Doomfist
             */
            doomfist?: /**
             * Doomfist
             * Career statistics for Doomfist
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Echo
             * Career statistics for Echo
             */
            echo?: /**
             * Echo
             * Career statistics for Echo
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Genji
             * Career statistics for Genji
             */
            genji?: /**
             * Genji
             * Career statistics for Genji
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Hanzo
             * Career statistics for Hanzo
             */
            hanzo?: /**
             * Hanzo
             * Career statistics for Hanzo
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Illari
             * Career statistics for Illari
             */
            illari?: /**
             * Illari
             * Career statistics for Illari
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Junker-Queen
             * Career statistics for Junker Queen
             */
            "junker-queen"?: /**
             * Junker-Queen
             * Career statistics for Junker Queen
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Junkrat
             * Career statistics for Junkrat
             */
            junkrat?: /**
             * Junkrat
             * Career statistics for Junkrat
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Kiriko
             * Career statistics for Kiriko
             */
            kiriko?: /**
             * Kiriko
             * Career statistics for Kiriko
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Lifeweaver
             * Career statistics for Lifeweaver
             */
            lifeweaver?: /**
             * Lifeweaver
             * Career statistics for Lifeweaver
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Lucio
             * Career statistics for Lúcio
             */
            lucio?: /**
             * Lucio
             * Career statistics for Lúcio
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Mauga
             * Career statistics for Mauga
             */
            mauga?: /**
             * Mauga
             * Career statistics for Mauga
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Mei
             * Career statistics for Mei
             */
            mei?: /**
             * Mei
             * Career statistics for Mei
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Mercy
             * Career statistics for Mercy
             */
            mercy?: /**
             * Mercy
             * Career statistics for Mercy
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Moira
             * Career statistics for Moira
             */
            moira?: /**
             * Moira
             * Career statistics for Moira
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Orisa
             * Career statistics for Orisa
             */
            orisa?: /**
             * Orisa
             * Career statistics for Orisa
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Pharah
             * Career statistics for Pharah
             */
            pharah?: /**
             * Pharah
             * Career statistics for Pharah
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Ramattra
             * Career statistics for Ramattra
             */
            ramattra?: /**
             * Ramattra
             * Career statistics for Ramattra
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Reaper
             * Career statistics for Reaper
             */
            reaper?: /**
             * Reaper
             * Career statistics for Reaper
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Reinhardt
             * Career statistics for Reinhardt
             */
            reinhardt?: /**
             * Reinhardt
             * Career statistics for Reinhardt
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Roadhog
             * Career statistics for Roadhog
             */
            roadhog?: /**
             * Roadhog
             * Career statistics for Roadhog
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Sigma
             * Career statistics for Sigma
             */
            sigma?: /**
             * Sigma
             * Career statistics for Sigma
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Sojourn
             * Career statistics for Sojourn
             */
            sojourn?: /**
             * Sojourn
             * Career statistics for Sojourn
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Soldier-76
             * Career statistics for Soldier: 76
             */
            "soldier-76"?: /**
             * Soldier-76
             * Career statistics for Soldier: 76
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Sombra
             * Career statistics for Sombra
             */
            sombra?: /**
             * Sombra
             * Career statistics for Sombra
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Symmetra
             * Career statistics for Symmetra
             */
            symmetra?: /**
             * Symmetra
             * Career statistics for Symmetra
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Torbjorn
             * Career statistics for Torbjörn
             */
            torbjorn?: /**
             * Torbjorn
             * Career statistics for Torbjörn
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Tracer
             * Career statistics for Tracer
             */
            tracer?: /**
             * Tracer
             * Career statistics for Tracer
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Venture
             * Career statistics for Venture
             */
            venture?: /**
             * Venture
             * Career statistics for Venture
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Widowmaker
             * Career statistics for Widowmaker
             */
            widowmaker?: /**
             * Widowmaker
             * Career statistics for Widowmaker
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Winston
             * Career statistics for Winston
             */
            winston?: /**
             * Winston
             * Career statistics for Winston
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Wrecking-Ball
             * Career statistics for Wrecking Ball
             */
            "wrecking-ball"?: /**
             * Wrecking-Ball
             * Career statistics for Wrecking Ball
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Zarya
             * Career statistics for Zarya
             */
            zarya?: /**
             * Zarya
             * Career statistics for Zarya
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
            /**
             * Zenyatta
             * Career statistics for Zenyatta
             */
            zenyatta?: /**
             * Zenyatta
             * Career statistics for Zenyatta
             */
            [
                /* HeroCareerStats */ HeroCareerStats,
                .../* HeroCareerStats */ HeroCareerStats[]
            ] | null;
        }
        /**
         * CompetitiveDivision
         * Competitive division of a rank
         */
        export type CompetitiveDivision = "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "grandmaster" | "ultimate";
        /**
         * GamemodeDetails
         */
        export interface GamemodeDetails {
            /**
             * MapGamemode
             * Key corresponding to the gamemode. Can be used as filter on the maps endpoint.
             * example:
             * push
             */
            key: "assault" | "capture-the-flag" | "control" | "deathmatch" | "elimination" | "escort" | "flashpoint" | "hybrid" | "push" | "team-deathmatch";
            /**
             * Name
             * Name of the gamemode
             * example:
             * Push
             */
            name: string;
            /**
             * Icon
             * Icon URL of the gamemode
             * example:
             * https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt054b513cd6e95acf/62fd5b4a8972f93d1e325243/Push.svg
             */
            icon: string; // uri
            /**
             * Description
             * Description of the gamemode
             * example:
             * Teams battle to take control of a robot and push it toward the enemy base.
             */
            description: string;
            /**
             * Screenshot
             * URL of an example screenshot of a map for the gamemode
             * example:
             * https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt93eefb6e91347639/62fc2d9eda42240856c1459c/Toronto_Push.jpg
             */
            screenshot: string; // uri
        }
        /**
         * HTTPValidationError
         */
        export interface HTTPValidationError {
            /**
             * Detail
             */
            detail?: /* ValidationError */ ValidationError[];
        }
        /**
         * Hero
         */
        export interface Hero {
            /**
             * Name
             * Name of the hero
             * example:
             * Cassidy
             */
            name: string;
            /**
             * Description
             * Short description of the hero
             * example:
             * Armed with his Peacekeeper revolver, Cassidy takes out targets with deadeye precision and dives out of danger with eagle-like speed.
             */
            description: string;
            /**
             * Portrait
             * Portrait picture URL of the hero. On a hero release, can be null for a few days.
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png
             */
            portrait?: /**
             * Portrait
             * Portrait picture URL of the hero. On a hero release, can be null for a few days.
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/6cfb48b5597b657c2eafb1277dc5eef4a07eae90c265fcd37ed798189619f0a5.png
             */
            string /* uri */ | null;
            /**
             * Role
             * Role of the hero
             * example:
             * damage
             */
            role: "damage" | "support" | "tank";
            /**
             * Location
             * Location of the hero
             * example:
             * Santa Fe, New Mexico, USA
             */
            location: string;
            /**
             * Hitpoints of the hero. Can be null if hero data isn't in the CSV.
             */
            hitpoints?: /* Hitpoints of the hero. Can be null if hero data isn't in the CSV. */ /* HitPoints */ HitPoints | null;
            /**
             * Abilities
             * List of hero abilities
             */
            abilities: [
                /* Ability */ Ability,
                .../* Ability */ Ability[]
            ];
            /**
             * Story
             * Story of the hero
             */
            story: {
                /**
                 * Summary
                 * Brief summary of the origin story of the hero
                 * example:
                 * A founding member of the notorious Deadlock Gang, Cassidy was eventually coerced into joining Blackwatch, Overwatch's covert-ops division. He came to believe he could make amends for his past by righting the world's injustices. But when Overwatch fell, Cassidy went underground, resurfacing later as a gunslinger for hire, fighting only for causes he believes are just.
                 */
                summary: string;
                /**
                 * Media concerning the hero (YouTube video, pdf story, etc.)
                 */
                media: /* Media concerning the hero (YouTube video, pdf story, etc.) */ /* Media */ Media | null;
                /**
                 * Chapters of the story
                 * List of chapters concerning the story of the hero
                 */
                chapters: /* StoryChapter */ StoryChapter[];
            };
        }
        /**
         * HeroCareerStats
         */
        export interface HeroCareerStats {
            /**
             * CareerStatCategory
             * Stat category key
             */
            category: "assists" | "average" | "best" | "combat" | "game" | "hero_specific" | "match_awards" | "miscellaneous";
            /**
             * Label
             * Label of the stat category
             */
            label: string;
            /**
             * Stats
             * List of statistics associated with the category
             */
            stats: [
                /* SingleCareerStat */ SingleCareerStat,
                .../* SingleCareerStat */ SingleCareerStat[]
            ];
        }
        /**
         * HeroKey
         * Hero keys used to identify Overwatch heroes in general
         */
        export type HeroKey = "ana" | "ashe" | "baptiste" | "bastion" | "brigitte" | "cassidy" | "dva" | "doomfist" | "echo" | "genji" | "hanzo" | "illari" | "junker-queen" | "junkrat" | "kiriko" | "lifeweaver" | "lucio" | "mauga" | "mei" | "mercy" | "moira" | "orisa" | "pharah" | "ramattra" | "reaper" | "reinhardt" | "roadhog" | "sigma" | "sojourn" | "soldier-76" | "sombra" | "symmetra" | "torbjorn" | "tracer" | "venture" | "widowmaker" | "winston" | "wrecking-ball" | "zarya" | "zenyatta";
        /**
         * HeroKeyCareerFilter
         * Hero keys filter for career statistics endpoint
         */
        export type HeroKeyCareerFilter = "all-heroes" | "ana" | "ashe" | "baptiste" | "bastion" | "brigitte" | "cassidy" | "dva" | "doomfist" | "echo" | "genji" | "hanzo" | "illari" | "junker-queen" | "junkrat" | "kiriko" | "lifeweaver" | "lucio" | "mauga" | "mei" | "mercy" | "moira" | "orisa" | "pharah" | "ramattra" | "reaper" | "reinhardt" | "roadhog" | "sigma" | "sojourn" | "soldier-76" | "sombra" | "symmetra" | "torbjorn" | "tracer" | "venture" | "widowmaker" | "winston" | "wrecking-ball" | "zarya" | "zenyatta";
        /**
         * HeroParserErrorMessage
         */
        export interface HeroParserErrorMessage {
            /**
             * Error
             * Message describing the hero parser error
             * example:
             * Hero not found or not released yet
             */
            error: string;
        }
        /**
         * HeroPlayerCareerStats
         */
        export interface HeroPlayerCareerStats {
            /**
             * Assists
             * Statistics for "Assists" category
             */
            assists?: /**
             * Assists
             * Statistics for "Assists" category
             */
            {
                [name: string]: number | number;
            } | null;
            /**
             * Average
             * Statistics for "Average" category
             */
            average?: /**
             * Average
             * Statistics for "Average" category
             */
            {
                [name: string]: number | number;
            } | null;
            /**
             * Best
             * Statistics for "Best" category
             */
            best?: /**
             * Best
             * Statistics for "Best" category
             */
            {
                [name: string]: number | number;
            } | null;
            /**
             * Combat
             * Statistics for "Combat" category
             */
            combat?: /**
             * Combat
             * Statistics for "Combat" category
             */
            {
                [name: string]: number | number;
            } | null;
            /**
             * Game
             * Statistics for "Game" category
             */
            game?: /**
             * Game
             * Statistics for "Game" category
             */
            {
                [name: string]: number | number;
            } | null;
            /**
             * Hero Specific
             * Statistics for "Hero Specific" category
             */
            hero_specific?: /**
             * Hero Specific
             * Statistics for "Hero Specific" category
             */
            {
                [name: string]: number | number;
            } | null;
            /**
             * Match Awards
             * Statistics for "Match Awards" category
             */
            match_awards?: /**
             * Match Awards
             * Statistics for "Match Awards" category
             */
            {
                [name: string]: number | number;
            } | null;
            /**
             * Miscellaneous
             * Statistics for "Miscellaneous" category
             */
            miscellaneous?: /**
             * Miscellaneous
             * Statistics for "Miscellaneous" category
             */
            {
                [name: string]: number | number;
            } | null;
        }
        /**
         * HeroShort
         */
        export interface HeroShort {
            /**
             * HeroKey
             * Key name of the hero
             * example:
             * ana
             */
            key: "ana" | "ashe" | "baptiste" | "bastion" | "brigitte" | "cassidy" | "dva" | "doomfist" | "echo" | "genji" | "hanzo" | "illari" | "junker-queen" | "junkrat" | "kiriko" | "lifeweaver" | "lucio" | "mauga" | "mei" | "mercy" | "moira" | "orisa" | "pharah" | "ramattra" | "reaper" | "reinhardt" | "roadhog" | "sigma" | "sojourn" | "soldier-76" | "sombra" | "symmetra" | "torbjorn" | "tracer" | "venture" | "widowmaker" | "winston" | "wrecking-ball" | "zarya" | "zenyatta";
            /**
             * Name
             * Name of the hero
             * example:
             * Ana
             */
            name: string;
            /**
             * Portrait
             * Portrait picture URL of the hero
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/3429c394716364bbef802180e9763d04812757c205e1b4568bc321772096ed86.png
             */
            portrait: string; // uri
            /**
             * Role
             * Role of the hero
             * example:
             * support
             */
            role: "damage" | "support" | "tank";
        }
        /**
         * HeroStat
         */
        export interface HeroStat {
            hero: /**
             * HeroKey
             * Hero keys used to identify Overwatch heroes in general
             */
            HeroKey;
            /**
             * Value
             * Value of the statistic for the given hero. Duration values are in seconds.
             */
            value: /**
             * Value
             * Value of the statistic for the given hero. Duration values are in seconds.
             */
            number | number;
        }
        /**
         * HeroesComparisons
         * example:
         * {
         *   "critical_hit_accuracy": {
         *     "label": "Critical Hit Accuracy",
         *     "values": [
         *       {
         *         "hero": "kiriko",
         *         "value": 16
         *       },
         *       {
         *         "hero": "widowmaker",
         *         "value": 15
         *       },
         *       {
         *         "hero": "roadhog",
         *         "value": 14
         *       },
         *       {
         *         "hero": "mei",
         *         "value": 13
         *       },
         *       {
         *         "hero": "zenyatta",
         *         "value": 12
         *       },
         *       {
         *         "hero": "hanzo",
         *         "value": 11
         *       },
         *       {
         *         "hero": "mercy",
         *         "value": 11
         *       },
         *       {
         *         "hero": "sombra",
         *         "value": 10
         *       },
         *       {
         *         "hero": "cassidy",
         *         "value": 10
         *       },
         *       {
         *         "hero": "tracer",
         *         "value": 10
         *       },
         *       {
         *         "hero": "genji",
         *         "value": 10
         *       },
         *       {
         *         "hero": "reaper",
         *         "value": 10
         *       },
         *       {
         *         "hero": "dva",
         *         "value": 10
         *       },
         *       {
         *         "hero": "ashe",
         *         "value": 9
         *       },
         *       {
         *         "hero": "baptiste",
         *         "value": 9
         *       },
         *       {
         *         "hero": "lucio",
         *         "value": 8
         *       },
         *       {
         *         "hero": "soldier-76",
         *         "value": 7
         *       },
         *       {
         *         "hero": "bastion",
         *         "value": 6
         *       },
         *       {
         *         "hero": "torbjorn",
         *         "value": 3
         *       },
         *       {
         *         "hero": "doomfist",
         *         "value": 1
         *       },
         *       {
         *         "hero": "wrecking-ball",
         *         "value": 0
         *       },
         *       {
         *         "hero": "reinhardt",
         *         "value": 0
         *       },
         *       {
         *         "hero": "pharah",
         *         "value": 0
         *       },
         *       {
         *         "hero": "winston",
         *         "value": 0
         *       },
         *       {
         *         "hero": "symmetra",
         *         "value": 0
         *       },
         *       {
         *         "hero": "junkrat",
         *         "value": 0
         *       },
         *       {
         *         "hero": "zarya",
         *         "value": 0
         *       },
         *       {
         *         "hero": "ana",
         *         "value": 0
         *       },
         *       {
         *         "hero": "orisa",
         *         "value": 0
         *       },
         *       {
         *         "hero": "brigitte",
         *         "value": 0
         *       },
         *       {
         *         "hero": "moira",
         *         "value": 0
         *       },
         *       {
         *         "hero": "sojourn",
         *         "value": 0
         *       },
         *       {
         *         "hero": "echo",
         *         "value": 0
         *       },
         *       {
         *         "hero": "junker-queen",
         *         "value": 0
         *       },
         *       {
         *         "hero": "sigma",
         *         "value": 0
         *       }
         *     ]
         *   },
         *   "eliminations_per_life": {
         *     "label": "Eliminations per Life",
         *     "values": [
         *       {
         *         "hero": "sigma",
         *         "value": 4.23
         *       },
         *       {
         *         "hero": "moira",
         *         "value": 3.62
         *       },
         *       {
         *         "hero": "dva",
         *         "value": 3.49
         *       },
         *       {
         *         "hero": "zarya",
         *         "value": 3.32
         *       },
         *       {
         *         "hero": "soldier-76",
         *         "value": 3.06
         *       },
         *       {
         *         "hero": "orisa",
         *         "value": 3.01
         *       },
         *       {
         *         "hero": "torbjorn",
         *         "value": 3
         *       },
         *       {
         *         "hero": "roadhog",
         *         "value": 2.99
         *       },
         *       {
         *         "hero": "cassidy",
         *         "value": 2.94
         *       },
         *       {
         *         "hero": "reaper",
         *         "value": 2.81
         *       },
         *       {
         *         "hero": "hanzo",
         *         "value": 2.46
         *       },
         *       {
         *         "hero": "zenyatta",
         *         "value": 2.45
         *       },
         *       {
         *         "hero": "junker-queen",
         *         "value": 2.4
         *       },
         *       {
         *         "hero": "brigitte",
         *         "value": 2.37
         *       },
         *       {
         *         "hero": "tracer",
         *         "value": 2.3
         *       },
         *       {
         *         "hero": "ashe",
         *         "value": 2.29
         *       },
         *       {
         *         "hero": "winston",
         *         "value": 2.26
         *       },
         *       {
         *         "hero": "reinhardt",
         *         "value": 2.07
         *       },
         *       {
         *         "hero": "baptiste",
         *         "value": 2.02
         *       },
         *       {
         *         "hero": "widowmaker",
         *         "value": 1.96
         *       },
         *       {
         *         "hero": "mei",
         *         "value": 1.95
         *       },
         *       {
         *         "hero": "junkrat",
         *         "value": 1.95
         *       },
         *       {
         *         "hero": "symmetra",
         *         "value": 1.89
         *       },
         *       {
         *         "hero": "sombra",
         *         "value": 1.77
         *       },
         *       {
         *         "hero": "pharah",
         *         "value": 1.72
         *       },
         *       {
         *         "hero": "bastion",
         *         "value": 1.69
         *       },
         *       {
         *         "hero": "doomfist",
         *         "value": 1.57
         *       },
         *       {
         *         "hero": "lucio",
         *         "value": 1.52
         *       },
         *       {
         *         "hero": "genji",
         *         "value": 1.48
         *       },
         *       {
         *         "hero": "ana",
         *         "value": 1.37
         *       },
         *       {
         *         "hero": "wrecking-ball",
         *         "value": 1.24
         *       },
         *       {
         *         "hero": "kiriko",
         *         "value": 1.2
         *       },
         *       {
         *         "hero": "echo",
         *         "value": 1
         *       },
         *       {
         *         "hero": "sojourn",
         *         "value": 0.89
         *       },
         *       {
         *         "hero": "mercy",
         *         "value": 0.08
         *       }
         *     ]
         *   },
         *   "games_won": {
         *     "label": "Games Won",
         *     "values": [
         *       {
         *         "hero": "reinhardt",
         *         "value": 1613
         *       },
         *       {
         *         "hero": "zarya",
         *         "value": 934
         *       },
         *       {
         *         "hero": "zenyatta",
         *         "value": 800
         *       },
         *       {
         *         "hero": "ana",
         *         "value": 551
         *       },
         *       {
         *         "hero": "cassidy",
         *         "value": 492
         *       },
         *       {
         *         "hero": "roadhog",
         *         "value": 316
         *       },
         *       {
         *         "hero": "moira",
         *         "value": 270
         *       },
         *       {
         *         "hero": "baptiste",
         *         "value": 263
         *       },
         *       {
         *         "hero": "orisa",
         *         "value": 263
         *       },
         *       {
         *         "hero": "winston",
         *         "value": 199
         *       },
         *       {
         *         "hero": "soldier-76",
         *         "value": 147
         *       },
         *       {
         *         "hero": "dva",
         *         "value": 130
         *       },
         *       {
         *         "hero": "lucio",
         *         "value": 96
         *       },
         *       {
         *         "hero": "tracer",
         *         "value": 62
         *       },
         *       {
         *         "hero": "mercy",
         *         "value": 59
         *       },
         *       {
         *         "hero": "hanzo",
         *         "value": 38
         *       },
         *       {
         *         "hero": "brigitte",
         *         "value": 28
         *       },
         *       {
         *         "hero": "sigma",
         *         "value": 27
         *       },
         *       {
         *         "hero": "pharah",
         *         "value": 21
         *       },
         *       {
         *         "hero": "junkrat",
         *         "value": 21
         *       },
         *       {
         *         "hero": "kiriko",
         *         "value": 18
         *       },
         *       {
         *         "hero": "reaper",
         *         "value": 18
         *       },
         *       {
         *         "hero": "wrecking-ball",
         *         "value": 10
         *       },
         *       {
         *         "hero": "genji",
         *         "value": 9
         *       },
         *       {
         *         "hero": "mei",
         *         "value": 9
         *       },
         *       {
         *         "hero": "widowmaker",
         *         "value": 9
         *       },
         *       {
         *         "hero": "doomfist",
         *         "value": 8
         *       },
         *       {
         *         "hero": "symmetra",
         *         "value": 5
         *       },
         *       {
         *         "hero": "bastion",
         *         "value": 4
         *       },
         *       {
         *         "hero": "torbjorn",
         *         "value": 3
         *       },
         *       {
         *         "hero": "junker-queen",
         *         "value": 3
         *       },
         *       {
         *         "hero": "sombra",
         *         "value": 2
         *       },
         *       {
         *         "hero": "ashe",
         *         "value": 1
         *       },
         *       {
         *         "hero": "sojourn",
         *         "value": 0
         *       },
         *       {
         *         "hero": "echo",
         *         "value": 0
         *       }
         *     ]
         *   },
         *   "multikill_best": {
         *     "label": "Multikill - Best",
         *     "values": [
         *       {
         *         "hero": "reinhardt",
         *         "value": 6
         *       },
         *       {
         *         "hero": "zarya",
         *         "value": 6
         *       },
         *       {
         *         "hero": "moira",
         *         "value": 6
         *       },
         *       {
         *         "hero": "reaper",
         *         "value": 5
         *       },
         *       {
         *         "hero": "hanzo",
         *         "value": 5
         *       },
         *       {
         *         "hero": "roadhog",
         *         "value": 5
         *       },
         *       {
         *         "hero": "cassidy",
         *         "value": 5
         *       },
         *       {
         *         "hero": "soldier-76",
         *         "value": 5
         *       },
         *       {
         *         "hero": "tracer",
         *         "value": 4
         *       },
         *       {
         *         "hero": "pharah",
         *         "value": 4
         *       },
         *       {
         *         "hero": "winston",
         *         "value": 4
         *       },
         *       {
         *         "hero": "zenyatta",
         *         "value": 4
         *       },
         *       {
         *         "hero": "junkrat",
         *         "value": 4
         *       },
         *       {
         *         "hero": "lucio",
         *         "value": 4
         *       },
         *       {
         *         "hero": "dva",
         *         "value": 4
         *       },
         *       {
         *         "hero": "mei",
         *         "value": 4
         *       },
         *       {
         *         "hero": "ana",
         *         "value": 4
         *       },
         *       {
         *         "hero": "orisa",
         *         "value": 4
         *       },
         *       {
         *         "hero": "brigitte",
         *         "value": 4
         *       },
         *       {
         *         "hero": "wrecking-ball",
         *         "value": 4
         *       },
         *       {
         *         "hero": "baptiste",
         *         "value": 4
         *       },
         *       {
         *         "hero": "sigma",
         *         "value": 4
         *       },
         *       {
         *         "hero": "torbjorn",
         *         "value": 3
         *       },
         *       {
         *         "hero": "symmetra",
         *         "value": 3
         *       },
         *       {
         *         "hero": "genji",
         *         "value": 3
         *       },
         *       {
         *         "hero": "doomfist",
         *         "value": 3
         *       },
         *       {
         *         "hero": "kiriko",
         *         "value": 3
         *       },
         *       {
         *         "hero": "mercy",
         *         "value": 0
         *       },
         *       {
         *         "hero": "widowmaker",
         *         "value": 0
         *       },
         *       {
         *         "hero": "bastion",
         *         "value": 0
         *       },
         *       {
         *         "hero": "sombra",
         *         "value": 0
         *       },
         *       {
         *         "hero": "sojourn",
         *         "value": 0
         *       },
         *       {
         *         "hero": "ashe",
         *         "value": 0
         *       },
         *       {
         *         "hero": "echo",
         *         "value": 0
         *       },
         *       {
         *         "hero": "junker-queen",
         *         "value": 0
         *       }
         *     ]
         *   },
         *   "objective_kills": {
         *     "label": "Objective Kills",
         *     "values": [
         *       {
         *         "hero": "reinhardt",
         *         "value": 14946
         *       },
         *       {
         *         "hero": "zarya",
         *         "value": 13495
         *       },
         *       {
         *         "hero": "zenyatta",
         *         "value": 8010
         *       },
         *       {
         *         "hero": "cassidy",
         *         "value": 6472
         *       },
         *       {
         *         "hero": "roadhog",
         *         "value": 4947
         *       },
         *       {
         *         "hero": "moira",
         *         "value": 4444
         *       },
         *       {
         *         "hero": "ana",
         *         "value": 4339
         *       },
         *       {
         *         "hero": "orisa",
         *         "value": 3972
         *       },
         *       {
         *         "hero": "baptiste",
         *         "value": 3098
         *       },
         *       {
         *         "hero": "winston",
         *         "value": 2678
         *       },
         *       {
         *         "hero": "soldier-76",
         *         "value": 2198
         *       },
         *       {
         *         "hero": "dva",
         *         "value": 1647
         *       },
         *       {
         *         "hero": "tracer",
         *         "value": 1227
         *       },
         *       {
         *         "hero": "lucio",
         *         "value": 1130
         *       },
         *       {
         *         "hero": "sigma",
         *         "value": 413
         *       },
         *       {
         *         "hero": "reaper",
         *         "value": 385
         *       },
         *       {
         *         "hero": "wrecking-ball",
         *         "value": 330
         *       },
         *       {
         *         "hero": "hanzo",
         *         "value": 312
         *       },
         *       {
         *         "hero": "brigitte",
         *         "value": 270
         *       },
         *       {
         *         "hero": "junkrat",
         *         "value": 239
         *       },
         *       {
         *         "hero": "pharah",
         *         "value": 183
         *       },
         *       {
         *         "hero": "kiriko",
         *         "value": 123
         *       },
         *       {
         *         "hero": "mei",
         *         "value": 120
         *       },
         *       {
         *         "hero": "genji",
         *         "value": 93
         *       },
         *       {
         *         "hero": "doomfist",
         *         "value": 74
         *       },
         *       {
         *         "hero": "widowmaker",
         *         "value": 58
         *       },
         *       {
         *         "hero": "symmetra",
         *         "value": 49
         *       },
         *       {
         *         "hero": "junker-queen",
         *         "value": 41
         *       },
         *       {
         *         "hero": "mercy",
         *         "value": 35
         *       },
         *       {
         *         "hero": "sombra",
         *         "value": 29
         *       },
         *       {
         *         "hero": "torbjorn",
         *         "value": 26
         *       },
         *       {
         *         "hero": "bastion",
         *         "value": 23
         *       },
         *       {
         *         "hero": "ashe",
         *         "value": 14
         *       },
         *       {
         *         "hero": "sojourn",
         *         "value": 6
         *       },
         *       {
         *         "hero": "echo",
         *         "value": 0
         *       }
         *     ]
         *   },
         *   "time_played": {
         *     "label": "Time Played",
         *     "values": [
         *       {
         *         "hero": "reinhardt",
         *         "value": 1332342
         *       },
         *       {
         *         "hero": "zarya",
         *         "value": 809472
         *       },
         *       {
         *         "hero": "zenyatta",
         *         "value": 613300
         *       },
         *       {
         *         "hero": "ana",
         *         "value": 555785
         *       },
         *       {
         *         "hero": "cassidy",
         *         "value": 417849
         *       },
         *       {
         *         "hero": "roadhog",
         *         "value": 327281
         *       },
         *       {
         *         "hero": "baptiste",
         *         "value": 266965
         *       },
         *       {
         *         "hero": "moira",
         *         "value": 251213
         *       },
         *       {
         *         "hero": "orisa",
         *         "value": 225959
         *       },
         *       {
         *         "hero": "winston",
         *         "value": 215449
         *       },
         *       {
         *         "hero": "soldier-76",
         *         "value": 127809
         *       },
         *       {
         *         "hero": "dva",
         *         "value": 117080
         *       },
         *       {
         *         "hero": "lucio",
         *         "value": 96297
         *       },
         *       {
         *         "hero": "mercy",
         *         "value": 81706
         *       },
         *       {
         *         "hero": "tracer",
         *         "value": 75307
         *       },
         *       {
         *         "hero": "hanzo",
         *         "value": 31210
         *       },
         *       {
         *         "hero": "brigitte",
         *         "value": 25856
         *       },
         *       {
         *         "hero": "reaper",
         *         "value": 24141
         *       },
         *       {
         *         "hero": "sigma",
         *         "value": 22265
         *       },
         *       {
         *         "hero": "junkrat",
         *         "value": 20962
         *       },
         *       {
         *         "hero": "kiriko",
         *         "value": 20890
         *       },
         *       {
         *         "hero": "wrecking-ball",
         *         "value": 19042
         *       },
         *       {
         *         "hero": "pharah",
         *         "value": 18852
         *       },
         *       {
         *         "hero": "genji",
         *         "value": 10902
         *       },
         *       {
         *         "hero": "mei",
         *         "value": 10384
         *       },
         *       {
         *         "hero": "widowmaker",
         *         "value": 10331
         *       },
         *       {
         *         "hero": "doomfist",
         *         "value": 8152
         *       },
         *       {
         *         "hero": "symmetra",
         *         "value": 3678
         *       },
         *       {
         *         "hero": "sombra",
         *         "value": 3378
         *       },
         *       {
         *         "hero": "junker-queen",
         *         "value": 3213
         *       },
         *       {
         *         "hero": "torbjorn",
         *         "value": 2385
         *       },
         *       {
         *         "hero": "bastion",
         *         "value": 2077
         *       },
         *       {
         *         "hero": "ashe",
         *         "value": 950
         *       },
         *       {
         *         "hero": "sojourn",
         *         "value": 865
         *       },
         *       {
         *         "hero": "echo",
         *         "value": 79
         *       }
         *     ]
         *   },
         *   "weapon_accuracy": {
         *     "label": "Weapon Accuracy",
         *     "values": [
         *       {
         *         "hero": "ashe",
         *         "value": 48
         *       },
         *       {
         *         "hero": "sigma",
         *         "value": 48
         *       },
         *       {
         *         "hero": "pharah",
         *         "value": 45
         *       },
         *       {
         *         "hero": "cassidy",
         *         "value": 42
         *       },
         *       {
         *         "hero": "zarya",
         *         "value": 40
         *       },
         *       {
         *         "hero": "sombra",
         *         "value": 37
         *       },
         *       {
         *         "hero": "soldier-76",
         *         "value": 36
         *       },
         *       {
         *         "hero": "winston",
         *         "value": 35
         *       },
         *       {
         *         "hero": "widowmaker",
         *         "value": 35
         *       },
         *       {
         *         "hero": "baptiste",
         *         "value": 33
         *       },
         *       {
         *         "hero": "tracer",
         *         "value": 33
         *       },
         *       {
         *         "hero": "torbjorn",
         *         "value": 32
         *       },
         *       {
         *         "hero": "wrecking-ball",
         *         "value": 32
         *       },
         *       {
         *         "hero": "kiriko",
         *         "value": 31
         *       },
         *       {
         *         "hero": "hanzo",
         *         "value": 30
         *       },
         *       {
         *         "hero": "orisa",
         *         "value": 30
         *       },
         *       {
         *         "hero": "sojourn",
         *         "value": 29
         *       },
         *       {
         *         "hero": "lucio",
         *         "value": 28
         *       },
         *       {
         *         "hero": "junker-queen",
         *         "value": 27
         *       },
         *       {
         *         "hero": "mei",
         *         "value": 27
         *       },
         *       {
         *         "hero": "symmetra",
         *         "value": 27
         *       },
         *       {
         *         "hero": "genji",
         *         "value": 27
         *       },
         *       {
         *         "hero": "doomfist",
         *         "value": 26
         *       },
         *       {
         *         "hero": "zenyatta",
         *         "value": 25
         *       },
         *       {
         *         "hero": "reaper",
         *         "value": 25
         *       },
         *       {
         *         "hero": "roadhog",
         *         "value": 24
         *       },
         *       {
         *         "hero": "junkrat",
         *         "value": 24
         *       },
         *       {
         *         "hero": "dva",
         *         "value": 23
         *       },
         *       {
         *         "hero": "mercy",
         *         "value": 20
         *       },
         *       {
         *         "hero": "bastion",
         *         "value": 16
         *       },
         *       {
         *         "hero": "ana",
         *         "value": 16
         *       },
         *       {
         *         "hero": "echo",
         *         "value": 11
         *       },
         *       {
         *         "hero": "reinhardt",
         *         "value": 0
         *       },
         *       {
         *         "hero": "brigitte",
         *         "value": 0
         *       },
         *       {
         *         "hero": "moira",
         *         "value": 0
         *       }
         *     ]
         *   }
         * }
         */
        export interface HeroesComparisons {
            /**
             * Total time played for each hero (integer in seconds)
             */
            time_played: /* Total time played for each hero (integer in seconds) */ /* HeroesStats */ HeroesStats | null;
            /**
             * Number of games won for each hero (integer)
             */
            games_won: /* Number of games won for each hero (integer) */ /* HeroesStats */ HeroesStats | null;
            /**
             * Percentage of weapon accuracy for each hero (integer between 0 and 100)
             */
            weapon_accuracy: /* Percentage of weapon accuracy for each hero (integer between 0 and 100) */ /* HeroesStats */ HeroesStats | null;
            /**
             * Winrate percentage for each hero (integer between 0 and 100)
             */
            win_percentage: /* Winrate percentage for each hero (integer between 0 and 100) */ /* HeroesStats */ HeroesStats | null;
            /**
             * Eliminations per life for each hero (float)
             */
            eliminations_per_life: /* Eliminations per life for each hero (float) */ /* HeroesStats */ HeroesStats | null;
            /**
             * Critical hit accuracy percentage for each hero (integer between 0 and 100)
             */
            critical_hit_accuracy: /* Critical hit accuracy percentage for each hero (integer between 0 and 100) */ /* HeroesStats */ HeroesStats | null;
            /**
             * Best multikills statistic for each hero (integer)
             */
            multikill_best: /* Best multikills statistic for each hero (integer) */ /* HeroesStats */ HeroesStats | null;
            /**
             * Total number of objective kills for each hero (integer)
             */
            objective_kills: /* Total number of objective kills for each hero (integer) */ /* HeroesStats */ HeroesStats | null;
        }
        /**
         * HeroesStats
         */
        export interface HeroesStats {
            /**
             * Label
             * Label of the hero statistic
             */
            label: string;
            /**
             * Values
             * List of values of this statistic for each heroes. All heroes may not be included in the list.
             */
            values: [
                /* HeroStat */ HeroStat,
                .../* HeroStat */ HeroStat[]
            ];
        }
        /**
         * HitPoints
         */
        export interface HitPoints {
            /**
             * Health
             * Health of the hero
             * example:
             * 200
             */
            health: number;
            /**
             * Armor
             * Armor of the hero
             * example:
             * 0
             */
            armor: number;
            /**
             * Shields
             * Shields of the hero
             * example:
             * 0
             */
            shields: number;
            /**
             * Total
             * Total HP of the hero
             * example:
             * 200
             */
            total: number;
        }
        /**
         * InternalServerErrorMessage
         */
        export interface InternalServerErrorMessage {
            /**
             * Error
             * Message describing the internal server error
             * example:
             * An internal server error occurred during the process. The developer received a notification, but don't hesitate to create a GitHub issue if you want any news concerning the bug resolution : https://github.com/TeKrop/overfast-api/issues
             */
            error: string;
        }
        /**
         * Locale
         * Locales supported by Blizzard
         */
        export type Locale = "de-de" | "en-gb" | "en-us" | "es-es" | "es-mx" | "fr-fr" | "it-it" | "ja-jp" | "ko-kr" | "pl-pl" | "pt-br" | "ru-ru" | "zh-tw";
        /**
         * Map
         */
        export interface Map {
            /**
             * Name
             * Name of the map
             * example:
             * Hanamura
             */
            name: string;
            /**
             * Screenshot
             * Screenshot of the map
             * example:
             * https://overfast-api.tekrop.fr/static/maps/hanamura.jpg
             */
            screenshot: string; // uri
            /**
             * Gamemodes
             * Main gamemodes on which the map is playable
             */
            gamemodes: /**
             * MapGamemode
             * Maps gamemodes keys
             */
            MapGamemode[];
            /**
             * Location
             * Location of the map
             * example:
             * Tokyo, Japan
             */
            location: string;
            /**
             * Country Code
             * Country Code of the location of the map. If not defined, it's null.
             * example:
             * JP
             */
            country_code: /**
             * Country Code
             * Country Code of the location of the map. If not defined, it's null.
             * example:
             * JP
             */
            string | null;
        }
        /**
         * MapGamemode
         * Maps gamemodes keys
         */
        export type MapGamemode = "assault" | "capture-the-flag" | "control" | "deathmatch" | "elimination" | "escort" | "flashpoint" | "hybrid" | "push" | "team-deathmatch";
        /**
         * Media
         */
        export interface Media {
            /**
             * MediaType
             * Type of the media
             * example:
             * video
             */
            type: "comic" | "short-story" | "video";
            /**
             * Link
             * Link to the media
             * example:
             * https://youtu.be/PKYVvPNhRR0
             */
            link: string; // uri
        }
        /**
         * MediaType
         * Media types for heroes pages
         */
        export type MediaType = "comic" | "short-story" | "video";
        /**
         * PlatformCompetitiveRanksContainer
         */
        export interface PlatformCompetitiveRanksContainer {
            /**
             * Season
             * Last competitive season played by the player. Can be 0 on Blizzard data for some reason, but can't explain what it means.
             * example:
             * 3
             */
            season: /**
             * Season
             * Last competitive season played by the player. Can be 0 on Blizzard data for some reason, but can't explain what it means.
             * example:
             * 3
             */
            number | null;
            /**
             * Tank role details
             */
            tank: /* Tank role details */ /* PlayerCompetitiveRank */ PlayerCompetitiveRank | null;
            /**
             * Damage role details
             */
            damage: /* Damage role details */ /* PlayerCompetitiveRank */ PlayerCompetitiveRank | null;
            /**
             * Support role details
             */
            support: /* Support role details */ /* PlayerCompetitiveRank */ PlayerCompetitiveRank | null;
            /**
             * Open Queue role details
             */
            open: /* Open Queue role details */ /* PlayerCompetitiveRank */ PlayerCompetitiveRank | null;
        }
        /**
         * Player
         */
        export interface Player {
            /**
             * PlayerSummary
             * Player summary (avatar, endorsement, competitive ranks, etc.)
             */
            summary: {
                /**
                 * Username
                 * Username of the player
                 * example:
                 * TeKrop
                 */
                username: string;
                /**
                 * Avatar
                 * URL of the player's avatar. Can be null if couldn't retrieve any
                 * example:
                 * https://d15f34w2p8l1cc.cloudfront.net/overwatch/daeddd96e58a2150afa6ffc3c5503ae7f96afc2e22899210d444f45dee508c6c.png
                 */
                avatar?: /**
                 * Avatar
                 * URL of the player's avatar. Can be null if couldn't retrieve any
                 * example:
                 * https://d15f34w2p8l1cc.cloudfront.net/overwatch/daeddd96e58a2150afa6ffc3c5503ae7f96afc2e22899210d444f45dee508c6c.png
                 */
                string /* uri */ | null;
                /**
                 * Namecard
                 * URL of the player's namecard (or banner) if any
                 * example:
                 * https://d15f34w2p8l1cc.cloudfront.net/overwatch/55d8c21e9d8b14942c26c4028059b6cd3b4e2fea40a139821ecee73a0005126f.png
                 */
                namecard?: /**
                 * Namecard
                 * URL of the player's namecard (or banner) if any
                 * example:
                 * https://d15f34w2p8l1cc.cloudfront.net/overwatch/55d8c21e9d8b14942c26c4028059b6cd3b4e2fea40a139821ecee73a0005126f.png
                 */
                string /* uri */ | null;
                /**
                 * Title
                 * Title of the player if any
                 * example:
                 * Bytefixer
                 */
                title: /**
                 * Title
                 * Title of the player if any
                 * example:
                 * Bytefixer
                 */
                string | null;
                /**
                 * Player endorsement details
                 */
                endorsement: /* Player endorsement details */ /* PlayerEndorsement */ PlayerEndorsement | null;
                /**
                 * Competitive ranking in the last season played by the player in different roles depending on the platform. If the career is private or if the player doesn't play competitive at all, it's null.
                 */
                competitive: /* Competitive ranking in the last season played by the player in different roles depending on the platform. If the career is private or if the player doesn't play competitive at all, it's null. */ /* PlayerCompetitiveRanksContainer */ PlayerCompetitiveRanksContainer | null;
            };
            /**
             * Player statistics (heroes comparisons, career stats, etc.). If the player career is private or has no stat at all, it's null.
             */
            stats: /* Player statistics (heroes comparisons, career stats, etc.). If the player career is private or has no stat at all, it's null. */ /* PlayerStats */ PlayerStats | null;
        }
        /**
         * PlayerCareerStats
         * example:
         * {
         *   "all-heroes": {
         *     "assists": {
         *       "assists": 35,
         *       "defensive_assists": 29,
         *       "healing_done": 12703,
         *       "offensive_assists": 21
         *     },
         *     "average": {
         *       "assists_avg_per_10_min": 7.48,
         *       "deaths_avg_per_10_min": 6.41,
         *       "eliminations_avg_per_10_min": 10.9,
         *       "final_blows_avg_per_10_min": 3.85,
         *       "healing_done_avg_per_10_min": 2715,
         *       "hero_damage_done_avg_per_10_min": 7289,
         *       "objective_contest_time_avg_per_10_min": 50,
         *       "objective_kills_avg_per_10_min": 4.7,
         *       "objective_time_avg_per_10_min": 89
         *     },
         *     "best": {
         *       "all_damage_done_most_in_game": 25326,
         *       "assists_most_in_game": 16,
         *       "barrier_damage_done_most_in_game": 7544,
         *       "defensive_assists_most_in_game": 15,
         *       "eliminations_most_in_game": 22,
         *       "environmental_kills_most_in_game": 1,
         *       "final_blows_most_in_game": 10,
         *       "healing_done_most_in_game": 8196,
         *       "hero_damage_done_most_in_game": 17735,
         *       "kill_streak_best": 7,
         *       "multikill_best": 3,
         *       "objective_contest_time_most_in_game": 155,
         *       "objective_kills_most_in_game": 7,
         *       "objective_time_most_in_game": 281,
         *       "offensive_assists_most_in_game": 11,
         *       "solo_kills_most_in_game": 10,
         *       "time_spent_on_fire_most_in_game": 88
         *     },
         *     "combat": {
         *       "damage_done": 34098,
         *       "deaths": 30,
         *       "eliminations": 51,
         *       "environmental_kills": 1,
         *       "final_blows": 18,
         *       "hero_damage_done": 34098,
         *       "multikills": 1,
         *       "objective_contest_time": 233,
         *       "objective_kills": 22,
         *       "objective_time": 418
         *     },
         *     "game": {
         *       "games_lost": 4,
         *       "games_played": 5,
         *       "games_won": 1,
         *       "hero_wins": 1,
         *       "time_played": 2807
         *     }
         *   },
         *   "ana": {
         *     "assists": {
         *       "assists": 32,
         *       "defensive_assists": 29,
         *       "defensive_assists_avg_per_10_min": 20.32,
         *       "defensive_assists_most_in_game": 15,
         *       "healing_done": 12216,
         *       "healing_done_most_in_game": 8196,
         *       "offensive_assists": 18,
         *       "offensive_assists_avg_per_10_min": 12.61,
         *       "offensive_assists_most_in_game": 11
         *     },
         *     "average": {
         *       "all_damage_done_avg_per_10_min": 3235,
         *       "assists_avg_per_10_min": 22.42,
         *       "deaths_avg_per_10_min": 5.61,
         *       "eliminations_avg_per_10_min": 9.11,
         *       "eliminations_per_life": 1.63,
         *       "final_blows_avg_per_10_min": 2.1,
         *       "healing_done_avg_per_10_min": 8560,
         *       "hero_damage_done_avg_per_10_min": 2645,
         *       "obj_contest_time_avg_per_10_min": 36,
         *       "objective_kills_avg_per_10_min": 4.91,
         *       "objective_time_avg_per_10_min": 64
         *     },
         *     "best": {
         *       "all_damage_done_most_in_game": 2978,
         *       "all_damage_done_most_in_life": 1349,
         *       "assists_most_in_game": 16,
         *       "eliminations_most_in_game": 7,
         *       "eliminations_most_in_life": 4,
         *       "final_blows_most_in_game": 3,
         *       "hero_damage_done_most_in_game": 2291,
         *       "hero_damage_done_most_in_life": 1194,
         *       "kill_streak_best": 4,
         *       "obj_contest_time_most_in_game": 46,
         *       "objective_kills_most_in_game": 4,
         *       "objective_time_most_in_game": 51,
         *       "weapon_accuracy_best_in_game": 19
         *     },
         *     "combat": {
         *       "all_damage_done": 4616,
         *       "deaths": 8,
         *       "eliminations": 13,
         *       "final_blows": 3,
         *       "hero_damage_done": 3774,
         *       "obj_contest_time": 51,
         *       "objective_kills": 7,
         *       "objective_time": 91,
         *       "weapon_accuracy": 18
         *     },
         *     "game": {
         *       "games_lost": 1,
         *       "games_played": 2,
         *       "games_won": 1,
         *       "hero_wins": 1,
         *       "time_played": 856,
         *       "win_percentage": 50
         *     },
         *     "hero_specific": {
         *       "biotic_grenade_kills": 9,
         *       "biotic_grenade_kills_avg_per_10_min": 6.31,
         *       "damage_amplified": 862,
         *       "damage_amplified_avg_per_10_min": 604,
         *       "damage_amplified_most_in_game": 741,
         *       "enemies_slept": 4,
         *       "enemies_slept_avg_per_10_min": 2.8,
         *       "enemies_slept_most_in_game": 3,
         *       "healing_amplified": 647,
         *       "healing_amplified_avg_per_10_min": 453,
         *       "healing_amplified_most_in_game": 411,
         *       "nano_boost_assists": 8,
         *       "nano_boost_assists_avg_per_10_min": 5.61,
         *       "nano_boost_assists_most_in_game": 7,
         *       "scoped_accuracy": 44,
         *       "scoped_accuracy_best_in_game": 45,
         *       "self_healing": 577,
         *       "self_healing_avg_per_10_min": 404,
         *       "self_healing_most_in_game": 300,
         *       "unscoped_accuracy": 52,
         *       "unscoped_accuracy_best_in_game": 55
         *     }
         *   },
         *   "cassidy": {
         *     "average": {
         *       "all_damage_done_avg_per_10_min": 11813,
         *       "critical_hit_kills_avg_per_10_min": 0.75,
         *       "critical_hits_avg_per_10_min": 10.56,
         *       "deaths_avg_per_10_min": 8.3,
         *       "eliminations_avg_per_10_min": 12.07,
         *       "eliminations_per_life": 1.45,
         *       "final_blows_avg_per_10_min": 6.79,
         *       "hero_damage_done_avg_per_10_min": 6937,
         *       "obj_contest_time_avg_per_10_min": 18,
         *       "objective_kills_avg_per_10_min": 3.77,
         *       "objective_time_avg_per_10_min": 18
         *     },
         *     "best": {
         *       "all_damage_done_most_in_game": 10195,
         *       "all_damage_done_most_in_life": 3275,
         *       "critical_hit_kills_most_in_game": 1,
         *       "critical_hits_most_in_game": 10,
         *       "critical_hits_most_in_life": 5,
         *       "eliminations_most_in_game": 13,
         *       "eliminations_most_in_life": 5,
         *       "final_blows_most_in_game": 8,
         *       "hero_damage_done_most_in_game": 6319,
         *       "hero_damage_done_most_in_life": 1930,
         *       "kill_streak_best": 5,
         *       "obj_contest_time_most_in_game": 15,
         *       "objective_kills_most_in_game": 3,
         *       "objective_time_most_in_game": 15,
         *       "weapon_accuracy_best_in_game": 53
         *     },
         *     "combat": {
         *       "all_damage_done": 15654,
         *       "critical_hit_accuracy": 10,
         *       "critical_hit_kills": 1,
         *       "critical_hits": 14,
         *       "deaths": 11,
         *       "eliminations": 16,
         *       "final_blows": 9,
         *       "hero_damage_done": 9193,
         *       "obj_contest_time": 24,
         *       "objective_kills": 5,
         *       "objective_time": 24,
         *       "weapon_accuracy": 38
         *     },
         *     "game": {
         *       "games_lost": 2,
         *       "games_played": 2,
         *       "time_played": 795
         *     },
         *     "hero_specific": {
         *       "deadeye_kills": 1,
         *       "deadeye_kills_avg_per_10_min": 0.75,
         *       "deadeye_kills_most_in_game": 1,
         *       "fan_the_hammer_kills": 1,
         *       "fan_the_hammer_kills_avg_per_10_min": 0.75,
         *       "fan_the_hammer_kills_most_in_game": 1,
         *       "long_range_final_blows": 2,
         *       "long_range_final_blows_avg_per_10_min": 1.51,
         *       "magnetic_grenade_attach_rate": 27,
         *       "magnetic_grenade_kills": 4,
         *       "magnetic_grenade_kills_avg_per_10_min": 3.02,
         *       "magnetic_grenade_kills_most_in_game": 3
         *     }
         *   },
         *   "orisa": {
         *     "assists": {
         *       "assists": 2,
         *       "offensive_assists": 2,
         *       "offensive_assists_avg_per_10_min": 2.69,
         *       "offensive_assists_most_in_game": 2
         *     },
         *     "average": {
         *       "all_damage_done_avg_per_10_min": 20159,
         *       "assists_avg_per_10_min": 2.69,
         *       "deaths_avg_per_10_min": 5.39,
         *       "eliminations_avg_per_10_min": 6.73,
         *       "eliminations_per_life": 1.25,
         *       "final_blows_avg_per_10_min": 1.35,
         *       "hero_damage_done_avg_per_10_min": 12226,
         *       "obj_contest_time_avg_per_10_min": 154,
         *       "objective_kills_avg_per_10_min": 5.39,
         *       "objective_time_avg_per_10_min": 154
         *     },
         *     "best": {
         *       "all_damage_done_most_in_game": 14969,
         *       "all_damage_done_most_in_life": 5409,
         *       "assists_most_in_game": 2,
         *       "eliminations_most_in_game": 5,
         *       "eliminations_most_in_life": 4,
         *       "final_blows_most_in_game": 1,
         *       "hero_damage_done_most_in_game": 9078,
         *       "hero_damage_done_most_in_life": 3181,
         *       "kill_streak_best": 4,
         *       "obj_contest_time_most_in_game": 114,
         *       "objective_kills_most_in_game": 4,
         *       "objective_time_most_in_game": 114,
         *       "weapon_accuracy_best_in_game": 40
         *     },
         *     "combat": {
         *       "all_damage_done": 14969,
         *       "deaths": 4,
         *       "eliminations": 5,
         *       "final_blows": 1,
         *       "hero_damage_done": 9078,
         *       "obj_contest_time": 114,
         *       "objective_kills": 4,
         *       "objective_time": 114,
         *       "weapon_accuracy": 40
         *     },
         *     "game": {
         *       "games_lost": 1,
         *       "games_played": 1,
         *       "time_played": 446
         *     },
         *     "hero_specific": {
         *       "energy_javelin_kills": 2,
         *       "energy_javelin_kills_avg_per_10_min": 2.69,
         *       "energy_javelin_kills_nyi": 2,
         *       "javelin_spin_kills": 2,
         *       "javelin_spin_kills_avg_per_10_min": 0,
         *       "javelin_spin_kills_nyi": 2,
         *       "terra_surge_kills": 1,
         *       "terra_surge_kills_avg_per_10_min": 1.35,
         *       "terra_surge_kills_most_in_game": 1
         *     }
         *   },
         *   "reaper": {
         *     "average": {
         *       "all_damage_done_avg_per_10_min": 9753,
         *       "critical_hits_avg_per_10_min": 88.16,
         *       "deaths_avg_per_10_min": 7.84,
         *       "eliminations_avg_per_10_min": 17.63,
         *       "eliminations_per_life": 2.25,
         *       "final_blows_avg_per_10_min": 3.92,
         *       "healing_done_avg_per_10_min": 954,
         *       "hero_damage_done_avg_per_10_min": 6655,
         *       "obj_contest_time_avg_per_10_min": 6,
         *       "objective_kills_avg_per_10_min": 5.88,
         *       "objective_time_avg_per_10_min": 43
         *     },
         *     "best": {
         *       "all_damage_done_most_in_game": 4978,
         *       "all_damage_done_most_in_life": 3235,
         *       "critical_hits_most_in_game": 45,
         *       "critical_hits_most_in_life": 28,
         *       "eliminations_most_in_game": 9,
         *       "eliminations_most_in_life": 7,
         *       "final_blows_most_in_game": 2,
         *       "hero_damage_done_most_in_game": 3397,
         *       "hero_damage_done_most_in_life": 2277,
         *       "kill_streak_best": 7,
         *       "multikill_best": 3,
         *       "obj_contest_time_most_in_game": 3,
         *       "objective_kills_most_in_game": 3,
         *       "objective_time_most_in_game": 22,
         *       "weapon_accuracy_best_in_game": 26
         *     },
         *     "combat": {
         *       "all_damage_done": 4978,
         *       "critical_hit_accuracy": 7,
         *       "critical_hits": 45,
         *       "deaths": 4,
         *       "eliminations": 9,
         *       "final_blows": 2,
         *       "hero_damage_done": 3397,
         *       "multikills": 1,
         *       "obj_contest_time": 3,
         *       "objective_kills": 3,
         *       "objective_time": 22,
         *       "weapon_accuracy": 26
         *     },
         *     "game": {
         *       "games_lost": 0,
         *       "games_played": 0,
         *       "time_played": 306
         *     },
         *     "hero_specific": {
         *       "self_healing": 487,
         *       "self_healing_avg_per_10_min": 954,
         *       "self_healing_most_in_game": 487
         *     }
         *   },
         *   "reinhardt": {
         *     "assists": {
         *       "assists": 1,
         *       "offensive_assists": 1,
         *       "offensive_assists_avg_per_10_min": 1.53,
         *       "offensive_assists_most_in_game": 1
         *     },
         *     "average": {
         *       "all_damage_done_avg_per_10_min": 15868,
         *       "assists_avg_per_10_min": 1.53,
         *       "deaths_avg_per_10_min": 4.6,
         *       "eliminations_avg_per_10_min": 12.26,
         *       "eliminations_per_life": 2.67,
         *       "final_blows_avg_per_10_min": 4.6,
         *       "hero_damage_done_avg_per_10_min": 13263,
         *       "obj_contest_time_avg_per_10_min": 63,
         *       "objective_kills_avg_per_10_min": 4.6,
         *       "objective_time_avg_per_10_min": 256
         *     },
         *     "best": {
         *       "all_damage_done_most_in_game": 10357,
         *       "all_damage_done_most_in_life": 4727,
         *       "assists_most_in_game": 1,
         *       "eliminations_most_in_game": 8,
         *       "eliminations_most_in_life": 6,
         *       "environmental_kills_most_in_game": 1,
         *       "final_blows_most_in_game": 3,
         *       "hero_damage_done_most_in_game": 8657,
         *       "hero_damage_done_most_in_life": 3462,
         *       "kill_streak_best": 6,
         *       "obj_contest_time_most_in_game": 41,
         *       "objective_kills_most_in_game": 3,
         *       "objective_time_most_in_game": 167
         *     },
         *     "combat": {
         *       "all_damage_done": 10357,
         *       "deaths": 3,
         *       "eliminations": 8,
         *       "environmental_kills": 1,
         *       "environmental_kills_avg_per_10_min": 1.53,
         *       "final_blows": 3,
         *       "hero_damage_done": 8657,
         *       "obj_contest_time": 41,
         *       "objective_kills": 3,
         *       "objective_time": 167
         *     },
         *     "game": {
         *       "games_lost": 0,
         *       "games_played": 0,
         *       "time_played": 392
         *     },
         *     "hero_specific": {
         *       "charge_kills": 2,
         *       "charge_kills_avg_per_10_min": 3.06,
         *       "charge_kills_most_in_game": 2,
         *       "earthshatter_kills": 2,
         *       "earthshatter_kills_avg_per_10_min": 3.06,
         *       "earthshatter_kills_most_in_game": 2,
         *       "fire_strike_kills": 4,
         *       "fire_strike_kills_avg_per_10_min": 6.13,
         *       "fire_strike_kills_most_in_game": 4
         *     }
         *   },
         *   "tracer": {
         *     "game": {
         *       "games_lost": 0,
         *       "games_played": 0,
         *       "time_played": 12
         *     },
         *     "hero_specific": {
         *       "low_health_recalls": 1,
         *       "low_health_recalls_avg_per_10_min": 48.98,
         *       "low_health_recalls_most_in_game": 1,
         *       "self_healing": 130,
         *       "self_healing_avg_per_10_min": 6367,
         *       "self_healing_most_in_game": 130
         *     }
         *   }
         * }
         */
        export interface PlayerCareerStats {
            /**
             * Total of statistics for all heroes
             */
            "all-heroes"?: /* Total of statistics for all heroes */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Ana
             */
            ana?: /* Career statistics for Ana */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Ashe
             */
            ashe?: /* Career statistics for Ashe */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Baptiste
             */
            baptiste?: /* Career statistics for Baptiste */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Bastion
             */
            bastion?: /* Career statistics for Bastion */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Brigitte
             */
            brigitte?: /* Career statistics for Brigitte */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Cassidy
             */
            cassidy?: /* Career statistics for Cassidy */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for D.Va
             */
            dva?: /* Career statistics for D.Va */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Doomfist
             */
            doomfist?: /* Career statistics for Doomfist */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Echo
             */
            echo?: /* Career statistics for Echo */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Genji
             */
            genji?: /* Career statistics for Genji */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Hanzo
             */
            hanzo?: /* Career statistics for Hanzo */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Illari
             */
            illari?: /* Career statistics for Illari */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Junker Queen
             */
            "junker-queen"?: /* Career statistics for Junker Queen */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Junkrat
             */
            junkrat?: /* Career statistics for Junkrat */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Kiriko
             */
            kiriko?: /* Career statistics for Kiriko */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Lifeweaver
             */
            lifeweaver?: /* Career statistics for Lifeweaver */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Lúcio
             */
            lucio?: /* Career statistics for Lúcio */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Mauga
             */
            mauga?: /* Career statistics for Mauga */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Mei
             */
            mei?: /* Career statistics for Mei */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Mercy
             */
            mercy?: /* Career statistics for Mercy */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Moira
             */
            moira?: /* Career statistics for Moira */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Orisa
             */
            orisa?: /* Career statistics for Orisa */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Pharah
             */
            pharah?: /* Career statistics for Pharah */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Ramattra
             */
            ramattra?: /* Career statistics for Ramattra */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Reaper
             */
            reaper?: /* Career statistics for Reaper */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Reinhardt
             */
            reinhardt?: /* Career statistics for Reinhardt */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Roadhog
             */
            roadhog?: /* Career statistics for Roadhog */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Sigma
             */
            sigma?: /* Career statistics for Sigma */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Sojourn
             */
            sojourn?: /* Career statistics for Sojourn */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Soldier: 76
             */
            "soldier-76"?: /* Career statistics for Soldier: 76 */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Sombra
             */
            sombra?: /* Career statistics for Sombra */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Symmetra
             */
            symmetra?: /* Career statistics for Symmetra */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Torbjörn
             */
            torbjorn?: /* Career statistics for Torbjörn */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Tracer
             */
            tracer?: /* Career statistics for Tracer */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Venture
             */
            venture?: /* Career statistics for Venture */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Widowmaker
             */
            widowmaker?: /* Career statistics for Widowmaker */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Winston
             */
            winston?: /* Career statistics for Winston */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Wrecking Ball
             */
            "wrecking-ball"?: /* Career statistics for Wrecking Ball */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Zarya
             */
            zarya?: /* Career statistics for Zarya */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
            /**
             * Career statistics for Zenyatta
             */
            zenyatta?: /* Career statistics for Zenyatta */ /* HeroPlayerCareerStats */ HeroPlayerCareerStats | null;
        }
        /**
         * PlayerCompetitiveRank
         */
        export interface PlayerCompetitiveRank {
            /**
             * CompetitiveDivision
             * Division of the rank
             * example:
             * diamond
             */
            division: "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "grandmaster" | "ultimate";
            /**
             * Tier
             * Tier inside the division, lower is better
             * example:
             * 3
             */
            tier: number;
            /**
             * Role Icon
             * URL the role icon
             * example:
             * https://static.playoverwatch.com/img/pages/career/icons/role/tank-f64702b684.svg#icon
             */
            role_icon: string; // uri
            /**
             * Rank Icon
             * URL of the division icon associated with the player rank
             * example:
             * https://static.playoverwatch.com/img/pages/career/icons/rank/Rank_MasterTier-7d3b85ba0d.png
             */
            rank_icon: string; // uri
            /**
             * Tier Icon
             * URL of the tier icon associated with the player rank
             * example:
             * https://static.playoverwatch.com/img/pages/career/icons/rank/TierDivision_3-1de89374e2.png
             */
            tier_icon: string; // uri
        }
        /**
         * PlayerCompetitiveRanksContainer
         */
        export interface PlayerCompetitiveRanksContainer {
            /**
             * Competitive ranks for PC and last season played on it. If the player doesn't play on this platform, it's null.
             */
            pc: /* Competitive ranks for PC and last season played on it. If the player doesn't play on this platform, it's null. */ /* PlatformCompetitiveRanksContainer */ PlatformCompetitiveRanksContainer | null;
            /**
             * Competitive ranks for console and last season played on it. If the player doesn't play on this platform, it's null.
             */
            console: /* Competitive ranks for console and last season played on it. If the player doesn't play on this platform, it's null. */ /* PlatformCompetitiveRanksContainer */ PlatformCompetitiveRanksContainer | null;
        }
        /**
         * PlayerEndorsement
         */
        export interface PlayerEndorsement {
            /**
             * Level
             * Player Endorsement level. 0 if no information found.
             * example:
             * 3
             */
            level: number;
            /**
             * Frame
             * URL of the endorsement frame corresponding to the level
             * example:
             * https://static.playoverwatch.com/img/pages/career/icons/endorsement/3-8ccb5f0aef.svg#icon
             */
            frame: string; // uri
        }
        /**
         * PlayerGamemode
         * Gamemodes associated with players statistics
         */
        export type PlayerGamemode = "quickplay" | "competitive";
        /**
         * PlayerGamemodeStats
         */
        export interface PlayerGamemodeStats {
            /**
             * HeroesComparisons
             * List of general statistics on which heroes are compared for the player : total time played, number of games won, weapon accuracy, number of eliminations per life, etc.). Note that all heroes may not be included in every statistic objects.
             * example:
             * {
             *   "critical_hit_accuracy": {
             *     "label": "Critical Hit Accuracy",
             *     "values": [
             *       {
             *         "hero": "kiriko",
             *         "value": 16
             *       },
             *       {
             *         "hero": "widowmaker",
             *         "value": 15
             *       },
             *       {
             *         "hero": "roadhog",
             *         "value": 14
             *       },
             *       {
             *         "hero": "mei",
             *         "value": 13
             *       },
             *       {
             *         "hero": "zenyatta",
             *         "value": 12
             *       },
             *       {
             *         "hero": "hanzo",
             *         "value": 11
             *       },
             *       {
             *         "hero": "mercy",
             *         "value": 11
             *       },
             *       {
             *         "hero": "sombra",
             *         "value": 10
             *       },
             *       {
             *         "hero": "cassidy",
             *         "value": 10
             *       },
             *       {
             *         "hero": "tracer",
             *         "value": 10
             *       },
             *       {
             *         "hero": "genji",
             *         "value": 10
             *       },
             *       {
             *         "hero": "reaper",
             *         "value": 10
             *       },
             *       {
             *         "hero": "dva",
             *         "value": 10
             *       },
             *       {
             *         "hero": "ashe",
             *         "value": 9
             *       },
             *       {
             *         "hero": "baptiste",
             *         "value": 9
             *       },
             *       {
             *         "hero": "lucio",
             *         "value": 8
             *       },
             *       {
             *         "hero": "soldier-76",
             *         "value": 7
             *       },
             *       {
             *         "hero": "bastion",
             *         "value": 6
             *       },
             *       {
             *         "hero": "torbjorn",
             *         "value": 3
             *       },
             *       {
             *         "hero": "doomfist",
             *         "value": 1
             *       },
             *       {
             *         "hero": "wrecking-ball",
             *         "value": 0
             *       },
             *       {
             *         "hero": "reinhardt",
             *         "value": 0
             *       },
             *       {
             *         "hero": "pharah",
             *         "value": 0
             *       },
             *       {
             *         "hero": "winston",
             *         "value": 0
             *       },
             *       {
             *         "hero": "symmetra",
             *         "value": 0
             *       },
             *       {
             *         "hero": "junkrat",
             *         "value": 0
             *       },
             *       {
             *         "hero": "zarya",
             *         "value": 0
             *       },
             *       {
             *         "hero": "ana",
             *         "value": 0
             *       },
             *       {
             *         "hero": "orisa",
             *         "value": 0
             *       },
             *       {
             *         "hero": "brigitte",
             *         "value": 0
             *       },
             *       {
             *         "hero": "moira",
             *         "value": 0
             *       },
             *       {
             *         "hero": "sojourn",
             *         "value": 0
             *       },
             *       {
             *         "hero": "echo",
             *         "value": 0
             *       },
             *       {
             *         "hero": "junker-queen",
             *         "value": 0
             *       },
             *       {
             *         "hero": "sigma",
             *         "value": 0
             *       }
             *     ]
             *   },
             *   "eliminations_per_life": {
             *     "label": "Eliminations per Life",
             *     "values": [
             *       {
             *         "hero": "sigma",
             *         "value": 4.23
             *       },
             *       {
             *         "hero": "moira",
             *         "value": 3.62
             *       },
             *       {
             *         "hero": "dva",
             *         "value": 3.49
             *       },
             *       {
             *         "hero": "zarya",
             *         "value": 3.32
             *       },
             *       {
             *         "hero": "soldier-76",
             *         "value": 3.06
             *       },
             *       {
             *         "hero": "orisa",
             *         "value": 3.01
             *       },
             *       {
             *         "hero": "torbjorn",
             *         "value": 3
             *       },
             *       {
             *         "hero": "roadhog",
             *         "value": 2.99
             *       },
             *       {
             *         "hero": "cassidy",
             *         "value": 2.94
             *       },
             *       {
             *         "hero": "reaper",
             *         "value": 2.81
             *       },
             *       {
             *         "hero": "hanzo",
             *         "value": 2.46
             *       },
             *       {
             *         "hero": "zenyatta",
             *         "value": 2.45
             *       },
             *       {
             *         "hero": "junker-queen",
             *         "value": 2.4
             *       },
             *       {
             *         "hero": "brigitte",
             *         "value": 2.37
             *       },
             *       {
             *         "hero": "tracer",
             *         "value": 2.3
             *       },
             *       {
             *         "hero": "ashe",
             *         "value": 2.29
             *       },
             *       {
             *         "hero": "winston",
             *         "value": 2.26
             *       },
             *       {
             *         "hero": "reinhardt",
             *         "value": 2.07
             *       },
             *       {
             *         "hero": "baptiste",
             *         "value": 2.02
             *       },
             *       {
             *         "hero": "widowmaker",
             *         "value": 1.96
             *       },
             *       {
             *         "hero": "mei",
             *         "value": 1.95
             *       },
             *       {
             *         "hero": "junkrat",
             *         "value": 1.95
             *       },
             *       {
             *         "hero": "symmetra",
             *         "value": 1.89
             *       },
             *       {
             *         "hero": "sombra",
             *         "value": 1.77
             *       },
             *       {
             *         "hero": "pharah",
             *         "value": 1.72
             *       },
             *       {
             *         "hero": "bastion",
             *         "value": 1.69
             *       },
             *       {
             *         "hero": "doomfist",
             *         "value": 1.57
             *       },
             *       {
             *         "hero": "lucio",
             *         "value": 1.52
             *       },
             *       {
             *         "hero": "genji",
             *         "value": 1.48
             *       },
             *       {
             *         "hero": "ana",
             *         "value": 1.37
             *       },
             *       {
             *         "hero": "wrecking-ball",
             *         "value": 1.24
             *       },
             *       {
             *         "hero": "kiriko",
             *         "value": 1.2
             *       },
             *       {
             *         "hero": "echo",
             *         "value": 1
             *       },
             *       {
             *         "hero": "sojourn",
             *         "value": 0.89
             *       },
             *       {
             *         "hero": "mercy",
             *         "value": 0.08
             *       }
             *     ]
             *   },
             *   "games_won": {
             *     "label": "Games Won",
             *     "values": [
             *       {
             *         "hero": "reinhardt",
             *         "value": 1613
             *       },
             *       {
             *         "hero": "zarya",
             *         "value": 934
             *       },
             *       {
             *         "hero": "zenyatta",
             *         "value": 800
             *       },
             *       {
             *         "hero": "ana",
             *         "value": 551
             *       },
             *       {
             *         "hero": "cassidy",
             *         "value": 492
             *       },
             *       {
             *         "hero": "roadhog",
             *         "value": 316
             *       },
             *       {
             *         "hero": "moira",
             *         "value": 270
             *       },
             *       {
             *         "hero": "baptiste",
             *         "value": 263
             *       },
             *       {
             *         "hero": "orisa",
             *         "value": 263
             *       },
             *       {
             *         "hero": "winston",
             *         "value": 199
             *       },
             *       {
             *         "hero": "soldier-76",
             *         "value": 147
             *       },
             *       {
             *         "hero": "dva",
             *         "value": 130
             *       },
             *       {
             *         "hero": "lucio",
             *         "value": 96
             *       },
             *       {
             *         "hero": "tracer",
             *         "value": 62
             *       },
             *       {
             *         "hero": "mercy",
             *         "value": 59
             *       },
             *       {
             *         "hero": "hanzo",
             *         "value": 38
             *       },
             *       {
             *         "hero": "brigitte",
             *         "value": 28
             *       },
             *       {
             *         "hero": "sigma",
             *         "value": 27
             *       },
             *       {
             *         "hero": "pharah",
             *         "value": 21
             *       },
             *       {
             *         "hero": "junkrat",
             *         "value": 21
             *       },
             *       {
             *         "hero": "kiriko",
             *         "value": 18
             *       },
             *       {
             *         "hero": "reaper",
             *         "value": 18
             *       },
             *       {
             *         "hero": "wrecking-ball",
             *         "value": 10
             *       },
             *       {
             *         "hero": "genji",
             *         "value": 9
             *       },
             *       {
             *         "hero": "mei",
             *         "value": 9
             *       },
             *       {
             *         "hero": "widowmaker",
             *         "value": 9
             *       },
             *       {
             *         "hero": "doomfist",
             *         "value": 8
             *       },
             *       {
             *         "hero": "symmetra",
             *         "value": 5
             *       },
             *       {
             *         "hero": "bastion",
             *         "value": 4
             *       },
             *       {
             *         "hero": "torbjorn",
             *         "value": 3
             *       },
             *       {
             *         "hero": "junker-queen",
             *         "value": 3
             *       },
             *       {
             *         "hero": "sombra",
             *         "value": 2
             *       },
             *       {
             *         "hero": "ashe",
             *         "value": 1
             *       },
             *       {
             *         "hero": "sojourn",
             *         "value": 0
             *       },
             *       {
             *         "hero": "echo",
             *         "value": 0
             *       }
             *     ]
             *   },
             *   "multikill_best": {
             *     "label": "Multikill - Best",
             *     "values": [
             *       {
             *         "hero": "reinhardt",
             *         "value": 6
             *       },
             *       {
             *         "hero": "zarya",
             *         "value": 6
             *       },
             *       {
             *         "hero": "moira",
             *         "value": 6
             *       },
             *       {
             *         "hero": "reaper",
             *         "value": 5
             *       },
             *       {
             *         "hero": "hanzo",
             *         "value": 5
             *       },
             *       {
             *         "hero": "roadhog",
             *         "value": 5
             *       },
             *       {
             *         "hero": "cassidy",
             *         "value": 5
             *       },
             *       {
             *         "hero": "soldier-76",
             *         "value": 5
             *       },
             *       {
             *         "hero": "tracer",
             *         "value": 4
             *       },
             *       {
             *         "hero": "pharah",
             *         "value": 4
             *       },
             *       {
             *         "hero": "winston",
             *         "value": 4
             *       },
             *       {
             *         "hero": "zenyatta",
             *         "value": 4
             *       },
             *       {
             *         "hero": "junkrat",
             *         "value": 4
             *       },
             *       {
             *         "hero": "lucio",
             *         "value": 4
             *       },
             *       {
             *         "hero": "dva",
             *         "value": 4
             *       },
             *       {
             *         "hero": "mei",
             *         "value": 4
             *       },
             *       {
             *         "hero": "ana",
             *         "value": 4
             *       },
             *       {
             *         "hero": "orisa",
             *         "value": 4
             *       },
             *       {
             *         "hero": "brigitte",
             *         "value": 4
             *       },
             *       {
             *         "hero": "wrecking-ball",
             *         "value": 4
             *       },
             *       {
             *         "hero": "baptiste",
             *         "value": 4
             *       },
             *       {
             *         "hero": "sigma",
             *         "value": 4
             *       },
             *       {
             *         "hero": "torbjorn",
             *         "value": 3
             *       },
             *       {
             *         "hero": "symmetra",
             *         "value": 3
             *       },
             *       {
             *         "hero": "genji",
             *         "value": 3
             *       },
             *       {
             *         "hero": "doomfist",
             *         "value": 3
             *       },
             *       {
             *         "hero": "kiriko",
             *         "value": 3
             *       },
             *       {
             *         "hero": "mercy",
             *         "value": 0
             *       },
             *       {
             *         "hero": "widowmaker",
             *         "value": 0
             *       },
             *       {
             *         "hero": "bastion",
             *         "value": 0
             *       },
             *       {
             *         "hero": "sombra",
             *         "value": 0
             *       },
             *       {
             *         "hero": "sojourn",
             *         "value": 0
             *       },
             *       {
             *         "hero": "ashe",
             *         "value": 0
             *       },
             *       {
             *         "hero": "echo",
             *         "value": 0
             *       },
             *       {
             *         "hero": "junker-queen",
             *         "value": 0
             *       }
             *     ]
             *   },
             *   "objective_kills": {
             *     "label": "Objective Kills",
             *     "values": [
             *       {
             *         "hero": "reinhardt",
             *         "value": 14946
             *       },
             *       {
             *         "hero": "zarya",
             *         "value": 13495
             *       },
             *       {
             *         "hero": "zenyatta",
             *         "value": 8010
             *       },
             *       {
             *         "hero": "cassidy",
             *         "value": 6472
             *       },
             *       {
             *         "hero": "roadhog",
             *         "value": 4947
             *       },
             *       {
             *         "hero": "moira",
             *         "value": 4444
             *       },
             *       {
             *         "hero": "ana",
             *         "value": 4339
             *       },
             *       {
             *         "hero": "orisa",
             *         "value": 3972
             *       },
             *       {
             *         "hero": "baptiste",
             *         "value": 3098
             *       },
             *       {
             *         "hero": "winston",
             *         "value": 2678
             *       },
             *       {
             *         "hero": "soldier-76",
             *         "value": 2198
             *       },
             *       {
             *         "hero": "dva",
             *         "value": 1647
             *       },
             *       {
             *         "hero": "tracer",
             *         "value": 1227
             *       },
             *       {
             *         "hero": "lucio",
             *         "value": 1130
             *       },
             *       {
             *         "hero": "sigma",
             *         "value": 413
             *       },
             *       {
             *         "hero": "reaper",
             *         "value": 385
             *       },
             *       {
             *         "hero": "wrecking-ball",
             *         "value": 330
             *       },
             *       {
             *         "hero": "hanzo",
             *         "value": 312
             *       },
             *       {
             *         "hero": "brigitte",
             *         "value": 270
             *       },
             *       {
             *         "hero": "junkrat",
             *         "value": 239
             *       },
             *       {
             *         "hero": "pharah",
             *         "value": 183
             *       },
             *       {
             *         "hero": "kiriko",
             *         "value": 123
             *       },
             *       {
             *         "hero": "mei",
             *         "value": 120
             *       },
             *       {
             *         "hero": "genji",
             *         "value": 93
             *       },
             *       {
             *         "hero": "doomfist",
             *         "value": 74
             *       },
             *       {
             *         "hero": "widowmaker",
             *         "value": 58
             *       },
             *       {
             *         "hero": "symmetra",
             *         "value": 49
             *       },
             *       {
             *         "hero": "junker-queen",
             *         "value": 41
             *       },
             *       {
             *         "hero": "mercy",
             *         "value": 35
             *       },
             *       {
             *         "hero": "sombra",
             *         "value": 29
             *       },
             *       {
             *         "hero": "torbjorn",
             *         "value": 26
             *       },
             *       {
             *         "hero": "bastion",
             *         "value": 23
             *       },
             *       {
             *         "hero": "ashe",
             *         "value": 14
             *       },
             *       {
             *         "hero": "sojourn",
             *         "value": 6
             *       },
             *       {
             *         "hero": "echo",
             *         "value": 0
             *       }
             *     ]
             *   },
             *   "time_played": {
             *     "label": "Time Played",
             *     "values": [
             *       {
             *         "hero": "reinhardt",
             *         "value": 1332342
             *       },
             *       {
             *         "hero": "zarya",
             *         "value": 809472
             *       },
             *       {
             *         "hero": "zenyatta",
             *         "value": 613300
             *       },
             *       {
             *         "hero": "ana",
             *         "value": 555785
             *       },
             *       {
             *         "hero": "cassidy",
             *         "value": 417849
             *       },
             *       {
             *         "hero": "roadhog",
             *         "value": 327281
             *       },
             *       {
             *         "hero": "baptiste",
             *         "value": 266965
             *       },
             *       {
             *         "hero": "moira",
             *         "value": 251213
             *       },
             *       {
             *         "hero": "orisa",
             *         "value": 225959
             *       },
             *       {
             *         "hero": "winston",
             *         "value": 215449
             *       },
             *       {
             *         "hero": "soldier-76",
             *         "value": 127809
             *       },
             *       {
             *         "hero": "dva",
             *         "value": 117080
             *       },
             *       {
             *         "hero": "lucio",
             *         "value": 96297
             *       },
             *       {
             *         "hero": "mercy",
             *         "value": 81706
             *       },
             *       {
             *         "hero": "tracer",
             *         "value": 75307
             *       },
             *       {
             *         "hero": "hanzo",
             *         "value": 31210
             *       },
             *       {
             *         "hero": "brigitte",
             *         "value": 25856
             *       },
             *       {
             *         "hero": "reaper",
             *         "value": 24141
             *       },
             *       {
             *         "hero": "sigma",
             *         "value": 22265
             *       },
             *       {
             *         "hero": "junkrat",
             *         "value": 20962
             *       },
             *       {
             *         "hero": "kiriko",
             *         "value": 20890
             *       },
             *       {
             *         "hero": "wrecking-ball",
             *         "value": 19042
             *       },
             *       {
             *         "hero": "pharah",
             *         "value": 18852
             *       },
             *       {
             *         "hero": "genji",
             *         "value": 10902
             *       },
             *       {
             *         "hero": "mei",
             *         "value": 10384
             *       },
             *       {
             *         "hero": "widowmaker",
             *         "value": 10331
             *       },
             *       {
             *         "hero": "doomfist",
             *         "value": 8152
             *       },
             *       {
             *         "hero": "symmetra",
             *         "value": 3678
             *       },
             *       {
             *         "hero": "sombra",
             *         "value": 3378
             *       },
             *       {
             *         "hero": "junker-queen",
             *         "value": 3213
             *       },
             *       {
             *         "hero": "torbjorn",
             *         "value": 2385
             *       },
             *       {
             *         "hero": "bastion",
             *         "value": 2077
             *       },
             *       {
             *         "hero": "ashe",
             *         "value": 950
             *       },
             *       {
             *         "hero": "sojourn",
             *         "value": 865
             *       },
             *       {
             *         "hero": "echo",
             *         "value": 79
             *       }
             *     ]
             *   },
             *   "weapon_accuracy": {
             *     "label": "Weapon Accuracy",
             *     "values": [
             *       {
             *         "hero": "ashe",
             *         "value": 48
             *       },
             *       {
             *         "hero": "sigma",
             *         "value": 48
             *       },
             *       {
             *         "hero": "pharah",
             *         "value": 45
             *       },
             *       {
             *         "hero": "cassidy",
             *         "value": 42
             *       },
             *       {
             *         "hero": "zarya",
             *         "value": 40
             *       },
             *       {
             *         "hero": "sombra",
             *         "value": 37
             *       },
             *       {
             *         "hero": "soldier-76",
             *         "value": 36
             *       },
             *       {
             *         "hero": "winston",
             *         "value": 35
             *       },
             *       {
             *         "hero": "widowmaker",
             *         "value": 35
             *       },
             *       {
             *         "hero": "baptiste",
             *         "value": 33
             *       },
             *       {
             *         "hero": "tracer",
             *         "value": 33
             *       },
             *       {
             *         "hero": "torbjorn",
             *         "value": 32
             *       },
             *       {
             *         "hero": "wrecking-ball",
             *         "value": 32
             *       },
             *       {
             *         "hero": "kiriko",
             *         "value": 31
             *       },
             *       {
             *         "hero": "hanzo",
             *         "value": 30
             *       },
             *       {
             *         "hero": "orisa",
             *         "value": 30
             *       },
             *       {
             *         "hero": "sojourn",
             *         "value": 29
             *       },
             *       {
             *         "hero": "lucio",
             *         "value": 28
             *       },
             *       {
             *         "hero": "junker-queen",
             *         "value": 27
             *       },
             *       {
             *         "hero": "mei",
             *         "value": 27
             *       },
             *       {
             *         "hero": "symmetra",
             *         "value": 27
             *       },
             *       {
             *         "hero": "genji",
             *         "value": 27
             *       },
             *       {
             *         "hero": "doomfist",
             *         "value": 26
             *       },
             *       {
             *         "hero": "zenyatta",
             *         "value": 25
             *       },
             *       {
             *         "hero": "reaper",
             *         "value": 25
             *       },
             *       {
             *         "hero": "roadhog",
             *         "value": 24
             *       },
             *       {
             *         "hero": "junkrat",
             *         "value": 24
             *       },
             *       {
             *         "hero": "dva",
             *         "value": 23
             *       },
             *       {
             *         "hero": "mercy",
             *         "value": 20
             *       },
             *       {
             *         "hero": "bastion",
             *         "value": 16
             *       },
             *       {
             *         "hero": "ana",
             *         "value": 16
             *       },
             *       {
             *         "hero": "echo",
             *         "value": 11
             *       },
             *       {
             *         "hero": "reinhardt",
             *         "value": 0
             *       },
             *       {
             *         "hero": "brigitte",
             *         "value": 0
             *       },
             *       {
             *         "hero": "moira",
             *         "value": 0
             *       }
             *     ]
             *   }
             * }
             */
            heroes_comparisons: {
                /**
                 * Total time played for each hero (integer in seconds)
                 */
                time_played: /* Total time played for each hero (integer in seconds) */ /* HeroesStats */ HeroesStats | null;
                /**
                 * Number of games won for each hero (integer)
                 */
                games_won: /* Number of games won for each hero (integer) */ /* HeroesStats */ HeroesStats | null;
                /**
                 * Percentage of weapon accuracy for each hero (integer between 0 and 100)
                 */
                weapon_accuracy: /* Percentage of weapon accuracy for each hero (integer between 0 and 100) */ /* HeroesStats */ HeroesStats | null;
                /**
                 * Winrate percentage for each hero (integer between 0 and 100)
                 */
                win_percentage: /* Winrate percentage for each hero (integer between 0 and 100) */ /* HeroesStats */ HeroesStats | null;
                /**
                 * Eliminations per life for each hero (float)
                 */
                eliminations_per_life: /* Eliminations per life for each hero (float) */ /* HeroesStats */ HeroesStats | null;
                /**
                 * Critical hit accuracy percentage for each hero (integer between 0 and 100)
                 */
                critical_hit_accuracy: /* Critical hit accuracy percentage for each hero (integer between 0 and 100) */ /* HeroesStats */ HeroesStats | null;
                /**
                 * Best multikills statistic for each hero (integer)
                 */
                multikill_best: /* Best multikills statistic for each hero (integer) */ /* HeroesStats */ HeroesStats | null;
                /**
                 * Total number of objective kills for each hero (integer)
                 */
                objective_kills: /* Total number of objective kills for each hero (integer) */ /* HeroesStats */ HeroesStats | null;
            };
            /**
             * CareerStats
             * List of career statistics for every hero the player played : best statistics (most in game), combat (damage, kills, etc.), average (per 10 minutes), match awards (cards), hero specific, etc.)
             * example:
             * {
             *   "all-heroes": [
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 22
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blows - Most in Game",
             *           "value": 10
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 25326
             *         },
             *         {
             *           "key": "healing_done_most_in_game",
             *           "label": "Healing Done - Most in Game",
             *           "value": 8196
             *         },
             *         {
             *           "key": "defensive_assists_most_in_game",
             *           "label": "Defensive Assists - Most in Game",
             *           "value": 15
             *         },
             *         {
             *           "key": "offensive_assists_most_in_game",
             *           "label": "Offensive Assists - Most in Game",
             *           "value": 11
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 7
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 281
             *         },
             *         {
             *           "key": "multikill_best",
             *           "label": "Multikill - Best",
             *           "value": 3
             *         },
             *         {
             *           "key": "solo_kills_most_in_game",
             *           "label": "Solo Kills - Most in Game",
             *           "value": 10
             *         },
             *         {
             *           "key": "time_spent_on_fire_most_in_game",
             *           "label": "Time Spent on Fire - Most in Game",
             *           "value": 88
             *         },
             *         {
             *           "key": "environmental_kills_most_in_game",
             *           "label": "Environmental Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 7
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 17735
             *         },
             *         {
             *           "key": "barrier_damage_done_most_in_game",
             *           "label": "Barrier Damage Done - Most in Game",
             *           "value": 7544
             *         },
             *         {
             *           "key": "assists_most_in_game",
             *           "label": "Assists - Most in Game",
             *           "value": 16
             *         },
             *         {
             *           "key": "objective_contest_time_most_in_game",
             *           "label": "Objective Contest Time - Most in Game",
             *           "value": 155
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 7289
             *         },
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 6.41
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 10.9
             *         },
             *         {
             *           "key": "assists_avg_per_10_min",
             *           "label": "Assists - Avg per 10 min",
             *           "value": 7.48
             *         },
             *         {
             *           "key": "healing_done_avg_per_10_min",
             *           "label": "Healing Done - Avg per 10 Min",
             *           "value": 2715
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 4.7
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 89
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 3.85
             *         },
             *         {
             *           "key": "objective_contest_time_avg_per_10_min",
             *           "label": "Objective Contest Time - Avg per 10 Min",
             *           "value": 50
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 2807
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 5
             *         },
             *         {
             *           "key": "games_won",
             *           "label": "Game Won",
             *           "value": 1
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 4
             *         },
             *         {
             *           "key": "hero_wins",
             *           "label": "Hero Win",
             *           "value": 1
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "damage_done",
             *           "label": "Damage Done",
             *           "value": 34098
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 34098
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 30
             *         },
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 51
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 22
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blows",
             *           "value": 18
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 418
             *         },
             *         {
             *           "key": "multikills",
             *           "label": "Multikill",
             *           "value": 1
             *         },
             *         {
             *           "key": "environmental_kills",
             *           "label": "Environmental Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "objective_contest_time",
             *           "label": "Objective Contest Time",
             *           "value": 233
             *         }
             *       ]
             *     },
             *     {
             *       "category": "assists",
             *       "label": "Assists",
             *       "stats": [
             *         {
             *           "key": "assists",
             *           "label": "Assists",
             *           "value": 35
             *         },
             *         {
             *           "key": "healing_done",
             *           "label": "Healing Done",
             *           "value": 12703
             *         },
             *         {
             *           "key": "defensive_assists",
             *           "label": "Defensive Assists",
             *           "value": 29
             *         },
             *         {
             *           "key": "offensive_assists",
             *           "label": "Offensive Assists",
             *           "value": 21
             *         }
             *       ]
             *     }
             *   ],
             *   "ana": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "scoped_accuracy_best_in_game",
             *           "label": "Scoped Accuracy - Best in Game",
             *           "value": 45
             *         },
             *         {
             *           "key": "self_healing",
             *           "label": "Self Healing",
             *           "value": 577
             *         },
             *         {
             *           "key": "self_healing_most_in_game",
             *           "label": "Self Healing - Most in Game",
             *           "value": 300
             *         },
             *         {
             *           "key": "enemies_slept",
             *           "label": "Enemies Slept",
             *           "value": 4
             *         },
             *         {
             *           "key": "nano_boost_assists",
             *           "label": "Nano Boost Assists",
             *           "value": 8
             *         },
             *         {
             *           "key": "unscoped_accuracy_best_in_game",
             *           "label": "Unscoped Accuracy - Best in Game",
             *           "value": 55
             *         },
             *         {
             *           "key": "enemies_slept_most_in_game",
             *           "label": "Enemies Slept - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "nano_boost_assists_most_in_game",
             *           "label": "Nano Boost Assists - Most in Game",
             *           "value": 7
             *         },
             *         {
             *           "key": "biotic_grenade_kills",
             *           "label": "Biotic Grenade Kills",
             *           "value": 9
             *         },
             *         {
             *           "key": "damage_amplified",
             *           "label": "Damage Amplified",
             *           "value": 862
             *         },
             *         {
             *           "key": "damage_amplified_most_in_game",
             *           "label": "Damage Amplified - Most in Game",
             *           "value": 741
             *         },
             *         {
             *           "key": "healing_amplified",
             *           "label": "Healing Amplified",
             *           "value": 647
             *         },
             *         {
             *           "key": "healing_amplified_most_in_game",
             *           "label": "Healing Amplified - Most in Game",
             *           "value": 411
             *         },
             *         {
             *           "key": "nano_boost_assists_avg_per_10_min",
             *           "label": "Nano Boost Assists - Avg per 10 Min",
             *           "value": 5.61
             *         },
             *         {
             *           "key": "healing_amplified_avg_per_10_min",
             *           "label": "Healing Amplified - Avg per 10 Min",
             *           "value": 453
             *         },
             *         {
             *           "key": "biotic_grenade_kills_avg_per_10_min",
             *           "label": "Biotic Grenade Kills - Avg per 10 Min",
             *           "value": 6.31
             *         },
             *         {
             *           "key": "enemies_slept_avg_per_10_min",
             *           "label": "Enemies Slept - Avg per 10 Min",
             *           "value": 2.8
             *         },
             *         {
             *           "key": "unscoped_accuracy",
             *           "label": "Unscoped Accuracy",
             *           "value": 52
             *         },
             *         {
             *           "key": "scoped_accuracy",
             *           "label": "Scoped Accuracy",
             *           "value": 44
             *         },
             *         {
             *           "key": "self_healing_avg_per_10_min",
             *           "label": "Self Healing - Avg per 10 Min",
             *           "value": 404
             *         },
             *         {
             *           "key": "damage_amplified_avg_per_10_min",
             *           "label": "Damage Amplified - Avg per 10 Min",
             *           "value": 604
             *         }
             *       ]
             *     },
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_life",
             *           "label": "Eliminations - Most in Life",
             *           "value": 4
             *         },
             *         {
             *           "key": "all_damage_done_most_in_life",
             *           "label": "All Damage Done - Most in Life",
             *           "value": 1349
             *         },
             *         {
             *           "key": "weapon_accuracy_best_in_game",
             *           "label": "Weapon Accuracy - Best in Game",
             *           "value": 19
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 4
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 2978
             *         },
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 7
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blows - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 4
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 51
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 2291
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_life",
             *           "label": "Hero Damage Done - Most in Life",
             *           "value": 1194
             *         },
             *         {
             *           "key": "assists_most_in_game",
             *           "label": "Assists - Most in Game",
             *           "value": 16
             *         },
             *         {
             *           "key": "obj_contest_time_most_in_game",
             *           "label": "Obj Contest Time - Most in Game",
             *           "value": 46
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "healing_done_avg_per_10_min",
             *           "label": "Healing Done - Avg per 10 Min",
             *           "value": 8560
             *         },
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 5.61
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 9.11
             *         },
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 2645
             *         },
             *         {
             *           "key": "assists_avg_per_10_min",
             *           "label": "Assists - Avg per 10 min",
             *           "value": 22.42
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 64
             *         },
             *         {
             *           "key": "all_damage_done_avg_per_10_min",
             *           "label": "All Damage Done - Avg per 10 Min",
             *           "value": 3235
             *         },
             *         {
             *           "key": "eliminations_per_life",
             *           "label": "Eliminations per Life",
             *           "value": 1.63
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 4.91
             *         },
             *         {
             *           "key": "obj_contest_time_avg_per_10_min",
             *           "label": "Obj Contest Time - Avg per 10 Min",
             *           "value": 36
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 2.1
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 856
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 2
             *         },
             *         {
             *           "key": "games_won",
             *           "label": "Game Won",
             *           "value": 1
             *         },
             *         {
             *           "key": "games_won",
             *           "label": "Game Won",
             *           "value": 1
             *         },
             *         {
             *           "key": "games_won",
             *           "label": "Game Won",
             *           "value": 1
             *         },
             *         {
             *           "key": "hero_wins",
             *           "label": "Hero Win",
             *           "value": 1
             *         },
             *         {
             *           "key": "win_percentage",
             *           "label": "Win Percentage",
             *           "value": 50
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Game Lost",
             *           "value": 1
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 13
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 8
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blows",
             *           "value": 3
             *         },
             *         {
             *           "key": "all_damage_done",
             *           "label": "All Damage Done",
             *           "value": 4616
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 7
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 91
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 3774
             *         },
             *         {
             *           "key": "obj_contest_time",
             *           "label": "Obj Contest Time",
             *           "value": 51
             *         },
             *         {
             *           "key": "weapon_accuracy",
             *           "label": "Weapon Accuracy",
             *           "value": 18
             *         }
             *       ]
             *     },
             *     {
             *       "category": "assists",
             *       "label": "Assists",
             *       "stats": [
             *         {
             *           "key": "offensive_assists",
             *           "label": "Offensive Assists",
             *           "value": 18
             *         },
             *         {
             *           "key": "offensive_assists_most_in_game",
             *           "label": "Offensive Assists - Most in Game",
             *           "value": 11
             *         },
             *         {
             *           "key": "defensive_assists",
             *           "label": "Defensive Assists",
             *           "value": 29
             *         },
             *         {
             *           "key": "defensive_assists_most_in_game",
             *           "label": "Defensive Assists - Most in Game",
             *           "value": 15
             *         },
             *         {
             *           "key": "healing_done",
             *           "label": "Healing Done",
             *           "value": 12216
             *         },
             *         {
             *           "key": "healing_done_most_in_game",
             *           "label": "Healing Done - Most in Game",
             *           "value": 8196
             *         },
             *         {
             *           "key": "assists",
             *           "label": "Assists",
             *           "value": 32
             *         },
             *         {
             *           "key": "defensive_assists_avg_per_10_min",
             *           "label": "Defensive Assists - Avg per 10 Min",
             *           "value": 20.32
             *         },
             *         {
             *           "key": "offensive_assists_avg_per_10_min",
             *           "label": "Offensive Assists - Avg per 10 Min",
             *           "value": 12.61
             *         }
             *       ]
             *     }
             *   ],
             *   "cassidy": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "deadeye_kills",
             *           "label": "Deadeye Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "deadeye_kills_most_in_game",
             *           "label": "Deadeye Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "fan_the_hammer_kills",
             *           "label": "Fan the Hammer Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "fan_the_hammer_kills_most_in_game",
             *           "label": "Fan the Hammer Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "magnetic_grenade_kills",
             *           "label": "Magnetic Grenade Kills",
             *           "value": 4
             *         },
             *         {
             *           "key": "magnetic_grenade_kills_most_in_game",
             *           "label": "Magnetic Grenade Kills - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "long_range_final_blows",
             *           "label": "Long Range Final Blows",
             *           "value": 2
             *         },
             *         {
             *           "key": "magnetic_grenade_kills_avg_per_10_min",
             *           "label": "Magnetic Grenade Kills - Avg per 10 Min",
             *           "value": 3.02
             *         },
             *         {
             *           "key": "deadeye_kills_avg_per_10_min",
             *           "label": "Deadeye Kills - Avg per 10 Min",
             *           "value": 0.75
             *         },
             *         {
             *           "key": "magnetic_grenade_attach_rate",
             *           "label": "Magnetic Grenade Attach Rate",
             *           "value": 27
             *         },
             *         {
             *           "key": "fan_the_hammer_kills_avg_per_10_min",
             *           "label": "Fan the Hammer Kills - Avg per 10 Min",
             *           "value": 0.75
             *         },
             *         {
             *           "key": "long_range_final_blows_avg_per_10_min",
             *           "label": "Long Range Final Blows - Avg per 10 Min",
             *           "value": 1.51
             *         }
             *       ]
             *     },
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_life",
             *           "label": "Eliminations - Most in Life",
             *           "value": 5
             *         },
             *         {
             *           "key": "all_damage_done_most_in_life",
             *           "label": "All Damage Done - Most in Life",
             *           "value": 3275
             *         },
             *         {
             *           "key": "weapon_accuracy_best_in_game",
             *           "label": "Weapon Accuracy - Best in Game",
             *           "value": 53
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 5
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 10195
             *         },
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 13
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blows - Most in Game",
             *           "value": 8
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 15
             *         },
             *         {
             *           "key": "critical_hits_most_in_game",
             *           "label": "Critical Hits - Most in Game",
             *           "value": 10
             *         },
             *         {
             *           "key": "critical_hits_most_in_life",
             *           "label": "Critical Hits - Most in Life",
             *           "value": 5
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 6319
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_life",
             *           "label": "Hero Damage Done - Most in Life",
             *           "value": 1930
             *         },
             *         {
             *           "key": "critical_hit_kills_most_in_game",
             *           "label": "Critical Hit Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "obj_contest_time_most_in_game",
             *           "label": "Obj Contest Time - Most in Game",
             *           "value": 15
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 8.3
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 12.07
             *         },
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 6937
             *         },
             *         {
             *           "key": "critical_hit_kills_avg_per_10_min",
             *           "label": "Critical Hit Kills - Avg per 10 Min",
             *           "value": 0.75
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 18
             *         },
             *         {
             *           "key": "all_damage_done_avg_per_10_min",
             *           "label": "All Damage Done - Avg per 10 Min",
             *           "value": 11813
             *         },
             *         {
             *           "key": "critical_hits_avg_per_10_min",
             *           "label": "Critical Hits - Avg per 10 Min",
             *           "value": 10.56
             *         },
             *         {
             *           "key": "eliminations_per_life",
             *           "label": "Eliminations per Life",
             *           "value": 1.45
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 3.77
             *         },
             *         {
             *           "key": "obj_contest_time_avg_per_10_min",
             *           "label": "Obj Contest Time - Avg per 10 Min",
             *           "value": 18
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 6.79
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 795
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 2
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 2
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 16
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 11
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blows",
             *           "value": 9
             *         },
             *         {
             *           "key": "all_damage_done",
             *           "label": "All Damage Done",
             *           "value": 15654
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 5
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 24
             *         },
             *         {
             *           "key": "critical_hits",
             *           "label": "Critical Hits",
             *           "value": 14
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 9193
             *         },
             *         {
             *           "key": "critical_hit_kills",
             *           "label": "Critical Hit Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "obj_contest_time",
             *           "label": "Obj Contest Time",
             *           "value": 24
             *         },
             *         {
             *           "key": "critical_hit_accuracy",
             *           "label": "Critical Hit Accuracy",
             *           "value": 10
             *         },
             *         {
             *           "key": "weapon_accuracy",
             *           "label": "Weapon Accuracy",
             *           "value": 38
             *         }
             *       ]
             *     }
             *   ],
             *   "orisa": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "terra_surge_kills",
             *           "label": "Terra Surge Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "terra_surge_kills_most_in_game",
             *           "label": "Terra Surge Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "energy_javelin_kills",
             *           "label": "Energy Javelin Kills",
             *           "value": 2
             *         },
             *         {
             *           "key": "javelin_spin_kills",
             *           "label": "Javelin Spin Kills",
             *           "value": 2
             *         },
             *         {
             *           "key": "energy_javelin_kills_nyi",
             *           "label": "Energy Javelin Kills NYI",
             *           "value": 2
             *         },
             *         {
             *           "key": "javelin_spin_kills_nyi",
             *           "label": "Javelin Spin Kills NYI",
             *           "value": 2
             *         },
             *         {
             *           "key": "terra_surge_kills_avg_per_10_min",
             *           "label": "Terra Surge Kills - Avg per 10 Min",
             *           "value": 1.35
             *         },
             *         {
             *           "key": "javelin_spin_kills_avg_per_10_min",
             *           "label": "Javelin Spin Kills - Avg per 10 Min",
             *           "value": 0
             *         },
             *         {
             *           "key": "energy_javelin_kills_avg_per_10_min",
             *           "label": "Energy Javelin Kills - Avg per 10 Min",
             *           "value": 2.69
             *         }
             *       ]
             *     },
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_life",
             *           "label": "Eliminations - Most in Life",
             *           "value": 4
             *         },
             *         {
             *           "key": "all_damage_done_most_in_life",
             *           "label": "All Damage Done - Most in Life",
             *           "value": 5409
             *         },
             *         {
             *           "key": "weapon_accuracy_best_in_game",
             *           "label": "Weapon Accuracy - Best in Game",
             *           "value": 40
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 4
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 14969
             *         },
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 5
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blow - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 4
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 114
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 9078
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_life",
             *           "label": "Hero Damage Done - Most in Life",
             *           "value": 3181
             *         },
             *         {
             *           "key": "assists_most_in_game",
             *           "label": "Assists - Most in Game",
             *           "value": 2
             *         },
             *         {
             *           "key": "obj_contest_time_most_in_game",
             *           "label": "Obj Contest Time - Most in Game",
             *           "value": 114
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 5.39
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 6.73
             *         },
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 12226
             *         },
             *         {
             *           "key": "assists_avg_per_10_min",
             *           "label": "Assists - Avg per 10 min",
             *           "value": 2.69
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 154
             *         },
             *         {
             *           "key": "all_damage_done_avg_per_10_min",
             *           "label": "All Damage Done - Avg per 10 Min",
             *           "value": 20159
             *         },
             *         {
             *           "key": "eliminations_per_life",
             *           "label": "Eliminations per Life",
             *           "value": 1.25
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 5.39
             *         },
             *         {
             *           "key": "obj_contest_time_avg_per_10_min",
             *           "label": "Obj Contest Time - Avg per 10 Min",
             *           "value": 154
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 1.35
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 446
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 1
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 1
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 5
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 4
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blow",
             *           "value": 1
             *         },
             *         {
             *           "key": "all_damage_done",
             *           "label": "All Damage Done",
             *           "value": 14969
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 4
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 114
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 9078
             *         },
             *         {
             *           "key": "obj_contest_time",
             *           "label": "Obj Contest Time",
             *           "value": 114
             *         },
             *         {
             *           "key": "weapon_accuracy",
             *           "label": "Weapon Accuracy",
             *           "value": 40
             *         }
             *       ]
             *     },
             *     {
             *       "category": "assists",
             *       "label": "Assists",
             *       "stats": [
             *         {
             *           "key": "offensive_assists",
             *           "label": "Offensive Assists",
             *           "value": 2
             *         },
             *         {
             *           "key": "offensive_assists_most_in_game",
             *           "label": "Offensive Assists - Most in Game",
             *           "value": 2
             *         },
             *         {
             *           "key": "assists",
             *           "label": "Assists",
             *           "value": 2
             *         },
             *         {
             *           "key": "offensive_assists_avg_per_10_min",
             *           "label": "Offensive Assists - Avg per 10 Min",
             *           "value": 2.69
             *         }
             *       ]
             *     }
             *   ],
             *   "reaper": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "self_healing",
             *           "label": "Self Healing",
             *           "value": 487
             *         },
             *         {
             *           "key": "self_healing_most_in_game",
             *           "label": "Self Healing - Most in Game",
             *           "value": 487
             *         },
             *         {
             *           "key": "self_healing_avg_per_10_min",
             *           "label": "Self Healing - Avg per 10 Min",
             *           "value": 954
             *         }
             *       ]
             *     },
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_life",
             *           "label": "Eliminations - Most in Life",
             *           "value": 7
             *         },
             *         {
             *           "key": "all_damage_done_most_in_life",
             *           "label": "All Damage Done - Most in Life",
             *           "value": 3235
             *         },
             *         {
             *           "key": "weapon_accuracy_best_in_game",
             *           "label": "Weapon Accuracy - Best in Game",
             *           "value": 26
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 7
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 4978
             *         },
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 9
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blows - Most in Game",
             *           "value": 2
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 22
             *         },
             *         {
             *           "key": "multikill_best",
             *           "label": "Multikill - Best",
             *           "value": 3
             *         },
             *         {
             *           "key": "critical_hits_most_in_game",
             *           "label": "Critical Hits - Most in Game",
             *           "value": 45
             *         },
             *         {
             *           "key": "critical_hits_most_in_life",
             *           "label": "Critical Hits - Most in Life",
             *           "value": 28
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 3397
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_life",
             *           "label": "Hero Damage Done - Most in Life",
             *           "value": 2277
             *         },
             *         {
             *           "key": "obj_contest_time_most_in_game",
             *           "label": "Obj Contest Time - Most in Game",
             *           "value": 3
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "healing_done_avg_per_10_min",
             *           "label": "Healing Done - Avg per 10 Min",
             *           "value": 954
             *         },
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 7.84
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 17.63
             *         },
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 6655
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 43
             *         },
             *         {
             *           "key": "all_damage_done_avg_per_10_min",
             *           "label": "All Damage Done - Avg per 10 Min",
             *           "value": 9753
             *         },
             *         {
             *           "key": "critical_hits_avg_per_10_min",
             *           "label": "Critical Hits - Avg per 10 Min",
             *           "value": 88.16
             *         },
             *         {
             *           "key": "eliminations_per_life",
             *           "label": "Eliminations per Life",
             *           "value": 2.25
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 5.88
             *         },
             *         {
             *           "key": "obj_contest_time_avg_per_10_min",
             *           "label": "Obj Contest Time - Avg per 10 Min",
             *           "value": 6
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 3.92
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 306
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 0
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 0
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 9
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 4
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blows",
             *           "value": 2
             *         },
             *         {
             *           "key": "all_damage_done",
             *           "label": "All Damage Done",
             *           "value": 4978
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 22
             *         },
             *         {
             *           "key": "multikills",
             *           "label": "Multikill",
             *           "value": 1
             *         },
             *         {
             *           "key": "critical_hits",
             *           "label": "Critical Hits",
             *           "value": 45
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 3397
             *         },
             *         {
             *           "key": "obj_contest_time",
             *           "label": "Obj Contest Time",
             *           "value": 3
             *         },
             *         {
             *           "key": "critical_hit_accuracy",
             *           "label": "Critical Hit Accuracy",
             *           "value": 7
             *         },
             *         {
             *           "key": "weapon_accuracy",
             *           "label": "Weapon Accuracy",
             *           "value": 26
             *         }
             *       ]
             *     }
             *   ],
             *   "reinhardt": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "charge_kills",
             *           "label": "Charge Kills",
             *           "value": 2
             *         },
             *         {
             *           "key": "charge_kills_most_in_game",
             *           "label": "Charge Kills - Most in Game",
             *           "value": 2
             *         },
             *         {
             *           "key": "fire_strike_kills",
             *           "label": "Fire Strike Kills",
             *           "value": 4
             *         },
             *         {
             *           "key": "fire_strike_kills_most_in_game",
             *           "label": "Fire Strike Kills - Most in Game",
             *           "value": 4
             *         },
             *         {
             *           "key": "earthshatter_kills",
             *           "label": "Earthshatter Kills",
             *           "value": 2
             *         },
             *         {
             *           "key": "earthshatter_kills_most_in_game",
             *           "label": "Earthshatter Kills - Most in Game",
             *           "value": 2
             *         },
             *         {
             *           "key": "fire_strike_kills_avg_per_10_min",
             *           "label": "Fire Strike Kills - Avg per 10 Min",
             *           "value": 6.13
             *         },
             *         {
             *           "key": "charge_kills_avg_per_10_min",
             *           "label": "Charge Kills - Avg per 10 Min",
             *           "value": 3.06
             *         },
             *         {
             *           "key": "earthshatter_kills_avg_per_10_min",
             *           "label": "Earthshatter Kills - Avg per 10 Min",
             *           "value": 3.06
             *         }
             *       ]
             *     },
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_life",
             *           "label": "Eliminations - Most in Life",
             *           "value": 6
             *         },
             *         {
             *           "key": "all_damage_done_most_in_life",
             *           "label": "All Damage Done - Most in Life",
             *           "value": 4727
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 6
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 10357
             *         },
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 8
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blows - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 167
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 8657
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_life",
             *           "label": "Hero Damage Done - Most in Life",
             *           "value": 3462
             *         },
             *         {
             *           "key": "assists_most_in_game",
             *           "label": "Assist - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "environmental_kills_most_in_game",
             *           "label": "Environmental Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "obj_contest_time_most_in_game",
             *           "label": "Obj Contest Time - Most in Game",
             *           "value": 41
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 4.6
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 12.26
             *         },
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 13263
             *         },
             *         {
             *           "key": "assists_avg_per_10_min",
             *           "label": "Assists - Avg per 10 min",
             *           "value": 1.53
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 256
             *         },
             *         {
             *           "key": "all_damage_done_avg_per_10_min",
             *           "label": "All Damage Done - Avg per 10 Min",
             *           "value": 15868
             *         },
             *         {
             *           "key": "eliminations_per_life",
             *           "label": "Eliminations per Life",
             *           "value": 2.67
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 4.6
             *         },
             *         {
             *           "key": "obj_contest_time_avg_per_10_min",
             *           "label": "Obj Contest Time - Avg per 10 Min",
             *           "value": 63
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 4.6
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 392
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 0
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 0
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 8
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 3
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blows",
             *           "value": 3
             *         },
             *         {
             *           "key": "all_damage_done",
             *           "label": "All Damage Done",
             *           "value": 10357
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 167
             *         },
             *         {
             *           "key": "environmental_kills",
             *           "label": "Environmental Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 8657
             *         },
             *         {
             *           "key": "obj_contest_time",
             *           "label": "Obj Contest Time",
             *           "value": 41
             *         },
             *         {
             *           "key": "environmental_kills_avg_per_10_min",
             *           "label": "Environmental Kills - Avg per 10 Min",
             *           "value": 1.53
             *         }
             *       ]
             *     },
             *     {
             *       "category": "assists",
             *       "label": "Assists",
             *       "stats": [
             *         {
             *           "key": "offensive_assists",
             *           "label": "Offensive Assist",
             *           "value": 1
             *         },
             *         {
             *           "key": "offensive_assists_most_in_game",
             *           "label": "Offensive Assist - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "assists",
             *           "label": "Assist",
             *           "value": 1
             *         },
             *         {
             *           "key": "offensive_assists_avg_per_10_min",
             *           "label": "Offensive Assists - Avg per 10 Min",
             *           "value": 1.53
             *         }
             *       ]
             *     }
             *   ],
             *   "tracer": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "self_healing",
             *           "label": "Self Healing",
             *           "value": 130
             *         },
             *         {
             *           "key": "self_healing_most_in_game",
             *           "label": "Self Healing - Most in Game",
             *           "value": 130
             *         },
             *         {
             *           "key": "low_health_recalls",
             *           "label": "Low Health Recall",
             *           "value": 1
             *         },
             *         {
             *           "key": "low_health_recalls_most_in_game",
             *           "label": "Low Health Recall - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "low_health_recalls_avg_per_10_min",
             *           "label": "Low Health Recalls - Avg per 10 Min",
             *           "value": 48.98
             *         },
             *         {
             *           "key": "self_healing_avg_per_10_min",
             *           "label": "Self Healing - Avg per 10 Min",
             *           "value": 6367
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 12
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 0
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 0
             *         }
             *       ]
             *     }
             *   ]
             * }
             */
            career_stats: {
                /**
                 * All-Heroes
                 * Total of statistics for all heroes
                 */
                "all-heroes"?: /**
                 * All-Heroes
                 * Total of statistics for all heroes
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Ana
                 * Career statistics for Ana
                 */
                ana?: /**
                 * Ana
                 * Career statistics for Ana
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Ashe
                 * Career statistics for Ashe
                 */
                ashe?: /**
                 * Ashe
                 * Career statistics for Ashe
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Baptiste
                 * Career statistics for Baptiste
                 */
                baptiste?: /**
                 * Baptiste
                 * Career statistics for Baptiste
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Bastion
                 * Career statistics for Bastion
                 */
                bastion?: /**
                 * Bastion
                 * Career statistics for Bastion
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Brigitte
                 * Career statistics for Brigitte
                 */
                brigitte?: /**
                 * Brigitte
                 * Career statistics for Brigitte
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Cassidy
                 * Career statistics for Cassidy
                 */
                cassidy?: /**
                 * Cassidy
                 * Career statistics for Cassidy
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Dva
                 * Career statistics for D.Va
                 */
                dva?: /**
                 * Dva
                 * Career statistics for D.Va
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Doomfist
                 * Career statistics for Doomfist
                 */
                doomfist?: /**
                 * Doomfist
                 * Career statistics for Doomfist
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Echo
                 * Career statistics for Echo
                 */
                echo?: /**
                 * Echo
                 * Career statistics for Echo
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Genji
                 * Career statistics for Genji
                 */
                genji?: /**
                 * Genji
                 * Career statistics for Genji
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Hanzo
                 * Career statistics for Hanzo
                 */
                hanzo?: /**
                 * Hanzo
                 * Career statistics for Hanzo
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Illari
                 * Career statistics for Illari
                 */
                illari?: /**
                 * Illari
                 * Career statistics for Illari
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Junker-Queen
                 * Career statistics for Junker Queen
                 */
                "junker-queen"?: /**
                 * Junker-Queen
                 * Career statistics for Junker Queen
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Junkrat
                 * Career statistics for Junkrat
                 */
                junkrat?: /**
                 * Junkrat
                 * Career statistics for Junkrat
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Kiriko
                 * Career statistics for Kiriko
                 */
                kiriko?: /**
                 * Kiriko
                 * Career statistics for Kiriko
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Lifeweaver
                 * Career statistics for Lifeweaver
                 */
                lifeweaver?: /**
                 * Lifeweaver
                 * Career statistics for Lifeweaver
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Lucio
                 * Career statistics for Lúcio
                 */
                lucio?: /**
                 * Lucio
                 * Career statistics for Lúcio
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Mauga
                 * Career statistics for Mauga
                 */
                mauga?: /**
                 * Mauga
                 * Career statistics for Mauga
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Mei
                 * Career statistics for Mei
                 */
                mei?: /**
                 * Mei
                 * Career statistics for Mei
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Mercy
                 * Career statistics for Mercy
                 */
                mercy?: /**
                 * Mercy
                 * Career statistics for Mercy
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Moira
                 * Career statistics for Moira
                 */
                moira?: /**
                 * Moira
                 * Career statistics for Moira
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Orisa
                 * Career statistics for Orisa
                 */
                orisa?: /**
                 * Orisa
                 * Career statistics for Orisa
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Pharah
                 * Career statistics for Pharah
                 */
                pharah?: /**
                 * Pharah
                 * Career statistics for Pharah
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Ramattra
                 * Career statistics for Ramattra
                 */
                ramattra?: /**
                 * Ramattra
                 * Career statistics for Ramattra
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Reaper
                 * Career statistics for Reaper
                 */
                reaper?: /**
                 * Reaper
                 * Career statistics for Reaper
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Reinhardt
                 * Career statistics for Reinhardt
                 */
                reinhardt?: /**
                 * Reinhardt
                 * Career statistics for Reinhardt
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Roadhog
                 * Career statistics for Roadhog
                 */
                roadhog?: /**
                 * Roadhog
                 * Career statistics for Roadhog
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Sigma
                 * Career statistics for Sigma
                 */
                sigma?: /**
                 * Sigma
                 * Career statistics for Sigma
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Sojourn
                 * Career statistics for Sojourn
                 */
                sojourn?: /**
                 * Sojourn
                 * Career statistics for Sojourn
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Soldier-76
                 * Career statistics for Soldier: 76
                 */
                "soldier-76"?: /**
                 * Soldier-76
                 * Career statistics for Soldier: 76
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Sombra
                 * Career statistics for Sombra
                 */
                sombra?: /**
                 * Sombra
                 * Career statistics for Sombra
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Symmetra
                 * Career statistics for Symmetra
                 */
                symmetra?: /**
                 * Symmetra
                 * Career statistics for Symmetra
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Torbjorn
                 * Career statistics for Torbjörn
                 */
                torbjorn?: /**
                 * Torbjorn
                 * Career statistics for Torbjörn
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Tracer
                 * Career statistics for Tracer
                 */
                tracer?: /**
                 * Tracer
                 * Career statistics for Tracer
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Venture
                 * Career statistics for Venture
                 */
                venture?: /**
                 * Venture
                 * Career statistics for Venture
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Widowmaker
                 * Career statistics for Widowmaker
                 */
                widowmaker?: /**
                 * Widowmaker
                 * Career statistics for Widowmaker
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Winston
                 * Career statistics for Winston
                 */
                winston?: /**
                 * Winston
                 * Career statistics for Winston
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Wrecking-Ball
                 * Career statistics for Wrecking Ball
                 */
                "wrecking-ball"?: /**
                 * Wrecking-Ball
                 * Career statistics for Wrecking Ball
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Zarya
                 * Career statistics for Zarya
                 */
                zarya?: /**
                 * Zarya
                 * Career statistics for Zarya
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
                /**
                 * Zenyatta
                 * Career statistics for Zenyatta
                 */
                zenyatta?: /**
                 * Zenyatta
                 * Career statistics for Zenyatta
                 */
                [
                    /* HeroCareerStats */ HeroCareerStats,
                    .../* HeroCareerStats */ HeroCareerStats[]
                ] | null;
            };
        }
        /**
         * PlayerHeroesStats
         */
        export interface PlayerHeroesStats {
            /**
             * Stats summary for Ana. Not defined if he never played the hero.
             */
            ana?: /* Stats summary for Ana. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Ashe. Not defined if he never played the hero.
             */
            ashe?: /* Stats summary for Ashe. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Baptiste. Not defined if he never played the hero.
             */
            baptiste?: /* Stats summary for Baptiste. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Bastion. Not defined if he never played the hero.
             */
            bastion?: /* Stats summary for Bastion. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Brigitte. Not defined if he never played the hero.
             */
            brigitte?: /* Stats summary for Brigitte. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Cassidy. Not defined if he never played the hero.
             */
            cassidy?: /* Stats summary for Cassidy. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for D.Va. Not defined if he never played the hero.
             */
            dva?: /* Stats summary for D.Va. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Doomfist. Not defined if he never played the hero.
             */
            doomfist?: /* Stats summary for Doomfist. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Echo. Not defined if he never played the hero.
             */
            echo?: /* Stats summary for Echo. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Genji. Not defined if he never played the hero.
             */
            genji?: /* Stats summary for Genji. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Hanzo. Not defined if he never played the hero.
             */
            hanzo?: /* Stats summary for Hanzo. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Illari. Not defined if he never played the hero.
             */
            illari?: /* Stats summary for Illari. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Junker Queen. Not defined if he never played the hero.
             */
            "junker-queen"?: /* Stats summary for Junker Queen. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Junkrat. Not defined if he never played the hero.
             */
            junkrat?: /* Stats summary for Junkrat. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Kiriko. Not defined if he never played the hero.
             */
            kiriko?: /* Stats summary for Kiriko. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Lifeweaver. Not defined if he never played the hero.
             */
            lifeweaver?: /* Stats summary for Lifeweaver. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Lúcio. Not defined if he never played the hero.
             */
            lucio?: /* Stats summary for Lúcio. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Mauga. Not defined if he never played the hero.
             */
            mauga?: /* Stats summary for Mauga. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Mei. Not defined if he never played the hero.
             */
            mei?: /* Stats summary for Mei. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Mercy. Not defined if he never played the hero.
             */
            mercy?: /* Stats summary for Mercy. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Moira. Not defined if he never played the hero.
             */
            moira?: /* Stats summary for Moira. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Orisa. Not defined if he never played the hero.
             */
            orisa?: /* Stats summary for Orisa. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Pharah. Not defined if he never played the hero.
             */
            pharah?: /* Stats summary for Pharah. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Ramattra. Not defined if he never played the hero.
             */
            ramattra?: /* Stats summary for Ramattra. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Reaper. Not defined if he never played the hero.
             */
            reaper?: /* Stats summary for Reaper. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Reinhardt. Not defined if he never played the hero.
             */
            reinhardt?: /* Stats summary for Reinhardt. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Roadhog. Not defined if he never played the hero.
             */
            roadhog?: /* Stats summary for Roadhog. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Sigma. Not defined if he never played the hero.
             */
            sigma?: /* Stats summary for Sigma. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Sojourn. Not defined if he never played the hero.
             */
            sojourn?: /* Stats summary for Sojourn. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Soldier: 76. Not defined if he never played the hero.
             */
            "soldier-76"?: /* Stats summary for Soldier: 76. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Sombra. Not defined if he never played the hero.
             */
            sombra?: /* Stats summary for Sombra. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Symmetra. Not defined if he never played the hero.
             */
            symmetra?: /* Stats summary for Symmetra. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Torbjörn. Not defined if he never played the hero.
             */
            torbjorn?: /* Stats summary for Torbjörn. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Tracer. Not defined if he never played the hero.
             */
            tracer?: /* Stats summary for Tracer. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Venture. Not defined if he never played the hero.
             */
            venture?: /* Stats summary for Venture. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Widowmaker. Not defined if he never played the hero.
             */
            widowmaker?: /* Stats summary for Widowmaker. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Winston. Not defined if he never played the hero.
             */
            winston?: /* Stats summary for Winston. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Wrecking Ball. Not defined if he never played the hero.
             */
            "wrecking-ball"?: /* Stats summary for Wrecking Ball. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Zarya. Not defined if he never played the hero.
             */
            zarya?: /* Stats summary for Zarya. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary for Zenyatta. Not defined if he never played the hero.
             */
            zenyatta?: /* Stats summary for Zenyatta. Not defined if he never played the hero. */ /* StatsSummary */ StatsSummary | null;
        }
        /**
         * PlayerParserErrorMessage
         */
        export interface PlayerParserErrorMessage {
            /**
             * Error
             * Message describing the player parser error
             * example:
             * Player not found
             */
            error: string;
        }
        /**
         * PlayerPlatform
         * Players platforms
         */
        export type PlayerPlatform = "console" | "pc";
        /**
         * PlayerPlatformStats
         */
        export interface PlayerPlatformStats {
            /**
             * Quickplay statistics about heroes. If the player doesn't have stats for this gamemode, it's null.
             */
            quickplay: /* Quickplay statistics about heroes. If the player doesn't have stats for this gamemode, it's null. */ /* PlayerGamemodeStats */ PlayerGamemodeStats | null;
            /**
             * Competitive statistics about heroes in the last season played by the player. If the player doesn't have stats for this gamemode, it's null.
             */
            competitive: /* Competitive statistics about heroes in the last season played by the player. If the player doesn't have stats for this gamemode, it's null. */ /* PlayerGamemodeStats */ PlayerGamemodeStats | null;
        }
        /**
         * PlayerRolesStats
         */
        export interface PlayerRolesStats {
            /**
             * Stats summary of all tank heroes played by the player. Not defined if he never played this role.
             */
            tank?: /* Stats summary of all tank heroes played by the player. Not defined if he never played this role. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary of all damage heroes played by the player. Not defined if he never played this role.
             */
            damage?: /* Stats summary of all damage heroes played by the player. Not defined if he never played this role. */ /* StatsSummary */ StatsSummary | null;
            /**
             * Stats summary of all support heroes played by the player. Not defined if he never played this role.
             */
            support?: /* Stats summary of all support heroes played by the player. Not defined if he never played this role. */ /* StatsSummary */ StatsSummary | null;
        }
        /**
         * PlayerSearchResult
         */
        export interface PlayerSearchResult {
            /**
             * Total
             * Total number of results
             * example:
             * 42
             */
            total: number;
            /**
             * Results
             * List of players found
             */
            results: /* PlayerShort */ PlayerShort[];
        }
        /**
         * PlayerShort
         */
        export interface PlayerShort {
            /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-")
             * example:
             * TeKrop-2217
             */
            player_id: string;
            /**
             * Name
             * Player nickname displayed in the game
             * example:
             * TeKrop#2217
             */
            name: string;
            /**
             * Avatar
             * URL of the player's avatar. Can be null if couldn't retrieve any
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/daeddd96e58a2150afa6ffc3c5503ae7f96afc2e22899210d444f45dee508c6c.png
             */
            avatar?: /**
             * Avatar
             * URL of the player's avatar. Can be null if couldn't retrieve any
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/daeddd96e58a2150afa6ffc3c5503ae7f96afc2e22899210d444f45dee508c6c.png
             */
            string /* uri */ | null;
            /**
             * Namecard
             * URL of the player's namecard (or banner) if any
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/55d8c21e9d8b14942c26c4028059b6cd3b4e2fea40a139821ecee73a0005126f.png
             */
            namecard?: /**
             * Namecard
             * URL of the player's namecard (or banner) if any
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/55d8c21e9d8b14942c26c4028059b6cd3b4e2fea40a139821ecee73a0005126f.png
             */
            string /* uri */ | null;
            /**
             * Title
             * Title of the player if any
             * example:
             * Bytefixer
             */
            title: /**
             * Title
             * Title of the player if any
             * example:
             * Bytefixer
             */
            string | null;
            /**
             * Career URL
             * Player's career OverFast API URL (Get player career data)
             * example:
             * https://overfast-api.tekrop.fr/players/TeKrop-2217
             */
            career_url: string; // uri
            /**
             * Blizzard ID
             * Blizzard unique identifier of the player (hexadecimal)
             * example:
             * c65b8798bc61d6ffbba120%7Ccfe9dd77a4382165e2b920bdcc035949
             */
            blizzard_id: string;
        }
        /**
         * PlayerStats
         */
        export interface PlayerStats {
            /**
             * Player statistics on PC. If the player doesn't play on this platform, it's null.
             */
            pc: /* Player statistics on PC. If the player doesn't play on this platform, it's null. */ /* PlayerPlatformStats */ PlayerPlatformStats | null;
            /**
             * Player statistics on console. If the player doesn't play on this platform, it's null.
             */
            console: /* Player statistics on console. If the player doesn't play on this platform, it's null. */ /* PlayerPlatformStats */ PlayerPlatformStats | null;
        }
        /**
         * PlayerStatsSummary
         * example:
         * {
         *   "general": {
         *     "average": {
         *       "assists": 4.39,
         *       "damage": 7814.06,
         *       "deaths": 7.19,
         *       "eliminations": 17.36,
         *       "healing": 2398
         *     },
         *     "games_lost": 6154,
         *     "games_played": 12702,
         *     "games_won": 6548,
         *     "kda": 3.03,
         *     "time_played": 5868683,
         *     "total": {
         *       "assists": 42909,
         *       "damage": 76430370,
         *       "deaths": 70289,
         *       "eliminations": 169772,
         *       "healing": 23455121
         *     },
         *     "winrate": 51.55
         *   },
         *   "heroes": {
         *     "ana": {
         *       "average": {
         *         "assists": 7.65,
         *         "damage": 3513.5,
         *         "deaths": 7.35,
         *         "eliminations": 10.14,
         *         "healing": 6799.24
         *       },
         *       "games_lost": 646,
         *       "games_played": 1211,
         *       "games_won": 565,
         *       "kda": 2.42,
         *       "time_played": 567415,
         *       "total": {
         *         "assists": 7238,
         *         "damage": 3322683,
         *         "deaths": 6949,
         *         "eliminations": 9585,
         *         "healing": 6429989
         *       },
         *       "winrate": 46.66
         *     },
         *     "ashe": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 8761.89,
         *         "deaths": 8.84,
         *         "eliminations": 20.21,
         *         "healing": 0
         *       },
         *       "games_lost": 1,
         *       "games_played": 2,
         *       "games_won": 1,
         *       "kda": 2.29,
         *       "time_played": 950,
         *       "total": {
         *         "assists": 0,
         *         "damage": 13873,
         *         "deaths": 14,
         *         "eliminations": 32,
         *         "healing": 0
         *       },
         *       "winrate": 50
         *     },
         *     "baptiste": {
         *       "average": {
         *         "assists": 1.84,
         *         "damage": 6558.17,
         *         "deaths": 6.89,
         *         "eliminations": 13.8,
         *         "healing": 8572.81
         *       },
         *       "games_lost": 326,
         *       "games_played": 601,
         *       "games_won": 275,
         *       "kda": 2.27,
         *       "time_played": 283646,
         *       "total": {
         *         "assists": 869,
         *         "damage": 3100329,
         *         "deaths": 3259,
         *         "eliminations": 6522,
         *         "healing": 4052741
         *       },
         *       "winrate": 45.76
         *     },
         *     "bastion": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 6910.02,
         *         "deaths": 8.35,
         *         "eliminations": 14.47,
         *         "healing": 0
         *       },
         *       "games_lost": 1,
         *       "games_played": 4,
         *       "games_won": 3,
         *       "kda": 1.73,
         *       "time_played": 2156,
         *       "total": {
         *         "assists": 0,
         *         "damage": 24830,
         *         "deaths": 30,
         *         "eliminations": 52,
         *         "healing": 0
         *       },
         *       "winrate": 75
         *     },
         *     "brigitte": {
         *       "average": {
         *         "assists": 5.6,
         *         "damage": 4856.43,
         *         "deaths": 6.67,
         *         "eliminations": 15.76,
         *         "healing": 6864.74
         *       },
         *       "games_lost": 24,
         *       "games_played": 51,
         *       "games_won": 27,
         *       "kda": 3.2,
         *       "time_played": 25923,
         *       "total": {
         *         "assists": 242,
         *         "damage": 209822,
         *         "deaths": 288,
         *         "eliminations": 681,
         *         "healing": 296591
         *       },
         *       "winrate": 52.94
         *     },
         *     "cassidy": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 12104.43,
         *         "deaths": 7.71,
         *         "eliminations": 22.42,
         *         "healing": 0
         *       },
         *       "games_lost": 435,
         *       "games_played": 954,
         *       "games_won": 519,
         *       "kda": 2.91,
         *       "time_played": 443365,
         *       "total": {
         *         "assists": 0,
         *         "damage": 8944470,
         *         "deaths": 5700,
         *         "eliminations": 16569,
         *         "healing": 0
         *       },
         *       "winrate": 54.4
         *     },
         *     "doomfist": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 7816.41,
         *         "deaths": 10.01,
         *         "eliminations": 15.68,
         *         "healing": 0
         *       },
         *       "games_lost": 8,
         *       "games_played": 16,
         *       "games_won": 8,
         *       "kda": 1.57,
         *       "time_played": 8152,
         *       "total": {
         *         "assists": 0,
         *         "damage": 106199,
         *         "deaths": 136,
         *         "eliminations": 213,
         *         "healing": 0
         *       },
         *       "winrate": 50
         *     },
         *     "dva": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 9170.43,
         *         "deaths": 6.16,
         *         "eliminations": 21.48,
         *         "healing": 0
         *       },
         *       "games_lost": 119,
         *       "games_played": 249,
         *       "games_won": 130,
         *       "kda": 3.49,
         *       "time_played": 117080,
         *       "total": {
         *         "assists": 0,
         *         "damage": 1789457,
         *         "deaths": 1202,
         *         "eliminations": 4192,
         *         "healing": 0
         *       },
         *       "winrate": 52.21
         *     },
         *     "genji": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 7012,
         *         "deaths": 10.13,
         *         "eliminations": 14.97,
         *         "healing": 0
         *       },
         *       "games_lost": 12,
         *       "games_played": 21,
         *       "games_won": 9,
         *       "kda": 1.48,
         *       "time_played": 10902,
         *       "total": {
         *         "assists": 0,
         *         "damage": 127408,
         *         "deaths": 184,
         *         "eliminations": 272,
         *         "healing": 0
         *       },
         *       "winrate": 42.86
         *     },
         *     "hanzo": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 10600.36,
         *         "deaths": 7.48,
         *         "eliminations": 17.69,
         *         "healing": 0
         *       },
         *       "games_lost": 46,
         *       "games_played": 100,
         *       "games_won": 54,
         *       "kda": 2.36,
         *       "time_played": 46337,
         *       "total": {
         *         "assists": 0,
         *         "damage": 818648,
         *         "deaths": 578,
         *         "eliminations": 1366,
         *         "healing": 0
         *       },
         *       "winrate": 54
         *     },
         *     "junker-queen": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 9453.41,
         *         "deaths": 6.54,
         *         "eliminations": 15.69,
         *         "healing": 0
         *       },
         *       "games_lost": 4,
         *       "games_played": 7,
         *       "games_won": 3,
         *       "kda": 2.4,
         *       "time_played": 3213,
         *       "total": {
         *         "assists": 0,
         *         "damage": 50623,
         *         "deaths": 35,
         *         "eliminations": 84,
         *         "healing": 0
         *       },
         *       "winrate": 42.86
         *     },
         *     "junkrat": {
         *       "average": {
         *         "assists": 0.92,
         *         "damage": 12173.17,
         *         "deaths": 8.61,
         *         "eliminations": 16.58,
         *         "healing": 0
         *       },
         *       "games_lost": 23,
         *       "games_played": 45,
         *       "games_won": 22,
         *       "kda": 2.03,
         *       "time_played": 21599,
         *       "total": {
         *         "assists": 33,
         *         "damage": 438214,
         *         "deaths": 310,
         *         "eliminations": 597,
         *         "healing": 0
         *       },
         *       "winrate": 48.89
         *     },
         *     "kiriko": {
         *       "average": {
         *         "assists": 3.77,
         *         "damage": 2974.32,
         *         "deaths": 5.89,
         *         "eliminations": 8.63,
         *         "healing": 8428.13
         *       },
         *       "games_lost": 68,
         *       "games_played": 136,
         *       "games_won": 68,
         *       "kda": 2.1,
         *       "time_played": 70150,
         *       "total": {
         *         "assists": 441,
         *         "damage": 347748,
         *         "deaths": 689,
         *         "eliminations": 1009,
         *         "healing": 985389
         *       },
         *       "winrate": 50
         *     },
         *     "lucio": {
         *       "average": {
         *         "assists": 2.09,
         *         "damage": 4382.32,
         *         "deaths": 8.8,
         *         "eliminations": 13.28,
         *         "healing": 7118.49
         *       },
         *       "games_lost": 98,
         *       "games_played": 194,
         *       "games_won": 96,
         *       "kda": 1.75,
         *       "time_played": 96551,
         *       "total": {
         *         "assists": 337,
         *         "damage": 705196,
         *         "deaths": 1416,
         *         "eliminations": 2137,
         *         "healing": 1145495
         *       },
         *       "winrate": 49.48
         *     },
         *     "mei": {
         *       "average": {
         *         "assists": 1.15,
         *         "damage": 5369.24,
         *         "deaths": 7.73,
         *         "eliminations": 14.95,
         *         "healing": 0
         *       },
         *       "games_lost": 11,
         *       "games_played": 20,
         *       "games_won": 9,
         *       "kda": 2.08,
         *       "time_played": 10474,
         *       "total": {
         *         "assists": 20,
         *         "damage": 93729,
         *         "deaths": 135,
         *         "eliminations": 261,
         *         "healing": 0
         *       },
         *       "winrate": 45
         *     },
         *     "mercy": {
         *       "average": {
         *         "assists": 5.85,
         *         "damage": 161.79,
         *         "deaths": 8.14,
         *         "eliminations": 0.69,
         *         "healing": 8050.04
         *       },
         *       "games_lost": 116,
         *       "games_played": 175,
         *       "games_won": 59,
         *       "kda": 0.8,
         *       "time_played": 81706,
         *       "total": {
         *         "assists": 797,
         *         "damage": 22032,
         *         "deaths": 1109,
         *         "eliminations": 94,
         *         "healing": 1096227
         *       },
         *       "winrate": 33.71
         *     },
         *     "moira": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 5879.94,
         *         "deaths": 6.01,
         *         "eliminations": 21.77,
         *         "healing": 9407.35
         *       },
         *       "games_lost": 272,
         *       "games_played": 542,
         *       "games_won": 270,
         *       "kda": 3.62,
         *       "time_played": 251225,
         *       "total": {
         *         "assists": 0,
         *         "damage": 2461978,
         *         "deaths": 2515,
         *         "eliminations": 9114,
         *         "healing": 3938937
         *       },
         *       "winrate": 49.82
         *     },
         *     "orisa": {
         *       "average": {
         *         "assists": 10,
         *         "damage": 11150.58,
         *         "deaths": 6.64,
         *         "eliminations": 20.09,
         *         "healing": 0
         *       },
         *       "games_lost": 252,
         *       "games_played": 516,
         *       "games_won": 264,
         *       "kda": 4.53,
         *       "time_played": 228596,
         *       "total": {
         *         "assists": 3810,
         *         "damage": 4248298,
         *         "deaths": 2528,
         *         "eliminations": 7654,
         *         "healing": 0
         *       },
         *       "winrate": 51.16
         *     },
         *     "pharah": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 8456.88,
         *         "deaths": 8.77,
         *         "eliminations": 15.04,
         *         "healing": 0
         *       },
         *       "games_lost": 25,
         *       "games_played": 46,
         *       "games_won": 21,
         *       "kda": 1.71,
         *       "time_played": 18944,
         *       "total": {
         *         "assists": 0,
         *         "damage": 267012,
         *         "deaths": 277,
         *         "eliminations": 475,
         *         "healing": 0
         *       },
         *       "winrate": 45.65
         *     },
         *     "ramattra": {
         *       "average": {
         *         "assists": 1.66,
         *         "damage": 8063.69,
         *         "deaths": 8.31,
         *         "eliminations": 17.09,
         *         "healing": 0
         *       },
         *       "games_lost": 4,
         *       "games_played": 4,
         *       "games_won": 0,
         *       "kda": 2.26,
         *       "time_played": 2528,
         *       "total": {
         *         "assists": 7,
         *         "damage": 33975,
         *         "deaths": 35,
         *         "eliminations": 72,
         *         "healing": 0
         *       },
         *       "winrate": 0
         *     },
         *     "reaper": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 11872.13,
         *         "deaths": 7.76,
         *         "eliminations": 22.01,
         *         "healing": 0
         *       },
         *       "games_lost": 29,
         *       "games_played": 49,
         *       "games_won": 20,
         *       "kda": 2.84,
         *       "time_played": 25348,
         *       "total": {
         *         "assists": 0,
         *         "damage": 501558,
         *         "deaths": 328,
         *         "eliminations": 930,
         *         "healing": 0
         *       },
         *       "winrate": 40.82
         *     },
         *     "reinhardt": {
         *       "average": {
         *         "assists": 2,
         *         "damage": 7363.24,
         *         "deaths": 7.39,
         *         "eliminations": 15.32,
         *         "healing": 0
         *       },
         *       "games_lost": 1396,
         *       "games_played": 3010,
         *       "games_won": 1614,
         *       "kda": 2.34,
         *       "time_played": 1333815,
         *       "total": {
         *         "assists": 4436,
         *         "damage": 16368661,
         *         "deaths": 16435,
         *         "eliminations": 34056,
         *         "healing": 0
         *       },
         *       "winrate": 53.62
         *     },
         *     "roadhog": {
         *       "average": {
         *         "assists": 5.07,
         *         "damage": 10450.13,
         *         "deaths": 6.61,
         *         "eliminations": 19.73,
         *         "healing": 0
         *       },
         *       "games_lost": 353,
         *       "games_played": 671,
         *       "games_won": 318,
         *       "kda": 3.75,
         *       "time_played": 329058,
         *       "total": {
         *         "assists": 2780,
         *         "damage": 5731165,
         *         "deaths": 3624,
         *         "eliminations": 10823,
         *         "healing": 0
         *       },
         *       "winrate": 47.39
         *     },
         *     "sigma": {
         *       "average": {
         *         "assists": 0.3,
         *         "damage": 12681.71,
         *         "deaths": 5.17,
         *         "eliminations": 21.91,
         *         "healing": 0
         *       },
         *       "games_lost": 20,
         *       "games_played": 47,
         *       "games_won": 27,
         *       "kda": 4.29,
         *       "time_played": 22265,
         *       "total": {
         *         "assists": 11,
         *         "damage": 470597,
         *         "deaths": 192,
         *         "eliminations": 813,
         *         "healing": 0
         *       },
         *       "winrate": 57.45
         *     },
         *     "sojourn": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 6509.8,
         *         "deaths": 12.42,
         *         "eliminations": 10.46,
         *         "healing": 0
         *       },
         *       "games_lost": 2,
         *       "games_played": 2,
         *       "games_won": 0,
         *       "kda": 0.84,
         *       "time_played": 918,
         *       "total": {
         *         "assists": 0,
         *         "damage": 9960,
         *         "deaths": 19,
         *         "eliminations": 16,
         *         "healing": 0
         *       },
         *       "winrate": 0
         *     },
         *     "soldier-76": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 12316.39,
         *         "deaths": 7.88,
         *         "eliminations": 24.09,
         *         "healing": 1503.2
         *       },
         *       "games_lost": 128,
         *       "games_played": 275,
         *       "games_won": 147,
         *       "kda": 3.06,
         *       "time_played": 128243,
         *       "total": {
         *         "assists": 0,
         *         "damage": 2632484,
         *         "deaths": 1684,
         *         "eliminations": 5148,
         *         "healing": 321291
         *       },
         *       "winrate": 53.45
         *     },
         *     "sombra": {
         *       "average": {
         *         "assists": 6.06,
         *         "damage": 5858.74,
         *         "deaths": 7.79,
         *         "eliminations": 13.5,
         *         "healing": 0
         *       },
         *       "games_lost": 5,
         *       "games_played": 7,
         *       "games_won": 2,
         *       "kda": 2.51,
         *       "time_played": 3466,
         *       "total": {
         *         "assists": 35,
         *         "damage": 33844,
         *         "deaths": 45,
         *         "eliminations": 78,
         *         "healing": 0
         *       },
         *       "winrate": 28.57
         *     },
         *     "symmetra": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 9108.41,
         *         "deaths": 9.23,
         *         "eliminations": 17.03,
         *         "healing": 0
         *       },
         *       "games_lost": 6,
         *       "games_played": 10,
         *       "games_won": 4,
         *       "kda": 1.84,
         *       "time_played": 3769,
         *       "total": {
         *         "assists": 0,
         *         "damage": 57216,
         *         "deaths": 58,
         *         "eliminations": 107,
         *         "healing": 0
         *       },
         *       "winrate": 40
         *     },
         *     "torbjorn": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 8593.46,
         *         "deaths": 5.79,
         *         "eliminations": 17.36,
         *         "healing": 0
         *       },
         *       "games_lost": 1,
         *       "games_played": 5,
         *       "games_won": 4,
         *       "kda": 3,
         *       "time_played": 2385,
         *       "total": {
         *         "assists": 0,
         *         "damage": 34159,
         *         "deaths": 23,
         *         "eliminations": 69,
         *         "healing": 0
         *       },
         *       "winrate": 80
         *     },
         *     "tracer": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 8318.17,
         *         "deaths": 9.3,
         *         "eliminations": 21.3,
         *         "healing": 0
         *       },
         *       "games_lost": 88,
         *       "games_played": 150,
         *       "games_won": 62,
         *       "kda": 2.29,
         *       "time_played": 76010,
         *       "total": {
         *         "assists": 0,
         *         "damage": 1053773,
         *         "deaths": 1178,
         *         "eliminations": 2698,
         *         "healing": 0
         *       },
         *       "winrate": 41.33
         *     },
         *     "widowmaker": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 6921.52,
         *         "deaths": 8.19,
         *         "eliminations": 16.09,
         *         "healing": 0
         *       },
         *       "games_lost": 14,
         *       "games_played": 23,
         *       "games_won": 9,
         *       "kda": 1.96,
         *       "time_played": 10331,
         *       "total": {
         *         "assists": 0,
         *         "damage": 119177,
         *         "deaths": 141,
         *         "eliminations": 277,
         *         "healing": 0
         *       },
         *       "winrate": 39.13
         *     },
         *     "winston": {
         *       "average": {
         *         "assists": 0,
         *         "damage": 6062.69,
         *         "deaths": 8.44,
         *         "eliminations": 19.15,
         *         "healing": 0
         *       },
         *       "games_lost": 243,
         *       "games_played": 444,
         *       "games_won": 201,
         *       "kda": 2.27,
         *       "time_played": 217064,
         *       "total": {
         *         "assists": 0,
         *         "damage": 2193318,
         *         "deaths": 3055,
         *         "eliminations": 6929,
         *         "healing": 0
         *       },
         *       "winrate": 45.27
         *     },
         *     "zarya": {
         *       "average": {
         *         "assists": 2.59,
         *         "damage": 8885.44,
         *         "deaths": 6.27,
         *         "eliminations": 20.8,
         *         "healing": 0
         *       },
         *       "games_lost": 811,
         *       "games_played": 1747,
         *       "games_won": 936,
         *       "kda": 3.73,
         *       "time_played": 811799,
         *       "total": {
         *         "assists": 3506,
         *         "damage": 12021985,
         *         "deaths": 8483,
         *         "eliminations": 28143,
         *         "healing": 0
         *       },
         *       "winrate": 53.58
         *     },
         *     "zenyatta": {
         *       "average": {
         *         "assists": 17.95,
         *         "damage": 7900.81,
         *         "deaths": 7.47,
         *         "eliminations": 18.3,
         *         "healing": 5075.94
         *       },
         *       "games_lost": 567,
         *       "games_played": 1368,
         *       "games_won": 801,
         *       "kda": 4.85,
         *       "time_played": 613300,
         *       "total": {
         *         "assists": 18347,
         *         "damage": 8075949,
         *         "deaths": 7635,
         *         "eliminations": 18704,
         *         "healing": 5188461
         *       },
         *       "winrate": 58.55
         *     }
         *   },
         *   "roles": {
         *     "damage": {
         *       "average": {
         *         "assists": 0.07,
         *         "damage": 11304.33,
         *         "deaths": 7.98,
         *         "eliminations": 21.57,
         *         "healing": 239.41
         *       },
         *       "games_lost": 827,
         *       "games_played": 1713,
         *       "games_won": 886,
         *       "kda": 2.71,
         *       "time_played": 805197,
         *       "total": {
         *         "assists": 88,
         *         "damage": 15170355,
         *         "deaths": 10704,
         *         "eliminations": 28947,
         *         "healing": 321291
         *       },
         *       "winrate": 51.72
         *     },
         *     "support": {
         *       "average": {
         *         "assists": 8.52,
         *         "damage": 5501.46,
         *         "deaths": 7.19,
         *         "eliminations": 14.43,
         *         "healing": 6975.32
         *       },
         *       "games_lost": 2117,
         *       "games_played": 4278,
         *       "games_won": 2161,
         *       "kda": 3.19,
         *       "time_played": 1989916,
         *       "total": {
         *         "assists": 28271,
         *         "damage": 18245737,
         *         "deaths": 23860,
         *         "eliminations": 47846,
         *         "healing": 23133830
         *       },
         *       "winrate": 50.51
         *     },
         *     "tank": {
         *       "average": {
         *         "assists": 2.84,
         *         "damage": 8396.93,
         *         "deaths": 6.97,
         *         "eliminations": 18.15,
         *         "healing": 0
         *       },
         *       "games_lost": 3210,
         *       "games_played": 6711,
         *       "games_won": 3501,
         *       "kda": 3.01,
         *       "time_played": 3073570,
         *       "total": {
         *         "assists": 14550,
         *         "damage": 43014278,
         *         "deaths": 35725,
         *         "eliminations": 92979,
         *         "healing": 0
         *       },
         *       "winrate": 52.17
         *     }
         *   }
         * }
         */
        export interface PlayerStatsSummary {
            /**
             * Sum of the stats of all the heroes played by the player
             */
            general?: /* Sum of the stats of all the heroes played by the player */ /* StatsSummary */ StatsSummary | null;
            /**
             * Sum of the stats of all the heroes played by the player, regrouped by roles
             */
            roles?: /* Sum of the stats of all the heroes played by the player, regrouped by roles */ /* PlayerRolesStats */ PlayerRolesStats | null;
            /**
             * Stats of all the heroes played by the player
             */
            heroes?: /* Stats of all the heroes played by the player */ /* PlayerHeroesStats */ PlayerHeroesStats | null;
        }
        /**
         * PlayerSummary
         */
        export interface PlayerSummary {
            /**
             * Username
             * Username of the player
             * example:
             * TeKrop
             */
            username: string;
            /**
             * Avatar
             * URL of the player's avatar. Can be null if couldn't retrieve any
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/daeddd96e58a2150afa6ffc3c5503ae7f96afc2e22899210d444f45dee508c6c.png
             */
            avatar?: /**
             * Avatar
             * URL of the player's avatar. Can be null if couldn't retrieve any
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/daeddd96e58a2150afa6ffc3c5503ae7f96afc2e22899210d444f45dee508c6c.png
             */
            string /* uri */ | null;
            /**
             * Namecard
             * URL of the player's namecard (or banner) if any
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/55d8c21e9d8b14942c26c4028059b6cd3b4e2fea40a139821ecee73a0005126f.png
             */
            namecard?: /**
             * Namecard
             * URL of the player's namecard (or banner) if any
             * example:
             * https://d15f34w2p8l1cc.cloudfront.net/overwatch/55d8c21e9d8b14942c26c4028059b6cd3b4e2fea40a139821ecee73a0005126f.png
             */
            string /* uri */ | null;
            /**
             * Title
             * Title of the player if any
             * example:
             * Bytefixer
             */
            title: /**
             * Title
             * Title of the player if any
             * example:
             * Bytefixer
             */
            string | null;
            /**
             * Player endorsement details
             */
            endorsement: /* Player endorsement details */ /* PlayerEndorsement */ PlayerEndorsement | null;
            /**
             * Competitive ranking in the last season played by the player in different roles depending on the platform. If the career is private or if the player doesn't play competitive at all, it's null.
             */
            competitive: /* Competitive ranking in the last season played by the player in different roles depending on the platform. If the career is private or if the player doesn't play competitive at all, it's null. */ /* PlayerCompetitiveRanksContainer */ PlayerCompetitiveRanksContainer | null;
        }
        /**
         * Role
         * Overwatch heroes roles
         */
        export type Role = "damage" | "support" | "tank";
        /**
         * RoleDetail
         */
        export interface RoleDetail {
            /**
             * Role
             * Key name of the role
             * example:
             * damage
             */
            key: "damage" | "support" | "tank";
            /**
             * Name
             * Name of the role
             * example:
             * Damage
             */
            name: string;
            /**
             * Icon
             * Icon URL of the role
             * example:
             * https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltc1d840ba007f88a8/62ea89572fdd1011027e605d/Damage.svg
             */
            icon: string; // uri
            /**
             * Description
             * Description of the role
             * example:
             * Damage heroes seek out, engage, and obliterate the enemy with wide-ranging tools, abilities, and play styles. Fearsome but fragile, these heroes require backup to survive.
             */
            description: string;
        }
        /**
         * SingleCareerStat
         */
        export interface SingleCareerStat {
            /**
             * Key
             * Statistic key
             */
            key: string;
            /**
             * Label
             * Statistic label
             */
            label: string;
            /**
             * Value
             * Statistic value
             */
            value: /**
             * Value
             * Statistic value
             */
            number | number;
        }
        /**
         * StatsSummary
         */
        export interface StatsSummary {
            /**
             * Games Played
             * Number of games played
             */
            games_played: number;
            /**
             * Games Won
             * Number of games won
             */
            games_won: number;
            /**
             * Games Lost
             * Number of games lost
             */
            games_lost: number;
            /**
             * Time Played
             * Time played (in seconds)
             */
            time_played: number;
            /**
             * Winrate
             * Winrate (in percent)
             */
            winrate: number;
            /**
             * Kda
             * Kill / Death / Assist ratio
             */
            kda: number;
            /**
             * TotalStatsSummary
             * Total values for generic stats : eliminations, assists, deaths, damage, healing
             */
            total: {
                /**
                 * Eliminations
                 * Total number of eliminations
                 */
                eliminations: number;
                /**
                 * Assists
                 * Total number of assists
                 */
                assists: number;
                /**
                 * Deaths
                 * Total number of deaths
                 */
                deaths: number;
                /**
                 * Damage
                 * Total damage done
                 */
                damage: number;
                /**
                 * Healing
                 * Total healing done
                 */
                healing: number;
            };
            /**
             * AverageStatsSummary
             * Average values per 10 minutes for generic stats : eliminations, assists, deaths, damage, healing
             */
            average: {
                /**
                 * Eliminations
                 * Average eliminations per 10 minutes
                 */
                eliminations: number;
                /**
                 * Assists
                 * Average assists per 10 minutes
                 */
                assists: number;
                /**
                 * Deaths
                 * Average deaths per 10 minutes
                 */
                deaths: number;
                /**
                 * Damage
                 * Average damage done per 10 minutes
                 */
                damage: number;
                /**
                 * Healing
                 * Average healing done per 10 minutes
                 */
                healing: number;
            };
        }
        /**
         * Story
         */
        export interface Story {
            /**
             * Summary
             * Brief summary of the origin story of the hero
             * example:
             * A founding member of the notorious Deadlock Gang, Cassidy was eventually coerced into joining Blackwatch, Overwatch's covert-ops division. He came to believe he could make amends for his past by righting the world's injustices. But when Overwatch fell, Cassidy went underground, resurfacing later as a gunslinger for hire, fighting only for causes he believes are just.
             */
            summary: string;
            /**
             * Media concerning the hero (YouTube video, pdf story, etc.)
             */
            media: /* Media concerning the hero (YouTube video, pdf story, etc.) */ /* Media */ Media | null;
            /**
             * Chapters of the story
             * List of chapters concerning the story of the hero
             */
            chapters: /* StoryChapter */ StoryChapter[];
        }
        /**
         * StoryChapter
         */
        export interface StoryChapter {
            /**
             * Title
             * Title of the chapter
             * example:
             * Blackwatch
             */
            title: string;
            /**
             * Content
             * Content of the chapter
             * example:
             * Cassidy had already made a name for himself as a member of the notorious Deadlock Rebels Gang, when he and his associates were busted in an Overwatch sting operation. With his expert marksmanship and resourcefulness, he was given the choice between rotting in a maximum-security lockup and joining Blackwatch, Overwatch's covert ops division. He chose the latter. Although he was initially cynical, he came to believe that he could make amends for his past sins by righting the injustices of the world. Cassidy appreciated the flexibility afforded to the clandestine Blackwatch, unhindered by bureaucracy and red tape. But as Overwatch's influence waned, rogue elements within Blackwatch sought to bring down the organization and turn it to their own ends. After the destruction of Overwatch's Swiss HQ, Cassidy wanted no part of the infighting. He set off alone and went underground.
             */
            content: string;
            /**
             * Picture
             * URL of the picture illustrating the chapter
             * example:
             * https://images.blz-contentstack.com/v3/assets/blt2477dcaf4ebd440c/blt1683656b69bedff7/638808d0273de01068bb2806/cassidy-01.jpg
             */
            picture: string; // uri
        }
        /**
         * TotalStatsSummary
         */
        export interface TotalStatsSummary {
            /**
             * Eliminations
             * Total number of eliminations
             */
            eliminations: number;
            /**
             * Assists
             * Total number of assists
             */
            assists: number;
            /**
             * Deaths
             * Total number of deaths
             */
            deaths: number;
            /**
             * Damage
             * Total damage done
             */
            damage: number;
            /**
             * Healing
             * Total healing done
             */
            healing: number;
        }
        /**
         * ValidationError
         */
        export interface ValidationError {
            /**
             * Location
             */
            loc: (string | number)[];
            /**
             * Message
             */
            msg: string;
            /**
             * Error Type
             */
            type: string;
        }
    }
}
declare namespace Paths {
    namespace GetHero {
        namespace Parameters {
            /**
             * Key name of the hero
             * Hero keys used to identify Overwatch heroes in general
             */
            export type HeroKey = "ana" | "ashe" | "baptiste" | "bastion" | "brigitte" | "cassidy" | "dva" | "doomfist" | "echo" | "genji" | "hanzo" | "illari" | "junker-queen" | "junkrat" | "kiriko" | "lifeweaver" | "lucio" | "mauga" | "mei" | "mercy" | "moira" | "orisa" | "pharah" | "ramattra" | "reaper" | "reinhardt" | "roadhog" | "sigma" | "sojourn" | "soldier-76" | "sombra" | "symmetra" | "torbjorn" | "tracer" | "venture" | "widowmaker" | "winston" | "wrecking-ball" | "zarya" | "zenyatta";
            /**
             * Locale to be displayed
             * Locales supported by Blizzard
             */
            export type Locale = "de-de" | "en-gb" | "en-us" | "es-es" | "es-mx" | "fr-fr" | "it-it" | "ja-jp" | "ko-kr" | "pl-pl" | "pt-br" | "ru-ru" | "zh-tw";
        }
        export interface PathParameters {
            hero_key: /**
             * Key name of the hero
             * Hero keys used to identify Overwatch heroes in general
             */
            Parameters.HeroKey;
        }
        export interface QueryParameters {
            locale?: /**
             * Locale to be displayed
             * Locales supported by Blizzard
             */
            Parameters.Locale;
        }
        namespace Responses {
            export type $200 = /* Hero */ Components.Schemas.Hero;
            export type $404 = /* HeroParserErrorMessage */ Components.Schemas.HeroParserErrorMessage;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
            export type $500 = /* InternalServerErrorMessage */ Components.Schemas.InternalServerErrorMessage;
            export type $504 = /* BlizzardErrorMessage */ Components.Schemas.BlizzardErrorMessage;
        }
    }
    namespace GetPlayerCareer {
        namespace Parameters {
            /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-"). Be careful, letter case (capital/non-capital letters) is important !
             * example:
             * TeKrop-2217
             */
            export type PlayerId = string;
        }
        export interface PathParameters {
            player_id: /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-"). Be careful, letter case (capital/non-capital letters) is important !
             * example:
             * TeKrop-2217
             */
            Parameters.PlayerId;
        }
        namespace Responses {
            export type $200 = /* Player */ Components.Schemas.Player;
            export type $404 = /* PlayerParserErrorMessage */ Components.Schemas.PlayerParserErrorMessage;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
            export type $500 = /* InternalServerErrorMessage */ Components.Schemas.InternalServerErrorMessage;
            export type $504 = /* BlizzardErrorMessage */ Components.Schemas.BlizzardErrorMessage;
        }
    }
    namespace GetPlayerCareerStats {
        namespace Parameters {
            /**
             * Gamemode
             * Filter on a specific gamemode.
             * example:
             * competitive
             */
            export type Gamemode = "quickplay" | "competitive";
            /**
             * Hero key
             * Filter on a specific hero in order to only get his statistics. You also can specify 'all-heroes' for general stats.
             */
            export type Hero = "all-heroes" | "ana" | "ashe" | "baptiste" | "bastion" | "brigitte" | "cassidy" | "dva" | "doomfist" | "echo" | "genji" | "hanzo" | "illari" | "junker-queen" | "junkrat" | "kiriko" | "lifeweaver" | "lucio" | "mauga" | "mei" | "mercy" | "moira" | "orisa" | "pharah" | "ramattra" | "reaper" | "reinhardt" | "roadhog" | "sigma" | "sojourn" | "soldier-76" | "sombra" | "symmetra" | "torbjorn" | "tracer" | "venture" | "widowmaker" | "winston" | "wrecking-ball" | "zarya" | "zenyatta";
            /**
             * Platform
             * Filter on a specific platform. If not specified, the only platform the player played on will be selected. If the player has already played on both PC and console, the PC stats will be displayed by default.
             * example:
             * pc
             */
            export type Platform = "console" | "pc";
            /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-"). Be careful, letter case (capital/non-capital letters) is important !
             * example:
             * TeKrop-2217
             */
            export type PlayerId = string;
        }
        export interface PathParameters {
            player_id: /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-"). Be careful, letter case (capital/non-capital letters) is important !
             * example:
             * TeKrop-2217
             */
            Parameters.PlayerId;
        }
        export interface QueryParameters {
            gamemode: /**
             * Gamemode
             * Filter on a specific gamemode.
             * example:
             * competitive
             */
            Parameters.Gamemode;
            platform?: /**
             * Platform
             * Filter on a specific platform. If not specified, the only platform the player played on will be selected. If the player has already played on both PC and console, the PC stats will be displayed by default.
             * example:
             * pc
             */
            Parameters.Platform;
            hero?: /**
             * Hero key
             * Filter on a specific hero in order to only get his statistics. You also can specify 'all-heroes' for general stats.
             */
            Parameters.Hero;
        }
        namespace Responses {
            export type $200 = /**
             * PlayerCareerStats
             * example:
             * {
             *   "all-heroes": {
             *     "assists": {
             *       "assists": 35,
             *       "defensive_assists": 29,
             *       "healing_done": 12703,
             *       "offensive_assists": 21
             *     },
             *     "average": {
             *       "assists_avg_per_10_min": 7.48,
             *       "deaths_avg_per_10_min": 6.41,
             *       "eliminations_avg_per_10_min": 10.9,
             *       "final_blows_avg_per_10_min": 3.85,
             *       "healing_done_avg_per_10_min": 2715,
             *       "hero_damage_done_avg_per_10_min": 7289,
             *       "objective_contest_time_avg_per_10_min": 50,
             *       "objective_kills_avg_per_10_min": 4.7,
             *       "objective_time_avg_per_10_min": 89
             *     },
             *     "best": {
             *       "all_damage_done_most_in_game": 25326,
             *       "assists_most_in_game": 16,
             *       "barrier_damage_done_most_in_game": 7544,
             *       "defensive_assists_most_in_game": 15,
             *       "eliminations_most_in_game": 22,
             *       "environmental_kills_most_in_game": 1,
             *       "final_blows_most_in_game": 10,
             *       "healing_done_most_in_game": 8196,
             *       "hero_damage_done_most_in_game": 17735,
             *       "kill_streak_best": 7,
             *       "multikill_best": 3,
             *       "objective_contest_time_most_in_game": 155,
             *       "objective_kills_most_in_game": 7,
             *       "objective_time_most_in_game": 281,
             *       "offensive_assists_most_in_game": 11,
             *       "solo_kills_most_in_game": 10,
             *       "time_spent_on_fire_most_in_game": 88
             *     },
             *     "combat": {
             *       "damage_done": 34098,
             *       "deaths": 30,
             *       "eliminations": 51,
             *       "environmental_kills": 1,
             *       "final_blows": 18,
             *       "hero_damage_done": 34098,
             *       "multikills": 1,
             *       "objective_contest_time": 233,
             *       "objective_kills": 22,
             *       "objective_time": 418
             *     },
             *     "game": {
             *       "games_lost": 4,
             *       "games_played": 5,
             *       "games_won": 1,
             *       "hero_wins": 1,
             *       "time_played": 2807
             *     }
             *   },
             *   "ana": {
             *     "assists": {
             *       "assists": 32,
             *       "defensive_assists": 29,
             *       "defensive_assists_avg_per_10_min": 20.32,
             *       "defensive_assists_most_in_game": 15,
             *       "healing_done": 12216,
             *       "healing_done_most_in_game": 8196,
             *       "offensive_assists": 18,
             *       "offensive_assists_avg_per_10_min": 12.61,
             *       "offensive_assists_most_in_game": 11
             *     },
             *     "average": {
             *       "all_damage_done_avg_per_10_min": 3235,
             *       "assists_avg_per_10_min": 22.42,
             *       "deaths_avg_per_10_min": 5.61,
             *       "eliminations_avg_per_10_min": 9.11,
             *       "eliminations_per_life": 1.63,
             *       "final_blows_avg_per_10_min": 2.1,
             *       "healing_done_avg_per_10_min": 8560,
             *       "hero_damage_done_avg_per_10_min": 2645,
             *       "obj_contest_time_avg_per_10_min": 36,
             *       "objective_kills_avg_per_10_min": 4.91,
             *       "objective_time_avg_per_10_min": 64
             *     },
             *     "best": {
             *       "all_damage_done_most_in_game": 2978,
             *       "all_damage_done_most_in_life": 1349,
             *       "assists_most_in_game": 16,
             *       "eliminations_most_in_game": 7,
             *       "eliminations_most_in_life": 4,
             *       "final_blows_most_in_game": 3,
             *       "hero_damage_done_most_in_game": 2291,
             *       "hero_damage_done_most_in_life": 1194,
             *       "kill_streak_best": 4,
             *       "obj_contest_time_most_in_game": 46,
             *       "objective_kills_most_in_game": 4,
             *       "objective_time_most_in_game": 51,
             *       "weapon_accuracy_best_in_game": 19
             *     },
             *     "combat": {
             *       "all_damage_done": 4616,
             *       "deaths": 8,
             *       "eliminations": 13,
             *       "final_blows": 3,
             *       "hero_damage_done": 3774,
             *       "obj_contest_time": 51,
             *       "objective_kills": 7,
             *       "objective_time": 91,
             *       "weapon_accuracy": 18
             *     },
             *     "game": {
             *       "games_lost": 1,
             *       "games_played": 2,
             *       "games_won": 1,
             *       "hero_wins": 1,
             *       "time_played": 856,
             *       "win_percentage": 50
             *     },
             *     "hero_specific": {
             *       "biotic_grenade_kills": 9,
             *       "biotic_grenade_kills_avg_per_10_min": 6.31,
             *       "damage_amplified": 862,
             *       "damage_amplified_avg_per_10_min": 604,
             *       "damage_amplified_most_in_game": 741,
             *       "enemies_slept": 4,
             *       "enemies_slept_avg_per_10_min": 2.8,
             *       "enemies_slept_most_in_game": 3,
             *       "healing_amplified": 647,
             *       "healing_amplified_avg_per_10_min": 453,
             *       "healing_amplified_most_in_game": 411,
             *       "nano_boost_assists": 8,
             *       "nano_boost_assists_avg_per_10_min": 5.61,
             *       "nano_boost_assists_most_in_game": 7,
             *       "scoped_accuracy": 44,
             *       "scoped_accuracy_best_in_game": 45,
             *       "self_healing": 577,
             *       "self_healing_avg_per_10_min": 404,
             *       "self_healing_most_in_game": 300,
             *       "unscoped_accuracy": 52,
             *       "unscoped_accuracy_best_in_game": 55
             *     }
             *   },
             *   "cassidy": {
             *     "average": {
             *       "all_damage_done_avg_per_10_min": 11813,
             *       "critical_hit_kills_avg_per_10_min": 0.75,
             *       "critical_hits_avg_per_10_min": 10.56,
             *       "deaths_avg_per_10_min": 8.3,
             *       "eliminations_avg_per_10_min": 12.07,
             *       "eliminations_per_life": 1.45,
             *       "final_blows_avg_per_10_min": 6.79,
             *       "hero_damage_done_avg_per_10_min": 6937,
             *       "obj_contest_time_avg_per_10_min": 18,
             *       "objective_kills_avg_per_10_min": 3.77,
             *       "objective_time_avg_per_10_min": 18
             *     },
             *     "best": {
             *       "all_damage_done_most_in_game": 10195,
             *       "all_damage_done_most_in_life": 3275,
             *       "critical_hit_kills_most_in_game": 1,
             *       "critical_hits_most_in_game": 10,
             *       "critical_hits_most_in_life": 5,
             *       "eliminations_most_in_game": 13,
             *       "eliminations_most_in_life": 5,
             *       "final_blows_most_in_game": 8,
             *       "hero_damage_done_most_in_game": 6319,
             *       "hero_damage_done_most_in_life": 1930,
             *       "kill_streak_best": 5,
             *       "obj_contest_time_most_in_game": 15,
             *       "objective_kills_most_in_game": 3,
             *       "objective_time_most_in_game": 15,
             *       "weapon_accuracy_best_in_game": 53
             *     },
             *     "combat": {
             *       "all_damage_done": 15654,
             *       "critical_hit_accuracy": 10,
             *       "critical_hit_kills": 1,
             *       "critical_hits": 14,
             *       "deaths": 11,
             *       "eliminations": 16,
             *       "final_blows": 9,
             *       "hero_damage_done": 9193,
             *       "obj_contest_time": 24,
             *       "objective_kills": 5,
             *       "objective_time": 24,
             *       "weapon_accuracy": 38
             *     },
             *     "game": {
             *       "games_lost": 2,
             *       "games_played": 2,
             *       "time_played": 795
             *     },
             *     "hero_specific": {
             *       "deadeye_kills": 1,
             *       "deadeye_kills_avg_per_10_min": 0.75,
             *       "deadeye_kills_most_in_game": 1,
             *       "fan_the_hammer_kills": 1,
             *       "fan_the_hammer_kills_avg_per_10_min": 0.75,
             *       "fan_the_hammer_kills_most_in_game": 1,
             *       "long_range_final_blows": 2,
             *       "long_range_final_blows_avg_per_10_min": 1.51,
             *       "magnetic_grenade_attach_rate": 27,
             *       "magnetic_grenade_kills": 4,
             *       "magnetic_grenade_kills_avg_per_10_min": 3.02,
             *       "magnetic_grenade_kills_most_in_game": 3
             *     }
             *   },
             *   "orisa": {
             *     "assists": {
             *       "assists": 2,
             *       "offensive_assists": 2,
             *       "offensive_assists_avg_per_10_min": 2.69,
             *       "offensive_assists_most_in_game": 2
             *     },
             *     "average": {
             *       "all_damage_done_avg_per_10_min": 20159,
             *       "assists_avg_per_10_min": 2.69,
             *       "deaths_avg_per_10_min": 5.39,
             *       "eliminations_avg_per_10_min": 6.73,
             *       "eliminations_per_life": 1.25,
             *       "final_blows_avg_per_10_min": 1.35,
             *       "hero_damage_done_avg_per_10_min": 12226,
             *       "obj_contest_time_avg_per_10_min": 154,
             *       "objective_kills_avg_per_10_min": 5.39,
             *       "objective_time_avg_per_10_min": 154
             *     },
             *     "best": {
             *       "all_damage_done_most_in_game": 14969,
             *       "all_damage_done_most_in_life": 5409,
             *       "assists_most_in_game": 2,
             *       "eliminations_most_in_game": 5,
             *       "eliminations_most_in_life": 4,
             *       "final_blows_most_in_game": 1,
             *       "hero_damage_done_most_in_game": 9078,
             *       "hero_damage_done_most_in_life": 3181,
             *       "kill_streak_best": 4,
             *       "obj_contest_time_most_in_game": 114,
             *       "objective_kills_most_in_game": 4,
             *       "objective_time_most_in_game": 114,
             *       "weapon_accuracy_best_in_game": 40
             *     },
             *     "combat": {
             *       "all_damage_done": 14969,
             *       "deaths": 4,
             *       "eliminations": 5,
             *       "final_blows": 1,
             *       "hero_damage_done": 9078,
             *       "obj_contest_time": 114,
             *       "objective_kills": 4,
             *       "objective_time": 114,
             *       "weapon_accuracy": 40
             *     },
             *     "game": {
             *       "games_lost": 1,
             *       "games_played": 1,
             *       "time_played": 446
             *     },
             *     "hero_specific": {
             *       "energy_javelin_kills": 2,
             *       "energy_javelin_kills_avg_per_10_min": 2.69,
             *       "energy_javelin_kills_nyi": 2,
             *       "javelin_spin_kills": 2,
             *       "javelin_spin_kills_avg_per_10_min": 0,
             *       "javelin_spin_kills_nyi": 2,
             *       "terra_surge_kills": 1,
             *       "terra_surge_kills_avg_per_10_min": 1.35,
             *       "terra_surge_kills_most_in_game": 1
             *     }
             *   },
             *   "reaper": {
             *     "average": {
             *       "all_damage_done_avg_per_10_min": 9753,
             *       "critical_hits_avg_per_10_min": 88.16,
             *       "deaths_avg_per_10_min": 7.84,
             *       "eliminations_avg_per_10_min": 17.63,
             *       "eliminations_per_life": 2.25,
             *       "final_blows_avg_per_10_min": 3.92,
             *       "healing_done_avg_per_10_min": 954,
             *       "hero_damage_done_avg_per_10_min": 6655,
             *       "obj_contest_time_avg_per_10_min": 6,
             *       "objective_kills_avg_per_10_min": 5.88,
             *       "objective_time_avg_per_10_min": 43
             *     },
             *     "best": {
             *       "all_damage_done_most_in_game": 4978,
             *       "all_damage_done_most_in_life": 3235,
             *       "critical_hits_most_in_game": 45,
             *       "critical_hits_most_in_life": 28,
             *       "eliminations_most_in_game": 9,
             *       "eliminations_most_in_life": 7,
             *       "final_blows_most_in_game": 2,
             *       "hero_damage_done_most_in_game": 3397,
             *       "hero_damage_done_most_in_life": 2277,
             *       "kill_streak_best": 7,
             *       "multikill_best": 3,
             *       "obj_contest_time_most_in_game": 3,
             *       "objective_kills_most_in_game": 3,
             *       "objective_time_most_in_game": 22,
             *       "weapon_accuracy_best_in_game": 26
             *     },
             *     "combat": {
             *       "all_damage_done": 4978,
             *       "critical_hit_accuracy": 7,
             *       "critical_hits": 45,
             *       "deaths": 4,
             *       "eliminations": 9,
             *       "final_blows": 2,
             *       "hero_damage_done": 3397,
             *       "multikills": 1,
             *       "obj_contest_time": 3,
             *       "objective_kills": 3,
             *       "objective_time": 22,
             *       "weapon_accuracy": 26
             *     },
             *     "game": {
             *       "games_lost": 0,
             *       "games_played": 0,
             *       "time_played": 306
             *     },
             *     "hero_specific": {
             *       "self_healing": 487,
             *       "self_healing_avg_per_10_min": 954,
             *       "self_healing_most_in_game": 487
             *     }
             *   },
             *   "reinhardt": {
             *     "assists": {
             *       "assists": 1,
             *       "offensive_assists": 1,
             *       "offensive_assists_avg_per_10_min": 1.53,
             *       "offensive_assists_most_in_game": 1
             *     },
             *     "average": {
             *       "all_damage_done_avg_per_10_min": 15868,
             *       "assists_avg_per_10_min": 1.53,
             *       "deaths_avg_per_10_min": 4.6,
             *       "eliminations_avg_per_10_min": 12.26,
             *       "eliminations_per_life": 2.67,
             *       "final_blows_avg_per_10_min": 4.6,
             *       "hero_damage_done_avg_per_10_min": 13263,
             *       "obj_contest_time_avg_per_10_min": 63,
             *       "objective_kills_avg_per_10_min": 4.6,
             *       "objective_time_avg_per_10_min": 256
             *     },
             *     "best": {
             *       "all_damage_done_most_in_game": 10357,
             *       "all_damage_done_most_in_life": 4727,
             *       "assists_most_in_game": 1,
             *       "eliminations_most_in_game": 8,
             *       "eliminations_most_in_life": 6,
             *       "environmental_kills_most_in_game": 1,
             *       "final_blows_most_in_game": 3,
             *       "hero_damage_done_most_in_game": 8657,
             *       "hero_damage_done_most_in_life": 3462,
             *       "kill_streak_best": 6,
             *       "obj_contest_time_most_in_game": 41,
             *       "objective_kills_most_in_game": 3,
             *       "objective_time_most_in_game": 167
             *     },
             *     "combat": {
             *       "all_damage_done": 10357,
             *       "deaths": 3,
             *       "eliminations": 8,
             *       "environmental_kills": 1,
             *       "environmental_kills_avg_per_10_min": 1.53,
             *       "final_blows": 3,
             *       "hero_damage_done": 8657,
             *       "obj_contest_time": 41,
             *       "objective_kills": 3,
             *       "objective_time": 167
             *     },
             *     "game": {
             *       "games_lost": 0,
             *       "games_played": 0,
             *       "time_played": 392
             *     },
             *     "hero_specific": {
             *       "charge_kills": 2,
             *       "charge_kills_avg_per_10_min": 3.06,
             *       "charge_kills_most_in_game": 2,
             *       "earthshatter_kills": 2,
             *       "earthshatter_kills_avg_per_10_min": 3.06,
             *       "earthshatter_kills_most_in_game": 2,
             *       "fire_strike_kills": 4,
             *       "fire_strike_kills_avg_per_10_min": 6.13,
             *       "fire_strike_kills_most_in_game": 4
             *     }
             *   },
             *   "tracer": {
             *     "game": {
             *       "games_lost": 0,
             *       "games_played": 0,
             *       "time_played": 12
             *     },
             *     "hero_specific": {
             *       "low_health_recalls": 1,
             *       "low_health_recalls_avg_per_10_min": 48.98,
             *       "low_health_recalls_most_in_game": 1,
             *       "self_healing": 130,
             *       "self_healing_avg_per_10_min": 6367,
             *       "self_healing_most_in_game": 130
             *     }
             *   }
             * }
             */
            Components.Schemas.PlayerCareerStats;
            export type $404 = /* PlayerParserErrorMessage */ Components.Schemas.PlayerParserErrorMessage;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
            export type $500 = /* InternalServerErrorMessage */ Components.Schemas.InternalServerErrorMessage;
            export type $504 = /* BlizzardErrorMessage */ Components.Schemas.BlizzardErrorMessage;
        }
    }
    namespace GetPlayerStats {
        namespace Parameters {
            /**
             * Gamemode
             * Filter on a specific gamemode.
             * example:
             * competitive
             */
            export type Gamemode = "quickplay" | "competitive";
            /**
             * Hero key
             * Filter on a specific hero in order to only get his statistics. You also can specify 'all-heroes' for general stats.
             */
            export type Hero = "all-heroes" | "ana" | "ashe" | "baptiste" | "bastion" | "brigitte" | "cassidy" | "dva" | "doomfist" | "echo" | "genji" | "hanzo" | "illari" | "junker-queen" | "junkrat" | "kiriko" | "lifeweaver" | "lucio" | "mauga" | "mei" | "mercy" | "moira" | "orisa" | "pharah" | "ramattra" | "reaper" | "reinhardt" | "roadhog" | "sigma" | "sojourn" | "soldier-76" | "sombra" | "symmetra" | "torbjorn" | "tracer" | "venture" | "widowmaker" | "winston" | "wrecking-ball" | "zarya" | "zenyatta";
            /**
             * Platform
             * Filter on a specific platform. If not specified, the only platform the player played on will be selected. If the player has already played on both PC and console, the PC stats will be displayed by default.
             * example:
             * pc
             */
            export type Platform = "console" | "pc";
            /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-"). Be careful, letter case (capital/non-capital letters) is important !
             * example:
             * TeKrop-2217
             */
            export type PlayerId = string;
        }
        export interface PathParameters {
            player_id: /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-"). Be careful, letter case (capital/non-capital letters) is important !
             * example:
             * TeKrop-2217
             */
            Parameters.PlayerId;
        }
        export interface QueryParameters {
            gamemode: /**
             * Gamemode
             * Filter on a specific gamemode.
             * example:
             * competitive
             */
            Parameters.Gamemode;
            platform?: /**
             * Platform
             * Filter on a specific platform. If not specified, the only platform the player played on will be selected. If the player has already played on both PC and console, the PC stats will be displayed by default.
             * example:
             * pc
             */
            Parameters.Platform;
            hero?: /**
             * Hero key
             * Filter on a specific hero in order to only get his statistics. You also can specify 'all-heroes' for general stats.
             */
            Parameters.Hero;
        }
        namespace Responses {
            export type $200 = /**
             * CareerStats
             * example:
             * {
             *   "all-heroes": [
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 22
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blows - Most in Game",
             *           "value": 10
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 25326
             *         },
             *         {
             *           "key": "healing_done_most_in_game",
             *           "label": "Healing Done - Most in Game",
             *           "value": 8196
             *         },
             *         {
             *           "key": "defensive_assists_most_in_game",
             *           "label": "Defensive Assists - Most in Game",
             *           "value": 15
             *         },
             *         {
             *           "key": "offensive_assists_most_in_game",
             *           "label": "Offensive Assists - Most in Game",
             *           "value": 11
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 7
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 281
             *         },
             *         {
             *           "key": "multikill_best",
             *           "label": "Multikill - Best",
             *           "value": 3
             *         },
             *         {
             *           "key": "solo_kills_most_in_game",
             *           "label": "Solo Kills - Most in Game",
             *           "value": 10
             *         },
             *         {
             *           "key": "time_spent_on_fire_most_in_game",
             *           "label": "Time Spent on Fire - Most in Game",
             *           "value": 88
             *         },
             *         {
             *           "key": "environmental_kills_most_in_game",
             *           "label": "Environmental Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 7
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 17735
             *         },
             *         {
             *           "key": "barrier_damage_done_most_in_game",
             *           "label": "Barrier Damage Done - Most in Game",
             *           "value": 7544
             *         },
             *         {
             *           "key": "assists_most_in_game",
             *           "label": "Assists - Most in Game",
             *           "value": 16
             *         },
             *         {
             *           "key": "objective_contest_time_most_in_game",
             *           "label": "Objective Contest Time - Most in Game",
             *           "value": 155
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 7289
             *         },
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 6.41
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 10.9
             *         },
             *         {
             *           "key": "assists_avg_per_10_min",
             *           "label": "Assists - Avg per 10 min",
             *           "value": 7.48
             *         },
             *         {
             *           "key": "healing_done_avg_per_10_min",
             *           "label": "Healing Done - Avg per 10 Min",
             *           "value": 2715
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 4.7
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 89
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 3.85
             *         },
             *         {
             *           "key": "objective_contest_time_avg_per_10_min",
             *           "label": "Objective Contest Time - Avg per 10 Min",
             *           "value": 50
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 2807
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 5
             *         },
             *         {
             *           "key": "games_won",
             *           "label": "Game Won",
             *           "value": 1
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 4
             *         },
             *         {
             *           "key": "hero_wins",
             *           "label": "Hero Win",
             *           "value": 1
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "damage_done",
             *           "label": "Damage Done",
             *           "value": 34098
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 34098
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 30
             *         },
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 51
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 22
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blows",
             *           "value": 18
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 418
             *         },
             *         {
             *           "key": "multikills",
             *           "label": "Multikill",
             *           "value": 1
             *         },
             *         {
             *           "key": "environmental_kills",
             *           "label": "Environmental Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "objective_contest_time",
             *           "label": "Objective Contest Time",
             *           "value": 233
             *         }
             *       ]
             *     },
             *     {
             *       "category": "assists",
             *       "label": "Assists",
             *       "stats": [
             *         {
             *           "key": "assists",
             *           "label": "Assists",
             *           "value": 35
             *         },
             *         {
             *           "key": "healing_done",
             *           "label": "Healing Done",
             *           "value": 12703
             *         },
             *         {
             *           "key": "defensive_assists",
             *           "label": "Defensive Assists",
             *           "value": 29
             *         },
             *         {
             *           "key": "offensive_assists",
             *           "label": "Offensive Assists",
             *           "value": 21
             *         }
             *       ]
             *     }
             *   ],
             *   "ana": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "scoped_accuracy_best_in_game",
             *           "label": "Scoped Accuracy - Best in Game",
             *           "value": 45
             *         },
             *         {
             *           "key": "self_healing",
             *           "label": "Self Healing",
             *           "value": 577
             *         },
             *         {
             *           "key": "self_healing_most_in_game",
             *           "label": "Self Healing - Most in Game",
             *           "value": 300
             *         },
             *         {
             *           "key": "enemies_slept",
             *           "label": "Enemies Slept",
             *           "value": 4
             *         },
             *         {
             *           "key": "nano_boost_assists",
             *           "label": "Nano Boost Assists",
             *           "value": 8
             *         },
             *         {
             *           "key": "unscoped_accuracy_best_in_game",
             *           "label": "Unscoped Accuracy - Best in Game",
             *           "value": 55
             *         },
             *         {
             *           "key": "enemies_slept_most_in_game",
             *           "label": "Enemies Slept - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "nano_boost_assists_most_in_game",
             *           "label": "Nano Boost Assists - Most in Game",
             *           "value": 7
             *         },
             *         {
             *           "key": "biotic_grenade_kills",
             *           "label": "Biotic Grenade Kills",
             *           "value": 9
             *         },
             *         {
             *           "key": "damage_amplified",
             *           "label": "Damage Amplified",
             *           "value": 862
             *         },
             *         {
             *           "key": "damage_amplified_most_in_game",
             *           "label": "Damage Amplified - Most in Game",
             *           "value": 741
             *         },
             *         {
             *           "key": "healing_amplified",
             *           "label": "Healing Amplified",
             *           "value": 647
             *         },
             *         {
             *           "key": "healing_amplified_most_in_game",
             *           "label": "Healing Amplified - Most in Game",
             *           "value": 411
             *         },
             *         {
             *           "key": "nano_boost_assists_avg_per_10_min",
             *           "label": "Nano Boost Assists - Avg per 10 Min",
             *           "value": 5.61
             *         },
             *         {
             *           "key": "healing_amplified_avg_per_10_min",
             *           "label": "Healing Amplified - Avg per 10 Min",
             *           "value": 453
             *         },
             *         {
             *           "key": "biotic_grenade_kills_avg_per_10_min",
             *           "label": "Biotic Grenade Kills - Avg per 10 Min",
             *           "value": 6.31
             *         },
             *         {
             *           "key": "enemies_slept_avg_per_10_min",
             *           "label": "Enemies Slept - Avg per 10 Min",
             *           "value": 2.8
             *         },
             *         {
             *           "key": "unscoped_accuracy",
             *           "label": "Unscoped Accuracy",
             *           "value": 52
             *         },
             *         {
             *           "key": "scoped_accuracy",
             *           "label": "Scoped Accuracy",
             *           "value": 44
             *         },
             *         {
             *           "key": "self_healing_avg_per_10_min",
             *           "label": "Self Healing - Avg per 10 Min",
             *           "value": 404
             *         },
             *         {
             *           "key": "damage_amplified_avg_per_10_min",
             *           "label": "Damage Amplified - Avg per 10 Min",
             *           "value": 604
             *         }
             *       ]
             *     },
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_life",
             *           "label": "Eliminations - Most in Life",
             *           "value": 4
             *         },
             *         {
             *           "key": "all_damage_done_most_in_life",
             *           "label": "All Damage Done - Most in Life",
             *           "value": 1349
             *         },
             *         {
             *           "key": "weapon_accuracy_best_in_game",
             *           "label": "Weapon Accuracy - Best in Game",
             *           "value": 19
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 4
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 2978
             *         },
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 7
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blows - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 4
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 51
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 2291
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_life",
             *           "label": "Hero Damage Done - Most in Life",
             *           "value": 1194
             *         },
             *         {
             *           "key": "assists_most_in_game",
             *           "label": "Assists - Most in Game",
             *           "value": 16
             *         },
             *         {
             *           "key": "obj_contest_time_most_in_game",
             *           "label": "Obj Contest Time - Most in Game",
             *           "value": 46
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "healing_done_avg_per_10_min",
             *           "label": "Healing Done - Avg per 10 Min",
             *           "value": 8560
             *         },
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 5.61
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 9.11
             *         },
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 2645
             *         },
             *         {
             *           "key": "assists_avg_per_10_min",
             *           "label": "Assists - Avg per 10 min",
             *           "value": 22.42
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 64
             *         },
             *         {
             *           "key": "all_damage_done_avg_per_10_min",
             *           "label": "All Damage Done - Avg per 10 Min",
             *           "value": 3235
             *         },
             *         {
             *           "key": "eliminations_per_life",
             *           "label": "Eliminations per Life",
             *           "value": 1.63
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 4.91
             *         },
             *         {
             *           "key": "obj_contest_time_avg_per_10_min",
             *           "label": "Obj Contest Time - Avg per 10 Min",
             *           "value": 36
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 2.1
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 856
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 2
             *         },
             *         {
             *           "key": "games_won",
             *           "label": "Game Won",
             *           "value": 1
             *         },
             *         {
             *           "key": "games_won",
             *           "label": "Game Won",
             *           "value": 1
             *         },
             *         {
             *           "key": "games_won",
             *           "label": "Game Won",
             *           "value": 1
             *         },
             *         {
             *           "key": "hero_wins",
             *           "label": "Hero Win",
             *           "value": 1
             *         },
             *         {
             *           "key": "win_percentage",
             *           "label": "Win Percentage",
             *           "value": 50
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Game Lost",
             *           "value": 1
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 13
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 8
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blows",
             *           "value": 3
             *         },
             *         {
             *           "key": "all_damage_done",
             *           "label": "All Damage Done",
             *           "value": 4616
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 7
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 91
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 3774
             *         },
             *         {
             *           "key": "obj_contest_time",
             *           "label": "Obj Contest Time",
             *           "value": 51
             *         },
             *         {
             *           "key": "weapon_accuracy",
             *           "label": "Weapon Accuracy",
             *           "value": 18
             *         }
             *       ]
             *     },
             *     {
             *       "category": "assists",
             *       "label": "Assists",
             *       "stats": [
             *         {
             *           "key": "offensive_assists",
             *           "label": "Offensive Assists",
             *           "value": 18
             *         },
             *         {
             *           "key": "offensive_assists_most_in_game",
             *           "label": "Offensive Assists - Most in Game",
             *           "value": 11
             *         },
             *         {
             *           "key": "defensive_assists",
             *           "label": "Defensive Assists",
             *           "value": 29
             *         },
             *         {
             *           "key": "defensive_assists_most_in_game",
             *           "label": "Defensive Assists - Most in Game",
             *           "value": 15
             *         },
             *         {
             *           "key": "healing_done",
             *           "label": "Healing Done",
             *           "value": 12216
             *         },
             *         {
             *           "key": "healing_done_most_in_game",
             *           "label": "Healing Done - Most in Game",
             *           "value": 8196
             *         },
             *         {
             *           "key": "assists",
             *           "label": "Assists",
             *           "value": 32
             *         },
             *         {
             *           "key": "defensive_assists_avg_per_10_min",
             *           "label": "Defensive Assists - Avg per 10 Min",
             *           "value": 20.32
             *         },
             *         {
             *           "key": "offensive_assists_avg_per_10_min",
             *           "label": "Offensive Assists - Avg per 10 Min",
             *           "value": 12.61
             *         }
             *       ]
             *     }
             *   ],
             *   "cassidy": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "deadeye_kills",
             *           "label": "Deadeye Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "deadeye_kills_most_in_game",
             *           "label": "Deadeye Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "fan_the_hammer_kills",
             *           "label": "Fan the Hammer Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "fan_the_hammer_kills_most_in_game",
             *           "label": "Fan the Hammer Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "magnetic_grenade_kills",
             *           "label": "Magnetic Grenade Kills",
             *           "value": 4
             *         },
             *         {
             *           "key": "magnetic_grenade_kills_most_in_game",
             *           "label": "Magnetic Grenade Kills - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "long_range_final_blows",
             *           "label": "Long Range Final Blows",
             *           "value": 2
             *         },
             *         {
             *           "key": "magnetic_grenade_kills_avg_per_10_min",
             *           "label": "Magnetic Grenade Kills - Avg per 10 Min",
             *           "value": 3.02
             *         },
             *         {
             *           "key": "deadeye_kills_avg_per_10_min",
             *           "label": "Deadeye Kills - Avg per 10 Min",
             *           "value": 0.75
             *         },
             *         {
             *           "key": "magnetic_grenade_attach_rate",
             *           "label": "Magnetic Grenade Attach Rate",
             *           "value": 27
             *         },
             *         {
             *           "key": "fan_the_hammer_kills_avg_per_10_min",
             *           "label": "Fan the Hammer Kills - Avg per 10 Min",
             *           "value": 0.75
             *         },
             *         {
             *           "key": "long_range_final_blows_avg_per_10_min",
             *           "label": "Long Range Final Blows - Avg per 10 Min",
             *           "value": 1.51
             *         }
             *       ]
             *     },
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_life",
             *           "label": "Eliminations - Most in Life",
             *           "value": 5
             *         },
             *         {
             *           "key": "all_damage_done_most_in_life",
             *           "label": "All Damage Done - Most in Life",
             *           "value": 3275
             *         },
             *         {
             *           "key": "weapon_accuracy_best_in_game",
             *           "label": "Weapon Accuracy - Best in Game",
             *           "value": 53
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 5
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 10195
             *         },
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 13
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blows - Most in Game",
             *           "value": 8
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 15
             *         },
             *         {
             *           "key": "critical_hits_most_in_game",
             *           "label": "Critical Hits - Most in Game",
             *           "value": 10
             *         },
             *         {
             *           "key": "critical_hits_most_in_life",
             *           "label": "Critical Hits - Most in Life",
             *           "value": 5
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 6319
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_life",
             *           "label": "Hero Damage Done - Most in Life",
             *           "value": 1930
             *         },
             *         {
             *           "key": "critical_hit_kills_most_in_game",
             *           "label": "Critical Hit Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "obj_contest_time_most_in_game",
             *           "label": "Obj Contest Time - Most in Game",
             *           "value": 15
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 8.3
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 12.07
             *         },
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 6937
             *         },
             *         {
             *           "key": "critical_hit_kills_avg_per_10_min",
             *           "label": "Critical Hit Kills - Avg per 10 Min",
             *           "value": 0.75
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 18
             *         },
             *         {
             *           "key": "all_damage_done_avg_per_10_min",
             *           "label": "All Damage Done - Avg per 10 Min",
             *           "value": 11813
             *         },
             *         {
             *           "key": "critical_hits_avg_per_10_min",
             *           "label": "Critical Hits - Avg per 10 Min",
             *           "value": 10.56
             *         },
             *         {
             *           "key": "eliminations_per_life",
             *           "label": "Eliminations per Life",
             *           "value": 1.45
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 3.77
             *         },
             *         {
             *           "key": "obj_contest_time_avg_per_10_min",
             *           "label": "Obj Contest Time - Avg per 10 Min",
             *           "value": 18
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 6.79
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 795
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 2
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 2
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 16
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 11
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blows",
             *           "value": 9
             *         },
             *         {
             *           "key": "all_damage_done",
             *           "label": "All Damage Done",
             *           "value": 15654
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 5
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 24
             *         },
             *         {
             *           "key": "critical_hits",
             *           "label": "Critical Hits",
             *           "value": 14
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 9193
             *         },
             *         {
             *           "key": "critical_hit_kills",
             *           "label": "Critical Hit Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "obj_contest_time",
             *           "label": "Obj Contest Time",
             *           "value": 24
             *         },
             *         {
             *           "key": "critical_hit_accuracy",
             *           "label": "Critical Hit Accuracy",
             *           "value": 10
             *         },
             *         {
             *           "key": "weapon_accuracy",
             *           "label": "Weapon Accuracy",
             *           "value": 38
             *         }
             *       ]
             *     }
             *   ],
             *   "orisa": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "terra_surge_kills",
             *           "label": "Terra Surge Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "terra_surge_kills_most_in_game",
             *           "label": "Terra Surge Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "energy_javelin_kills",
             *           "label": "Energy Javelin Kills",
             *           "value": 2
             *         },
             *         {
             *           "key": "javelin_spin_kills",
             *           "label": "Javelin Spin Kills",
             *           "value": 2
             *         },
             *         {
             *           "key": "energy_javelin_kills_nyi",
             *           "label": "Energy Javelin Kills NYI",
             *           "value": 2
             *         },
             *         {
             *           "key": "javelin_spin_kills_nyi",
             *           "label": "Javelin Spin Kills NYI",
             *           "value": 2
             *         },
             *         {
             *           "key": "terra_surge_kills_avg_per_10_min",
             *           "label": "Terra Surge Kills - Avg per 10 Min",
             *           "value": 1.35
             *         },
             *         {
             *           "key": "javelin_spin_kills_avg_per_10_min",
             *           "label": "Javelin Spin Kills - Avg per 10 Min",
             *           "value": 0
             *         },
             *         {
             *           "key": "energy_javelin_kills_avg_per_10_min",
             *           "label": "Energy Javelin Kills - Avg per 10 Min",
             *           "value": 2.69
             *         }
             *       ]
             *     },
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_life",
             *           "label": "Eliminations - Most in Life",
             *           "value": 4
             *         },
             *         {
             *           "key": "all_damage_done_most_in_life",
             *           "label": "All Damage Done - Most in Life",
             *           "value": 5409
             *         },
             *         {
             *           "key": "weapon_accuracy_best_in_game",
             *           "label": "Weapon Accuracy - Best in Game",
             *           "value": 40
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 4
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 14969
             *         },
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 5
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blow - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 4
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 114
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 9078
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_life",
             *           "label": "Hero Damage Done - Most in Life",
             *           "value": 3181
             *         },
             *         {
             *           "key": "assists_most_in_game",
             *           "label": "Assists - Most in Game",
             *           "value": 2
             *         },
             *         {
             *           "key": "obj_contest_time_most_in_game",
             *           "label": "Obj Contest Time - Most in Game",
             *           "value": 114
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 5.39
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 6.73
             *         },
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 12226
             *         },
             *         {
             *           "key": "assists_avg_per_10_min",
             *           "label": "Assists - Avg per 10 min",
             *           "value": 2.69
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 154
             *         },
             *         {
             *           "key": "all_damage_done_avg_per_10_min",
             *           "label": "All Damage Done - Avg per 10 Min",
             *           "value": 20159
             *         },
             *         {
             *           "key": "eliminations_per_life",
             *           "label": "Eliminations per Life",
             *           "value": 1.25
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 5.39
             *         },
             *         {
             *           "key": "obj_contest_time_avg_per_10_min",
             *           "label": "Obj Contest Time - Avg per 10 Min",
             *           "value": 154
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 1.35
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 446
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 1
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 1
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 5
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 4
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blow",
             *           "value": 1
             *         },
             *         {
             *           "key": "all_damage_done",
             *           "label": "All Damage Done",
             *           "value": 14969
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 4
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 114
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 9078
             *         },
             *         {
             *           "key": "obj_contest_time",
             *           "label": "Obj Contest Time",
             *           "value": 114
             *         },
             *         {
             *           "key": "weapon_accuracy",
             *           "label": "Weapon Accuracy",
             *           "value": 40
             *         }
             *       ]
             *     },
             *     {
             *       "category": "assists",
             *       "label": "Assists",
             *       "stats": [
             *         {
             *           "key": "offensive_assists",
             *           "label": "Offensive Assists",
             *           "value": 2
             *         },
             *         {
             *           "key": "offensive_assists_most_in_game",
             *           "label": "Offensive Assists - Most in Game",
             *           "value": 2
             *         },
             *         {
             *           "key": "assists",
             *           "label": "Assists",
             *           "value": 2
             *         },
             *         {
             *           "key": "offensive_assists_avg_per_10_min",
             *           "label": "Offensive Assists - Avg per 10 Min",
             *           "value": 2.69
             *         }
             *       ]
             *     }
             *   ],
             *   "reaper": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "self_healing",
             *           "label": "Self Healing",
             *           "value": 487
             *         },
             *         {
             *           "key": "self_healing_most_in_game",
             *           "label": "Self Healing - Most in Game",
             *           "value": 487
             *         },
             *         {
             *           "key": "self_healing_avg_per_10_min",
             *           "label": "Self Healing - Avg per 10 Min",
             *           "value": 954
             *         }
             *       ]
             *     },
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_life",
             *           "label": "Eliminations - Most in Life",
             *           "value": 7
             *         },
             *         {
             *           "key": "all_damage_done_most_in_life",
             *           "label": "All Damage Done - Most in Life",
             *           "value": 3235
             *         },
             *         {
             *           "key": "weapon_accuracy_best_in_game",
             *           "label": "Weapon Accuracy - Best in Game",
             *           "value": 26
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 7
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 4978
             *         },
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 9
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blows - Most in Game",
             *           "value": 2
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 22
             *         },
             *         {
             *           "key": "multikill_best",
             *           "label": "Multikill - Best",
             *           "value": 3
             *         },
             *         {
             *           "key": "critical_hits_most_in_game",
             *           "label": "Critical Hits - Most in Game",
             *           "value": 45
             *         },
             *         {
             *           "key": "critical_hits_most_in_life",
             *           "label": "Critical Hits - Most in Life",
             *           "value": 28
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 3397
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_life",
             *           "label": "Hero Damage Done - Most in Life",
             *           "value": 2277
             *         },
             *         {
             *           "key": "obj_contest_time_most_in_game",
             *           "label": "Obj Contest Time - Most in Game",
             *           "value": 3
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "healing_done_avg_per_10_min",
             *           "label": "Healing Done - Avg per 10 Min",
             *           "value": 954
             *         },
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 7.84
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 17.63
             *         },
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 6655
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 43
             *         },
             *         {
             *           "key": "all_damage_done_avg_per_10_min",
             *           "label": "All Damage Done - Avg per 10 Min",
             *           "value": 9753
             *         },
             *         {
             *           "key": "critical_hits_avg_per_10_min",
             *           "label": "Critical Hits - Avg per 10 Min",
             *           "value": 88.16
             *         },
             *         {
             *           "key": "eliminations_per_life",
             *           "label": "Eliminations per Life",
             *           "value": 2.25
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 5.88
             *         },
             *         {
             *           "key": "obj_contest_time_avg_per_10_min",
             *           "label": "Obj Contest Time - Avg per 10 Min",
             *           "value": 6
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 3.92
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 306
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 0
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 0
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 9
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 4
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blows",
             *           "value": 2
             *         },
             *         {
             *           "key": "all_damage_done",
             *           "label": "All Damage Done",
             *           "value": 4978
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 22
             *         },
             *         {
             *           "key": "multikills",
             *           "label": "Multikill",
             *           "value": 1
             *         },
             *         {
             *           "key": "critical_hits",
             *           "label": "Critical Hits",
             *           "value": 45
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 3397
             *         },
             *         {
             *           "key": "obj_contest_time",
             *           "label": "Obj Contest Time",
             *           "value": 3
             *         },
             *         {
             *           "key": "critical_hit_accuracy",
             *           "label": "Critical Hit Accuracy",
             *           "value": 7
             *         },
             *         {
             *           "key": "weapon_accuracy",
             *           "label": "Weapon Accuracy",
             *           "value": 26
             *         }
             *       ]
             *     }
             *   ],
             *   "reinhardt": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "charge_kills",
             *           "label": "Charge Kills",
             *           "value": 2
             *         },
             *         {
             *           "key": "charge_kills_most_in_game",
             *           "label": "Charge Kills - Most in Game",
             *           "value": 2
             *         },
             *         {
             *           "key": "fire_strike_kills",
             *           "label": "Fire Strike Kills",
             *           "value": 4
             *         },
             *         {
             *           "key": "fire_strike_kills_most_in_game",
             *           "label": "Fire Strike Kills - Most in Game",
             *           "value": 4
             *         },
             *         {
             *           "key": "earthshatter_kills",
             *           "label": "Earthshatter Kills",
             *           "value": 2
             *         },
             *         {
             *           "key": "earthshatter_kills_most_in_game",
             *           "label": "Earthshatter Kills - Most in Game",
             *           "value": 2
             *         },
             *         {
             *           "key": "fire_strike_kills_avg_per_10_min",
             *           "label": "Fire Strike Kills - Avg per 10 Min",
             *           "value": 6.13
             *         },
             *         {
             *           "key": "charge_kills_avg_per_10_min",
             *           "label": "Charge Kills - Avg per 10 Min",
             *           "value": 3.06
             *         },
             *         {
             *           "key": "earthshatter_kills_avg_per_10_min",
             *           "label": "Earthshatter Kills - Avg per 10 Min",
             *           "value": 3.06
             *         }
             *       ]
             *     },
             *     {
             *       "category": "best",
             *       "label": "Best",
             *       "stats": [
             *         {
             *           "key": "eliminations_most_in_life",
             *           "label": "Eliminations - Most in Life",
             *           "value": 6
             *         },
             *         {
             *           "key": "all_damage_done_most_in_life",
             *           "label": "All Damage Done - Most in Life",
             *           "value": 4727
             *         },
             *         {
             *           "key": "kill_streak_best",
             *           "label": "Kill Streak - Best",
             *           "value": 6
             *         },
             *         {
             *           "key": "all_damage_done_most_in_game",
             *           "label": "All Damage Done - Most in Game",
             *           "value": 10357
             *         },
             *         {
             *           "key": "eliminations_most_in_game",
             *           "label": "Eliminations - Most in Game",
             *           "value": 8
             *         },
             *         {
             *           "key": "final_blows_most_in_game",
             *           "label": "Final Blows - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_kills_most_in_game",
             *           "label": "Objective Kills - Most in Game",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_time_most_in_game",
             *           "label": "Objective Time - Most in Game",
             *           "value": 167
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_game",
             *           "label": "Hero Damage Done - Most in Game",
             *           "value": 8657
             *         },
             *         {
             *           "key": "hero_damage_done_most_in_life",
             *           "label": "Hero Damage Done - Most in Life",
             *           "value": 3462
             *         },
             *         {
             *           "key": "assists_most_in_game",
             *           "label": "Assist - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "environmental_kills_most_in_game",
             *           "label": "Environmental Kill - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "obj_contest_time_most_in_game",
             *           "label": "Obj Contest Time - Most in Game",
             *           "value": 41
             *         }
             *       ]
             *     },
             *     {
             *       "category": "average",
             *       "label": "Average",
             *       "stats": [
             *         {
             *           "key": "deaths_avg_per_10_min",
             *           "label": "Deaths - Avg per 10 Min",
             *           "value": 4.6
             *         },
             *         {
             *           "key": "eliminations_avg_per_10_min",
             *           "label": "Eliminations - Avg per 10 Min",
             *           "value": 12.26
             *         },
             *         {
             *           "key": "hero_damage_done_avg_per_10_min",
             *           "label": "Hero Damage Done - Avg per 10 Min",
             *           "value": 13263
             *         },
             *         {
             *           "key": "assists_avg_per_10_min",
             *           "label": "Assists - Avg per 10 min",
             *           "value": 1.53
             *         },
             *         {
             *           "key": "objective_time_avg_per_10_min",
             *           "label": "Objective Time - Avg per 10 Min",
             *           "value": 256
             *         },
             *         {
             *           "key": "all_damage_done_avg_per_10_min",
             *           "label": "All Damage Done - Avg per 10 Min",
             *           "value": 15868
             *         },
             *         {
             *           "key": "eliminations_per_life",
             *           "label": "Eliminations per Life",
             *           "value": 2.67
             *         },
             *         {
             *           "key": "objective_kills_avg_per_10_min",
             *           "label": "Objective Kills - Avg per 10 Min",
             *           "value": 4.6
             *         },
             *         {
             *           "key": "obj_contest_time_avg_per_10_min",
             *           "label": "Obj Contest Time - Avg per 10 Min",
             *           "value": 63
             *         },
             *         {
             *           "key": "final_blows_avg_per_10_min",
             *           "label": "Final Blows - Avg per 10 Min",
             *           "value": 4.6
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 392
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 0
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 0
             *         }
             *       ]
             *     },
             *     {
             *       "category": "combat",
             *       "label": "Combat",
             *       "stats": [
             *         {
             *           "key": "eliminations",
             *           "label": "Eliminations",
             *           "value": 8
             *         },
             *         {
             *           "key": "deaths",
             *           "label": "Deaths",
             *           "value": 3
             *         },
             *         {
             *           "key": "final_blows",
             *           "label": "Final Blows",
             *           "value": 3
             *         },
             *         {
             *           "key": "all_damage_done",
             *           "label": "All Damage Done",
             *           "value": 10357
             *         },
             *         {
             *           "key": "objective_kills",
             *           "label": "Objective Kills",
             *           "value": 3
             *         },
             *         {
             *           "key": "objective_time",
             *           "label": "Objective Time",
             *           "value": 167
             *         },
             *         {
             *           "key": "environmental_kills",
             *           "label": "Environmental Kill",
             *           "value": 1
             *         },
             *         {
             *           "key": "hero_damage_done",
             *           "label": "Hero Damage Done",
             *           "value": 8657
             *         },
             *         {
             *           "key": "obj_contest_time",
             *           "label": "Obj Contest Time",
             *           "value": 41
             *         },
             *         {
             *           "key": "environmental_kills_avg_per_10_min",
             *           "label": "Environmental Kills - Avg per 10 Min",
             *           "value": 1.53
             *         }
             *       ]
             *     },
             *     {
             *       "category": "assists",
             *       "label": "Assists",
             *       "stats": [
             *         {
             *           "key": "offensive_assists",
             *           "label": "Offensive Assist",
             *           "value": 1
             *         },
             *         {
             *           "key": "offensive_assists_most_in_game",
             *           "label": "Offensive Assist - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "assists",
             *           "label": "Assist",
             *           "value": 1
             *         },
             *         {
             *           "key": "offensive_assists_avg_per_10_min",
             *           "label": "Offensive Assists - Avg per 10 Min",
             *           "value": 1.53
             *         }
             *       ]
             *     }
             *   ],
             *   "tracer": [
             *     {
             *       "category": "hero_specific",
             *       "label": "Hero Specific",
             *       "stats": [
             *         {
             *           "key": "self_healing",
             *           "label": "Self Healing",
             *           "value": 130
             *         },
             *         {
             *           "key": "self_healing_most_in_game",
             *           "label": "Self Healing - Most in Game",
             *           "value": 130
             *         },
             *         {
             *           "key": "low_health_recalls",
             *           "label": "Low Health Recall",
             *           "value": 1
             *         },
             *         {
             *           "key": "low_health_recalls_most_in_game",
             *           "label": "Low Health Recall - Most in Game",
             *           "value": 1
             *         },
             *         {
             *           "key": "low_health_recalls_avg_per_10_min",
             *           "label": "Low Health Recalls - Avg per 10 Min",
             *           "value": 48.98
             *         },
             *         {
             *           "key": "self_healing_avg_per_10_min",
             *           "label": "Self Healing - Avg per 10 Min",
             *           "value": 6367
             *         }
             *       ]
             *     },
             *     {
             *       "category": "game",
             *       "label": "Game",
             *       "stats": [
             *         {
             *           "key": "time_played",
             *           "label": "Time Played",
             *           "value": 12
             *         },
             *         {
             *           "key": "games_played",
             *           "label": "Games Played",
             *           "value": 0
             *         },
             *         {
             *           "key": "games_lost",
             *           "label": "Games Lost",
             *           "value": 0
             *         }
             *       ]
             *     }
             *   ]
             * }
             */
            Components.Schemas.CareerStats;
            export type $404 = /* PlayerParserErrorMessage */ Components.Schemas.PlayerParserErrorMessage;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
            export type $500 = /* InternalServerErrorMessage */ Components.Schemas.InternalServerErrorMessage;
            export type $504 = /* BlizzardErrorMessage */ Components.Schemas.BlizzardErrorMessage;
        }
    }
    namespace GetPlayerStatsSummary {
        namespace Parameters {
            /**
             * Gamemode
             * Filter on a specific gamemode. If not specified, the data of every gamemode will be combined.
             * example:
             * competitive
             */
            export type Gamemode = "quickplay" | "competitive";
            /**
             * Platform
             * Filter on a specific platform. If not specified, the data of every platform will be combined.
             * example:
             * pc
             */
            export type Platform = "console" | "pc";
            /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-"). Be careful, letter case (capital/non-capital letters) is important !
             * example:
             * TeKrop-2217
             */
            export type PlayerId = string;
        }
        export interface PathParameters {
            player_id: /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-"). Be careful, letter case (capital/non-capital letters) is important !
             * example:
             * TeKrop-2217
             */
            Parameters.PlayerId;
        }
        export interface QueryParameters {
            gamemode?: /**
             * Gamemode
             * Filter on a specific gamemode. If not specified, the data of every gamemode will be combined.
             * example:
             * competitive
             */
            Parameters.Gamemode;
            platform?: /**
             * Platform
             * Filter on a specific platform. If not specified, the data of every platform will be combined.
             * example:
             * pc
             */
            Parameters.Platform;
        }
        namespace Responses {
            export type $200 = /**
             * PlayerStatsSummary
             * example:
             * {
             *   "general": {
             *     "average": {
             *       "assists": 4.39,
             *       "damage": 7814.06,
             *       "deaths": 7.19,
             *       "eliminations": 17.36,
             *       "healing": 2398
             *     },
             *     "games_lost": 6154,
             *     "games_played": 12702,
             *     "games_won": 6548,
             *     "kda": 3.03,
             *     "time_played": 5868683,
             *     "total": {
             *       "assists": 42909,
             *       "damage": 76430370,
             *       "deaths": 70289,
             *       "eliminations": 169772,
             *       "healing": 23455121
             *     },
             *     "winrate": 51.55
             *   },
             *   "heroes": {
             *     "ana": {
             *       "average": {
             *         "assists": 7.65,
             *         "damage": 3513.5,
             *         "deaths": 7.35,
             *         "eliminations": 10.14,
             *         "healing": 6799.24
             *       },
             *       "games_lost": 646,
             *       "games_played": 1211,
             *       "games_won": 565,
             *       "kda": 2.42,
             *       "time_played": 567415,
             *       "total": {
             *         "assists": 7238,
             *         "damage": 3322683,
             *         "deaths": 6949,
             *         "eliminations": 9585,
             *         "healing": 6429989
             *       },
             *       "winrate": 46.66
             *     },
             *     "ashe": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 8761.89,
             *         "deaths": 8.84,
             *         "eliminations": 20.21,
             *         "healing": 0
             *       },
             *       "games_lost": 1,
             *       "games_played": 2,
             *       "games_won": 1,
             *       "kda": 2.29,
             *       "time_played": 950,
             *       "total": {
             *         "assists": 0,
             *         "damage": 13873,
             *         "deaths": 14,
             *         "eliminations": 32,
             *         "healing": 0
             *       },
             *       "winrate": 50
             *     },
             *     "baptiste": {
             *       "average": {
             *         "assists": 1.84,
             *         "damage": 6558.17,
             *         "deaths": 6.89,
             *         "eliminations": 13.8,
             *         "healing": 8572.81
             *       },
             *       "games_lost": 326,
             *       "games_played": 601,
             *       "games_won": 275,
             *       "kda": 2.27,
             *       "time_played": 283646,
             *       "total": {
             *         "assists": 869,
             *         "damage": 3100329,
             *         "deaths": 3259,
             *         "eliminations": 6522,
             *         "healing": 4052741
             *       },
             *       "winrate": 45.76
             *     },
             *     "bastion": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 6910.02,
             *         "deaths": 8.35,
             *         "eliminations": 14.47,
             *         "healing": 0
             *       },
             *       "games_lost": 1,
             *       "games_played": 4,
             *       "games_won": 3,
             *       "kda": 1.73,
             *       "time_played": 2156,
             *       "total": {
             *         "assists": 0,
             *         "damage": 24830,
             *         "deaths": 30,
             *         "eliminations": 52,
             *         "healing": 0
             *       },
             *       "winrate": 75
             *     },
             *     "brigitte": {
             *       "average": {
             *         "assists": 5.6,
             *         "damage": 4856.43,
             *         "deaths": 6.67,
             *         "eliminations": 15.76,
             *         "healing": 6864.74
             *       },
             *       "games_lost": 24,
             *       "games_played": 51,
             *       "games_won": 27,
             *       "kda": 3.2,
             *       "time_played": 25923,
             *       "total": {
             *         "assists": 242,
             *         "damage": 209822,
             *         "deaths": 288,
             *         "eliminations": 681,
             *         "healing": 296591
             *       },
             *       "winrate": 52.94
             *     },
             *     "cassidy": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 12104.43,
             *         "deaths": 7.71,
             *         "eliminations": 22.42,
             *         "healing": 0
             *       },
             *       "games_lost": 435,
             *       "games_played": 954,
             *       "games_won": 519,
             *       "kda": 2.91,
             *       "time_played": 443365,
             *       "total": {
             *         "assists": 0,
             *         "damage": 8944470,
             *         "deaths": 5700,
             *         "eliminations": 16569,
             *         "healing": 0
             *       },
             *       "winrate": 54.4
             *     },
             *     "doomfist": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 7816.41,
             *         "deaths": 10.01,
             *         "eliminations": 15.68,
             *         "healing": 0
             *       },
             *       "games_lost": 8,
             *       "games_played": 16,
             *       "games_won": 8,
             *       "kda": 1.57,
             *       "time_played": 8152,
             *       "total": {
             *         "assists": 0,
             *         "damage": 106199,
             *         "deaths": 136,
             *         "eliminations": 213,
             *         "healing": 0
             *       },
             *       "winrate": 50
             *     },
             *     "dva": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 9170.43,
             *         "deaths": 6.16,
             *         "eliminations": 21.48,
             *         "healing": 0
             *       },
             *       "games_lost": 119,
             *       "games_played": 249,
             *       "games_won": 130,
             *       "kda": 3.49,
             *       "time_played": 117080,
             *       "total": {
             *         "assists": 0,
             *         "damage": 1789457,
             *         "deaths": 1202,
             *         "eliminations": 4192,
             *         "healing": 0
             *       },
             *       "winrate": 52.21
             *     },
             *     "genji": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 7012,
             *         "deaths": 10.13,
             *         "eliminations": 14.97,
             *         "healing": 0
             *       },
             *       "games_lost": 12,
             *       "games_played": 21,
             *       "games_won": 9,
             *       "kda": 1.48,
             *       "time_played": 10902,
             *       "total": {
             *         "assists": 0,
             *         "damage": 127408,
             *         "deaths": 184,
             *         "eliminations": 272,
             *         "healing": 0
             *       },
             *       "winrate": 42.86
             *     },
             *     "hanzo": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 10600.36,
             *         "deaths": 7.48,
             *         "eliminations": 17.69,
             *         "healing": 0
             *       },
             *       "games_lost": 46,
             *       "games_played": 100,
             *       "games_won": 54,
             *       "kda": 2.36,
             *       "time_played": 46337,
             *       "total": {
             *         "assists": 0,
             *         "damage": 818648,
             *         "deaths": 578,
             *         "eliminations": 1366,
             *         "healing": 0
             *       },
             *       "winrate": 54
             *     },
             *     "junker-queen": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 9453.41,
             *         "deaths": 6.54,
             *         "eliminations": 15.69,
             *         "healing": 0
             *       },
             *       "games_lost": 4,
             *       "games_played": 7,
             *       "games_won": 3,
             *       "kda": 2.4,
             *       "time_played": 3213,
             *       "total": {
             *         "assists": 0,
             *         "damage": 50623,
             *         "deaths": 35,
             *         "eliminations": 84,
             *         "healing": 0
             *       },
             *       "winrate": 42.86
             *     },
             *     "junkrat": {
             *       "average": {
             *         "assists": 0.92,
             *         "damage": 12173.17,
             *         "deaths": 8.61,
             *         "eliminations": 16.58,
             *         "healing": 0
             *       },
             *       "games_lost": 23,
             *       "games_played": 45,
             *       "games_won": 22,
             *       "kda": 2.03,
             *       "time_played": 21599,
             *       "total": {
             *         "assists": 33,
             *         "damage": 438214,
             *         "deaths": 310,
             *         "eliminations": 597,
             *         "healing": 0
             *       },
             *       "winrate": 48.89
             *     },
             *     "kiriko": {
             *       "average": {
             *         "assists": 3.77,
             *         "damage": 2974.32,
             *         "deaths": 5.89,
             *         "eliminations": 8.63,
             *         "healing": 8428.13
             *       },
             *       "games_lost": 68,
             *       "games_played": 136,
             *       "games_won": 68,
             *       "kda": 2.1,
             *       "time_played": 70150,
             *       "total": {
             *         "assists": 441,
             *         "damage": 347748,
             *         "deaths": 689,
             *         "eliminations": 1009,
             *         "healing": 985389
             *       },
             *       "winrate": 50
             *     },
             *     "lucio": {
             *       "average": {
             *         "assists": 2.09,
             *         "damage": 4382.32,
             *         "deaths": 8.8,
             *         "eliminations": 13.28,
             *         "healing": 7118.49
             *       },
             *       "games_lost": 98,
             *       "games_played": 194,
             *       "games_won": 96,
             *       "kda": 1.75,
             *       "time_played": 96551,
             *       "total": {
             *         "assists": 337,
             *         "damage": 705196,
             *         "deaths": 1416,
             *         "eliminations": 2137,
             *         "healing": 1145495
             *       },
             *       "winrate": 49.48
             *     },
             *     "mei": {
             *       "average": {
             *         "assists": 1.15,
             *         "damage": 5369.24,
             *         "deaths": 7.73,
             *         "eliminations": 14.95,
             *         "healing": 0
             *       },
             *       "games_lost": 11,
             *       "games_played": 20,
             *       "games_won": 9,
             *       "kda": 2.08,
             *       "time_played": 10474,
             *       "total": {
             *         "assists": 20,
             *         "damage": 93729,
             *         "deaths": 135,
             *         "eliminations": 261,
             *         "healing": 0
             *       },
             *       "winrate": 45
             *     },
             *     "mercy": {
             *       "average": {
             *         "assists": 5.85,
             *         "damage": 161.79,
             *         "deaths": 8.14,
             *         "eliminations": 0.69,
             *         "healing": 8050.04
             *       },
             *       "games_lost": 116,
             *       "games_played": 175,
             *       "games_won": 59,
             *       "kda": 0.8,
             *       "time_played": 81706,
             *       "total": {
             *         "assists": 797,
             *         "damage": 22032,
             *         "deaths": 1109,
             *         "eliminations": 94,
             *         "healing": 1096227
             *       },
             *       "winrate": 33.71
             *     },
             *     "moira": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 5879.94,
             *         "deaths": 6.01,
             *         "eliminations": 21.77,
             *         "healing": 9407.35
             *       },
             *       "games_lost": 272,
             *       "games_played": 542,
             *       "games_won": 270,
             *       "kda": 3.62,
             *       "time_played": 251225,
             *       "total": {
             *         "assists": 0,
             *         "damage": 2461978,
             *         "deaths": 2515,
             *         "eliminations": 9114,
             *         "healing": 3938937
             *       },
             *       "winrate": 49.82
             *     },
             *     "orisa": {
             *       "average": {
             *         "assists": 10,
             *         "damage": 11150.58,
             *         "deaths": 6.64,
             *         "eliminations": 20.09,
             *         "healing": 0
             *       },
             *       "games_lost": 252,
             *       "games_played": 516,
             *       "games_won": 264,
             *       "kda": 4.53,
             *       "time_played": 228596,
             *       "total": {
             *         "assists": 3810,
             *         "damage": 4248298,
             *         "deaths": 2528,
             *         "eliminations": 7654,
             *         "healing": 0
             *       },
             *       "winrate": 51.16
             *     },
             *     "pharah": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 8456.88,
             *         "deaths": 8.77,
             *         "eliminations": 15.04,
             *         "healing": 0
             *       },
             *       "games_lost": 25,
             *       "games_played": 46,
             *       "games_won": 21,
             *       "kda": 1.71,
             *       "time_played": 18944,
             *       "total": {
             *         "assists": 0,
             *         "damage": 267012,
             *         "deaths": 277,
             *         "eliminations": 475,
             *         "healing": 0
             *       },
             *       "winrate": 45.65
             *     },
             *     "ramattra": {
             *       "average": {
             *         "assists": 1.66,
             *         "damage": 8063.69,
             *         "deaths": 8.31,
             *         "eliminations": 17.09,
             *         "healing": 0
             *       },
             *       "games_lost": 4,
             *       "games_played": 4,
             *       "games_won": 0,
             *       "kda": 2.26,
             *       "time_played": 2528,
             *       "total": {
             *         "assists": 7,
             *         "damage": 33975,
             *         "deaths": 35,
             *         "eliminations": 72,
             *         "healing": 0
             *       },
             *       "winrate": 0
             *     },
             *     "reaper": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 11872.13,
             *         "deaths": 7.76,
             *         "eliminations": 22.01,
             *         "healing": 0
             *       },
             *       "games_lost": 29,
             *       "games_played": 49,
             *       "games_won": 20,
             *       "kda": 2.84,
             *       "time_played": 25348,
             *       "total": {
             *         "assists": 0,
             *         "damage": 501558,
             *         "deaths": 328,
             *         "eliminations": 930,
             *         "healing": 0
             *       },
             *       "winrate": 40.82
             *     },
             *     "reinhardt": {
             *       "average": {
             *         "assists": 2,
             *         "damage": 7363.24,
             *         "deaths": 7.39,
             *         "eliminations": 15.32,
             *         "healing": 0
             *       },
             *       "games_lost": 1396,
             *       "games_played": 3010,
             *       "games_won": 1614,
             *       "kda": 2.34,
             *       "time_played": 1333815,
             *       "total": {
             *         "assists": 4436,
             *         "damage": 16368661,
             *         "deaths": 16435,
             *         "eliminations": 34056,
             *         "healing": 0
             *       },
             *       "winrate": 53.62
             *     },
             *     "roadhog": {
             *       "average": {
             *         "assists": 5.07,
             *         "damage": 10450.13,
             *         "deaths": 6.61,
             *         "eliminations": 19.73,
             *         "healing": 0
             *       },
             *       "games_lost": 353,
             *       "games_played": 671,
             *       "games_won": 318,
             *       "kda": 3.75,
             *       "time_played": 329058,
             *       "total": {
             *         "assists": 2780,
             *         "damage": 5731165,
             *         "deaths": 3624,
             *         "eliminations": 10823,
             *         "healing": 0
             *       },
             *       "winrate": 47.39
             *     },
             *     "sigma": {
             *       "average": {
             *         "assists": 0.3,
             *         "damage": 12681.71,
             *         "deaths": 5.17,
             *         "eliminations": 21.91,
             *         "healing": 0
             *       },
             *       "games_lost": 20,
             *       "games_played": 47,
             *       "games_won": 27,
             *       "kda": 4.29,
             *       "time_played": 22265,
             *       "total": {
             *         "assists": 11,
             *         "damage": 470597,
             *         "deaths": 192,
             *         "eliminations": 813,
             *         "healing": 0
             *       },
             *       "winrate": 57.45
             *     },
             *     "sojourn": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 6509.8,
             *         "deaths": 12.42,
             *         "eliminations": 10.46,
             *         "healing": 0
             *       },
             *       "games_lost": 2,
             *       "games_played": 2,
             *       "games_won": 0,
             *       "kda": 0.84,
             *       "time_played": 918,
             *       "total": {
             *         "assists": 0,
             *         "damage": 9960,
             *         "deaths": 19,
             *         "eliminations": 16,
             *         "healing": 0
             *       },
             *       "winrate": 0
             *     },
             *     "soldier-76": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 12316.39,
             *         "deaths": 7.88,
             *         "eliminations": 24.09,
             *         "healing": 1503.2
             *       },
             *       "games_lost": 128,
             *       "games_played": 275,
             *       "games_won": 147,
             *       "kda": 3.06,
             *       "time_played": 128243,
             *       "total": {
             *         "assists": 0,
             *         "damage": 2632484,
             *         "deaths": 1684,
             *         "eliminations": 5148,
             *         "healing": 321291
             *       },
             *       "winrate": 53.45
             *     },
             *     "sombra": {
             *       "average": {
             *         "assists": 6.06,
             *         "damage": 5858.74,
             *         "deaths": 7.79,
             *         "eliminations": 13.5,
             *         "healing": 0
             *       },
             *       "games_lost": 5,
             *       "games_played": 7,
             *       "games_won": 2,
             *       "kda": 2.51,
             *       "time_played": 3466,
             *       "total": {
             *         "assists": 35,
             *         "damage": 33844,
             *         "deaths": 45,
             *         "eliminations": 78,
             *         "healing": 0
             *       },
             *       "winrate": 28.57
             *     },
             *     "symmetra": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 9108.41,
             *         "deaths": 9.23,
             *         "eliminations": 17.03,
             *         "healing": 0
             *       },
             *       "games_lost": 6,
             *       "games_played": 10,
             *       "games_won": 4,
             *       "kda": 1.84,
             *       "time_played": 3769,
             *       "total": {
             *         "assists": 0,
             *         "damage": 57216,
             *         "deaths": 58,
             *         "eliminations": 107,
             *         "healing": 0
             *       },
             *       "winrate": 40
             *     },
             *     "torbjorn": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 8593.46,
             *         "deaths": 5.79,
             *         "eliminations": 17.36,
             *         "healing": 0
             *       },
             *       "games_lost": 1,
             *       "games_played": 5,
             *       "games_won": 4,
             *       "kda": 3,
             *       "time_played": 2385,
             *       "total": {
             *         "assists": 0,
             *         "damage": 34159,
             *         "deaths": 23,
             *         "eliminations": 69,
             *         "healing": 0
             *       },
             *       "winrate": 80
             *     },
             *     "tracer": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 8318.17,
             *         "deaths": 9.3,
             *         "eliminations": 21.3,
             *         "healing": 0
             *       },
             *       "games_lost": 88,
             *       "games_played": 150,
             *       "games_won": 62,
             *       "kda": 2.29,
             *       "time_played": 76010,
             *       "total": {
             *         "assists": 0,
             *         "damage": 1053773,
             *         "deaths": 1178,
             *         "eliminations": 2698,
             *         "healing": 0
             *       },
             *       "winrate": 41.33
             *     },
             *     "widowmaker": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 6921.52,
             *         "deaths": 8.19,
             *         "eliminations": 16.09,
             *         "healing": 0
             *       },
             *       "games_lost": 14,
             *       "games_played": 23,
             *       "games_won": 9,
             *       "kda": 1.96,
             *       "time_played": 10331,
             *       "total": {
             *         "assists": 0,
             *         "damage": 119177,
             *         "deaths": 141,
             *         "eliminations": 277,
             *         "healing": 0
             *       },
             *       "winrate": 39.13
             *     },
             *     "winston": {
             *       "average": {
             *         "assists": 0,
             *         "damage": 6062.69,
             *         "deaths": 8.44,
             *         "eliminations": 19.15,
             *         "healing": 0
             *       },
             *       "games_lost": 243,
             *       "games_played": 444,
             *       "games_won": 201,
             *       "kda": 2.27,
             *       "time_played": 217064,
             *       "total": {
             *         "assists": 0,
             *         "damage": 2193318,
             *         "deaths": 3055,
             *         "eliminations": 6929,
             *         "healing": 0
             *       },
             *       "winrate": 45.27
             *     },
             *     "zarya": {
             *       "average": {
             *         "assists": 2.59,
             *         "damage": 8885.44,
             *         "deaths": 6.27,
             *         "eliminations": 20.8,
             *         "healing": 0
             *       },
             *       "games_lost": 811,
             *       "games_played": 1747,
             *       "games_won": 936,
             *       "kda": 3.73,
             *       "time_played": 811799,
             *       "total": {
             *         "assists": 3506,
             *         "damage": 12021985,
             *         "deaths": 8483,
             *         "eliminations": 28143,
             *         "healing": 0
             *       },
             *       "winrate": 53.58
             *     },
             *     "zenyatta": {
             *       "average": {
             *         "assists": 17.95,
             *         "damage": 7900.81,
             *         "deaths": 7.47,
             *         "eliminations": 18.3,
             *         "healing": 5075.94
             *       },
             *       "games_lost": 567,
             *       "games_played": 1368,
             *       "games_won": 801,
             *       "kda": 4.85,
             *       "time_played": 613300,
             *       "total": {
             *         "assists": 18347,
             *         "damage": 8075949,
             *         "deaths": 7635,
             *         "eliminations": 18704,
             *         "healing": 5188461
             *       },
             *       "winrate": 58.55
             *     }
             *   },
             *   "roles": {
             *     "damage": {
             *       "average": {
             *         "assists": 0.07,
             *         "damage": 11304.33,
             *         "deaths": 7.98,
             *         "eliminations": 21.57,
             *         "healing": 239.41
             *       },
             *       "games_lost": 827,
             *       "games_played": 1713,
             *       "games_won": 886,
             *       "kda": 2.71,
             *       "time_played": 805197,
             *       "total": {
             *         "assists": 88,
             *         "damage": 15170355,
             *         "deaths": 10704,
             *         "eliminations": 28947,
             *         "healing": 321291
             *       },
             *       "winrate": 51.72
             *     },
             *     "support": {
             *       "average": {
             *         "assists": 8.52,
             *         "damage": 5501.46,
             *         "deaths": 7.19,
             *         "eliminations": 14.43,
             *         "healing": 6975.32
             *       },
             *       "games_lost": 2117,
             *       "games_played": 4278,
             *       "games_won": 2161,
             *       "kda": 3.19,
             *       "time_played": 1989916,
             *       "total": {
             *         "assists": 28271,
             *         "damage": 18245737,
             *         "deaths": 23860,
             *         "eliminations": 47846,
             *         "healing": 23133830
             *       },
             *       "winrate": 50.51
             *     },
             *     "tank": {
             *       "average": {
             *         "assists": 2.84,
             *         "damage": 8396.93,
             *         "deaths": 6.97,
             *         "eliminations": 18.15,
             *         "healing": 0
             *       },
             *       "games_lost": 3210,
             *       "games_played": 6711,
             *       "games_won": 3501,
             *       "kda": 3.01,
             *       "time_played": 3073570,
             *       "total": {
             *         "assists": 14550,
             *         "damage": 43014278,
             *         "deaths": 35725,
             *         "eliminations": 92979,
             *         "healing": 0
             *       },
             *       "winrate": 52.17
             *     }
             *   }
             * }
             */
            Components.Schemas.PlayerStatsSummary;
            export type $404 = /* PlayerParserErrorMessage */ Components.Schemas.PlayerParserErrorMessage;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
            export type $500 = /* InternalServerErrorMessage */ Components.Schemas.InternalServerErrorMessage;
            export type $504 = /* BlizzardErrorMessage */ Components.Schemas.BlizzardErrorMessage;
        }
    }
    namespace GetPlayerSummary {
        namespace Parameters {
            /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-"). Be careful, letter case (capital/non-capital letters) is important !
             * example:
             * TeKrop-2217
             */
            export type PlayerId = string;
        }
        export interface PathParameters {
            player_id: /**
             * Player unique name
             * Identifier of the player : BattleTag (with "#" replaced by "-"). Be careful, letter case (capital/non-capital letters) is important !
             * example:
             * TeKrop-2217
             */
            Parameters.PlayerId;
        }
        namespace Responses {
            export type $200 = /* PlayerSummary */ Components.Schemas.PlayerSummary;
            export type $404 = /* PlayerParserErrorMessage */ Components.Schemas.PlayerParserErrorMessage;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
            export type $500 = /* InternalServerErrorMessage */ Components.Schemas.InternalServerErrorMessage;
            export type $504 = /* BlizzardErrorMessage */ Components.Schemas.BlizzardErrorMessage;
        }
    }
    namespace ListHeroes {
        namespace Parameters {
            /**
             * Locale to be displayed
             * Locales supported by Blizzard
             */
            export type Locale = "de-de" | "en-gb" | "en-us" | "es-es" | "es-mx" | "fr-fr" | "it-it" | "ja-jp" | "ko-kr" | "pl-pl" | "pt-br" | "ru-ru" | "zh-tw";
            /**
             * Role filter
             * Overwatch heroes roles
             */
            export type Role = "damage" | "support" | "tank";
        }
        export interface QueryParameters {
            role?: /**
             * Role filter
             * Overwatch heroes roles
             */
            Parameters.Role;
            locale?: /**
             * Locale to be displayed
             * Locales supported by Blizzard
             */
            Parameters.Locale;
        }
        namespace Responses {
            /**
             * Response List Heroes
             */
            export type $200 = /* HeroShort */ Components.Schemas.HeroShort[];
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
            export type $500 = /* InternalServerErrorMessage */ Components.Schemas.InternalServerErrorMessage;
            export type $504 = /* BlizzardErrorMessage */ Components.Schemas.BlizzardErrorMessage;
        }
    }
    namespace ListMapGamemodes {
        namespace Responses {
            /**
             * Response List Map Gamemodes
             */
            export type $200 = /* GamemodeDetails */ Components.Schemas.GamemodeDetails[];
            export type $500 = /* InternalServerErrorMessage */ Components.Schemas.InternalServerErrorMessage;
            export type $504 = /* BlizzardErrorMessage */ Components.Schemas.BlizzardErrorMessage;
        }
    }
    namespace ListMaps {
        namespace Parameters {
            /**
             * Gamemode filter
             * Filter maps available for a specific gamemode
             */
            export type Gamemode = "assault" | "capture-the-flag" | "control" | "deathmatch" | "elimination" | "escort" | "flashpoint" | "hybrid" | "push" | "team-deathmatch";
        }
        export interface QueryParameters {
            gamemode?: /**
             * Gamemode filter
             * Filter maps available for a specific gamemode
             */
            Parameters.Gamemode;
        }
        namespace Responses {
            /**
             * Response List Maps
             */
            export type $200 = /* Map */ Components.Schemas.Map[];
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace ListRoles {
        namespace Parameters {
            /**
             * Locale to be displayed
             * Locales supported by Blizzard
             */
            export type Locale = "de-de" | "en-gb" | "en-us" | "es-es" | "es-mx" | "fr-fr" | "it-it" | "ja-jp" | "ko-kr" | "pl-pl" | "pt-br" | "ru-ru" | "zh-tw";
        }
        export interface QueryParameters {
            locale?: /**
             * Locale to be displayed
             * Locales supported by Blizzard
             */
            Parameters.Locale;
        }
        namespace Responses {
            /**
             * Response List Roles
             */
            export type $200 = /* RoleDetail */ Components.Schemas.RoleDetail[];
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
            export type $500 = /* InternalServerErrorMessage */ Components.Schemas.InternalServerErrorMessage;
            export type $504 = /* BlizzardErrorMessage */ Components.Schemas.BlizzardErrorMessage;
        }
    }
    namespace SearchPlayers {
        namespace Parameters {
            /**
             * Limit of results per page
             */
            export type Limit = number;
            /**
             * Player nickname to search
             * example:
             * TeKrop
             */
            export type Name = string;
            /**
             * Offset of the results
             */
            export type Offset = number;
            /**
             * Ordering field and the way it's arranged (asc[ending]/desc[ending])
             */
            export type OrderBy = string; // ^(player_id|name):(asc|desc)$
        }
        export interface QueryParameters {
            name: /**
             * Player nickname to search
             * example:
             * TeKrop
             */
            Parameters.Name;
            order_by?: /* Ordering field and the way it's arranged (asc[ending]/desc[ending]) */ Parameters.OrderBy /* ^(player_id|name):(asc|desc)$ */;
            offset?: /* Offset of the results */ Parameters.Offset;
            limit?: /* Limit of results per page */ Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* PlayerSearchResult */ Components.Schemas.PlayerSearchResult;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
            export type $500 = /* InternalServerErrorMessage */ Components.Schemas.InternalServerErrorMessage;
            export type $504 = /* BlizzardErrorMessage */ Components.Schemas.BlizzardErrorMessage;
        }
    }
}

export interface OperationMethods {
  /**
   * list_heroes - Get a list of heroes
   * 
   * Get a list of Overwatch heroes, which can be filtered using roles. <br />**Cache TTL : 1 day.**
   */
  'list_heroes'(
    parameters?: Parameters<Paths.ListHeroes.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListHeroes.Responses.$200>
  /**
   * get_hero - Get hero data
   * 
   * Get data about an Overwatch hero : description, abilities, story, etc. <br />**Cache TTL : 1 day.**
   */
  'get_hero'(
    parameters?: Parameters<Paths.GetHero.QueryParameters & Paths.GetHero.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetHero.Responses.$200>
  /**
   * list_roles - Get a list of roles
   * 
   * Get a list of available Overwatch roles.<br />**Cache TTL : 1 day.**
   */
  'list_roles'(
    parameters?: Parameters<Paths.ListRoles.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListRoles.Responses.$200>
  /**
   * list_map_gamemodes - Get a list of gamemodes
   * 
   * Get a list of Overwatch gamemodes : Assault, Escort, Flashpoint, Hybrid, etc.<br />**Cache TTL : 1 day.**
   */
  'list_map_gamemodes'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListMapGamemodes.Responses.$200>
  /**
   * list_maps - Get a list of maps
   * 
   * Get a list of Overwatch maps : Hanamura, King's Row, Dorado, etc.<br />**Cache TTL : 1 day.**
   */
  'list_maps'(
    parameters?: Parameters<Paths.ListMaps.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListMaps.Responses.$200>
  /**
   * search_players - Search for a specific player
   * 
   * Search for a given player by using his username. You should be able to find the associated player_id to use in order to request career data.<br />**Cache TTL : 1 hour.**
   */
  'search_players'(
    parameters?: Parameters<Paths.SearchPlayers.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SearchPlayers.Responses.$200>
  /**
   * get_player_summary - Get player summary
   * 
   * Get player summary : name, avatar, competitive ranks, etc. <br />**Cache TTL : 1 hour.**
   */
  'get_player_summary'(
    parameters?: Parameters<Paths.GetPlayerSummary.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPlayerSummary.Responses.$200>
  /**
   * get_player_stats_summary - Get player stats summary
   * 
   * Get player statistics summary, with stats usually used for tracking progress : winrate, kda, damage, healing, etc. <br /> Data is regrouped in 3 sections : general (sum of all stats), roles (sum of stats for each role) and heroes (stats for each hero).<br /> Depending on filters, data from both competitive and quickplay, and/or pc and console will be merged.<br />Default behaviour : all gamemodes and platforms are taken in account.<br />**Cache TTL : 1 hour.**
   */
  'get_player_stats_summary'(
    parameters?: Parameters<Paths.GetPlayerStatsSummary.QueryParameters & Paths.GetPlayerStatsSummary.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPlayerStatsSummary.Responses.$200>
  /**
   * get_player_career_stats - Get player career stats
   * 
   * Career contains numerous statistics grouped by heroes and categories (combat, game, best, hero specific, average, etc.). Filter them on specific platform and gamemode (mandatory). You can even retrieve data about a specific hero of your choice.<br />**Cache TTL : 1 hour.**
   */
  'get_player_career_stats'(
    parameters?: Parameters<Paths.GetPlayerCareerStats.QueryParameters & Paths.GetPlayerCareerStats.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPlayerCareerStats.Responses.$200>
  /**
   * get_player_stats - Get player stats with labels
   * 
   * This endpoint exposes the same data as the previous one, except it also exposes labels of the categories and statistics.<br />**Cache TTL : 1 hour.**
   */
  'get_player_stats'(
    parameters?: Parameters<Paths.GetPlayerStats.QueryParameters & Paths.GetPlayerStats.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPlayerStats.Responses.$200>
  /**
   * get_player_career - Get all player data
   * 
   * Get all player data : summary and statistics with labels.<br />**Cache TTL : 1 hour.**
   */
  'get_player_career'(
    parameters?: Parameters<Paths.GetPlayerCareer.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPlayerCareer.Responses.$200>
}

export interface PathsDictionary {
  ['/heroes']: {
    /**
     * list_heroes - Get a list of heroes
     * 
     * Get a list of Overwatch heroes, which can be filtered using roles. <br />**Cache TTL : 1 day.**
     */
    'get'(
      parameters?: Parameters<Paths.ListHeroes.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListHeroes.Responses.$200>
  }
  ['/heroes/{hero_key}']: {
    /**
     * get_hero - Get hero data
     * 
     * Get data about an Overwatch hero : description, abilities, story, etc. <br />**Cache TTL : 1 day.**
     */
    'get'(
      parameters?: Parameters<Paths.GetHero.QueryParameters & Paths.GetHero.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetHero.Responses.$200>
  }
  ['/roles']: {
    /**
     * list_roles - Get a list of roles
     * 
     * Get a list of available Overwatch roles.<br />**Cache TTL : 1 day.**
     */
    'get'(
      parameters?: Parameters<Paths.ListRoles.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListRoles.Responses.$200>
  }
  ['/gamemodes']: {
    /**
     * list_map_gamemodes - Get a list of gamemodes
     * 
     * Get a list of Overwatch gamemodes : Assault, Escort, Flashpoint, Hybrid, etc.<br />**Cache TTL : 1 day.**
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListMapGamemodes.Responses.$200>
  }
  ['/maps']: {
    /**
     * list_maps - Get a list of maps
     * 
     * Get a list of Overwatch maps : Hanamura, King's Row, Dorado, etc.<br />**Cache TTL : 1 day.**
     */
    'get'(
      parameters?: Parameters<Paths.ListMaps.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListMaps.Responses.$200>
  }
  ['/players']: {
    /**
     * search_players - Search for a specific player
     * 
     * Search for a given player by using his username. You should be able to find the associated player_id to use in order to request career data.<br />**Cache TTL : 1 hour.**
     */
    'get'(
      parameters?: Parameters<Paths.SearchPlayers.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SearchPlayers.Responses.$200>
  }
  ['/players/{player_id}/summary']: {
    /**
     * get_player_summary - Get player summary
     * 
     * Get player summary : name, avatar, competitive ranks, etc. <br />**Cache TTL : 1 hour.**
     */
    'get'(
      parameters?: Parameters<Paths.GetPlayerSummary.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPlayerSummary.Responses.$200>
  }
  ['/players/{player_id}/stats/summary']: {
    /**
     * get_player_stats_summary - Get player stats summary
     * 
     * Get player statistics summary, with stats usually used for tracking progress : winrate, kda, damage, healing, etc. <br /> Data is regrouped in 3 sections : general (sum of all stats), roles (sum of stats for each role) and heroes (stats for each hero).<br /> Depending on filters, data from both competitive and quickplay, and/or pc and console will be merged.<br />Default behaviour : all gamemodes and platforms are taken in account.<br />**Cache TTL : 1 hour.**
     */
    'get'(
      parameters?: Parameters<Paths.GetPlayerStatsSummary.QueryParameters & Paths.GetPlayerStatsSummary.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPlayerStatsSummary.Responses.$200>
  }
  ['/players/{player_id}/stats/career']: {
    /**
     * get_player_career_stats - Get player career stats
     * 
     * Career contains numerous statistics grouped by heroes and categories (combat, game, best, hero specific, average, etc.). Filter them on specific platform and gamemode (mandatory). You can even retrieve data about a specific hero of your choice.<br />**Cache TTL : 1 hour.**
     */
    'get'(
      parameters?: Parameters<Paths.GetPlayerCareerStats.QueryParameters & Paths.GetPlayerCareerStats.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPlayerCareerStats.Responses.$200>
  }
  ['/players/{player_id}/stats']: {
    /**
     * get_player_stats - Get player stats with labels
     * 
     * This endpoint exposes the same data as the previous one, except it also exposes labels of the categories and statistics.<br />**Cache TTL : 1 hour.**
     */
    'get'(
      parameters?: Parameters<Paths.GetPlayerStats.QueryParameters & Paths.GetPlayerStats.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPlayerStats.Responses.$200>
  }
  ['/players/{player_id}']: {
    /**
     * get_player_career - Get all player data
     * 
     * Get all player data : summary and statistics with labels.<br />**Cache TTL : 1 hour.**
     */
    'get'(
      parameters?: Parameters<Paths.GetPlayerCareer.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPlayerCareer.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
