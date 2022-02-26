/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly PUBLIC_APP_TITLE: string;
    readonly VITE_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }