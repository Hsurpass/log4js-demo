import {logger} from "./logger"
import { performance } from 'perf_hooks';

logger.trace("trace");
logger.debug("debug");
logger.warn("warn");
logger.info("info");
logger.error("error");
logger.fatal("fatal");
logger.mark("mark");

console.log("---------------------------");
function createLogProxy (logLevel, logger) {
    return (...param) => {
        logger[logLevel](...param);
    };
}
console.log = createLogProxy('debug', logger);
console.info = createLogProxy('info', logger);
console.warn = createLogProxy('warn', logger);
console.error = createLogProxy('error', logger);

console.log("console log");
console.info("console info");
console.warn("console warn");
console.error("console error");

console.log("time:", new Date());

const startTime = performance.now();
for(let i = 0;i < 10;i++)
{
    logger.info("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
}
console.log((performance.now() - startTime));
