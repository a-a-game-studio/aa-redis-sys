export interface MemSysI {
    [key: string]: any;
}
/**
 * Общий класс для работы с кэшом
 * Использует общую память как хранилище
 */
export declare abstract class CacheSys {
    protected conf: any;
    constructor(conf: any);
    /**
     * Получить значение из кэша
     * @param key
     */
    abstract get(key: string): Promise<string>;
    /**
     * Получить ключи по шаблону
     * @param keys
     */
    abstract keys(keys: string): Promise<any[]>;
    /**
     * Поместить значение в редис
     * @param key
     * @param val
     * @param time
     */
    abstract set(key: string, val: any, time: number): void;
    /**
     * Удалить ключи по ID
     * @param keys
     */
    abstract del(keys: any[]): void;
}
