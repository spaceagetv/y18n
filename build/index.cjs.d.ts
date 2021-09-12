interface Y18NOpts {
    directory?: string;
    updateFiles?: boolean;
    locale?: string;
    fallbackToLanguage?: boolean;
}
interface Locale {
    [key: string]: string;
}
declare const y18n$0: (opts: Y18NOpts) => {
    __: (...args: (string | Function)[]) => string;
    __n: (singular: string, plural: string, quantity: number, ...args: (string | Function)[]) => any;
    setLocale: (locale: string) => void;
    getLocale: () => string;
    updateLocale: (obj: Locale) => void;
    locale: string;
};
export = y18n$0;
