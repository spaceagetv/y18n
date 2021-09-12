import { Y18NOpts } from './index.js';
declare const y18n: (opts: Y18NOpts) => {
    __: (...args: (string | Function)[]) => string;
    __n: (singular: string, plural: string, quantity: number, ...args: (string | Function)[]) => any;
    setLocale: (locale: string) => void;
    getLocale: () => string;
    updateLocale: (obj: import("./index.js").Locale) => void;
    locale: string;
};
export default y18n;
