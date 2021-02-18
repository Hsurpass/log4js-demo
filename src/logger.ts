import * as log4js from "log4js";

log4js.configure({
    "appenders":{
        "out":{
            "type": "stdout"
        },
        "file":{
            "type": "file",
            "filename": "test.log"
        }
    },
    "categories":{
        "out":{"appenders":["out"], "level":"trace"},
        "file":{"appenders":["file"], "level":"info"},
        "default": { "appenders": ["out", "file"], "level": "ALL" }
    }
})
export const logger = log4js.getLogger("file");
