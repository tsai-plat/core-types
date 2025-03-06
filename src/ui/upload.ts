export type UploadBizType =
  | 'avatar'
  | 'common'
  | 'audio'
  | 'media'
  | 'doc'
  | string;
export type UploadFormData = {
  type: UploadBizType;
  uuid?: number;
  extra?: Record<string, any>;
  pathPrefix?: string;
  metricType?: string;
  uploadid: string;
  [k: string]: any;
};
