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
  orgid?: number;
  isSuper?: boolean;
  [k: string]: any;
}

/**
 * quick registered account
 * @requires
 *  account: email or phone
 * @optional
 *  platform,status
 */
export interface QuickRegisteredAccount {
  account: string;
  platform?: PlatformEnum;
  status?: UserStatusEnum;
  [k: string]: any;
}

export interface PasswordRegisteredAccount {
  username: string;
  phone?: string;
  email?: string;
  password: string;
  platform?: PlatformEnum;
  status?: UserStatusEnum;
}
