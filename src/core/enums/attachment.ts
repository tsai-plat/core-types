export type AttchmentFiletype =
  | 'avatar'
  | 'document'
  | 'image'
  | 'audio'
  | 'video'
  | 'weblink'
  | 'custom'
  | 'file'
  | string;

export enum AttchmentFiletypeEnum {
  AUDIO = 'audio',
  AVATAR = 'avatar',
  CUSTOM = 'custom',
  DOC = 'document',
  FILE = 'file',
  IMG = 'image',
  VIDEO = 'video',
  WEBLINK = 'weblink',
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

export type UploadFormType = {
  filetype?: AttchmentFiletype;
  extra?: Record<string, any>;
  [k: string]: any;
};
