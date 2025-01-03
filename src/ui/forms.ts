import { UIActionType } from './actions';

export type CtrlReadable = {
  loading: boolean;
  show: boolean;
  opertype: UIActionType;
  inprogressing?: boolean;
  [k: string]: any;
};
