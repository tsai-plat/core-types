// disable automatic export
export {};

export namespace LotoCore {
  export type StatusEnum = 0 | 1 | 9;

  export type CommEntiy = {
    id: number;
    createdAt: Date;
    createdBy?: number;
    updatedAt: Date;
    updatedBy?: number;
    deletedAt?: Date;
  };
}
