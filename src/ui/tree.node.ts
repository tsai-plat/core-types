export type TreeNodeOptionType = {
  id: number;
  key: string | number;
  label: string;
  pid: string | number | null;
  children?: Array<TreeNodeOptionType>;
  disabled?: boolean;
  isLeaf?: boolean;
  extra?: Record<string, any>;
};

export type RegionTreeNode = {
  id: number;
  pid: number;
  label: string;
  value: string;
  code: string;
  pcode?: string;
  status?: boolean;
  sortno: number;
  extra?: Record<string, any>;
  children?: Array<RegionTreeNode>;
  isLeaf?: boolean;
};

export type RegionTreeExNode = RegionTreeNode & {
  oid?: number;
  uid?: number;
  [k: string]: any;
};
