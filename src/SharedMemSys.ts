import { CacheSys, MemSysI } from "./CacheSys";

export class SharedMemSys extends CacheSys {


    /**
     * В конфиг заходит глобальная переменная общей памяти
     * @param conf 
     */
    constructor(conf: MemSysI) {
        super(conf);
    }

    /**
   * Получить значение из кэша
   * @param key
   */
    public get(key: string): Promise<any> {
        if (this.conf[key]) {
            return this.conf[key]
        }
        return null;
    };

    /**
     * Получить ключи по шаблону
     * @param keys - regex
     */
    public async keys(keys: string): Promise<any[]> {
        const aKeys = Object.keys(this.conf);

        const aRest: any = [];
        for (let i = 0; i < aKeys.length; i++) {
            if (aKeys[i].search(keys) != -1) {
                aRest.push(aKeys[i]);
            }
        }

        return aRest;
    };

    /**
     * Поместить значение в редис
     * @param key
     * @param val
     * @param time
     */
    public set(key: string, val: any, time: number): void {
        this.conf[key] = val;
    };


    /**
     * Удалить ключи по ID
     * @param keys
     */
    public del(keys: any[]): void {
        const aKeys = Object.keys(this.conf);

        for (let i = 0; i < keys.length; i++) {
            if (aKeys.indexOf(keys[i])) {
                delete aKeys[keys[i]];
            }
        }

    };
}