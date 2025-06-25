import logSymbols from 'log-symbols';

export const log = {
    success: (message: string) => { 
        console.log(`${logSymbols.success} ${message}`);
    }   ,
    error: (message: string) => {
        console.error(`${logSymbols.error} ${message}`);
    },
    info: (message: string) => {
        console.log(`${logSymbols.info} ${message}`);
    },
    warning: (message: string) => {
        console.warn(`${logSymbols.warning} ${message}`);
    },
}

export default log;