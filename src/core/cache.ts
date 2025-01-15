import { IUser } from './user';

export type CacheKeyScopeType =
  | 'systk'
  | 'custk'
  | 'guesttk'
  | 'captcha'
  | 'sms'
  | 'wxtk'
  | 'vendortk'
  | string;

export type CacheKeyEnumType = {
  [k: string]: CacheKeyScopeType;
};

export type TokenUserCache = IUser & {
  token: string;
};
