export type SelectorOptionsType<T = string | number> = {
  label: string;
  value: T;
  disabled?: boolean;
  actived?: boolean;
  icon?: string;
  extra?: {
    id: number;
    orgno?: string;
    [k: string]: any;
  };
};