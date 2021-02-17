import * as log4js from "log4js";
// import {log4js} from "log4js";

log4js.configure("log4js.json");
export const logger = log4js.getLogger('out');

// log4js.shutdown();
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

