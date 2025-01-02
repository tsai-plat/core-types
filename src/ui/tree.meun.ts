export type MenuMeta = {
  id?: number;
  pid?: number;
  title?: string;
  hidden?: boolean;
  keepAlive?: boolean;
  sort?: number;
  disabled?: boolean;
  [k: string]: any;
};

export type MenuTreeNode = {
  path: string;
  name: string;
  component?: string;
  redirect?: string;
  children?: MenuTreeNode[];
  [key: string]: any;
};
