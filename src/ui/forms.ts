import { UIActionType } from './actions';

export type CtrlReadable = {
  loading: boolean;
  show: boolean;
  opertype: UIActionType;
  inprogressing?: boolean;
  title?: string;
  error?: string;
  [k: string]: any;
};
