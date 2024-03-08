import { createClient } from "redis";
import logger from "../utils/logger";

const redis = createClient();

redis.once("error", (error) => {
    logger.error("Redis error occured");
    logger.trace(error);
});

redis.connect().then(() => logger.info("Redis connected"));

export default redis;
