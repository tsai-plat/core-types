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
