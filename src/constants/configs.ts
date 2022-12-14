export const APP_MODE = process.env.NODE_ENV
export const APP_NAME = process.env.APP_NAME || 'project_unnamed'
export const APP_WEB_TITLE = process.env.WEB_TITLE || 'Unnamed'
export const APP_BASE_URL = process.env.BASE_URL || 'http://localhost:8443'
export const API_SECRET_KEY = process.env.API_SECRET_KEY || 'AP1-S3C23T-K3Y'
export const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:3030'
export const WS_GATEWAY = process.env.WS_GATEWAY || 'ws://127.0.0.1:5050'

export const isBrowser = process.title === 'browser' || typeof window !== 'undefined'
export const isProduction = APP_MODE === 'production'
export const isDevelop = APP_MODE === 'development'

// STORAGE KEY-NAME
export const APP_LANG = 'APP.Language'
export const APP_THEME = 'APP.Theme'
export const APP_AUTH_ACCESS = 'APP.AccessToken'
export const APP_AUTH_REFRESH = 'APP.RefreshToken'
export const APP_USER_INFO = 'APP.UserInfo'

// REQUEST HEADERS
export const AUTH_ACCESS = 'Authorization'
export const ACCEPT_RANGES = 'Accept-Ranges'
export const CONTENT_RANGE = 'Content-Range'
export const CONTENT_TYPE = 'Content-Type'
export const CONTENT_LENGTH = 'Content-Length'
export const CONTENT_LANG = 'Content-Language'
