export type CacheArgs = {
  key: string;
  value: number|string;
  exp?: number; // time in seconds
};

export type AuthTokenType="refresh"|"access"

