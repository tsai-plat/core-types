export type SelectorOptionsType<T = string | number> = {
  label: string;
  value: T;
  disabled?: boolean;
  actived?: boolean;
  icon?: string;
  extra?: {
    id: number;
    uid?: number;
    orgid?: number;
    [k: string]: any;
  };
};
