import type { ReactNode } from "react";

export interface StatCard {
  id: string;
  title: string | ReactNode;
  value: string | ReactNode;
  description: string | ReactNode;
  icon: string;
  link?: string;
}

export interface Header {
  eyebrow?: string;
  title: string;
  description?: string;
  rightContent?: ReactNode;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
}

export interface ColumnDef<T> {
  key: string;
  header: string;
  className?: string;
  align?: "left" | "right" | "center";
  cell?: (item: T) => React.ReactNode;
  accessorFn?: (item: T) => string;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface DynamicFilter<T> {
  key: keyof T | string;
  label: string;
  options: FilterOption[];
}

export interface DataTable<T> {
  title?: string;
  description?: string;
  data: T[];
  pagination?: Pagination;
  columns: ColumnDef<T>[];
  filters?: DynamicFilter<T>[];
  searchableKeys?: (keyof T | string)[];
  searchPlaceholder?: string;
  pageSizeOptions?: number[];
  defaultPageSize?: number;
  onPageChange?: (page: number) => void;
  onRowClick?: (item: T) => void;
  onActionClick?: (item: T) => void;
  renderActions?: (item: T) => React.ReactNode;
  showSearch?: boolean;
  showPagination?: boolean;
  onSearchChange?: (query: string) => void;
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  emptyMessage?: string;
}
