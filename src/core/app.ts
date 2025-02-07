import { IUserSession } from "./session.token";

export type LotoHeaderKeyType = 'x-loto-key' | 'x-loto-reqid';
export type LotoCookiesType = 'captcha-code' | 'sms-code' | string;

export type LotoAppListener = {
  name: string;
  url: string;
  [k: string]: any;
};

export type LotoHeadersType = {
  uid?: number | undefined;
  uno?: string;
  username?: string;
  orgno: string;
  reqid: string;
  cliid: string;
  clit?: string;
  ip: string;
  session?:IUserSession
  [k: string]: any;
}
