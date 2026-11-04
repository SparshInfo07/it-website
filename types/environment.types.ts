export interface EnvironmentConfig {
  NODE_ENV: "development" | "production" | "test";
  BASE_URL?: string;
  NEXT_PUBLIC_SITE_URL?: string;
  SPARSH_APPLICATION_ENV?: "development" | "production" | "staging" | string;
  APPLICATION_ENV?: string;
  MAIL_MAILER?: string;
  MAIL_HOST?: string;
  MAIL_PORT?: string;
  MAIL_USERNAME?: string;
  MAIL_PASSWORD?: string;
  MAIL_ENCRYPTION?: string;
  MAIL_FROM_ADDRESS?: string;
  MAIL_FROM_CAREER?: string;
  MAIL_FROM_NAME?: string;
}
