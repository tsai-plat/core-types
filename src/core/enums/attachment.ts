export type AttchmentFiletype =
  | 'document'
  | 'image'
  | 'audio'
  | 'video'
  | 'weblink'
  | 'custom'
  | string;

export enum AttchmentFiletypeEnum {
  DOC = 'document',
  IMG = 'image',
  AUDIO = 'audio',
  VIDEO = 'video',
  WEBLINK = 'weblink',
  CUSTOM = 'custom',
}

/**
 * attchment state:
 * <-- right to left: server,oss,
 * 00,01,10,11
 */
export type AttchmentStateType = 0 | 1 | 2 | 3 | number;

export enum AttchmentFileStateEnum {
  ONLY_DB_RECORD = 0,
  ONLY_SERVER_FILE = 1,
  ONLY_OSS_FILE = 2,
  BOTH_SERVER_OSS = 3,
}

export type OssProvider = 'ali' | 'tecent' | 'qiniu' | string;
