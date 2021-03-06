export interface ReactAppProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_NAME: string;
    REACT_APP_APPINSIGHTS_KEY: string;
    REACT_APP_BUILDVERSION: string;
    REACT_APP_ENVIRONMENT: string;
    REACT_APP_ENVIRONMENTCONNECTIONS: string;
    REACT_APP_ADDITIONALSETTINGS: string;
    REACT_APP_SITECORE_JSS_APP_NAME: string;
    REACT_APP_SITECORE_API_KEY: string;
    REACT_APP_SITECORE_API_HOST: string;
    REACT_APP_SITECORE_DEFAULT_LANGUAGE: string;
    REACT_APP_SITECORE_PATH_REWRITE_EXCLUDE_ROUTES: string;
    REACT_APP_SITECORE_ENABLE_DEBUG: 'true' | 'false';
    REACT_APP_SITECORE_CONNECTED: 'true' | 'false';
}