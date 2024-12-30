import { StatusEnum } from './enums';

export type APIResponse<T = any> = {
  code: number;
  message: string;
  result?: T;
  error?: string | string[] | object | undefined;
  [o: string]: any;
};

export type QueryPageBase = {
  readonly page?: number;
  readonly pageSize?: number;
};

export type QueryPageParams = QueryPageBase & {
  keywords?: string;
  [k: string]: any;
};

export type PaginationDataType<T = any> = {
  page: number;
  pageSize: number;
  total: number;
  list: T[];
};

export type SetSortnoData = {
  id: number;
  sortno: number;
};

export type SetStatusData = {
  id: number;
  status: StatusEnum;
};

export type CommonEntityType = {
  id: number;
  createdBy?: number;
  createdAt?: Date;
  updatedBy?: number;
  updatedAt?: Date;
  sortno?: string;
  status?: StatusEnum;
};
