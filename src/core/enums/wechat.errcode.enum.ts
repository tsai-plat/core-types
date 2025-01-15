export enum WechatErrcodeEnum {
  SUCCESS = 0,
  CONFIGURATION_INCONSISTENT = 10003,
  WECHAT_GH_DISABLED = 10004,
  MISS_AUTHORIZATION_SCOPES = 10005,
  NOT_FOLLOWING_GH = 10006,
  TOO_MANY_REQUEST = 10009,
  NON_SCOPES = 10010,
  MISS_REDIRECT_URL = 10011,
  MISS_APPID = 10012,
  MISS_STATE = 10013,
  REQUIRED_AUTHORIZE_VENDOR = 10015,
  UNSUPPORT_OPENAPI_APPID = 10016,
}

export const WECHAT_ERROR_MESSAGES: { [k: number]: string } = {
  10003: 'redirect_uri域名与后台配置不一致',
  10004: '此公众号被封禁',
  10005: '此公众号并没有这些scope的权限',
  10006: '必须关注此测试号',
  10009: '操作太频繁了，请稍后重试',
  10010: 'scope不能为空',
  10011: 'redirect_uri不能为空',
  10012: 'appid不能为空',
  10013: 'state不能为空',
  10015: '公众号未授权第三方平台，请检查授权状态',
  10016: '不支持微信开放平台的Appid,请使用公众号Appid',
};

/**
 *
 * @param code
 * @param errmsg
 * @returns error message
 */
export function getErrorMessage(code: number, errmsg?: string): string {
  const message = WECHAT_ERROR_MESSAGES[code];
  return message ?? errmsg;
}
