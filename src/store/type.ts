export type Action = {
  type: string;
  payload?: any;
};
export type Appstate<T> = {
  loading: boolean;
  data: T[] | null;
  error: any;
};
