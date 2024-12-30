import { AccountType, PlatformEnum, UserStatusEnum } from './enums';

/**
 * clit:string;
 */
export interface IUserBase {
  id: number;
  clit?: string;
  userno: string; //unique in global
  username: string;
  phone: string;
  acctype: AccountType;
  status: UserStatusEnum;
  platform: PlatformEnum;
}

export interface IUser extends IUserBase {
  email?: string;
  password?: string;
  nickname?: string;
  avatar?: string;
  remark?: string;
  openid?: string;
  unionid?: string;
  orgno?: string;
  isSuper?: boolean;
  [k: string]: any;
}
