export interface ApiListResponse<T> {
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export type ApiMessageResponse = { message: string };

export type ListParams = {
  page?: number;
  limit?: number;
  search?: string;
  filters?: Record<string, string | string[]>;
};
