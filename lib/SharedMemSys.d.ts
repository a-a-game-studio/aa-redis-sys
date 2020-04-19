import { CacheSys, MemSysI } from "./CacheSys";
export declare class SharedMemSys extends CacheSys {
    /**
     * В конфиг заходит глобальная переменная общей памяти
     * @param conf
     */
    constructor(conf: MemSysI);
    /**
   * Получить значение из кэша
   * @param key
   */
    get(key: string): Promise<any>;
    /**
     * Получить ключи по шаблону
     * @param keys - regex
     */
    keys(keys: string): Promise<any[]>;
    /**
     * Поместить значение в редис
     * @param key
     * @param val
     * @param time
     */
    set(key: string, val: any, time: number): void;
    /**
     * Удалить ключи по ID
     * @param keys
     */
    del(keys: any[]): void;
}
