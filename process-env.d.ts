declare global {
    namespace NodeJS {
        interface ProcessEnv {
            FIREBASE_API_KEY: string
            AUTH_DOMAIN: string
            PROJECT_ID: string
            STORAGE_BUCKET: string
            MESSAGING_SENDER_ID: string
            APP_ID: string
            MEASUREMENT_ID: string
            USER: string
            PASSWORD: string;
            NEXT_PUBLIC_BASE_URL:string
        }
    }
}