import { API, Updates, Upload, VK } from "vk-io";
import config from "./utils/config";
import commands from "./commands";
import logger from "./utils/logger";

logger.info("Initializing...");

const vk = new VK({
    token: config.VK_TOKEN,
});

vk.updates.on("message", async (context) => {
    if (!context.text) return;

    let message = context.text.toLowerCase();

    if (message[0] === "/") {
        message = message.slice(1, message.length);
    }

    for (const command of Object.values(commands)) {
        if (command.info.triggers.some((trigger) => trigger === message)) {
            try {
                await command.execute(context);

                logger.info(
                    `User id${context.senderId} issued ${command.info.name} command`
                );
            } catch (error) {
                logger.error(
                    `An error occured while execution of ${command.info.name} command`
                );
                logger.trace(error);
            }

            break;
        }
    }
});

vk.updates.start().then(() => logger.info("Polling started"));

export default vk;
