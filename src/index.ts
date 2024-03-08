import { API, Updates, Upload, VK } from "vk-io";
import config from "./config";
import commands from "./commands";

const vk = new VK({
    token: config.VK_TOKEN,
});

vk.updates.on("message", async (context) => {
    if (!context.text) return;

    const message = context.text.slice(1, context.text.length);

    // console.log(
    //     await vk.api.messages.getChat({
    //         chat_id: context.chatId,
    //     })
    // );

    if (!message) return;

    for (const command of Object.values(commands)) {
        if (command.info.triggers.some((trigger) => trigger === message)) {
            command.execute(context);

            break;
        }
    }
});

vk.updates.start();

export default vk;
