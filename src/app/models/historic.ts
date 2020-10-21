export interface Historic {
  id: number,
  client: string,
  value: number,
  numberAccount:string,
  transactionEnum: string,
  createAT: Date
}

export interface PageItem {
  content: Array<Historic>;
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  number: number;
  size: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};


