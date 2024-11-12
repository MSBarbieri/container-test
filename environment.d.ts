declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            PORT: number;
            PG_USER: string;
            PG_HOST: string;
            PG_PASSWORD: string;
            PG_DATABASE: string;
            PG_PORT: number;
        }
    }
}

export { }
