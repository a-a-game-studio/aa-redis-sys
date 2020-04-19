"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CacheSys_1 = require("./CacheSys");
class SharedMemSys extends CacheSys_1.CacheSys {
    /**
     * В конфиг заходит глобальная переменная общей памяти
     * @param conf
     */
    constructor(conf) {
        super(conf);
    }
    /**
   * Получить значение из кэша
   * @param key
   */
    get(key) {
        if (this.conf[key]) {
            return this.conf[key];
        }
        return null;
    }
    ;
    /**
     * Получить ключи по шаблону
     * @param keys - regex
     */
    async keys(keys) {
        const aKeys = Object.keys(this.conf);
        const aRest = [];
        for (let i = 0; i < aKeys.length; i++) {
            if (aKeys[i].search(keys) != -1) {
                aRest.push(aKeys[i]);
            }
        }
        return aRest;
    }
    ;
    /**
     * Поместить значение в редис
     * @param key
     * @param val
     * @param time
     */
    set(key, val, time) {
        this.conf[key] = val;
    }
    ;
    /**
     * Удалить ключи по ID
     * @param keys
     */
    del(keys) {
        const aKeys = Object.keys(this.conf);
        for (let i = 0; i < keys.length; i++) {
            if (aKeys.indexOf(keys[i])) {
                delete aKeys[keys[i]];
            }
        }
    }
    ;
}
exports.SharedMemSys = SharedMemSys;
//# sourceMappingURL=SharedMemSys.js.map