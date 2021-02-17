import {logger} from "./logger"
import { performance } from 'perf_hooks';

const startTime = performance.now();
for(let i = 0;i < 100000;i++)
{
    logger.info("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
}
console.log((performance.now() - startTime));
