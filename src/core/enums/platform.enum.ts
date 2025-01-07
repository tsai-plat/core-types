export enum PlatformEnum {
  UNKNOW_PLATFORM = 0,
  MOB_PLATFORM = 1,
  PC_PLATFORM = 2,
  CUSTOM_PLATFORM = 3,
  WECHAT_PLATFORM = 4,
  SYSTEM_PLATFORM = 999,
}

export const PlatformMessage = {
  999: 'System',
  0: 'Guest',
  1: 'Mobile Client',
  2: 'PC client',
  3: 'Client User',
  4: 'Wechat User',
};

export const ClientPlatforms = [
  PlatformEnum.MOB_PLATFORM,
  PlatformEnum.PC_PLATFORM,
  PlatformEnum.CUSTOM_PLATFORM,
  PlatformEnum.WECHAT_PLATFORM,
  PlatformEnum.SYSTEM_PLATFORM,
];
