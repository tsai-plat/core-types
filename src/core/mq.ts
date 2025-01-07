/**
 * from http request or middleware options
 */
export type MQRequestOption = {
  ip: string;
  cliid?: string;
  uid?: number;
  [k: string]: any;
};

/**
 * @public
 *  bizcode: dict defined
 *  refid: refferred biz id
 *  launchTime
 */
export type MQLogPayload = {
  bizcode: string;
  action?: string;
  refid?: string;
  result: string;
  launchTime?: number;
  reqdata?: any;
  respdata?: any;
  error?: any;
  options?: MQRequestOption;
  operator?: string;
  extra?: any;
  locked?: boolean;
};
