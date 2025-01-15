export type WechatAuthorizeReqParam = {
  code: string;
  state?: string;
  slient?: boolean;
  phone?: string;
};

/**
 * @see more document
 * https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html#3
 */
export type WechatAccessToken = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  openid: string;
  scope: string;
  unionid?: string;
  is_snapshotuser?: number;
};

export type WechatErrorResponse = {
  errcode: number;
  errmsg: string;
};

export type WechatUser = {
  openid: string;
  nickname: string;
  sex?: number;
  province?: string;
  city?: string;
  country?: string;
  headimgurl: string;
  privilege?: string[];
  unionid?: string;
};
