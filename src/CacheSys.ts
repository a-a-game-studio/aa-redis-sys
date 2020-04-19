export interface MemSysI {
    [key: string]: any;
}



/**
 * Общий класс для работы с кэшом
 * Использует общую память как хранилище
 */
export abstract class CacheSys {

    protected conf: any;

    constructor(conf: any) {
        this.conf = conf;
    }

    /**
     * Получить значение из кэша
     * @param key
     */
    public abstract get(key: string): Promise<string>;

    /**
     * Получить ключи по шаблону
     * @param keys
     */
    public abstract keys(keys: string): Promise<any[]>;

    /**
     * Поместить значение в редис
     * @param key
     * @param val
     * @param time
     */
    public abstract set(key: string, val: any, time: number): void;
    /**
     * Удалить ключи по ID
     * @param keys
     */
    public abstract del(keys: any[]): void;
}