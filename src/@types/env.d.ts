declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'production' | 'development' | 'testing';

    https://api-graphql.vercel.app/: string;
  }
}
